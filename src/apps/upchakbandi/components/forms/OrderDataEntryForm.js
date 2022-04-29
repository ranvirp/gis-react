
import React from "react"
import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {Stack, Button, Box, TextField} from "@mui/material";
import {yupResolver} from "@hookform/resolvers/yup";

import * as yup from 'yup'
import {graphqlFetch} from "../../../common/hooks/GraphQLHooks";
import defaultComponents from "../../inputparameters";
import {GenericDate} from "../../../../components/forms/GenericDate";
import {CourtOrderOperativePartCreateUpdateForm} from "./CourtOrderOperativePart";

export const createUpdateCourtOrderMutation = `mutation something($id:String, $chakbandi:String!, $case_no:String!, $date_of_order:String!, $operative_part:String!){
    create_update_court_order(id: $id, chakbandi: $chakbandi, case_no: $case_no, date_of_order: $date_of_order, operative_part: $operative_part) {
       
      ok
      errormessage

    }
    }`



const yupSchema = yup.object({
    case_no: yup.string().required(),
    date_of_order: yup.date().required(),
}).required();

const query = 'query a($filter:String!){court_order_by_filter(filter:$filter) { id chakbandi{ id  date_of_4notification  village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  status }  case_no  date_of_order  operative_part }  }'

export const OrderDataEntryForm = ({chakbandi_id, ...props})=> {
    const [errormessage,setErrorMessage] = React.useState('')
    const form = useForm({resolver:yupResolver(yupSchema)})
    const [id,setId] = React.useState(null)

    function search(){
        let data = form.getValues()

        Object.keys(data).map(value=>{
            if (data[value]==='') delete data[value]
        })

        graphqlFetch(query,{filter:JSON.stringify(data)},'court_order_by_filter').then(({items,errors,success})=>{
            if (success && items.length==1) {
                form.setValue("id", items[0]["id"])
                form.setValue("chakbandi", items[0]["chakbandi"]["id"])
                form.setValue("case_no",items[0]["case_no"])
                form.setValue("date_of_order",items[0]["date_of_order"])
                form.setValue("operative_part",items[0]["operative_part"])

                setId(items[0]['id'])

            }

        })
    }
    function reset(e)
    {
        form.reset()
        setId(null)
    }
    function onSubmit(data)
    {
/*
        Object.keys(data).map(value=>{
            data[value] = String(data[value])
        })

        */
        var date_of_order = data.date_of_order

        const d = date_of_order.getDate()
        const m = date_of_order.getMonth() + 1
        const y = date_of_order.getFullYear()
        data.date_of_order = y + '-' + m + '-' + d
        graphqlFetch(createUpdateCourtOrderMutation, data, 'create_update_court_order').then(({items,errors,success})=>{
            console.log("errors", errors)
            if (errors.length > 0) {
                setErrorMessage(errors.toString)
                return
            }
            let errormessage = items.errormessage?.toString()
            let errorMessage = 'Success'
            if (errormessage) errorMessage = "Error during form submission: " + errormessage
            else form.reset()
            setErrorMessage((errorMessage))


        })


    }
    return(
        <Stack>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <Stack>
                    <Box sx={{color:errormessage === 'Success'? 'green':"red"}}>{errormessage}</Box>
                    <ReactHookFormInput  form={form} comp={<input type={"hidden"} />} name={"id"} label={"Chakbandi"}/>

                    <ReactHookFormInput  form={form} comp={<input type={"hidden"} value={chakbandi_id}/>} name={"chakbandi"} label={"Chakbandi"}/>
                    <ReactHookFormInput  form={form}  name={"case_no"} label={"Case No"}/>
                    <ReactHookFormInput  form={form} comp={<GenericDate/>} name={"date_of_order"} label={"Date Of Order"}/>
                    <ReactHookFormInput  form={form} comp={<TextField rows={3}/> } name={"operative_part"} label={"Operative Part"}/>

                    <Stack direction="row"> <Button onClick={reset}>Reset</Button> <Button onClick={search}>Search</Button> <Button type="submit">{id?'Update':'Submit'}</Button> </Stack>
                </Stack>

            </form>
            {id?<CourtOrderOperativePartCreateUpdateForm court_order_id={id}>Add details of operative part</CourtOrderOperativePartCreateUpdateForm>:''}
        </Stack>
    )
}
    