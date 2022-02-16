import {useEffect, useState} from "react";
import {postGraphSqlQuery} from "../../../components/fetcher/graphsqlfetcher";
import {graphqlurl} from "../../upchakbandi/settings";

export function useGraphQlQuery(query, variables, queryName, changeVar)
{
    const [items,setItems] = useState([])
    useEffect( ()=> {
        async function fetchData() {
            const result = await postGraphSqlQuery(graphqlurl, query, variables)

            if (!result.errors) {
                const allitems = result.data[queryName]


                setItems(allitems)

            }else {
                setItems([])
            }
        }

        fetchData()
    },[changeVar])
    return items
}