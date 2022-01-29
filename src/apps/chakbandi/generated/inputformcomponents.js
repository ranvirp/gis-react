import React from "react";
import {Stack} from "@mui/material"
import {getInputParameters, getButton} from "../inputparameters"
import {MyInput} from "../components/forms/formutilities";
 
export function AuditlogsFormComponent(props)  {
    return ( <Stack>
         <MyInput comp={getInputParameters('Auditlogs','id').component} id='id' props={{label:'Id', required:getInputParameters('Auditlogs','id').required, ...getInputParameters('Auditlogs','id').props}}  {...props}/>
<MyInput comp={getInputParameters('Auditlogs','object_id').component} id='object_id' props={{label:'Object Id', required:getInputParameters('Auditlogs','object_id').required, ...getInputParameters('Auditlogs','object_id').props}}  {...props}/>
<MyInput comp={getInputParameters('Auditlogs','object_name').component} id='object_name' props={{label:'Object Name', required:getInputParameters('Auditlogs','object_name').required, ...getInputParameters('Auditlogs','object_name').props}}  {...props}/>
<MyInput comp={getInputParameters('Auditlogs','object_value').component} id='object_value' props={{label:'Object Value', required:getInputParameters('Auditlogs','object_value').required, ...getInputParameters('Auditlogs','object_value').props}}  {...props}/>
<MyInput comp={getInputParameters('Auditlogs','object_hash').component} id='object_hash' props={{label:'Object Hash', required:getInputParameters('Auditlogs','object_hash').required, ...getInputParameters('Auditlogs','object_hash').props}}  {...props}/>
<MyInput comp={getInputParameters('Auditlogs','type_of_action').component} id='type_of_action' props={{label:'Type Of Action', required:getInputParameters('Auditlogs','type_of_action').required, ...getInputParameters('Auditlogs','type_of_action').props}}  {...props}/>
<MyInput comp={getInputParameters('Auditlogs','hash_code').component} id='hash_code' props={{label:'Hash Code', required:getInputParameters('Auditlogs','hash_code').required, ...getInputParameters('Auditlogs','hash_code').props}}  {...props}/>
<MyInput comp={getInputParameters('Auditlogs','action_by').component} id='action_by' props={{label:'Action By', required:getInputParameters('Auditlogs','action_by').required, ...getInputParameters('Auditlogs','action_by').props}}  {...props}/>
<MyInput comp={getInputParameters('Auditlogs','action_on').component} id='action_on' props={{label:'Action On', required:getInputParameters('Auditlogs','action_on').required, ...getInputParameters('Auditlogs','action_on').props}}  {...props}/>
         {getButton()}
     
     </Stack>);
     }
    

export function CourtFormComponent(props)  {
    return ( <Stack>
         <MyInput comp={getInputParameters('Court','id').component} id='id' props={{label:'Id', required:getInputParameters('Court','id').required, ...getInputParameters('Court','id').props}}  {...props}/>
<MyInput comp={getInputParameters('Court','court_type').component} id='court_type' props={{label:'Court Type', required:getInputParameters('Court','court_type').required, ...getInputParameters('Court','court_type').props}}  {...props}/>
<MyInput comp={getInputParameters('Court','location').component} id='location' props={{label:'Location', required:getInputParameters('Court','location').required, ...getInputParameters('Court','location').props}}  {...props}/>
<MyInput comp={getInputParameters('Court','location_eng').component} id='location_eng' props={{label:'Location Eng', required:getInputParameters('Court','location_eng').required, ...getInputParameters('Court','location_eng').props}}  {...props}/>
         {getButton()}
     
     </Stack>);
     }
    

