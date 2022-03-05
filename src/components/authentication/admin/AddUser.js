import {useForm} from "react-hook-form";
import {ReactHookFormInput} from "../../forms/ReactHookFormInput";
import {graphqlFetch} from "../../../apps/common/hooks/GraphQLHooks";
import {Typography} from "@mui/material";
const mutation = 'mutation a($email:String!,name:String!){add_user{success}}'
export function AddUser(props)
{
    const [result,setResult] = React.useState('')
    const form = useForm()
    function onSubmit(data) {
       const {items, errors, success} = graphqlFetch(mutation,data,'add_user')
        if(!success) setResult('Could not add user because of following errors: ' + JSON.stringify(errors,null,'\t'))
        else setResult('User added successfully')
    }
    return (<Stack>
        <Typography>{result}</Typography>
        <form onSubmit={form.handleSubmit(onSubmit)}>
            <ReactHookFormInput form={form} name={'email'} label={'email'}/>
            <ReactHookFormInput form={form} name={'name'} label={'Name'}/>
            <Button type={"submit"}>Submit</Button>
        </form>
    </Stack>)
}