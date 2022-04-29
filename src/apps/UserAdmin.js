import React from "react";
import {useForm} from "react-hook-form";
import {Stack,Box,Button} from "@mui/material";
import {ReactHookFormInput} from "../components/forms/ReactHookFormInput";
import {graphqlFetch} from "./common/hooks/GraphQLHooks";
import {ForAuthenticatedUserWithPermission} from "../components/authentication/ForAuthenticatedUserWithPermission";
const q = 'mutation something($email:String!,$password:String!) {create_user(username:$email,email:$email,password:$password){user{id username email}}}'

export function UserAdmin(props)
{
    const form = useForm()
    function onSubmit(data)
    {
        const results = graphqlFetch(q,data,'create_user')
    }
    return (
        <ForAuthenticatedUserWithPermission permission={"auth.add_user"}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <Stack>
                <Box sx={{height:"40px"}}></Box>
                <ReactHookFormInput form={form} name={"email"} label={"Email"}/>
                <ReactHookFormInput form={form} name={"password"} label={"Password"}/>
                <Button type={"submit"}>Submit</Button>

            </Stack>
        </form>
        </ForAuthenticatedUserWithPermission>
    )
}