export function CourtOrderFormComponent(props)  {
    return ( <Stack>
         <MyInput comp={getInputParameters('CourtOrder','id').component} id='id' props={{label:'Id', required:getInputParameters('CourtOrder','id').required, ...getInputParameters('CourtOrder','id').props}}  {...props}/>
<MyInput comp={getInputParameters('CourtOrder','khatauni').component} id='khatauni' props={{label:'Khatauni', required:getInputParameters('CourtOrder','khatauni').required, ...getInputParameters('CourtOrder','khatauni').props}}  {...props}/>
<MyInput comp={getInputParameters('CourtOrder','date_of_order').component} id='date_of_order' props={{label:'Date Of Order', required:getInputParameters('CourtOrder','date_of_order').required, ...getInputParameters('CourtOrder','date_of_order').props}}  {...props}/>
<MyInput comp={getInputParameters('CourtOrder','ordering_court').component} id='ordering_court' props={{label:'Ordering Court', required:getInputParameters('CourtOrder','ordering_court').required, ...getInputParameters('CourtOrder','ordering_court').props}}  {...props}/>
<MyInput comp={getInputParameters('CourtOrder','ordering_presiding_officer').component} id='ordering_presiding_officer' props={{label:'Ordering Presiding Officer', required:getInputParameters('CourtOrder','ordering_presiding_officer').required, ...getInputParameters('CourtOrder','ordering_presiding_officer').props}}  {...props}/>
<MyInput comp={getInputParameters('CourtOrder','order_txt').component} id='order_txt' props={{label:'Order Txt', required:getInputParameters('CourtOrder','order_txt').required, ...getInputParameters('CourtOrder','order_txt').props}}  {...props}/>
<MyInput comp={getInputParameters('CourtOrder','operative_part').component} id='operative_part' props={{label:'Operative Part', required:getInputParameters('CourtOrder','operative_part').required, ...getInputParameters('CourtOrder','operative_part').props}}  {...props}/>
<MyInput comp={getInputParameters('CourtOrder','copy_of_order').component} id='copy_of_order' props={{label:'Copy Of Order', required:getInputParameters('CourtOrder','copy_of_order').required, ...getInputParameters('CourtOrder','copy_of_order').props}}  {...props}/>
<MyInput comp={getInputParameters('CourtOrder','section_of_order').component} id='section_of_order' props={{label:'Section Of Order', required:getInputParameters('CourtOrder','section_of_order').required, ...getInputParameters('CourtOrder','section_of_order').props}}  {...props}/>
<MyInput comp={getInputParameters('CourtOrder','cause_of_action_type').component} id='cause_of_action_type' props={{label:'Cause Of Action Type', required:getInputParameters('CourtOrder','cause_of_action_type').required, ...getInputParameters('CourtOrder','cause_of_action_type').props}}  {...props}/>
<MyInput comp={getInputParameters('CourtOrder','cause_of_action_id').component} id='cause_of_action_id' props={{label:'Cause Of Action Id', required:getInputParameters('CourtOrder','cause_of_action_id').required, ...getInputParameters('CourtOrder','cause_of_action_id').props}}  {...props}/>
<MyInput comp={getInputParameters('CourtOrder','appeal_or_revision').component} id='appeal_or_revision' props={{label:'Appeal Or Revision', required:getInputParameters('CourtOrder','appeal_or_revision').required, ...getInputParameters('CourtOrder','appeal_or_revision').props}}  {...props}/>
<MyInput comp={getInputParameters('CourtOrder','status_of_amaldaramad').component} id='status_of_amaldaramad' props={{label:'Status Of Amaldaramad', required:getInputParameters('CourtOrder','status_of_amaldaramad').required, ...getInputParameters('CourtOrder','status_of_amaldaramad').props}}  {...props}/>
<MyInput comp={getInputParameters('CourtOrder','revision_appeal').component} id='revision_appeal' props={{label:'Revision Appeal', required:getInputParameters('CourtOrder','revision_appeal').required, ...getInputParameters('CourtOrder','revision_appeal').props}}  {...props}/>
<MyInput comp={getInputParameters('CourtOrder','remarks').component} id='remarks' props={{label:'Remarks', required:getInputParameters('CourtOrder','remarks').required, ...getInputParameters('CourtOrder','remarks').props}}  {...props}/>
         {getButton()}
     
     </Stack>);
     }
    

