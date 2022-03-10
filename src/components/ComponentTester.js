import React from "react";
import {ErrorBoundary} from 'react-error-boundary'
import Typography from "@mui/material/Typography";
import {Grid, TextField, Button} from "@mui/material";
import {GenericReactHookForm} from "./forms/GenericReactHookForm";
import {createKhatauniMutation} from "../apps/upchakbandi/generated/mutations";
import {varsKhatauni} from "../apps/upchakbandi/generated/variables";
import {Villagedropdown} from "./forms/villagedropdown";
import ChooseakhatauniStories from "../stories/chakbandi/chooseakhatauni.stories";
import {ChooseDefaultKhatauni} from "../apps/upchakbandi/components/reports/chooseakhatauni";
import {
    PetitionWithClaimsFormAndAddClaimButton
} from "../apps/upchakbandi/components/PetitionWithClaimsFormAndAddClaimButton";
import {PetitionWithEdit} from "../apps/upchakbandi/generated/reports/petition";
import {Claims} from "../apps/upchakbandi/components/forms/claims";
import {ReactHookFormInput} from "./forms/ReactHookFormInput";
import {KhatedarCodeForm} from "../apps/upchakbandi/components/forms/KhatedarCode";
import {useForm} from "react-hook-form";
import {KhataEntryForm} from "../apps/upchakbandi/components/forms/GataEntryForm";
import {AllowedTasks} from "../apps/upchakbandi/components/dashboard/AllowedTasks";
import {KhatauniDataEntry} from "../apps/upchakbandi/components/forms/KhatauniDataEntry";
import {PasswordResetWithoutOldPassword} from "./authentication/PasswordReset";
import {KhatedarCodeWithDialogForm} from "../apps/upchakbandi/components/forms/KhatedarCodeWithDialog";
import {Dropdown} from "./forms/Dropdown";
import {OrderEntryForm} from "../apps/upchakbandi/components/forms/OrderEntryForm";
import {FarmerSearch} from "../apps/upchakbandi/components/forms/FarmerSearch";
import {FarmerLocalteByName} from "../apps/upchakbandi/components/reports/FarmerLocateByName";
const fn = (value) => {value.khatauni = value.khatauni.id}
const values = [{key:'a',label:'a', value:'a'}, {key:'b',label:'b', value:'b'}]
export function ComponentTester(props)
{
    const form = useForm({defaultValues:{test:'a'}})
    function resetForm(e)
    {

        form.reset()
    }
    return (
        <ErrorBoundary>
            {
                /*
                <Grid sx={{height:"300px", backgroundColor:"green",  lineHeight: "300px"
                    }}>
                <Typography variant={"h5" } sx={{ display:'inline-block', verticalAlign: "middle",backgroundColor:"#5fffff"}}>
                    Hello my deara friendou can center a div within a div with Flexbox. Flexbox is a great method since it’s responsive and doesn’t require margin calculations — but there are a few extra steps to keep in mind.

                    To center a div horizontally and vertically with Flexbox, you need to set the height of the HTML and body to 100%. You can set the height of the parent container to 100% as well, if you'd like it to take up the whole viewport even if it was resized. For this demo, I'll set the parent container to a specific height instead.
                </Typography>
                </Grid>
                */
                //<GenericForm title="Create Khatauni" afterSubmitFn={()=>{}} debug={false} yupSchema={null} formComponent={<div><TextField name={"firstname"}/><Button type="submit">Submit</Button></div>}  mutationQuery={createKhatauniMutation} variables={varsKhatauni}/>
               // <Villagedropdown/>
               // <ChooseDefaultKhatauni/>

              // <PetitionWithEdit fn={fn}/>
                //<Claims/>
               // <ReactHookFormInput comp={<KhatedarCodeForm/>} control={control} errors={errors}/>
               // <KhatedarCodeForm/>
               // <KhataEntryForm/>
                //<PetitionWithClaimsFormAndAddClaimButton id={"34af786c-fffa-4553-88b5-be8ed3b38f28"}/>
               // <AllowedTasks/>
                //<KhatauniDataEntry/>
                // <PasswordResetWithoutOldPassword/>
             //   <ReactHookFormInput key={Math.random()} name={"test"} comp={<Dropdown values={values}/>} label={"hello"} defaultValue={""} form={form}/>

//<Dropdown values={values} defaultValue={'b'}/>
               // <OrderEntryForm chakbandi_id={localStorage.chakbandi_id}/>
                <FarmerLocalteByName chakbandi_id={"0e33f6bd-6bdb-461b-bbb0-9028c129ae5c"} form={form} name={"test"}/>
            }

        </ErrorBoundary>
    )
}