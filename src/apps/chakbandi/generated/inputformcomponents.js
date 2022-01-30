import React from "react";
import {Stack} from "@mui/material"
import {getInputParameters, getButton} from "../inputparameters"
import {ReactHookFormInput} from "../components/forms/formutilities";
 
export function AuditlogsFormComponent(props)  {
    return ( <Stack>
         {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Auditlogs','object_id').component, id:'object_id', label:'Object Id', defaultValue:'', required:getInputParameters('Auditlogs','object_id').required, ...getInputParameters('Auditlogs','object_id').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Auditlogs','object_name').component, id:'object_name', label:'Object Name', defaultValue:'', required:getInputParameters('Auditlogs','object_name').required, ...getInputParameters('Auditlogs','object_name').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Auditlogs','object_value').component, id:'object_value', label:'Object Value', defaultValue:'', required:getInputParameters('Auditlogs','object_value').required, ...getInputParameters('Auditlogs','object_value').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Auditlogs','object_hash').component, id:'object_hash', label:'Object Hash', defaultValue:'', required:getInputParameters('Auditlogs','object_hash').required, ...getInputParameters('Auditlogs','object_hash').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Auditlogs','type_of_action').component, id:'type_of_action', label:'Type Of Action', defaultValue:'', required:getInputParameters('Auditlogs','type_of_action').required, ...getInputParameters('Auditlogs','type_of_action').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Auditlogs','hash_code').component, id:'hash_code', label:'Hash Code', defaultValue:'', required:getInputParameters('Auditlogs','hash_code').required, ...getInputParameters('Auditlogs','hash_code').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Auditlogs','action_by').component, id:'action_by', label:'Action By', defaultValue:'', required:getInputParameters('Auditlogs','action_by').required, ...getInputParameters('Auditlogs','action_by').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Auditlogs','action_on').component, id:'action_on', label:'Action On', defaultValue:'', required:getInputParameters('Auditlogs','action_on').required, ...getInputParameters('Auditlogs','action_on').props, ...props})}
         {getButton()}
     
     </Stack>);
     }
    

export function CourtFormComponent(props)  {
    return ( <Stack>
         {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Court','court_type').component, id:'court_type', label:'Court Type', defaultValue:'', required:getInputParameters('Court','court_type').required, ...getInputParameters('Court','court_type').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Court','location').component, id:'location', label:'Location', defaultValue:'', required:getInputParameters('Court','location').required, ...getInputParameters('Court','location').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Court','location_eng').component, id:'location_eng', label:'Location Eng', defaultValue:'', required:getInputParameters('Court','location_eng').required, ...getInputParameters('Court','location_eng').props, ...props})}
         {getButton()}
     
     </Stack>);
     }
    

export function CourtOrderFormComponent(props)  {
    return ( <Stack>
         {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('CourtOrder','khatauni').component, id:'khatauni', label:'Khatauni', defaultValue:'', required:getInputParameters('CourtOrder','khatauni').required, ...getInputParameters('CourtOrder','khatauni').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('CourtOrder','date_of_order').component, id:'date_of_order', label:'Date Of Order', defaultValue:'', required:getInputParameters('CourtOrder','date_of_order').required, ...getInputParameters('CourtOrder','date_of_order').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('CourtOrder','ordering_court').component, id:'ordering_court', label:'Ordering Court', defaultValue:'', required:getInputParameters('CourtOrder','ordering_court').required, ...getInputParameters('CourtOrder','ordering_court').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('CourtOrder','ordering_presiding_officer').component, id:'ordering_presiding_officer', label:'Ordering Presiding Officer', defaultValue:'', required:getInputParameters('CourtOrder','ordering_presiding_officer').required, ...getInputParameters('CourtOrder','ordering_presiding_officer').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('CourtOrder','order_txt').component, id:'order_txt', label:'Order Txt', defaultValue:'', required:getInputParameters('CourtOrder','order_txt').required, ...getInputParameters('CourtOrder','order_txt').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('CourtOrder','operative_part').component, id:'operative_part', label:'Operative Part', defaultValue:'', required:getInputParameters('CourtOrder','operative_part').required, ...getInputParameters('CourtOrder','operative_part').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('CourtOrder','copy_of_order').component, id:'copy_of_order', label:'Copy Of Order', defaultValue:'', required:getInputParameters('CourtOrder','copy_of_order').required, ...getInputParameters('CourtOrder','copy_of_order').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('CourtOrder','section_of_order').component, id:'section_of_order', label:'Section Of Order', defaultValue:'', required:getInputParameters('CourtOrder','section_of_order').required, ...getInputParameters('CourtOrder','section_of_order').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('CourtOrder','cause_of_action_type').component, id:'cause_of_action_type', label:'Cause Of Action Type', defaultValue:'', required:getInputParameters('CourtOrder','cause_of_action_type').required, ...getInputParameters('CourtOrder','cause_of_action_type').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('CourtOrder','cause_of_action_id').component, id:'cause_of_action_id', label:'Cause Of Action Id', defaultValue:'', required:getInputParameters('CourtOrder','cause_of_action_id').required, ...getInputParameters('CourtOrder','cause_of_action_id').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('CourtOrder','appeal_or_revision').component, id:'appeal_or_revision', label:'Appeal Or Revision', defaultValue:'', required:getInputParameters('CourtOrder','appeal_or_revision').required, ...getInputParameters('CourtOrder','appeal_or_revision').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('CourtOrder','status_of_amaldaramad').component, id:'status_of_amaldaramad', label:'Status Of Amaldaramad', defaultValue:'', required:getInputParameters('CourtOrder','status_of_amaldaramad').required, ...getInputParameters('CourtOrder','status_of_amaldaramad').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('CourtOrder','revision_appeal').component, id:'revision_appeal', label:'Revision Appeal', defaultValue:'', required:getInputParameters('CourtOrder','revision_appeal').required, ...getInputParameters('CourtOrder','revision_appeal').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('CourtOrder','remarks').component, id:'remarks', label:'Remarks', defaultValue:'', required:getInputParameters('CourtOrder','remarks').required, ...getInputParameters('CourtOrder','remarks').props, ...props})}
         {getButton()}
     
     </Stack>);
     }
    