export function FarmerFormComponent(props)  {
    return ( <Stack>
         <MyInput comp={getInputParameters('Farmer','id').component} id='id' props={{label:'Id', required:getInputParameters('Farmer','id').required, ...getInputParameters('Farmer','id').props}}  {...props}/>
<MyInput comp={getInputParameters('Farmer','village').component} id='village' props={{label:'Village', required:getInputParameters('Farmer','village').required, ...getInputParameters('Farmer','village').props}}  {...props}/>
<MyInput comp={getInputParameters('Farmer','aadhar_no').component} id='aadhar_no' props={{label:'Aadhar No', required:getInputParameters('Farmer','aadhar_no').required, ...getInputParameters('Farmer','aadhar_no').props}}  {...props}/>
<MyInput comp={getInputParameters('Farmer','mobile_no').component} id='mobile_no' props={{label:'Mobile No', required:getInputParameters('Farmer','mobile_no').required, ...getInputParameters('Farmer','mobile_no').props}}  {...props}/>
<MyInput comp={getInputParameters('Farmer','name').component} id='name' props={{label:'Name', required:getInputParameters('Farmer','name').required, ...getInputParameters('Farmer','name').props}}  {...props}/>
<MyInput comp={getInputParameters('Farmer','relationship').component} id='relationship' props={{label:'Relationship', required:getInputParameters('Farmer','relationship').required, ...getInputParameters('Farmer','relationship').props}}  {...props}/>
<MyInput comp={getInputParameters('Farmer','relative_name').component} id='relative_name' props={{label:'Relative Name', required:getInputParameters('Farmer','relative_name').required, ...getInputParameters('Farmer','relative_name').props}}  {...props}/>
<MyInput comp={getInputParameters('Farmer','year_of_birth').component} id='year_of_birth' props={{label:'Year Of Birth', required:getInputParameters('Farmer','year_of_birth').required, ...getInputParameters('Farmer','year_of_birth').props}}  {...props}/>
<MyInput comp={getInputParameters('Farmer','gender').component} id='gender' props={{label:'Gender', required:getInputParameters('Farmer','gender').required, ...getInputParameters('Farmer','gender').props}}  {...props}/>
<MyInput comp={getInputParameters('Farmer','majra').component} id='majra' props={{label:'Majra', required:getInputParameters('Farmer','majra').required, ...getInputParameters('Farmer','majra').props}}  {...props}/>
         {getButton()}
     
     </Stack>);
     }
    

export function GataFormComponent(props)  {
    return ( <Stack>
         <MyInput comp={getInputParameters('Gata','id').component} id='id' props={{label:'Id', required:getInputParameters('Gata','id').required, ...getInputParameters('Gata','id').props}}  {...props}/>
<MyInput comp={getInputParameters('Gata','khatauni').component} id='khatauni' props={{label:'Khatauni', required:getInputParameters('Gata','khatauni').required, ...getInputParameters('Gata','khatauni').props}}  {...props}/>
<MyInput comp={getInputParameters('Gata','gata_no').component} id='gata_no' props={{label:'Gata No', required:getInputParameters('Gata','gata_no').required, ...getInputParameters('Gata','gata_no').props}}  {...props}/>
<MyInput comp={getInputParameters('Gata','gata_no_txt').component} id='gata_no_txt' props={{label:'Gata No Txt', required:getInputParameters('Gata','gata_no_txt').required, ...getInputParameters('Gata','gata_no_txt').props}}  {...props}/>
<MyInput comp={getInputParameters('Gata','area').component} id='area' props={{label:'Area', required:getInputParameters('Gata','area').required, ...getInputParameters('Gata','area').props}}  {...props}/>
<MyInput comp={getInputParameters('Gata','khata_no').component} id='khata_no' props={{label:'Khata No', required:getInputParameters('Gata','khata_no').required, ...getInputParameters('Gata','khata_no').props}}  {...props}/>
<MyInput comp={getInputParameters('Gata','fasli_year').component} id='fasli_year' props={{label:'Fasli Year', required:getInputParameters('Gata','fasli_year').required, ...getInputParameters('Gata','fasli_year').props}}  {...props}/>
<MyInput comp={getInputParameters('Gata','land_category').component} id='land_category' props={{label:'Land Category', required:getInputParameters('Gata','land_category').required, ...getInputParameters('Gata','land_category').props}}  {...props}/>
<MyInput comp={getInputParameters('Gata','remarks').component} id='remarks' props={{label:'Remarks', required:getInputParameters('Gata','remarks').required, ...getInputParameters('Gata','remarks').props}}  {...props}/>
         {getButton()}
     
     </Stack>);
     }
    

