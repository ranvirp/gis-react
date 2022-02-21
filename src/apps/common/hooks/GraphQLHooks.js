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

            if (!result.errors) {
                const allitems = result.data[queryName]
                console.log("firstobject", allitems[0])


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
export async function graphqlFetch (query, variables, queryName, reducer) {
    const result = await postGraphSqlQuery(graphqlurl, query, variables)

    if (!result.errors) {
        var allitems = result.data[queryName]
        //console.log("firstobject", allitems[0])


        allitems = reducer?reducer(allitems):allitems
        return allitems, [], "ok"

    }else {
        return [], result.errors, "error"
    }
}