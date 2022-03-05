import React from "react"
import {useGraphQlQuery} from "../../../common/hooks/GraphQLHooks";
import {Dropdown} from "../../../../components/forms/Dropdown";
const query = `query a {
all_land_category {
code
category
name
}
}
`
function reducer(items)
{
   return items?.map((value)=> {
        return {key:value.category, value:value.code, label:value.category}
    })
}
export function AllCategory(props)
{
    const {items,status} = useGraphQlQuery(query, {}, 'all_land_category', reducer)
    if (status === 'pending') return 'Loading'
    return (
        <Dropdown values={items} {...props}/>
    )
}