export function GataDeltaFormComponent(props)  {
    return ( <Stack>
         <MyInput comp={getInputParameters('GataDelta','id').component} id='id' props={{label:'Id', required:getInputParameters('GataDelta','id').required, ...getInputParameters('GataDelta','id').props}}  {...props}/>
<MyInput comp={getInputParameters('GataDelta','order').component} id='order' props={{label:'Order', required:getInputParameters('GataDelta','order').required, ...getInputParameters('GataDelta','order').props}}  {...props}/>
<MyInput comp={getInputParameters('GataDelta','type_of_correction').component} id='type_of_correction' props={{label:'Type Of Correction', required:getInputParameters('GataDelta','type_of_correction').required, ...getInputParameters('GataDelta','type_of_correction').props}}  {...props}/>
<MyInput comp={getInputParameters('GataDelta','gata_no').component} id='gata_no' props={{label:'Gata No', required:getInputParameters('GataDelta','gata_no').required, ...getInputParameters('GataDelta','gata_no').props}}  {...props}/>
<MyInput comp={getInputParameters('GataDelta','gata_no_txt').component} id='gata_no_txt' props={{label:'Gata No Txt', required:getInputParameters('GataDelta','gata_no_txt').required, ...getInputParameters('GataDelta','gata_no_txt').props}}  {...props}/>
<MyInput comp={getInputParameters('GataDelta','area').component} id='area' props={{label:'Area', required:getInputParameters('GataDelta','area').required, ...getInputParameters('GataDelta','area').props}}  {...props}/>
<MyInput comp={getInputParameters('GataDelta','khata_no').component} id='khata_no' props={{label:'Khata No', required:getInputParameters('GataDelta','khata_no').required, ...getInputParameters('GataDelta','khata_no').props}}  {...props}/>
<MyInput comp={getInputParameters('GataDelta','bhaumik_year').component} id='bhaumik_year' props={{label:'Bhaumik Year', required:getInputParameters('GataDelta','bhaumik_year').required, ...getInputParameters('GataDelta','bhaumik_year').props}}  {...props}/>
<MyInput comp={getInputParameters('GataDelta','land_category').component} id='land_category' props={{label:'Land Category', required:getInputParameters('GataDelta','land_category').required, ...getInputParameters('GataDelta','land_category').props}}  {...props}/>
<MyInput comp={getInputParameters('GataDelta','remarks').component} id='remarks' props={{label:'Remarks', required:getInputParameters('GataDelta','remarks').required, ...getInputParameters('GataDelta','remarks').props}}  {...props}/>
         {getButton()}
     
     </Stack>);
     }
    

export function KhataFormComponent(props)  {
    return ( <Stack>
         <MyInput comp={getInputParameters('Khata','id').component} id='id' props={{label:'Id', required:getInputParameters('Khata','id').required, ...getInputParameters('Khata','id').props}}  {...props}/>
<MyInput comp={getInputParameters('Khata','khata_no').component} id='khata_no' props={{label:'Khata No', required:getInputParameters('Khata','khata_no').required, ...getInputParameters('Khata','khata_no').props}}  {...props}/>
<MyInput comp={getInputParameters('Khata','village').component} id='village' props={{label:'Village', required:getInputParameters('Khata','village').required, ...getInputParameters('Khata','village').props}}  {...props}/>
<MyInput comp={getInputParameters('Khata','category').component} id='category' props={{label:'Category', required:getInputParameters('Khata','category').required, ...getInputParameters('Khata','category').props}}  {...props}/>
<MyInput comp={getInputParameters('Khata','area').component} id='area' props={{label:'Area', required:getInputParameters('Khata','area').required, ...getInputParameters('Khata','area').props}}  {...props}/>
         {getButton()}
     
     </Stack>);
     }
    

