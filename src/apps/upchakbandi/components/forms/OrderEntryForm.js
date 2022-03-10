import React, {useEffect} from "react";
import {ReactHookFormControlledInput, ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {useFieldArray, useForm} from "react-hook-form";
import {Stack, TextField} from "@mui/material";
import {useGraphQlQuery} from "../../../common/hooks/GraphQLHooks";
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
const dropdwownvalue = ( value) =>{return {key:value,value:value,label:value}}
const claimTypes = [
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
export function OrderEntryForm(props)
{
    const [case_no, setCaseNo] = React.useState('')
    const form = useForm()
    function changeFn(e)
    {
        setCaseNo(e.target.value)
    }
    return (
        <DefaultChakbandiValueChecker>
        <Stack>
            <ReactHookFormInput comp={<input type={"hidden"}/>} name={"id"} label={"Id"} form={form} />

            <ReactHookFormInput name={"case_no"} label={"Case No"} form={form} onChange={changeFn}/>
            <ReactHookFormInput comp={<GenericDate/>} name={"date_of_order"} label={"Date Of Order"} form={form}/>
            <ReactHookFormInput  comp={<TextField multiline/>} name={"operative_part"} label={"Operative Part"} form={form}/>

            <MultipleClaimEntryForm chakbandi_id={localStorage.chakbandi_id} case_no={case_no} newForm={form}/>


        </Stack>
        </DefaultChakbandiValueChecker>
    )
}
const query = 'query a($filter:String!){court_order_by_filter(filter:$filter){case_no claim_set{ claim{id type_of_claim transfer_set{id} }}}}'
function reducer(data) {
    return data['claim_set'].map(value=> {
        let x = {}
        x.claimType = value.claim.type_of_claim
        return x
    })
}

function MultipleClaimEntryForm({chakbandi_id, case_no, newForm}) {


    const {items} = useGraphQlQuery(query, {
        filter: JSON.stringify({
            chakbandi_id: chakbandi_id,
            case_no: case_no
        })
    },'petition_by_filter',reducer)
    // console.log("myitems", items)

    // return (<p>Hi</p>)
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
    return (<>
        <DynamicReactHookForm debug={true} addTitle={"Add Claim"} onSubmit={submitFn} initialValues={items} fieldInfo={fieldInfo} componentName={"claims"} newForm={newForm}/></>)

}
function ClaimForm({chakbandi_id, form, ...props})
{
    //console.log(props)
    const [claimType, setClaimType] = React.useState("")
    const watchClaimType = form.watch([`claims[${props.index}].claimType`])
    const fn = (e) =>
    {
       // console.log("changing claimType", form.watch(`claims[${props.index}].claimType`))
        setClaimType(e.target.value)
    }
//console.log(watchClaimType[0])
    const claimForms = (form,type)=>
    {
        if (type === 'transfer') return <TransferEntryForm form={form} chakbandi_id={chakbandi_id} {...props}/>
        else if (type === 'exchange') return <ExchangeEntryForm form={form} chakbandi_id={chakbandi_id} {...props}/>
        else if (type === 'inheritance') return <InheritanceEntryForm form={form} chakbandi_id={chakbandi_id} {...props}/>
        else if (type === 'changeofname') return <ChangeOfNameEntryForm form={form} chakbandi_id={chakbandi_id} {...props}/>


        return ''

    }

    return (
       <Stack>
      <ReactHookFormControlledInput {...props} form={form} comp={<Dropdown key={Math.random()} values={claimTypes} id={"ClaimType"} name={"ClaimType"}  />} name={props.componentRootName+".claimType"} label="Claim Type"  defaultValue={watchClaimType[0]} onChange={fn} />
    { claimForms(form, watchClaimType[0])}
           </Stack>
)
}