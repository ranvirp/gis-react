import React, {cloneElement, useEffect, useState} from "react";
import PropTypes from 'prop-types'
import * as yup from "yup"
import {postGraphSqlQuery} from "../fetcher/graphsqlfetcher";
import {graphqlurl} from "../../apps/upchakbandi/settings";
import StickyHeadTable from "../tables/stickyheadtable";
import {FormObject, GenericCreateUpdateForm} from "../forms/GenericCreateForm";
import BasicTable from "../tables/tables";
import {Stack} from "@mui/material";
/*
    const PetitionQuery = `query a {all_petition { id khatauni{ id village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  date_of_petition  name_of_petitioner  case_no }  }`
const PetitionColumns = [
    { id: 'id',label: 'Id',minWidth: 10, align: 'center', format: (value) => value.toString(),},
    { id: 'khatauni',label: 'Khatauni',minWidth: 10, align: 'center', format: (value) => value.toString(),},
    { id: 'date_of_petition',label: 'Date Of Petition',minWidth: 10, align: 'center', format: (value) => value.toString(),},
    { id: 'name_of_petitioner',label: 'Name Of Petitioner',minWidth: 10, align: 'center', format: (value) => value.toString(),},
    { id: 'case_no',label: 'Case No',minWidth: 10, align: 'center', format: (value) => value.toString(),}
];
export const PetitionReportObject = new ReportObject(PetitionColumns,PetitionQuery,{},(value)=>{
    const results = value['all_petition']

    return results.map ((value)=>{ value.khatauni = value.khatauni.village.vname + '-' + value.khatauni.fasli_year; return value})
})

 */
export function ReportObject(columns, query, variables, queryResultToColumnsMap ) {

    this.columns = columns
    this.query = query
    this.queryResultToColumnsMap = queryResultToColumnsMap
    this.variables = variables ?? {}

}
 function  GenericReportWithStickyHead ({reportObject, ...props})  {
    const [items, setItems] = useState([])

    useEffect( ()=> {
        async function fetchData() {
            const result = await postGraphSqlQuery(graphqlurl, reportObject.query, reportObject.variables)

            if (!result.errors) {
                const allitems = reportObject.queryResultToColumnsMap(result.data)
                console.log(allitems)
                setItems(allitems)

            }else {
                setItems([])
            }
            }

        fetchData()
    },[reportObject.query, reportObject.variables])
    return (
        <StickyHeadTable {...props} columns={reportObject.columns} items={items}></StickyHeadTable>
    );
}
GenericReportWithStickyHead.propTypes = {
    reportObject: PropTypes.instanceOf(ReportObject)
}
export function  GenericReport ({reportObject, ...props})  {
    const [items, setItems] = useState([])
    const comp = props.tableComponent ?? <StickyHeadTable/>

    useEffect( ()=> {
        async function fetchData() {
            const result = await postGraphSqlQuery(graphqlurl, reportObject.query, reportObject.variables)

            if (!result.errors) {
                const allitems = reportObject.queryResultToColumnsMap(result.data)
                console.log(allitems)
                setItems(allitems)

            }else {
                setItems([])
            }
        }

        fetchData()
    },[reportObject.query, reportObject.variables])
    return (
        React.cloneElement(comp, {...props,columns:reportObject.columns, items:items })
    );
}
export function GenericReportWithFilter(props)
{
    /*
       Props: query, queryName, objName, defaultProps, defaultComponents,filterFields, props.query, props.varsFn
     */
    const [state,setState] = React.useState({items:[]})
    //form and a report
    //filterfields
    const fn1 = (data, result) =>
    {
        var items = []
        if (!result.errors) {
            items = result.data[props.queryName][props.objName]
            console.log(items)
        }
        setState({...state,items:items})
    }
    const defaultVarsFn = (value) => {return value}
    const formObject = new FormObject(props.defaultProps??{},props.defaultComponents??{},props.filterFields, props.yupSchema??yup.object({}).required(),props.query,fn1,props.varsFn??defaultVarsFn)
    console.log(state.items)
    return (
        <Stack>
            <GenericCreateUpdateForm formObject={formObject} horizontal={true}/>
            {( state.items.length > 0) && <BasicTable columns={props.columns} items={state.items}/>}
        </Stack>
    )
}
export default GenericReportWithStickyHead