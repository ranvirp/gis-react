import {Button} from "@mui/material";
import React from "react";
import * as yup from "yup";


export const LandCategoryFn = (value)=>{const val1 = value;val1.village = val1.village.vname; val1.btn = <Button>value</Button>;return val1}
export const LandCategoryQuery = `query a {all_khatauni{village{vname} fasli_year no_of_khatas area status} }`
export const LandCategoryYupSchema =
    yup.object({
         village:yup.string().required(),
        fasli_year: yup.number().integer().required(),
        no_of_khatas:yup.number().required(),
        area:yup.number().required()
    }).required();
export const KhataYupSchema = yup.object({})
export const KhataQuery = `query a {all_khata{village{vname} fasli_year no_of_khatas area status} }`

export const KhataFn = (value)=>{const val1 = value;val1.village = val1.village.vname; val1.btn = <Button>value</Button>;return val1}
export const LandCategoryAfterSubmitFn = (data, result) => {console.log(data, result)}
