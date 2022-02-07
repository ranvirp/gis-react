import React from "react";
import {Dropdown} from "../../../../components/forms/dropdown";
import {Tehsildropdown} from "../../../../components/forms/tehsildropdown";
import {Districtdropdown} from "../../../../components/forms/districtdropdown";
import {Button, Grid, Stack, TextField} from "@mui/material";
import {OfficerCreateForm} from "./officer";
import {OfficerDropdown} from "./allofficers";
import DatePicker from 'react-date-picker';
import zIndex from "@mui/material/styles/zIndex";
import {GenericForm} from "../../../../components/forms/genericreacthookform";
import {createPostingsMutation} from "../../generated/mutations";
import {varsPostings} from "../../generated/variables";
import * as yup from "yup";
import {getButton} from "../../inputparameters";
import {ReactHookFormInput} from "../../../../components/forms/reacthookforminput";
import {PostingsFormComponent} from "../../generated/inputformcomponents";
import {DesignationDropdown} from "../../../common/components/forms/designations";
const locationValues = [{value:'t',label:'Tehsil'}, {value:'d',label:'District'}]
const yupSchema = yup.object({
    //khata_no: yup.number().integer().required(),
    //area: yup.number().required(),
}).required();
export function CourtPosting(props)
{
    const [state, setState] = React.useState({officer:'',comp:null,date1:null,date2:null})
    const handleChange1 = (newValue) => {
        setState({...state, date1:newValue})
    };
    const handleChange2 = (newValue) => {
        setState({...state, date2:newValue})
    };
    const changeFn = (e) => {
        //setState({...state,officer:e.target.value})
        console.log(e.target.value)
    }

    //Select location type if location is tehsil or district, give dropdown

    const MyFormComponent =  (props) => {
        const tehsilcomp = React.cloneElement(<ReactHookFormInput/>,{comp:<Tehsildropdown/>, id:"location_code", name:"location",onChange:changeFn, ...props})
        const districtcomp = React.cloneElement(<ReactHookFormInput/>,{comp:<Tehsildropdown/>, id:"location_code" ,name:"location",onChange:changeFn, ...props})

        const myFn = (e) =>
        {
            if (e.target.value == 't') setState({...state, comp:tehsilcomp})
            else if (e.target.value == 'd') setState({...state, comp:districtcomp})

        }
        const officerComponent =   React.cloneElement(<ReactHookFormInput/>,{comp:<OfficerDropdown/>, name:"officer",id:"officer", ...props})
        const locationComponent =     React.cloneElement(<ReactHookFormInput/>,{comp:<Dropdown/>, values:locationValues,  id:"location_type",onChange:myFn, ...props})
        const dateComponent1 =       React.cloneElement(<ReactHookFormInput/>,{comp:<DatePicker/>, onChange:handleChange1 ,name:"charge_from",id:"charge_from",value:state.date1,label:'Date From',...props})
        const dateComponent2 =        React.cloneElement(<ReactHookFormInput/>,{comp:<DatePicker/>, onChange:handleChange2,name:"charge_to",id:"charge_to",value:state.date2,label:'Date To', ...props})
        const designations =        React.cloneElement(<ReactHookFormInput/>,{comp:<DesignationDropdown/>, name:"designattion",id:"designation",label:'Designation', ...props})

        /*
        return (
            <Stack>
            {React.cloneElement(<ReactHookFormInput/>,{comp:<TextField/>, name:"officer",id:"officer",defaultValue:'',  ...props})}
            </Stack>
    )
        */


        return (<Grid container>

            <Grid item xs={4}>
                {officerComponent}
            </Grid>
            <Grid item xs={4}>
                {locationComponent}
            </Grid>
            <Grid xs={4}>
                {state.comp}
            </Grid>

            <Grid item xs={12} >
                {dateComponent1}
            </Grid>
            <Grid item xs={12} >
                {dateComponent2}
            </Grid>
            <Grid item xs={3}>{designations}</Grid>
            {getButton()}
        </Grid>)


    }

    return (
        <Stack>
        <OfficerCreateForm/>
        <GenericForm  title="Create Officer" afterSubmitFn={()=>{}} debug={false} yupSchema={yupSchema} formComponent=<MyFormComponent/>  mutationQuery={createPostingsMutation} variables={(data)=>{return data}}/>
        </Stack>
    )

}