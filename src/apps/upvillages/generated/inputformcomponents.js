import React from "react";
import {Stack} from "@mui/material"
import {getInputParameters, getButton} from "../inputparameters"
import {ReactHookFormInput} from "../../../components/forms/reacthookforminput";
 
export function DistrictFormComponent(props)  {
    return ( <Stack>
         {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('District','dname').component, id:'dname', label:'Dname', defaultValue:'', required:getInputParameters('District','dname').required, ...getInputParameters('District','dname').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('District','dname_eng').component, id:'dname_eng', label:'Dname Eng', defaultValue:'', required:getInputParameters('District','dname_eng').required, ...getInputParameters('District','dname_eng').props, ...props})}
         {getButton()}
     
     </Stack>);
     }
    

export function LandCategoryFormComponent(props)  {
    return ( <Stack>
         {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('LandCategory','category').component, id:'category', label:'Category', defaultValue:'', required:getInputParameters('LandCategory','category').required, ...getInputParameters('LandCategory','category').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('LandCategory','category_eng').component, id:'category_eng', label:'Category Eng', defaultValue:'', required:getInputParameters('LandCategory','category_eng').required, ...getInputParameters('LandCategory','category_eng').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('LandCategory','name').component, id:'name', label:'Name', defaultValue:'', required:getInputParameters('LandCategory','name').required, ...getInputParameters('LandCategory','name').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('LandCategory','name_eng').component, id:'name_eng', label:'Name Eng', defaultValue:'', required:getInputParameters('LandCategory','name_eng').required, ...getInputParameters('LandCategory','name_eng').props, ...props})}
         {getButton()}
     
     </Stack>);
     }
    

export function RevenueVillageFormComponent(props)  {
    return ( <Stack>
         {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('RevenueVillage','vname').component, id:'vname', label:'Vname', defaultValue:'', required:getInputParameters('RevenueVillage','vname').required, ...getInputParameters('RevenueVillage','vname').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('RevenueVillage','vname_eng').component, id:'vname_eng', label:'Vname Eng', defaultValue:'', required:getInputParameters('RevenueVillage','vname_eng').required, ...getInputParameters('RevenueVillage','vname_eng').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('RevenueVillage','pname').component, id:'pname', label:'Pname', defaultValue:'', required:getInputParameters('RevenueVillage','pname').required, ...getInputParameters('RevenueVillage','pname').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('RevenueVillage','flg_chakbandi').component, id:'flg_chakbandi', label:'Flg Chakbandi', defaultValue:'', required:getInputParameters('RevenueVillage','flg_chakbandi').required, ...getInputParameters('RevenueVillage','flg_chakbandi').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('RevenueVillage','flg_survey').component, id:'flg_survey', label:'Flg Survey', defaultValue:'', required:getInputParameters('RevenueVillage','flg_survey').required, ...getInputParameters('RevenueVillage','flg_survey').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('RevenueVillage','pargana_code_new').component, id:'pargana_code_new', label:'Pargana Code New', defaultValue:'', required:getInputParameters('RevenueVillage','pargana_code_new').required, ...getInputParameters('RevenueVillage','pargana_code_new').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('RevenueVillage','tehsil_code').component, id:'tehsil_code', label:'Tehsil Code', defaultValue:'', required:getInputParameters('RevenueVillage','tehsil_code').required, ...getInputParameters('RevenueVillage','tehsil_code').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('RevenueVillage','district_code').component, id:'district_code', label:'District Code', defaultValue:'', required:getInputParameters('RevenueVillage','district_code').required, ...getInputParameters('RevenueVillage','district_code').props, ...props})}
         {getButton()}
     
     </Stack>);
     }
    

export function TehsilFormComponent(props)  {
    return ( <Stack>
         {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Tehsil','district_code').component, id:'district_code', label:'District Code', defaultValue:'', required:getInputParameters('Tehsil','district_code').required, ...getInputParameters('Tehsil','district_code').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Tehsil','tname').component, id:'tname', label:'Tname', defaultValue:'', required:getInputParameters('Tehsil','tname').required, ...getInputParameters('Tehsil','tname').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Tehsil','tname_eng').component, id:'tname_eng', label:'Tname Eng', defaultValue:'', required:getInputParameters('Tehsil','tname_eng').required, ...getInputParameters('Tehsil','tname_eng').props, ...props})}
         {getButton()}
     
     </Stack>);
     }
    