export function FarmerFormComponent(props)  {
    return ( <Stack>
         {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Farmer','village').component, id:'village', label:'Village', defaultValue:'', required:getInputParameters('Farmer','village').required, ...getInputParameters('Farmer','village').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Farmer','aadhar_no').component, id:'aadhar_no', label:'Aadhar No', defaultValue:'', required:getInputParameters('Farmer','aadhar_no').required, ...getInputParameters('Farmer','aadhar_no').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Farmer','mobile_no').component, id:'mobile_no', label:'Mobile No', defaultValue:'', required:getInputParameters('Farmer','mobile_no').required, ...getInputParameters('Farmer','mobile_no').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Farmer','name').component, id:'name', label:'Name', defaultValue:'', required:getInputParameters('Farmer','name').required, ...getInputParameters('Farmer','name').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Farmer','relationship').component, id:'relationship', label:'Relationship', defaultValue:'', required:getInputParameters('Farmer','relationship').required, ...getInputParameters('Farmer','relationship').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Farmer','relative_name').component, id:'relative_name', label:'Relative Name', defaultValue:'', required:getInputParameters('Farmer','relative_name').required, ...getInputParameters('Farmer','relative_name').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Farmer','year_of_birth').component, id:'year_of_birth', label:'Year Of Birth', defaultValue:'', required:getInputParameters('Farmer','year_of_birth').required, ...getInputParameters('Farmer','year_of_birth').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Farmer','gender').component, id:'gender', label:'Gender', defaultValue:'', required:getInputParameters('Farmer','gender').required, ...getInputParameters('Farmer','gender').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Farmer','majra').component, id:'majra', label:'Majra', defaultValue:'', required:getInputParameters('Farmer','majra').required, ...getInputParameters('Farmer','majra').props, ...props})}
         {getButton()}
     
     </Stack>);
     }
    

export function GataFormComponent(props)  {
    return ( <Stack>
         {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Gata','khatauni').component, id:'khatauni', label:'Khatauni', defaultValue:'', required:getInputParameters('Gata','khatauni').required, ...getInputParameters('Gata','khatauni').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Gata','gata_no').component, id:'gata_no', label:'Gata No', defaultValue:'', required:getInputParameters('Gata','gata_no').required, ...getInputParameters('Gata','gata_no').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Gata','gata_no_txt').component, id:'gata_no_txt', label:'Gata No Txt', defaultValue:'', required:getInputParameters('Gata','gata_no_txt').required, ...getInputParameters('Gata','gata_no_txt').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Gata','area').component, id:'area', label:'Area', defaultValue:'', required:getInputParameters('Gata','area').required, ...getInputParameters('Gata','area').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Gata','khata_no').component, id:'khata_no', label:'Khata No', defaultValue:'', required:getInputParameters('Gata','khata_no').required, ...getInputParameters('Gata','khata_no').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Gata','fasli_year').component, id:'fasli_year', label:'Fasli Year', defaultValue:'', required:getInputParameters('Gata','fasli_year').required, ...getInputParameters('Gata','fasli_year').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Gata','land_category').component, id:'land_category', label:'Land Category', defaultValue:'', required:getInputParameters('Gata','land_category').required, ...getInputParameters('Gata','land_category').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Gata','remarks').component, id:'remarks', label:'Remarks', defaultValue:'', required:getInputParameters('Gata','remarks').required, ...getInputParameters('Gata','remarks').props, ...props})}
         {getButton()}
     
     </Stack>);
     }
    

