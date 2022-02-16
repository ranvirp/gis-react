import {useEffect, useState} from "react";
import {postGraphSqlQuery} from "../../../components/fetcher/graphsqlfetcher";
import {graphqlurl} from "../../upchakbandi/settings";

export function useGraphQlQuery(query, variables, queryName)
{
    const [items,setItems] = useState([])
    useEffect( ()=> {
        async function fetchData() {
            const result = await postGraphSqlQuery(graphqlurl, query, variables)

            if (!result.errors) {
                const allitems = result.data[queryName]
                console.log("firstobject", allitems[0])


                setItems(allitems)

            }else {
                setItems([])
            }
        }

        fetchData()
    },[JSON.stringify(variables), query])
    return items
}