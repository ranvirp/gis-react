import React, {useEffect} from "react"
import {SignIn} from "./SignIn/signinreacthook";
import {useGraphQlQuery} from "../../apps/common/hooks/GraphQLHooks";
import {Typography} from "@mui/material";

const query = 'query a($perm:String!){user_has_perm(permission:$perm)\n' +
    '\t{user allowed permission}}'

export function ForAuthenticatedUserWithPermission({permission, ...props})
{
    const [allowed,setAllowed ] = React.useState(false)
    const {items} = useGraphQlQuery(query, {perm:permission}, 'user_has_perm')
    useEffect(()=>{
        setAllowed(items.allowed)
    },[items.allowed])



    return (

         allowed ? <>
                    {props.children}

                </>


                :<Typography>You are not authorised.</Typography>

    )
}