export function KhataDeltaFormComponent(props)  {
    return ( <Stack>
         <MyInput comp={getInputParameters('KhataDelta','id').component} id='id' props={{label:'Id', required:getInputParameters('KhataDelta','id').required, ...getInputParameters('KhataDelta','id').props}}  {...props}/>
<MyInput comp={getInputParameters('KhataDelta','order').component} id='order' props={{label:'Order', required:getInputParameters('KhataDelta','order').required, ...getInputParameters('KhataDelta','order').props}}  {...props}/>
<MyInput comp={getInputParameters('KhataDelta','type_of_correction').component} id='type_of_correction' props={{label:'Type Of Correction', required:getInputParameters('KhataDelta','type_of_correction').required, ...getInputParameters('KhataDelta','type_of_correction').props}}  {...props}/>
<MyInput comp={getInputParameters('KhataDelta','khata_no').component} id='khata_no' props={{label:'Khata No', required:getInputParameters('KhataDelta','khata_no').required, ...getInputParameters('KhataDelta','khata_no').props}}  {...props}/>
<MyInput comp={getInputParameters('KhataDelta','khatedar_name').component} id='khatedar_name' props={{label:'Khatedar Name', required:getInputParameters('KhataDelta','khatedar_name').required, ...getInputParameters('KhataDelta','khatedar_name').props}}  {...props}/>
<MyInput comp={getInputParameters('KhataDelta','farmer_code').component} id='farmer_code' props={{label:'Farmer Code', required:getInputParameters('KhataDelta','farmer_code').required, ...getInputParameters('KhataDelta','farmer_code').props}}  {...props}/>
<MyInput comp={getInputParameters('KhataDelta','order_in_khatauni').component} id='order_in_khatauni' props={{label:'Order In Khatauni', required:getInputParameters('KhataDelta','order_in_khatauni').required, ...getInputParameters('KhataDelta','order_in_khatauni').props}}  {...props}/>
<MyInput comp={getInputParameters('KhataDelta','share').component} id='share' props={{label:'Share', required:getInputParameters('KhataDelta','share').required, ...getInputParameters('KhataDelta','share').props}}  {...props}/>
<MyInput comp={getInputParameters('KhataDelta','remarks').component} id='remarks' props={{label:'Remarks', required:getInputParameters('KhataDelta','remarks').required, ...getInputParameters('KhataDelta','remarks').props}}  {...props}/>
         {getButton()}
     
     </Stack>);
     }
    

export function KhatauniFormComponent(props)  {
    return ( <Stack>
         <MyInput comp={getInputParameters('Khatauni','id').component} id='id' props={{label:'Id', required:getInputParameters('Khatauni','id').required, ...getInputParameters('Khatauni','id').props}}  {...props}/>
<MyInput comp={getInputParameters('Khatauni','village').component} id='village' props={{label:'Village', required:getInputParameters('Khatauni','village').required, ...getInputParameters('Khatauni','village').props}}  {...props}/>
<MyInput comp={getInputParameters('Khatauni','fasli_year').component} id='fasli_year' props={{label:'Fasli Year', required:getInputParameters('Khatauni','fasli_year').required, ...getInputParameters('Khatauni','fasli_year').props}}  {...props}/>
<MyInput comp={getInputParameters('Khatauni','type_of_khatauni').component} id='type_of_khatauni' props={{label:'Type Of Khatauni', required:getInputParameters('Khatauni','type_of_khatauni').required, ...getInputParameters('Khatauni','type_of_khatauni').props}}  {...props}/>
<MyInput comp={getInputParameters('Khatauni','no_of_khatas').component} id='no_of_khatas' props={{label:'No Of Khatas', required:getInputParameters('Khatauni','no_of_khatas').required, ...getInputParameters('Khatauni','no_of_khatas').props}}  {...props}/>
<MyInput comp={getInputParameters('Khatauni','area').component} id='area' props={{label:'Area', required:getInputParameters('Khatauni','area').required, ...getInputParameters('Khatauni','area').props}}  {...props}/>
         {getButton()}
     
     </Stack>);
     }
    

