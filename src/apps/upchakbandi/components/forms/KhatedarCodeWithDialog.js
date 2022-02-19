import React, { useEffect, } from "react";
import {Stack, TextField, Button, Box} from "@mui/material";
import {postGraphSqlQuery} from "../../../../components/fetcher/graphsqlfetcher";
import {graphqlurl} from "../../settings";
import {FullScreenDialog} from "../../../../components/dialogs/MyDialog";
import {FarmerCreateUpdateForm} from "./FarmerEntryForm";

function OpenFarmerDialog(props)
{
    console.log(props.open)
    return (<FullScreenDialog key={JSON.stringify(props.open)} comp={<FarmerCreateUpdateForm afterSubmitFn={props.afterSubmitFn}/>} open={props.open} />)
}
export function KhatedarCodeWithDialogForm (props)
{
    const [state,setState] = React.useState({val:'',id:'',name:'',khatedar_code:''})
    const [dialogOpen, setDialogOpen] = React.useState(false)
    function setOpen(e)
    {
        console.log("clicked")
        setDialogOpen(true)
    }
    useEffect(
        ()=>{
            if (props.defaultValue) {
                const value = fetchData(props.defaultValue)

                setState({...state, name: value.name, id: value.id, khatedar_code: value.khatedar_code})
            }
            },[props.defaultValue]
    )
     async function fetchData(value) {
        const query = 'query a($filter:String){farmer_by_filter(filter:$filter){khatedar_code name relationship relative_name address}}'
        const q = {}
        q['khatedar_code'] = value
        q['chakbandi'] = localStorage.chakbandi_id

        const results = await postGraphSqlQuery(graphqlurl, query, {"filter":JSON.stringify(q)})
        if (!results.errors) {
            const farmers = results.data.farmer_by_filter
            if (farmers.length == 0) {
                setState( {name:'<None>',id:''})
            } else {
                const farmer = farmers[0]
                console.log(farmer)
                setState({name: farmer.name + '-' + farmer.relationship + '/o' + farmer.relative_name, id: farmer.id, khatedar_code: farmer.khatedar_code})
            }
        }
        else {setState( {name:'<None>',id:''})}
    }
    function fn(e) {
       const  value =  fetchData(e.target.value)

        setState({name:value.name, id:value.id, val:e.target.value,khatedar_code:value.khatedar_code})
        props.onChange(e)

    }
    console.log('rerendered')
    const  afterSubmitFn = (data,result)=>
    {
        console.log(props)
        console.log("after submit", data, result,result.errors)

            const farmer = result?.data?.create_farmer.farmer

            console.log("khatedar_code", farmer?.khatedar_code)

            setDialogOpen(false)
            console.log(props.index, props.componentRootName,props.fieldArray.fields)
            const k = props.fieldArray.fields[props.index]
            k.khatedar_code = farmer?.khatedar_code
            k.name = farmer?.name + '-' + farmer?.relationship + '-' + farmer?.relative_name
            props.fieldArray.update(props.index, k)



    }
    return (
        <Box sx={{width:"100%"}}>
        <Box sx={{display:"flex", flexDirection:"row"}}>
            <Box sx={{width:"40%"}}>
        <TextField  {...props}   onChange={fn} size="20px" />
        </Box>
            <Box sx={{width:"60%"}}>
            <TextField  fullWidth disabled key={state.name} value={state.name} size={"100px"}/>
            </Box>
        </Box>
            <OpenFarmerDialog open={dialogOpen} afterSubmitFn={afterSubmitFn}/>
            <Button onClick={setOpen}>Create New Farmer</Button>

        </Box>
    )
}