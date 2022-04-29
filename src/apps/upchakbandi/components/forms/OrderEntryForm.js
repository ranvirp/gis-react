import React, {useEffect} from "react";
import {ReactHookFormControlledInput, ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {useFieldArray, useForm} from "react-hook-form";
import {Box, Stack, TextField} from "@mui/material";
import {graphqlFetch, useGraphQlQuery} from "../../../common/hooks/GraphQLHooks";
import {KhatedarCodeWithDialogForm} from "./KhatedarCodeWithDialog";
import {DynamicReactHookForm} from "../../../../components/forms/DynamicReactHookForm";
import {TransferCreateUpdateForm} from "../../generated/forms/transfer";
import {ExchangeCreateUpdateForm} from "../../generated/forms/exchange";
import {InheritanceCreateUpdateForm} from "../../generated/forms/inheritance";
import {Dropdown} from "../../../../components/forms/Dropdown";
import {GenericDate} from "../../../../components/forms/GenericDate";
import {TransferEntryForm} from "./TransferEntryForm";
import {ExchangeEntryForm} from "./ExchangeEntryForm";
import {InheritanceEntryForm} from "./InheritanceEntryForm";
import {ChangeOfNameEntryForm} from "./ChangeOfNameEntryForm";
import {KhatedarCodeForm} from "./KhatedarCode";
import {defaultSubmitFn} from "../../functions/submitFn";
import {DefaultChakbandiValueChecker} from "./DefaultChakbandiValueChecker";
import {FormField} from "../../../../components/forms/GenericCreateForm";
import * as yup from "yup";
import Button from "@mui/material/Button";
import {BasicTabs} from "../../../../components/tabpanels/BasicTabPanel";
import {createUpdateChangeOfNameMutation} from "../../generated/forms/changeofname";
const dropdwownvalue = ( value) =>{return {key:value,value:value,label:value}}
const claimTypeValues = [
    dropdwownvalue('exchange'),dropdwownvalue('transfer'), dropdwownvalue('inheritance'),
    dropdwownvalue('changeofname')
]
const fieldInfos = (type) => {
    if (type ==='transfer') { return {
        claimtype:{comp:<input value={"transfer"}/>},
        transferror:{ label: 'Transferor', required: true, comp:<KhatedarCodeForm/>,defaultValue: ''},
        transferee:{ label: 'Transferee', required: true, comp:<KhatedarCodeForm/>,defaultValue: ''},
    } } else if (type ==='exchange'){ return {
        claimtype:{comp:<input value={"exchange"}/>},
        x1:{ label: 'X1', required: true, comp:<TextField/>,defaultValue: ''},
        x2:{ label: 'X2', required: true, comp:<KhatedarCodeForm/>,defaultValue: ''},
    } }else return {}
}
export const updateCourtOrderMutation = `mutation something($id:String!, $chakbandi:String!, $case_no:String!, $date_of_order:String!, $operative_part:String!){
    update_court_order(id: $id, chakbandi: $chakbandi, case_no: $case_no, date_of_order: $date_of_order, operative_part: $operative_part) {
        court_order {id chakbandi case_no date_of_order operative_part }
      ok
      errormessage
      
    }
    }`

export const createCourtOrderMutation = `mutation something($chakbandi:String!, $case_no:String!, $date_of_order:String!, $operative_part:String!){
        create_court_order(chakbandi: $chakbandi, case_no: $case_no, date_of_order: $date_of_order, operative_part: $operative_part) {
            court_order {id chakbandi case_no date_of_order operative_part }
          ok
          errormessage

        }
        }`


const yupSchema = yup.object({
    case_no: yup.string().required(),
    trial_case_no: yup.string().required(),
    date_of_order: yup.date().required(),
    section_of_order: yup.string().required(),
    appeal_or_revision: yup.string().required(),
}).required();
const courtOrderQuery = 'query a($filter:String!){court_order_by_filter(filter:$filter){id case_no date_of_order operative_part transfer_set{id} change_of_name_set{id}}}'
export function OrderEntryForm(props)
{
    const [case_no, setCaseNo] = React.useState(null)
    const [defValues, setDefValues] = React.useState({})
    const form = useForm({defaultValues: defValues})
    const newForm = useForm()
    let id = form.watch('id')
    console.log(id)
    function changeFn(e)
    {
        setCaseNo(e.target.value)
    }
    function onSubmit(data)
    {
        let query = createCourtOrderMutation;
        if (id) query = updateCourtOrderMutation
        graphqlFetch(query,data,'create_court_order').then(res=>{console.log(res)})
    }
    useEffect(()=>{

          graphqlFetch(courtOrderQuery, {filter:JSON.stringify({case_no:case_no})}, 'court_order_by_filter').then(
              ({items, success}) => {
                  console.log('success', items)
                  if (success) {
                      if (items.length > 0) {
                          form.setValue('id', items[0].id)
                          form.setValue('operative_part', items[0].operative_part)
                          form.setValue('date_of_order', items[0].date_of_order)

                          setDefValues(items[0])
                      } else {
                          form.setValue('id', null)
                          form.setValue('operative_part', '')
                          form.setValue('date_of_order', '')
                      }
                  }
              }
          )
    },[case_no])

    return (
        <DefaultChakbandiValueChecker>
            <Box key={id}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
        <Stack>

            <input  type={"hidden"} {...form.register("id")}  />

            <ReactHookFormInput name={"case_no"} label={"Case No"} form={form} onChange={changeFn} />
            <ReactHookFormInput comp={<GenericDate/>} name={"date_of_order"} label={"Date Of Order"} form={form} />
            <ReactHookFormInput  comp={<TextField multiline/>} name={"operative_part"} label={"Operative Part"} form={form} />
<Button type={"submit"}>Submit</Button>

        </Stack>
        </form>
        </Box>
            {  id? <MultipleClaimEntryForm chakbandi_id={localStorage.chakbandi_id} case_no={case_no} newForm={newForm}/>:<></>}




        </DefaultChakbandiValueChecker>
    )
}
const query = 'query a($filter:String!){court_order_by_filter(filter:$filter){case_no claim_set{ id type_of_claim transfer_set{id} change_of_name_set{id} }}}'

function MultipleClaimEntryForm({chakbandi_id, case_no, newForm}) {

// chakbandi_id: chakbandi_id,
    const [claimTypes, setClaimTypes] = React.useState([])
    const [claimType, setClaimType] = React.useState('')

    function reducer1(data) {
        console.log("reducer data", data)
        if (data.length !==1) return []
        return data[0].claim_set.map((value,index)=> {
            console.log(value,index)
            let x = {}
            x.claimType = value.type_of_claim
            console.log(x.claimType, "claimtype from reducer")
            claimTypes.push({label:value.type_of_claim,comp:<ClaimForm chakbandi_id={chakbandi_id} claimType={value.type_of_claim} initialValues={value}/> })
            setClaimTypes(claimTypes)
            console.log("claimtype", x.claimType)
            return x
        })
    }

    const {items, status} = useGraphQlQuery(query, {
        filter: JSON.stringify({

            case_no: case_no ?? ''
        })
    },'court_order_by_filter',reducer1)
    // console.log("myitems", items)

    // return (<p>Hi</p>)
    const fn = (e) =>
    {
        // console.log("changing claimType", form.watch(`claims[${props.index}].claimType`))
        setClaimType(e.target.value)
    }
    function submitFn(data)
    {
        data.chakbandi_id = chakbandi_id
        console.log(data)
        const results = defaultSubmitFn(data,"orderentry", newForm)
    }
    const fieldInfo = {
        id:{ label: 'ID', pk:true,required: false, defaultValue: ''},
        claim:{ label: 'Claim', required: true, defaultValue: '', comp:<ClaimForm chakbandi_id={chakbandi_id} form={newForm}/>},

    }
    if (status === 'pending') return ''
    console.log(claimType)
    return (<Box key={claimType}>
        <BasicTabs items={claimTypes}/>
        <ReactHookFormControlledInput  form={newForm} comp={<Dropdown key={Math.random()} values={claimTypeValues} id={"ClaimType"} name={"ClaimType"}  />} name={"claimType"} label="Claim Type"  defaultValue={claimType} onChange={fn} />


    </Box>)

}
function ClaimForm({chakbandi_id,claimType, claimId, ...props})
{
    //console.log(props)

//console.log(watchClaimType[0])
   const form = useForm()
    form.setValue('claim_id', claimId)
    if (props.initialValues) {
        Object.keys(props.initialValues).map(value=>{
            form.setValue(value, props.initialValues[value])
        })
    }
    const claimForms = (form,type)=>
    {
        if (type === 'transfer') return <TransferEntryForm form={form} chakbandi_id={chakbandi_id}  {...props}/>
        else if (type === 'exchange') return <ExchangeEntryForm form={form} chakbandi_id={chakbandi_id} {...props}/>
        else if (type === 'inheritance') return <InheritanceEntryForm form={form} chakbandi_id={chakbandi_id}  {...props}/>
        else if (type === 'changeofname') return <ChangeOfNameEntryForm form={form} chakbandi_id={chakbandi_id}  {...props}/>


        return ''

    }
function onSubmit(data)
{
    graphqlFetch(createUpdateChangeOfNameMutation,data, '')
}
    return (
       <Stack>
           <span>{claimType}</span>
           <form onSubmit={form.handleSubmit(onSubmit)}>
    { claimForms(form, claimType)}
               <Button type={"submit"}>Submit</Button>
           </form>
           </Stack>
)
}