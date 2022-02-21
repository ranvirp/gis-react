import React from "react"
import {useGraphQlQuery} from "../../../common/hooks/GraphQLHooks";
import {Dropdown} from "../../../../components/forms/Dropdown";
const query = `query a {
all_land_category {
category
name
}
}
`
function reducer(items)
{
   return items?.map((value)=> {
        return {key:value.category, value:value.category, label:value.category}
    })
}
export function AllCategory(props)
{
    const {items} = useGraphQlQuery(query, {}, 'all_land_category', reducer)
    return (
        <Dropdown values={items} {...props}/>
    )
}