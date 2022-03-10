import React from "react";
import {Stack} from "@mui/material";
import {ReactHookFormControlledInput, ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {KhatedarCodeForm} from "./KhatedarCode";
import {KhatedarCodeWithDialogForm} from "./KhatedarCodeWithDialog";
import {GenericDate} from "../../../../components/forms/GenericDate";
import {Dropdown} from "../../../../components/forms/Dropdown";
import {FarmerSearchByKhatedarCode} from "./FarmerSearchByKhatedarCode";

const deed_types = [{key:'s', value:'sale', label:'Sale Deed'}, {key:'g', value:'gift', label:'Gift Deed'},]

export function TransferEntryForm({chakbandi_id, form, ...props})
{
    console.log(props)
    return (
        <Stack direction={"column"}>

            <ReactHookFormControlledInput {...props} form={form} name={props.componentRootName +"[transferror]"} label="Transferor" comp={<FarmerSearchByKhatedarCode chakbandi_id={chakbandi_id}/>} />
            <ReactHookFormControlledInput {...props} form={form} name={props.componentRootName +".transferee"} label="Transferee" comp={<FarmerSearchByKhatedarCode chakbandi_id={chakbandi_id}/>} />

            <Stack direction={"row"}>
            <ReactHookFormControlledInput {...props} form={form} name={props.componentRootName +".date_of_deed"} comp={<GenericDate/>} label={"Date of Deed"} />
            <ReactHookFormControlledInput {...props} form={form} name={props.componentRootName +".type_of_deed"} label={"type of Deed"} comp={<Dropdown values={deed_types}/>} />
            </Stack>
            <Stack direction={"row"}>
                <ReactHookFormControlledInput {...props} form={form} name={props.componentRootName +".gata_no"} label={"Gata No"} />
            <ReactHookFormControlledInput {...props} form={form} name={props.componentRootName +".total_title_area"} label={"Total Title Area"} />
            <ReactHookFormControlledInput {...props} form={form} name={props.componentRootName +".total_sold_area"} label={"Sold Area"} />
            <ReactHookFormControlledInput {...props} form={form} name={props.componentRootName +".total_sold_share"} label={"Sold Share"} />
            </Stack>
        </Stack>
    )
}