import React from "react";
import Button from "@mui/material/Button";
import {defaultSubmitFn} from "../../functions/submitFn";
import {useForm} from "react-hook-form";

export function KhataLockButton({lock_status, khatauni_id, khata_no})
{
    console.log(khatauni_id, "khatauni_id")
    const form = useForm()
        function lockKhata(e) {
            let data = {}
            data.khata_no = khata_no

            data.khatauni_id = khatauni_id
            console.log(data, "data")

            defaultSubmitFn(data, 'lockkhata', form)
        }

        return ((lock_status == 0) ?<Button onClick={lockKhata}>Lock</Button>:'')
    }
