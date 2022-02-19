import React from 'react'
import {useGraphQlQuery} from "../../../common/hooks/GraphQLHooks";
import {Box} from "@material-ui/core";
import {Divider} from "@mui/material";
const query = 'query a($app_id:String!){ tasks(app_id:$app_id,app_name:"chakbandi"){task_name status active}}'
const heightOfBar = "9px"
const successColor = "#4cbb17"
const failureColor = "#c1c1c1"
const cornerRadius = "25px"
const tasks = {step1:'Enter Details of Bandobast Khatauni', step2:'Bandobast Khatauni Khatauni Data Entry'}
const completed = 2
export function AllowedTasks(props)
{
    //const items = useGraphQlQuery(query, {app_id:props.chakbandi_id}, 'tasks')
    return (
        <Box sx={{display:"flex", flexDirection:"column"}}>
        <Box sx={{display:"flex", flexDirection:"row"}}>
            <Box sx={{height:"30px",  width:"25%", paddingLeft:"20px", paddingTop:"10px"}}>Step1</Box>
            <Divider orientation={"vertical"}/>
            <Box sx={{height:"30px",  width:"25%", paddingLeft:"20px", paddingTop:"10px"}}><b>Step2</b></Box>
            <Divider orientation={"vertical"}/>
            <Box sx={{height:"30px",  width:"25%", paddingLeft:"20px", paddingTop:"10px"}}>Step3</Box>
            <Divider orientation={"vertical"}/>

            <Box sx={{height:"30px",  width:"25%", paddingLeft:"20px", paddingTop:"10px"}}>Step4</Box>
        </Box>
        <Box sx={{display:"flex", flexDirection:"row"}}>
        <Box sx={{height:heightOfBar,marginLeft:"-2px", borderRadius:cornerRadius, overflow:"hidden", textAlign:"center",alignItems:"center", backgroundColor:successColor, width:"25%"}}/>
    <Box sx={{height:heightOfBar,marginLeft:"-4px", borderRadius:cornerRadius,backgroundColor:successColor, width:"25%"}}/>
    <Box sx={{height: heightOfBar, backgroundColor: failureColor, width: "25%"}}/>

    <Box sx={{height:heightOfBar, backgroundColor:failureColor, width:"25%"}}/>
        </Box>
        </Box>



)
}