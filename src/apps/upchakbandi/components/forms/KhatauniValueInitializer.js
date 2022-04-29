import React from "react";
import {useGraphQlQuery} from "../../../common/hooks/GraphQLHooks";
let q = `query a($filter:String!) {chakbandi_documents_by_filter(filter:$filter){khatauni{id,fasli_year} type_of_khatauni}}`

export function KhatauniValueInitializer({chakbandi_id, ...props})
{
    const results = useGraphQlQuery(q,{filter:JSON.stringify({chakbandi_id:chakbandi_id})},'chakbandi_documents_by_filter')
    //localStorage.bid = null
    //localStorage.aid = null
    results.items.map (value => {
        if (value.type_of_khatauni === 'b') {
            localStorage.bid = value.khatauni.id
        }
        else if (value.type_of_khatauni === 'a') {
            localStorage.aid = value.khatauni.id
        }
    })
    if (results.status === 'pending') return ''
    else {return <>{props.children}</>}
}