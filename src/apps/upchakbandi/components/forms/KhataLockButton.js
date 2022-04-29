import React from "react";
import Button from "@mui/material/Button";
import {defaultSubmitFn} from "../../functions/submitFn";
import {useForm} from "react-hook-form";
import {Box} from "@mui/material";

export function KhataLockButton({lock_status, khatauni_id, khata_no})
{

    const [lockStatus, setLockStatus] = React.useState(lock_status)
    const form = useForm()
        function lockKhata(e) {
            let data = {}
            data.khata_no = khata_no

            data.khatauni_id = khatauni_id
            data.lock_status = 1
            console.log(data, "data")

            defaultSubmitFn(data, 'lockkhata', form).then(

                result => {
                    setLockStatus(1)
                }

            )
        }
        function unLock(e)
        {
            let data = {}
            data.khata_no = khata_no

            data.khatauni_id = khatauni_id
            data.lock_status = 0
            console.log(data, "data")

            defaultSubmitFn(data, 'lockkhata', form).then(

                result => {
                    setLockStatus(0)
                }

            )
        }
console.log(lock_status, "lock_status")
    return ((lock_status === 0) ?<Button onClick={lockKhata}>Lock</Button>:<Box>Locked<Button onClick={unLock}>UNLOCK</Button></Box>)
    }