export function GataDeltaFormComponent(props)  {
    return ( <Stack>
         {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('GataDelta','order').component, id:'order', label:'Order', defaultValue:'', required:getInputParameters('GataDelta','order').required, ...getInputParameters('GataDelta','order').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('GataDelta','type_of_correction').component, id:'type_of_correction', label:'Type Of Correction', defaultValue:'', required:getInputParameters('GataDelta','type_of_correction').required, ...getInputParameters('GataDelta','type_of_correction').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('GataDelta','gata_no').component, id:'gata_no', label:'Gata No', defaultValue:'', required:getInputParameters('GataDelta','gata_no').required, ...getInputParameters('GataDelta','gata_no').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('GataDelta','gata_no_txt').component, id:'gata_no_txt', label:'Gata No Txt', defaultValue:'', required:getInputParameters('GataDelta','gata_no_txt').required, ...getInputParameters('GataDelta','gata_no_txt').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('GataDelta','area').component, id:'area', label:'Area', defaultValue:'', required:getInputParameters('GataDelta','area').required, ...getInputParameters('GataDelta','area').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('GataDelta','khata_no').component, id:'khata_no', label:'Khata No', defaultValue:'', required:getInputParameters('GataDelta','khata_no').required, ...getInputParameters('GataDelta','khata_no').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('GataDelta','bhaumik_year').component, id:'bhaumik_year', label:'Bhaumik Year', defaultValue:'', required:getInputParameters('GataDelta','bhaumik_year').required, ...getInputParameters('GataDelta','bhaumik_year').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('GataDelta','land_category').component, id:'land_category', label:'Land Category', defaultValue:'', required:getInputParameters('GataDelta','land_category').required, ...getInputParameters('GataDelta','land_category').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('GataDelta','remarks').component, id:'remarks', label:'Remarks', defaultValue:'', required:getInputParameters('GataDelta','remarks').required, ...getInputParameters('GataDelta','remarks').props, ...props})}
         {getButton()}
     
     </Stack>);
     }
    

export function KhataFormComponent(props)  {
    return ( <Stack>
         {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Khata','khata_no').component, id:'khata_no', label:'Khata No', defaultValue:'', required:getInputParameters('Khata','khata_no').required, ...getInputParameters('Khata','khata_no').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Khata','village').component, id:'village', label:'Village', defaultValue:'', required:getInputParameters('Khata','village').required, ...getInputParameters('Khata','village').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Khata','category').component, id:'category', label:'Category', defaultValue:'', required:getInputParameters('Khata','category').required, ...getInputParameters('Khata','category').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Khata','area').component, id:'area', label:'Area', defaultValue:'', required:getInputParameters('Khata','area').required, ...getInputParameters('Khata','area').props, ...props})}
         {getButton()}
     
     </Stack>);
     }
    

export function KhataDeltaFormComponent(props)  {
    return ( <Stack>
         {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('KhataDelta','order').component, id:'order', label:'Order', defaultValue:'', required:getInputParameters('KhataDelta','order').required, ...getInputParameters('KhataDelta','order').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('KhataDelta','type_of_correction').component, id:'type_of_correction', label:'Type Of Correction', defaultValue:'', required:getInputParameters('KhataDelta','type_of_correction').required, ...getInputParameters('KhataDelta','type_of_correction').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('KhataDelta','khata_no').component, id:'khata_no', label:'Khata No', defaultValue:'', required:getInputParameters('KhataDelta','khata_no').required, ...getInputParameters('KhataDelta','khata_no').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('KhataDelta','khatedar_name').component, id:'khatedar_name', label:'Khatedar Name', defaultValue:'', required:getInputParameters('KhataDelta','khatedar_name').required, ...getInputParameters('KhataDelta','khatedar_name').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('KhataDelta','farmer_code').component, id:'farmer_code', label:'Farmer Code', defaultValue:'', required:getInputParameters('KhataDelta','farmer_code').required, ...getInputParameters('KhataDelta','farmer_code').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('KhataDelta','order_in_khatauni').component, id:'order_in_khatauni', label:'Order In Khatauni', defaultValue:'', required:getInputParameters('KhataDelta','order_in_khatauni').required, ...getInputParameters('KhataDelta','order_in_khatauni').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('KhataDelta','share').component, id:'share', label:'Share', defaultValue:'', required:getInputParameters('KhataDelta','share').required, ...getInputParameters('KhataDelta','share').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('KhataDelta','remarks').component, id:'remarks', label:'Remarks', defaultValue:'', required:getInputParameters('KhataDelta','remarks').required, ...getInputParameters('KhataDelta','remarks').props, ...props})}
         {getButton()}
     
     </Stack>);
     }
    