export function KhatedarFormComponent(props)  {
    return ( <Stack>
         <MyInput comp={getInputParameters('Khatedar','id').component} id='id' props={{label:'Id', required:getInputParameters('Khatedar','id').required, ...getInputParameters('Khatedar','id').props}}  {...props}/>
<MyInput comp={getInputParameters('Khatedar','khatauni').component} id='khatauni' props={{label:'Khatauni', required:getInputParameters('Khatedar','khatauni').required, ...getInputParameters('Khatedar','khatauni').props}}  {...props}/>
<MyInput comp={getInputParameters('Khatedar','khata_no').component} id='khata_no' props={{label:'Khata No', required:getInputParameters('Khatedar','khata_no').required, ...getInputParameters('Khatedar','khata_no').props}}  {...props}/>
<MyInput comp={getInputParameters('Khatedar','farmer').component} id='farmer' props={{label:'Farmer', required:getInputParameters('Khatedar','farmer').required, ...getInputParameters('Khatedar','farmer').props}}  {...props}/>
<MyInput comp={getInputParameters('Khatedar','slno_in_khata').component} id='slno_in_khata' props={{label:'Slno In Khata', required:getInputParameters('Khatedar','slno_in_khata').required, ...getInputParameters('Khatedar','slno_in_khata').props}}  {...props}/>
<MyInput comp={getInputParameters('Khatedar','share').component} id='share' props={{label:'Share', required:getInputParameters('Khatedar','share').required, ...getInputParameters('Khatedar','share').props}}  {...props}/>
<MyInput comp={getInputParameters('Khatedar','remarks').component} id='remarks' props={{label:'Remarks', required:getInputParameters('Khatedar','remarks').required, ...getInputParameters('Khatedar','remarks').props}}  {...props}/>
         {getButton()}
     
     </Stack>);
     }
    

export function LandCategoryFormComponent(props)  {
    return ( <Stack>
         <MyInput comp={getInputParameters('LandCategory','id').component} id='id' props={{label:'Id', required:getInputParameters('LandCategory','id').required, ...getInputParameters('LandCategory','id').props}}  {...props}/>
<MyInput comp={getInputParameters('LandCategory','category').component} id='category' props={{label:'Category', required:getInputParameters('LandCategory','category').required, ...getInputParameters('LandCategory','category').props}}  {...props}/>
<MyInput comp={getInputParameters('LandCategory','name').component} id='name' props={{label:'Name', required:getInputParameters('LandCategory','name').required, ...getInputParameters('LandCategory','name').props}}  {...props}/>
<MyInput comp={getInputParameters('LandCategory','name_eng').component} id='name_eng' props={{label:'Name Eng', required:getInputParameters('LandCategory','name_eng').required, ...getInputParameters('LandCategory','name_eng').props}}  {...props}/>
         {getButton()}
     
     </Stack>);
     }
    

export function LandTransferFormComponent(props)  {
    return ( <Stack>
         <MyInput comp={getInputParameters('LandTransfer','id').component} id='id' props={{label:'Id', required:getInputParameters('LandTransfer','id').required, ...getInputParameters('LandTransfer','id').props}}  {...props}/>
<MyInput comp={getInputParameters('LandTransfer','order').component} id='order' props={{label:'Order', required:getInputParameters('LandTransfer','order').required, ...getInputParameters('LandTransfer','order').props}}  {...props}/>
<MyInput comp={getInputParameters('LandTransfer','transferor').component} id='transferor' props={{label:'Transferor', required:getInputParameters('LandTransfer','transferor').required, ...getInputParameters('LandTransfer','transferor').props}}  {...props}/>
<MyInput comp={getInputParameters('LandTransfer','transferee_khata_no').component} id='transferee_khata_no' props={{label:'Transferee Khata No', required:getInputParameters('LandTransfer','transferee_khata_no').required, ...getInputParameters('LandTransfer','transferee_khata_no').props}}  {...props}/>
<MyInput comp={getInputParameters('LandTransfer','transferee_order_in_khata').component} id='transferee_order_in_khata' props={{label:'Transferee Order In Khata', required:getInputParameters('LandTransfer','transferee_order_in_khata').required, ...getInputParameters('LandTransfer','transferee_order_in_khata').props}}  {...props}/>
<MyInput comp={getInputParameters('LandTransfer','transferee_name').component} id='transferee_name' props={{label:'Transferee Name', required:getInputParameters('LandTransfer','transferee_name').required, ...getInputParameters('LandTransfer','transferee_name').props}}  {...props}/>
<MyInput comp={getInputParameters('LandTransfer','reason').component} id='reason' props={{label:'Reason', required:getInputParameters('LandTransfer','reason').required, ...getInputParameters('LandTransfer','reason').props}}  {...props}/>
<MyInput comp={getInputParameters('LandTransfer','date_of_transfer').component} id='date_of_transfer' props={{label:'Date Of Transfer', required:getInputParameters('LandTransfer','date_of_transfer').required, ...getInputParameters('LandTransfer','date_of_transfer').props}}  {...props}/>
<MyInput comp={getInputParameters('LandTransfer','area').component} id='area' props={{label:'Area', required:getInputParameters('LandTransfer','area').required, ...getInputParameters('LandTransfer','area').props}}  {...props}/>
<MyInput comp={getInputParameters('LandTransfer','status_of_amaldaramad').component} id='status_of_amaldaramad' props={{label:'Status Of Amaldaramad', required:getInputParameters('LandTransfer','status_of_amaldaramad').required, ...getInputParameters('LandTransfer','status_of_amaldaramad').props}}  {...props}/>
         {getButton()}
     
     </Stack>);
     }
    

