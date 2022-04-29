
import React, {useEffect, useState} from 'react';
import {graphqlurl} from "../../../upchakbandi/settings";
import {postGraphSqlQuery} from "../../../../components/fetcher/graphsqlfetcher";
import {Dropdown} from "../../../../components/forms/Dropdown";
const LandCategoryQuery = `query a {all_land_category { code  category    name   }  }`

const  LandCategoryDropdown =  (props) => {
    const [items, setItems] = useState([])
    const query = props.query ?? LandCategoryQuery
    const queryname = props.queryname ?? 'all_land_category'
    async function fetchData() {
        const result = await postGraphSqlQuery(graphqlurl, query, props.variables??{})
        //console.log(result)
        if (!result.errors) {
            var myres = result.data[queryname]


            myres = myres.map((value) => {
                var val1 = {}
                val1.label = value.category + '-' + value.name
                val1.value = value.code
                val1.key = 'category#' + value.code
                //value = val1
                return val1
            })

            setItems(myres)
        }}
    useEffect( ()=> {
        console.log('items being loaded')
        fetchData()
    },[])
    return (
        <Dropdown values={items}  {...props} onBlur={fetchData}
                  />
    );
}
export default LandCategoryDropdown;



     