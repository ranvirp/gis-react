import React, {useEffect} from "react"
import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import Button from "@mui/material/Button";
import { Stack, TextField} from "@mui/material";
import {FasliYearForm} from "../../../common/components/forms/fasliyear";
import Typography from "@mui/material/Typography";
import {DefaultChakbandiValueChecker} from "./DefaultChakbandiValueChecker";
import {defaultSubmitFn} from "../../functions/submitFn";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {useGraphQlQuery} from "../../../common/hooks/GraphQLHooks";

const yupObject = yup.object({
    bandobast_khatauni_year:yup.number().integer().required(),
    aadhar_khatauni_year:yup.number().integer().required(),
    no_of_khata_in_bandobast:yup.number().integer().required().test(
        'Is positive?',
        'ERROR: The number must be greater than 0!',
        (value) => value > 0
    ),
    no_of_khata_in_aadhar:yup.number().integer().required().test(
        'Is positive?',
        'ERROR: The number must be greater than 0!',
        (value) => value > 0
    ),


})
const query = 'query a($filter:String!){chakbandi_documents_by_filter(filter:$filter){khatauni{id village{vname} fasli_year no_of_khatas} type_of_khatauni}}'
function reducer(data) {
    let x = {}
    data.map(value=>
    {
        if (value.type_of_khatauni==='b') {
            x.bandobast_khatauni_year = value.khatauni.fasli_year
            x.no_of_khata_in_bandobast = value.khatauni.no_of_khatas
        } else if (value.type_of_khatauni==='a') {
            x.aadhar_khatauni_year = value.khatauni.fasli_year
            x.no_of_khata_in_aadhar = value.khatauni.no_of_khatas
        }
    })
    return x
}
export function ChakbandiDocuments(props)
{
    const [prevValues, setPreviousValues] = React.useState({})
    const {items,status} = useGraphQlQuery(query,{filter:JSON.stringify({chakbandi_id:localStorage.chakbandi_id})},'chakbandi_documents_by_filter',reducer)
    const form = useForm({
        defaultValues:prevValues,
        resolver:yupResolver(yupObject)
    })

    useEffect(()=>{
        setPreviousValues(items)
        form.setValue('bandobast_khatauni_year', items.bandobast_khatauni_year)
        form.setValue('aadhar_khatauni_year', items.aadhar_khatauni_year)

        form.setValue('no_of_khata_in_aadhar',items.no_of_khata_in_aadhar)
        form.setValue('no_of_khata_in_bandobast',items.no_of_khata_in_bandobast)
    },[status])
    function onSubmit(data)
    {
        data.chakbandi_id = localStorage.chakbandi_id
        defaultSubmitFn(data, "chakbandidocumentsupdate", form).then(result=>{
            console.log(result);
            form.reset()})

    }
    console.log(prevValues)
    if (status === 'pending') return <p>{"Loading"}</p>
    return(

        <DefaultChakbandiValueChecker>
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <Stack spacing={2}>

                <Typography component={"span"} variant={"h4"}> चकबंदी अभिलेखों का विवरण भरें </Typography>

                <ReactHookFormInput key={Math.random()} form={form} comp={<FasliYearForm/>} name={"bandobast_khatauni_year"} label={"बंदोबस्त खतौनी का वर्ष"} defaultValue={prevValues.bandobast_khatauni_year}/>
            <ReactHookFormInput key={Math.random()} form={form} comp={<FasliYearForm/>} name={"aadhar_khatauni_year"} label={"आधार  खतौनी का वर्ष"} defaultValue={prevValues.aadhar_khatauni_year}/>
                <ReactHookFormInput form={form}  key={Math.random()} comp={<TextField  />} name={"no_of_khata_in_bandobast"} label={"बंदोबस्त  खतौनी में खातों की संख्या"} defaultValue={prevValues.no_of_khata_in_bandobast}/>
                <ReactHookFormInput form={form} key={Math.random()} comp={<TextField />} name={"no_of_khata_in_aadhar"} label={"आधार  खतौनी में खातों की संख्या"} defaultValue={prevValues.no_of_khata_in_aadhar}/>


                <Button type={"submit"}>Submit</Button>
            </Stack>

        </form>
        </DefaultChakbandiValueChecker>
    )
}