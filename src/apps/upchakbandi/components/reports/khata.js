
import React, {useEffect, useState} from 'react';
import StickyHeadTable from "../../../../components/tables/stickyheadtable";
import {graphqlurl} from "../../settings";
import {postGraphSqlQuery} from "../../../../components/fetcher/graphsqlfetcher";
import { KhataFn} from "../../functions/functionres";
const KhataQuery = `query a {all_khata { id khatauni{ id village{ vname  village_code_census  vname_eng  pname  flg_chakbandi  flg_survey  pargana_code_new  tehsil_code{ district_code{ dname  district_code_census  dname_eng }  tname  tehsil_code_census  tname_eng }  district_code{ dname  district_code_census  dname_eng } }  fasli_year  type_of_khatauni  no_of_khatas  area  status }  khata_no category{ code  category  category_eng  name  name_eng }  area  status }  }`
const columns = [
{ id: 'id',label: 'Id',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'khata_no',label: 'Khata No',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'category',label: 'Category',minWidth: 10, align: 'center', format: (value) => value.toString(),},
{ id: 'area',label: 'Area',minWidth: 10, align: 'center', format: (value) => value.toString(),},
];
   const  KhataList =  (props) => {
       const [items, setItems] = useState([])
       const mycolumns = props.columns ?? columns
       const fn = props.fn ?? KhataFn
       const query = props.query ?? KhataQuery
       const queryname = props.queryname ?? 'all_khata'
        useEffect( ()=> {
            async function fetchData() {
            const result = await postGraphSqlQuery(graphqlurl, query, props.variables??{})

            if (!result.errors) {
                var myres = result.data[queryname]
                myres.map(fn)
               setItems(myres)
            }}
            fetchData()
        },[])
        return (
            <StickyHeadTable columns={mycolumns} items={items}></StickyHeadTable>
        );
}
export default KhataList;



     