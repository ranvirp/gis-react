import {useEffect, useState} from "react";
import {postGraphSqlQuery} from "../../../components/fetcher/graphsqlfetcher";
import {graphqlurl} from "../../upchakbandi/settings";

export function useGraphQlQuery(query, variables, queryName,reducer=null)
{
    const [items,setItems] = useState([])
    const [errors,setErrors] = useState([])
    const [status,setStatus] = useState("pending")
    useEffect( ()=> {
        async function fetchData() {
            const result = await postGraphSqlQuery(graphqlurl, query, variables)
            console.log(query,variables,result)
            // return (<p>Hi</p>)
            /*
            function timeout(delay) {
                return new Promise( res => setTimeout(res, delay) );
            }
            await timeout(300); //for 1 sec delay
*/
            if (!result.errors) {
                const allitems = result.data[queryName]
               // console.log("firstobject", allitems[0])


                reducer?setItems(reducer(allitems)):setItems(allitems)
                setErrors(null)
                setStatus("success")

            }else {
                setItems([])
                setErrors(result.errors)
                setStatus("error")
            }
        }

        fetchData()
    },[JSON.stringify(variables), query])
    return {items,errors,status}
}
export  async function graphqlFetch (query, variables, queryName, reducer) {

      const result =  await  postGraphSqlQuery(graphqlurl, query, variables)
         console.log(result,query,variables)

            if (!result.errors) {
                //console.log(result, queryName, result.data[queryName])
                var allitems = result.data[queryName]
                //console.log("firstobject", allitems)


                allitems = reducer ? reducer(allitems) : allitems
                return {items: allitems, errors: [], success: true}

            } else {
                return {items: [], errors: result.errors, success: false}
            }




}