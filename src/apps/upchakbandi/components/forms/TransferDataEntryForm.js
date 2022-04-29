import React from "react";
import {Stack} from "@mui/material";
import {ReactHookFormControlledInput, ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {KhatedarCodeForm} from "./KhatedarCode";
import {KhatedarCodeWithDialogForm} from "./KhatedarCodeWithDialog";
import {GenericDate} from "../../../../components/forms/GenericDate";
import {Dropdown} from "../../../../components/forms/Dropdown";
import {FarmerSearchByKhatedarCode} from "./FarmerSearchByKhatedarCode";

const deed_types = [{key:'s', value:'sale', label:'Sale Deed'}, {key:'g', value:'gift', label:'Gift Deed'},]

export function TransferDataEntryForm({chakbandi_id,  ...props})
{
    function onSubmitFn(data)
    {

    }
    return (
        <Box>
            <form onSubmit={form.handleSubmit(onSubmitFn)}>
        <Stack direction={"column"}>
            <ReactHookFormInput {...props} form={form} name={"case_no"} label="Case No" />
            <ReactHookFormInput {...props} form={form} name={"transferror"} label="Transferor" comp={<FarmerSearchByKhatedarCode chakbandi_id={chakbandi_id}/>} />
            <ReactHookFormInput {...props} form={form} name={"transferee"} label="Transferee" comp={<FarmerSearchByKhatedarCode chakbandi_id={chakbandi_id}/>} />

            <Stack direction={"row"}>
            <ReactHookFormInput {...props} form={form} name={"date_of_deed"} comp={<GenericDate/>} label={"Date of Deed"} />
            <ReactHookFormInput {...props} form={form} name={"type_of_deed"} label={"type of Deed"} comp={<Dropdown values={deed_types}/>} />
            </Stack>
            <Stack direction={"row"}>
                <ReactHookFormInput {...props} form={form} name={"gata_no"} label={"Gata No"} />
            <ReactHookFormInput {...props} form={form} name={"total_title_area"} label={"Total Title Area"} />
            <ReactHookFormInput {...props} form={form} name={"total_sold_area"} label={"Sold Area"} />
            <ReactHookFormInput {...props} form={form} name={"total_sold_share"} label={"Sold Share"} />
            </Stack>
        </Stack>
            </form>
        </Box>
    )
}