export function KhatauniFormComponent(props)  {
    return ( <Stack>
         {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Khatauni','village').component, id:'village', label:'Village', defaultValue:'', required:getInputParameters('Khatauni','village').required, ...getInputParameters('Khatauni','village').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Khatauni','fasli_year').component, id:'fasli_year', label:'Fasli Year', defaultValue:'', required:getInputParameters('Khatauni','fasli_year').required, ...getInputParameters('Khatauni','fasli_year').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Khatauni','type_of_khatauni').component, id:'type_of_khatauni', label:'Type Of Khatauni', defaultValue:'', required:getInputParameters('Khatauni','type_of_khatauni').required, ...getInputParameters('Khatauni','type_of_khatauni').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Khatauni','no_of_khatas').component, id:'no_of_khatas', label:'No Of Khatas', defaultValue:'', required:getInputParameters('Khatauni','no_of_khatas').required, ...getInputParameters('Khatauni','no_of_khatas').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Khatauni','area').component, id:'area', label:'Area', defaultValue:'', required:getInputParameters('Khatauni','area').required, ...getInputParameters('Khatauni','area').props, ...props})}
         {getButton()}
     
     </Stack>);
     }
    

export function KhatedarFormComponent(props)  {
    return ( <Stack>
         {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Khatedar','khatauni').component, id:'khatauni', label:'Khatauni', defaultValue:'', required:getInputParameters('Khatedar','khatauni').required, ...getInputParameters('Khatedar','khatauni').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Khatedar','khata_no').component, id:'khata_no', label:'Khata No', defaultValue:'', required:getInputParameters('Khatedar','khata_no').required, ...getInputParameters('Khatedar','khata_no').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Khatedar','farmer').component, id:'farmer', label:'Farmer', defaultValue:'', required:getInputParameters('Khatedar','farmer').required, ...getInputParameters('Khatedar','farmer').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Khatedar','slno_in_khata').component, id:'slno_in_khata', label:'Slno In Khata', defaultValue:'', required:getInputParameters('Khatedar','slno_in_khata').required, ...getInputParameters('Khatedar','slno_in_khata').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Khatedar','share').component, id:'share', label:'Share', defaultValue:'', required:getInputParameters('Khatedar','share').required, ...getInputParameters('Khatedar','share').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Khatedar','remarks').component, id:'remarks', label:'Remarks', defaultValue:'', required:getInputParameters('Khatedar','remarks').required, ...getInputParameters('Khatedar','remarks').props, ...props})}
         {getButton()}
     
     </Stack>);
     }
    

export function LandCategoryFormComponent(props)  {
    return ( <Stack>
         {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('LandCategory','category').component, id:'category', label:'Category', defaultValue:'', required:getInputParameters('LandCategory','category').required, ...getInputParameters('LandCategory','category').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('LandCategory','name').component, id:'name', label:'Name', defaultValue:'', required:getInputParameters('LandCategory','name').required, ...getInputParameters('LandCategory','name').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('LandCategory','name_eng').component, id:'name_eng', label:'Name Eng', defaultValue:'', required:getInputParameters('LandCategory','name_eng').required, ...getInputParameters('LandCategory','name_eng').props, ...props})}
         {getButton()}
     
     </Stack>);
     }
    

