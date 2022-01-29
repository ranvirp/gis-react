
/*
class Land_category(models.Model):
    category = models.CharField(max_length=3, primary_key=True)
    name = models.CharField(max_length=500)
    name_eng = models.CharField(max_length=500)

*/
import {useForm} from "react-hook-form";
import {Stack, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import React from 'react';
import {postGraphSqlQuery} from "../../../../components/fetcher/graphsqlfetcher";
import {MyInput, text1} from "./formutilities";
import {graphqlurl} from "../../settings";
import {landCategoryMutation} from "../../graphqlqueries/queries";
import { yupResolver } from '@hookform/resolvers/yup';
import {schema} from "../../validationschema/landcategory";
export function LandCategoryForm(props)
{

    const { control, handleSubmit, formState:{ errors } } = useForm({
        defaultValues: {
            category: '',
            name: '',
            name_eng:''
        },
        resolver: yupResolver(schema)
    });
    const onSubmit= async (data)=>{
        console.log(data)
        const vars = {cat:data.category, name:data.name, name_eng:data.name_eng}
        const result = await postGraphSqlQuery(graphqlurl, landCategoryMutation,  vars)
        console.log(result)

    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Stack>
                {MyInput(<TextField/>,'category', {label:'Category', required:true}, control,errors)}
                {MyInput(<TextField/>,'name', {label:'Name', required:true}, control,errors)}
    {text1('name_eng', 'Name in English', control)}
    <Button type="submit">Submit</Button>
        </Stack>
        </form>
)
}
