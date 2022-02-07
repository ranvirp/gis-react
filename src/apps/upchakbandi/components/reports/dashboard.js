import React from "react";
import {Dashboardcard} from "../dashboard/dashboardcard";
import ArticleIcon from '@mui/icons-material/Article';
import Stack from "@mui/material/Stack";
import ClickableItem from "../../../../components/clickableitem";
import DistrictList from "../../../../reports/districts";
export function Dashboard(props) {
    return (
        <Stack direction={"row"} spacing={5} d>
    <Dashboardcard title={"Gatas"} no1={50} no2={"hello3"} no3={"hello4"} icon={<ArticleIcon />}></Dashboardcard>
    <Dashboardcard title={"Claims"} no1={100} no2={"hello3"} no3={"hello4"} icon={<ArticleIcon />}></Dashboardcard>
    <Dashboardcard title={"Orders"} no1={70} no2={"hello3"} no3={"hello4"} icon={<ArticleIcon />}></Dashboardcard>
        </Stack>
)
}