export function PresidingoffierFormComponent(props)  {
    return ( <Stack>
         <MyInput comp={getInputParameters('Presidingoffier','id').component} id='id' props={{label:'Id', required:getInputParameters('Presidingoffier','id').required, ...getInputParameters('Presidingoffier','id').props}}  {...props}/>
<MyInput comp={getInputParameters('Presidingoffier','court').component} id='court' props={{label:'Court', required:getInputParameters('Presidingoffier','court').required, ...getInputParameters('Presidingoffier','court').props}}  {...props}/>
<MyInput comp={getInputParameters('Presidingoffier','name').component} id='name' props={{label:'Name', required:getInputParameters('Presidingoffier','name').required, ...getInputParameters('Presidingoffier','name').props}}  {...props}/>
<MyInput comp={getInputParameters('Presidingoffier','name_eng').component} id='name_eng' props={{label:'Name Eng', required:getInputParameters('Presidingoffier','name_eng').required, ...getInputParameters('Presidingoffier','name_eng').props}}  {...props}/>
<MyInput comp={getInputParameters('Presidingoffier','charge_from').component} id='charge_from' props={{label:'Charge From', required:getInputParameters('Presidingoffier','charge_from').required, ...getInputParameters('Presidingoffier','charge_from').props}}  {...props}/>
<MyInput comp={getInputParameters('Presidingoffier','charge_to').component} id='charge_to' props={{label:'Charge To', required:getInputParameters('Presidingoffier','charge_to').required, ...getInputParameters('Presidingoffier','charge_to').props}}  {...props}/>
         {getButton()}
     
     </Stack>);
     }
    