export function LandTransferFormComponent(props)  {
    return ( <Stack>
         {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('LandTransfer','order').component, id:'order', label:'Order', defaultValue:'', required:getInputParameters('LandTransfer','order').required, ...getInputParameters('LandTransfer','order').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('LandTransfer','transferor').component, id:'transferor', label:'Transferor', defaultValue:'', required:getInputParameters('LandTransfer','transferor').required, ...getInputParameters('LandTransfer','transferor').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('LandTransfer','transferee_khata_no').component, id:'transferee_khata_no', label:'Transferee Khata No', defaultValue:'', required:getInputParameters('LandTransfer','transferee_khata_no').required, ...getInputParameters('LandTransfer','transferee_khata_no').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('LandTransfer','transferee_order_in_khata').component, id:'transferee_order_in_khata', label:'Transferee Order In Khata', defaultValue:'', required:getInputParameters('LandTransfer','transferee_order_in_khata').required, ...getInputParameters('LandTransfer','transferee_order_in_khata').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('LandTransfer','transferee_name').component, id:'transferee_name', label:'Transferee Name', defaultValue:'', required:getInputParameters('LandTransfer','transferee_name').required, ...getInputParameters('LandTransfer','transferee_name').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('LandTransfer','reason').component, id:'reason', label:'Reason', defaultValue:'', required:getInputParameters('LandTransfer','reason').required, ...getInputParameters('LandTransfer','reason').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('LandTransfer','date_of_transfer').component, id:'date_of_transfer', label:'Date Of Transfer', defaultValue:'', required:getInputParameters('LandTransfer','date_of_transfer').required, ...getInputParameters('LandTransfer','date_of_transfer').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('LandTransfer','area').component, id:'area', label:'Area', defaultValue:'', required:getInputParameters('LandTransfer','area').required, ...getInputParameters('LandTransfer','area').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('LandTransfer','status_of_amaldaramad').component, id:'status_of_amaldaramad', label:'Status Of Amaldaramad', defaultValue:'', required:getInputParameters('LandTransfer','status_of_amaldaramad').required, ...getInputParameters('LandTransfer','status_of_amaldaramad').props, ...props})}
         {getButton()}
     
     </Stack>);
     }
    

export function PresidingoffierFormComponent(props)  {
    return ( <Stack>
         {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Presidingoffier','court').component, id:'court', label:'Court', defaultValue:'', required:getInputParameters('Presidingoffier','court').required, ...getInputParameters('Presidingoffier','court').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Presidingoffier','name').component, id:'name', label:'Name', defaultValue:'', required:getInputParameters('Presidingoffier','name').required, ...getInputParameters('Presidingoffier','name').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Presidingoffier','name_eng').component, id:'name_eng', label:'Name Eng', defaultValue:'', required:getInputParameters('Presidingoffier','name_eng').required, ...getInputParameters('Presidingoffier','name_eng').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Presidingoffier','charge_from').component, id:'charge_from', label:'Charge From', defaultValue:'', required:getInputParameters('Presidingoffier','charge_from').required, ...getInputParameters('Presidingoffier','charge_from').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Presidingoffier','charge_to').component, id:'charge_to', label:'Charge To', defaultValue:'', required:getInputParameters('Presidingoffier','charge_to').required, ...getInputParameters('Presidingoffier','charge_to').props, ...props})}
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
    

export function ShareUpdateFormComponent(props)  {
    return ( <Stack>
         {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('ShareUpdate','order').component, id:'order', label:'Order', defaultValue:'', required:getInputParameters('ShareUpdate','order').required, ...getInputParameters('ShareUpdate','order').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('ShareUpdate','khata_no').component, id:'khata_no', label:'Khata No', defaultValue:'', required:getInputParameters('ShareUpdate','khata_no').required, ...getInputParameters('ShareUpdate','khata_no').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('ShareUpdate','khata_sl_no').component, id:'khata_sl_no', label:'Khata Sl No', defaultValue:'', required:getInputParameters('ShareUpdate','khata_sl_no').required, ...getInputParameters('ShareUpdate','khata_sl_no').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('ShareUpdate','khatedar_name').component, id:'khatedar_name', label:'Khatedar Name', defaultValue:'', required:getInputParameters('ShareUpdate','khatedar_name').required, ...getInputParameters('ShareUpdate','khatedar_name').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('ShareUpdate','old_share').component, id:'old_share', label:'Old Share', defaultValue:'', required:getInputParameters('ShareUpdate','old_share').required, ...getInputParameters('ShareUpdate','old_share').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('ShareUpdate','new_share').component, id:'new_share', label:'New Share', defaultValue:'', required:getInputParameters('ShareUpdate','new_share').required, ...getInputParameters('ShareUpdate','new_share').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('ShareUpdate','effective_date_of_update').component, id:'effective_date_of_update', label:'Effective Date Of Update', defaultValue:'', required:getInputParameters('ShareUpdate','effective_date_of_update').required, ...getInputParameters('ShareUpdate','effective_date_of_update').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('ShareUpdate','status_of_amaldaramad').component, id:'status_of_amaldaramad', label:'Status Of Amaldaramad', defaultValue:'', required:getInputParameters('ShareUpdate','status_of_amaldaramad').required, ...getInputParameters('ShareUpdate','status_of_amaldaramad').props, ...props})}
         {getButton()}
     
     </Stack>);
     }
    
