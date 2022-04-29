import React from "react"
import {ReactHookFormControlledInput, ReactHookFormInput} from "../../../../components/forms/ReactHookFormInput";
import {KhatedarCodeWithDialogForm} from "./KhatedarCodeWithDialog";
import {KhatedarCodeForm} from "./KhatedarCode";
import {GenericDate} from "../../../../components/forms/GenericDate";
import {Stack} from "@mui/material";

export function ExchangeDataEntryForm({chakbandi_id, form, ...props})
{
    return (
        <Stack direction={"column"}>
            <Stack direction={"row"}>
                        <ReactHookFormInput {...props} form={form} label={"Party A"} name={props.componentRootName + "." + "partyA"} comp={<KhatedarCodeForm chakbandi_id={chakbandi_id}/>}/>
                            <ReactHookFormInput {...props} form={form} label={"Gata A"} name={props.componentRootName + "." + "gataA"} />
                            <ReactHookFormInput {...props} form={form} label={"Area of Gata A"} name={props.componentRootName + "." + "gataAarea"} />
                <ReactHookFormInput {...props} form={form} label={"Exchange Ratio of Gata A"} name={props.componentRootName + "." + "exchangeratioA"} />

            </Stack>
            <Stack direction={"row"}>

                            <ReactHookFormInput {...props} form={form} label={"Party B"} name={props.componentRootName + "." + "partyB"} comp={<KhatedarCodeForm chakbandi_id={chakbandi_id}/>}/>
                            <ReactHookFormInput {...props} form={form} label={"Gata B"} name={props.componentRootName + "." +"gataB"} />
                            <ReactHookFormInput {...props} form={form} label={"Area of Gata B"} name={props.componentRootName + "." + "gataBarea"} />
                <ReactHookFormInput {...props} form={form} label={"Exchange Ratio of Gata B"} name={props.componentRootName + "." + "exchangeratioB"} />

            </Stack>
            <Stack direction={"row"}>
                            <ReactHookFormInput {...props} form={form} label={"Date of Exchange"} name={props.componentRootName + "." +"date_of_exchange"} comp={<GenericDate/>}/>
                            <ReactHookFormInput {...props} form={form} label={"Date of Order"} name={props.componentRootName + "." + "date_of_order"} comp={<GenericDate/>}/>
            </Stack>
        </Stack>
    )
}