export function RevenueVillageFormComponent(props)  {
    return ( <Stack>
         <MyInput comp={getInputParameters('RevenueVillage','vname').component} id='vname' props={{label:'Vname', required:getInputParameters('RevenueVillage','vname').required, ...getInputParameters('RevenueVillage','vname').props}}  {...props}/>
<MyInput comp={getInputParameters('RevenueVillage','village_code_census').component} id='village_code_census' props={{label:'Village Code Census', required:getInputParameters('RevenueVillage','village_code_census').required, ...getInputParameters('RevenueVillage','village_code_census').props}}  {...props}/>
<MyInput comp={getInputParameters('RevenueVillage','vname_eng').component} id='vname_eng' props={{label:'Vname Eng', required:getInputParameters('RevenueVillage','vname_eng').required, ...getInputParameters('RevenueVillage','vname_eng').props}}  {...props}/>
<MyInput comp={getInputParameters('RevenueVillage','pname').component} id='pname' props={{label:'Pname', required:getInputParameters('RevenueVillage','pname').required, ...getInputParameters('RevenueVillage','pname').props}}  {...props}/>
<MyInput comp={getInputParameters('RevenueVillage','flg_chakbandi').component} id='flg_chakbandi' props={{label:'Flg Chakbandi', required:getInputParameters('RevenueVillage','flg_chakbandi').required, ...getInputParameters('RevenueVillage','flg_chakbandi').props}}  {...props}/>
<MyInput comp={getInputParameters('RevenueVillage','flg_survey').component} id='flg_survey' props={{label:'Flg Survey', required:getInputParameters('RevenueVillage','flg_survey').required, ...getInputParameters('RevenueVillage','flg_survey').props}}  {...props}/>
<MyInput comp={getInputParameters('RevenueVillage','pargana_code_new').component} id='pargana_code_new' props={{label:'Pargana Code New', required:getInputParameters('RevenueVillage','pargana_code_new').required, ...getInputParameters('RevenueVillage','pargana_code_new').props}}  {...props}/>
<MyInput comp={getInputParameters('RevenueVillage','tehsil_code').component} id='tehsil_code' props={{label:'Tehsil Code', required:getInputParameters('RevenueVillage','tehsil_code').required, ...getInputParameters('RevenueVillage','tehsil_code').props}}  {...props}/>
<MyInput comp={getInputParameters('RevenueVillage','district_code').component} id='district_code' props={{label:'District Code', required:getInputParameters('RevenueVillage','district_code').required, ...getInputParameters('RevenueVillage','district_code').props}}  {...props}/>
         {getButton()}
     
     </Stack>);
     }
    

export function ShareUpdateFormComponent(props)  {
    return ( <Stack>
         <MyInput comp={getInputParameters('ShareUpdate','id').component} id='id' props={{label:'Id', required:getInputParameters('ShareUpdate','id').required, ...getInputParameters('ShareUpdate','id').props}}  {...props}/>
<MyInput comp={getInputParameters('ShareUpdate','order').component} id='order' props={{label:'Order', required:getInputParameters('ShareUpdate','order').required, ...getInputParameters('ShareUpdate','order').props}}  {...props}/>
<MyInput comp={getInputParameters('ShareUpdate','khata_no').component} id='khata_no' props={{label:'Khata No', required:getInputParameters('ShareUpdate','khata_no').required, ...getInputParameters('ShareUpdate','khata_no').props}}  {...props}/>
<MyInput comp={getInputParameters('ShareUpdate','khata_sl_no').component} id='khata_sl_no' props={{label:'Khata Sl No', required:getInputParameters('ShareUpdate','khata_sl_no').required, ...getInputParameters('ShareUpdate','khata_sl_no').props}}  {...props}/>
<MyInput comp={getInputParameters('ShareUpdate','khatedar_name').component} id='khatedar_name' props={{label:'Khatedar Name', required:getInputParameters('ShareUpdate','khatedar_name').required, ...getInputParameters('ShareUpdate','khatedar_name').props}}  {...props}/>
<MyInput comp={getInputParameters('ShareUpdate','old_share').component} id='old_share' props={{label:'Old Share', required:getInputParameters('ShareUpdate','old_share').required, ...getInputParameters('ShareUpdate','old_share').props}}  {...props}/>
<MyInput comp={getInputParameters('ShareUpdate','new_share').component} id='new_share' props={{label:'New Share', required:getInputParameters('ShareUpdate','new_share').required, ...getInputParameters('ShareUpdate','new_share').props}}  {...props}/>
<MyInput comp={getInputParameters('ShareUpdate','effective_date_of_update').component} id='effective_date_of_update' props={{label:'Effective Date Of Update', required:getInputParameters('ShareUpdate','effective_date_of_update').required, ...getInputParameters('ShareUpdate','effective_date_of_update').props}}  {...props}/>
<MyInput comp={getInputParameters('ShareUpdate','status_of_amaldaramad').component} id='status_of_amaldaramad' props={{label:'Status Of Amaldaramad', required:getInputParameters('ShareUpdate','status_of_amaldaramad').required, ...getInputParameters('ShareUpdate','status_of_amaldaramad').props}}  {...props}/>
         {getButton()}
     
     </Stack>);
     }
    
