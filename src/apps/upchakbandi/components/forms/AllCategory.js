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
   let x =  items?.map((value)=> {
        return {key:value.category, value:value.code, label:value.category}
    })
    x.push({key:'none', value:null, label:'None'})
    return x
}
export function AllCategory(props)
{
   // console.log(props)
    const {items,status} = useGraphQlQuery(query, {}, 'all_land_category', reducer)
    if (status === 'pending') return 'Loading'
    return (
        <Dropdown key={Math.random()} values={items} {...props}/>
    )
}