import React from "react";
import {Stack} from "@mui/material"
import {getInputParameters, getButton} from "../inputparameters"
import {ReactHookFormInput} from "../../../components/forms/reacthookforminput";
 
export function AmaldaramadFormComponent(props)  {
    return ( <Stack>
         {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Amaldaramad','claim').component, id:'claim', label:'Claim', defaultValue:'', required:getInputParameters('Amaldaramad','claim').required, ...getInputParameters('Amaldaramad','claim').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Amaldaramad','order').component, id:'order', label:'Order', defaultValue:'', required:getInputParameters('Amaldaramad','order').required, ...getInputParameters('Amaldaramad','order').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Amaldaramad','date_of_order').component, id:'date_of_order', label:'Date Of Order', defaultValue:'', required:getInputParameters('Amaldaramad','date_of_order').required, ...getInputParameters('Amaldaramad','date_of_order').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Amaldaramad','transferor').component, id:'transferor', label:'Transferor', defaultValue:'', required:getInputParameters('Amaldaramad','transferor').required, ...getInputParameters('Amaldaramad','transferor').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Amaldaramad','transferee').component, id:'transferee', label:'Transferee', defaultValue:'', required:getInputParameters('Amaldaramad','transferee').required, ...getInputParameters('Amaldaramad','transferee').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Amaldaramad','date_of_transfer').component, id:'date_of_transfer', label:'Date Of Transfer', defaultValue:'', required:getInputParameters('Amaldaramad','date_of_transfer').required, ...getInputParameters('Amaldaramad','date_of_transfer').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Amaldaramad','gata').component, id:'gata', label:'Gata', defaultValue:'', required:getInputParameters('Amaldaramad','gata').required, ...getInputParameters('Amaldaramad','gata').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Amaldaramad','total_title_area').component, id:'total_title_area', label:'Total Title Area', defaultValue:'', required:getInputParameters('Amaldaramad','total_title_area').required, ...getInputParameters('Amaldaramad','total_title_area').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Amaldaramad','transferred_area').component, id:'transferred_area', label:'Transferred Area', defaultValue:'', required:getInputParameters('Amaldaramad','transferred_area').required, ...getInputParameters('Amaldaramad','transferred_area').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Amaldaramad','transferred_share').component, id:'transferred_share', label:'Transferred Share', defaultValue:'', required:getInputParameters('Amaldaramad','transferred_share').required, ...getInputParameters('Amaldaramad','transferred_share').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Amaldaramad','status_of_amaldaramad').component, id:'status_of_amaldaramad', label:'Status Of Amaldaramad', defaultValue:'', required:getInputParameters('Amaldaramad','status_of_amaldaramad').required, ...getInputParameters('Amaldaramad','status_of_amaldaramad').props, ...props})}
         {getButton()}
     
     </Stack>);
     }
    

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
    

export function ClaimFormComponent(props)  {
    return ( <Stack>
         {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Claim','petition').component, id:'petition', label:'Petition', defaultValue:'', required:getInputParameters('Claim','petition').required, ...getInputParameters('Claim','petition').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Claim','claimant').component, id:'claimant', label:'Claimant', defaultValue:'', required:getInputParameters('Claim','claimant').required, ...getInputParameters('Claim','claimant').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Claim','date_of_claim').component, id:'date_of_claim', label:'Date Of Claim', defaultValue:'', required:getInputParameters('Claim','date_of_claim').required, ...getInputParameters('Claim','date_of_claim').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Claim','type_of_claim').component, id:'type_of_claim', label:'Type Of Claim', defaultValue:'', required:getInputParameters('Claim','type_of_claim').required, ...getInputParameters('Claim','type_of_claim').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Claim','latest_order').component, id:'latest_order', label:'Latest Order', defaultValue:'', required:getInputParameters('Claim','latest_order').required, ...getInputParameters('Claim','latest_order').props, ...props})}
         {getButton()}
     
     </Stack>);
     }
    

export function CourtOrderFormComponent(props)  {
    return ( <Stack>
         {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('CourtOrder','khatauni').component, id:'khatauni', label:'Khatauni', defaultValue:'', required:getInputParameters('CourtOrder','khatauni').required, ...getInputParameters('CourtOrder','khatauni').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('CourtOrder','petition').component, id:'petition', label:'Petition', defaultValue:'', required:getInputParameters('CourtOrder','petition').required, ...getInputParameters('CourtOrder','petition').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('CourtOrder','date_of_order').component, id:'date_of_order', label:'Date Of Order', defaultValue:'', required:getInputParameters('CourtOrder','date_of_order').required, ...getInputParameters('CourtOrder','date_of_order').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('CourtOrder','ordering_court').component, id:'ordering_court', label:'Ordering Court', defaultValue:'', required:getInputParameters('CourtOrder','ordering_court').required, ...getInputParameters('CourtOrder','ordering_court').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('CourtOrder','order_txt').component, id:'order_txt', label:'Order Txt', defaultValue:'', required:getInputParameters('CourtOrder','order_txt').required, ...getInputParameters('CourtOrder','order_txt').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('CourtOrder','operative_part').component, id:'operative_part', label:'Operative Part', defaultValue:'', required:getInputParameters('CourtOrder','operative_part').required, ...getInputParameters('CourtOrder','operative_part').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('CourtOrder','copy_of_order').component, id:'copy_of_order', label:'Copy Of Order', defaultValue:'', required:getInputParameters('CourtOrder','copy_of_order').required, ...getInputParameters('CourtOrder','copy_of_order').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('CourtOrder','section_of_order').component, id:'section_of_order', label:'Section Of Order', defaultValue:'', required:getInputParameters('CourtOrder','section_of_order').required, ...getInputParameters('CourtOrder','section_of_order').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('CourtOrder','appeal_or_revision').component, id:'appeal_or_revision', label:'Appeal Or Revision', defaultValue:'', required:getInputParameters('CourtOrder','appeal_or_revision').required, ...getInputParameters('CourtOrder','appeal_or_revision').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('CourtOrder','remarks').component, id:'remarks', label:'Remarks', defaultValue:'', required:getInputParameters('CourtOrder','remarks').required, ...getInputParameters('CourtOrder','remarks').props, ...props})}
         {getButton()}
     
     </Stack>);
     }
    

export function ExchangeFormComponent(props)  {
    return ( <Stack>
         {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Exchange','claim').component, id:'claim', label:'Claim', defaultValue:'', required:getInputParameters('Exchange','claim').required, ...getInputParameters('Exchange','claim').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Exchange','partyA').component, id:'partyA', label:'Partya', defaultValue:'', required:getInputParameters('Exchange','partyA').required, ...getInputParameters('Exchange','partyA').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Exchange','partyB').component, id:'partyB', label:'Partyb', defaultValue:'', required:getInputParameters('Exchange','partyB').required, ...getInputParameters('Exchange','partyB').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Exchange','date_of_exchange').component, id:'date_of_exchange', label:'Date Of Exchange', defaultValue:'', required:getInputParameters('Exchange','date_of_exchange').required, ...getInputParameters('Exchange','date_of_exchange').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Exchange','date_of_order').component, id:'date_of_order', label:'Date Of Order', defaultValue:'', required:getInputParameters('Exchange','date_of_order').required, ...getInputParameters('Exchange','date_of_order').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Exchange','gataA').component, id:'gataA', label:'Gataa', defaultValue:'', required:getInputParameters('Exchange','gataA').required, ...getInputParameters('Exchange','gataA').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Exchange','gataB').component, id:'gataB', label:'Gatab', defaultValue:'', required:getInputParameters('Exchange','gataB').required, ...getInputParameters('Exchange','gataB').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Exchange','areaA').component, id:'areaA', label:'Areaa', defaultValue:'', required:getInputParameters('Exchange','areaA').required, ...getInputParameters('Exchange','areaA').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Exchange','areaB').component, id:'areaB', label:'Areab', defaultValue:'', required:getInputParameters('Exchange','areaB').required, ...getInputParameters('Exchange','areaB').props, ...props})}
         {getButton()}
     
     </Stack>);
     }
    

export function FarmerFormComponent(props)  {
    return ( <Stack>
         {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Farmer','khatauni').component, id:'khatauni', label:'Khatauni', defaultValue:'', required:getInputParameters('Farmer','khatauni').required, ...getInputParameters('Farmer','khatauni').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Farmer','unique_id').component, id:'unique_id', label:'Unique Id', defaultValue:'', required:getInputParameters('Farmer','unique_id').required, ...getInputParameters('Farmer','unique_id').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Farmer','khatedar_code').component, id:'khatedar_code', label:'Khatedar Code', defaultValue:'', required:getInputParameters('Farmer','khatedar_code').required, ...getInputParameters('Farmer','khatedar_code').props, ...props})}
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
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Gata','area').component, id:'area', label:'Area', defaultValue:'', required:getInputParameters('Gata','area').required, ...getInputParameters('Gata','area').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Gata','khata_no').component, id:'khata_no', label:'Khata No', defaultValue:'', required:getInputParameters('Gata','khata_no').required, ...getInputParameters('Gata','khata_no').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Gata','bhaumik_year').component, id:'bhaumik_year', label:'Bhaumik Year', defaultValue:'', required:getInputParameters('Gata','bhaumik_year').required, ...getInputParameters('Gata','bhaumik_year').props, ...props})}
         {getButton()}
     
     </Stack>);
     }
    

export function GataOwnerFormComponent(props)  {
    return ( <Stack>
         {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('GataOwner','khatauni').component, id:'khatauni', label:'Khatauni', defaultValue:'', required:getInputParameters('GataOwner','khatauni').required, ...getInputParameters('GataOwner','khatauni').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('GataOwner','gata').component, id:'gata', label:'Gata', defaultValue:'', required:getInputParameters('GataOwner','gata').required, ...getInputParameters('GataOwner','gata').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('GataOwner','owner').component, id:'owner', label:'Owner', defaultValue:'', required:getInputParameters('GataOwner','owner').required, ...getInputParameters('GataOwner','owner').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('GataOwner','owned_share').component, id:'owned_share', label:'Owned Share', defaultValue:'', required:getInputParameters('GataOwner','owned_share').required, ...getInputParameters('GataOwner','owned_share').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('GataOwner','owned_area').component, id:'owned_area', label:'Owned Area', defaultValue:'', required:getInputParameters('GataOwner','owned_area').required, ...getInputParameters('GataOwner','owned_area').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('GataOwner','amaldaramad').component, id:'amaldaramad', label:'Amaldaramad', defaultValue:'', required:getInputParameters('GataOwner','amaldaramad').required, ...getInputParameters('GataOwner','amaldaramad').props, ...props})}
         {getButton()}
     
     </Stack>);
     }
    

export function InheritanceFormComponent(props)  {
    return ( <Stack>
         {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Inheritance','claim').component, id:'claim', label:'Claim', defaultValue:'', required:getInputParameters('Inheritance','claim').required, ...getInputParameters('Inheritance','claim').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Inheritance','dead_khatedar').component, id:'dead_khatedar', label:'Dead Khatedar', defaultValue:'', required:getInputParameters('Inheritance','dead_khatedar').required, ...getInputParameters('Inheritance','dead_khatedar').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Inheritance','date_of_death').component, id:'date_of_death', label:'Date Of Death', defaultValue:'', required:getInputParameters('Inheritance','date_of_death').required, ...getInputParameters('Inheritance','date_of_death').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Inheritance','legal_heir').component, id:'legal_heir', label:'Legal Heir', defaultValue:'', required:getInputParameters('Inheritance','legal_heir').required, ...getInputParameters('Inheritance','legal_heir').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Inheritance','share').component, id:'share', label:'Share', defaultValue:'', required:getInputParameters('Inheritance','share').required, ...getInputParameters('Inheritance','share').props, ...props})}
         {getButton()}
     
     </Stack>);
     }
    

export function KhataFormComponent(props)  {
    return ( <Stack>
         {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Khata','khatauni').component, id:'khatauni', label:'Khatauni', defaultValue:'', required:getInputParameters('Khata','khatauni').required, ...getInputParameters('Khata','khatauni').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Khata','khata_no').component, id:'khata_no', label:'Khata No', defaultValue:'', required:getInputParameters('Khata','khata_no').required, ...getInputParameters('Khata','khata_no').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Khata','category').component, id:'category', label:'Category', defaultValue:'', required:getInputParameters('Khata','category').required, ...getInputParameters('Khata','category').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Khata','area').component, id:'area', label:'Area', defaultValue:'', required:getInputParameters('Khata','area').required, ...getInputParameters('Khata','area').props, ...props})}
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
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Khatedar','khata').component, id:'khata', label:'Khata', defaultValue:'', required:getInputParameters('Khatedar','khata').required, ...getInputParameters('Khatedar','khata').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Khatedar','khatedar').component, id:'khatedar', label:'Khatedar', defaultValue:'', required:getInputParameters('Khatedar','khatedar').required, ...getInputParameters('Khatedar','khatedar').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Khatedar','slno_in_khata').component, id:'slno_in_khata', label:'Slno In Khata', defaultValue:'', required:getInputParameters('Khatedar','slno_in_khata').required, ...getInputParameters('Khatedar','slno_in_khata').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Khatedar','share').component, id:'share', label:'Share', defaultValue:'', required:getInputParameters('Khatedar','share').required, ...getInputParameters('Khatedar','share').props, ...props})}
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
    

export function OfficerFormComponent(props)  {
    return ( <Stack>
         {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Officer','name').component, id:'name', label:'Name', defaultValue:'', required:getInputParameters('Officer','name').required, ...getInputParameters('Officer','name').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Officer','name_eng').component, id:'name_eng', label:'Name Eng', defaultValue:'', required:getInputParameters('Officer','name_eng').required, ...getInputParameters('Officer','name_eng').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Officer','mobile_no').component, id:'mobile_no', label:'Mobile No', defaultValue:'', required:getInputParameters('Officer','mobile_no').required, ...getInputParameters('Officer','mobile_no').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Officer','unique_id').component, id:'unique_id', label:'Unique Id', defaultValue:'', required:getInputParameters('Officer','unique_id').required, ...getInputParameters('Officer','unique_id').props, ...props})}
         {getButton()}
     
     </Stack>);
     }
    

export function PetitionFormComponent(props)  {
    return ( <Stack>
         {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Petition','khatauni').component, id:'khatauni', label:'Khatauni', defaultValue:'', required:getInputParameters('Petition','khatauni').required, ...getInputParameters('Petition','khatauni').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Petition','date_of_petition').component, id:'date_of_petition', label:'Date Of Petition', defaultValue:'', required:getInputParameters('Petition','date_of_petition').required, ...getInputParameters('Petition','date_of_petition').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Petition','name_of_petitioner').component, id:'name_of_petitioner', label:'Name Of Petitioner', defaultValue:'', required:getInputParameters('Petition','name_of_petitioner').required, ...getInputParameters('Petition','name_of_petitioner').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Petition','case_no').component, id:'case_no', label:'Case No', defaultValue:'', required:getInputParameters('Petition','case_no').required, ...getInputParameters('Petition','case_no').props, ...props})}
         {getButton()}
     
     </Stack>);
     }
    

export function PostingsFormComponent(props)  {
    return ( <Stack>
         {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Postings','officer').component, id:'officer', label:'Officer', defaultValue:'', required:getInputParameters('Postings','officer').required, ...getInputParameters('Postings','officer').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Postings','designation').component, id:'designation', label:'Designation', defaultValue:'', required:getInputParameters('Postings','designation').required, ...getInputParameters('Postings','designation').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Postings','location_type').component, id:'location_type', label:'Location Type', defaultValue:'', required:getInputParameters('Postings','location_type').required, ...getInputParameters('Postings','location_type').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Postings','location_code').component, id:'location_code', label:'Location Code', defaultValue:'', required:getInputParameters('Postings','location_code').required, ...getInputParameters('Postings','location_code').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Postings','charge_from').component, id:'charge_from', label:'Charge From', defaultValue:'', required:getInputParameters('Postings','charge_from').required, ...getInputParameters('Postings','charge_from').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Postings','charge_to').component, id:'charge_to', label:'Charge To', defaultValue:'', required:getInputParameters('Postings','charge_to').required, ...getInputParameters('Postings','charge_to').props, ...props})}
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
    

export function TransferFormComponent(props)  {
    return ( <Stack>
         {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Transfer','claim').component, id:'claim', label:'Claim', defaultValue:'', required:getInputParameters('Transfer','claim').required, ...getInputParameters('Transfer','claim').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Transfer','transferor').component, id:'transferor', label:'Transferor', defaultValue:'', required:getInputParameters('Transfer','transferor').required, ...getInputParameters('Transfer','transferor').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Transfer','transferee').component, id:'transferee', label:'Transferee', defaultValue:'', required:getInputParameters('Transfer','transferee').required, ...getInputParameters('Transfer','transferee').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Transfer','date_of_deed').component, id:'date_of_deed', label:'Date Of Deed', defaultValue:'', required:getInputParameters('Transfer','date_of_deed').required, ...getInputParameters('Transfer','date_of_deed').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Transfer','type_of_deed').component, id:'type_of_deed', label:'Type Of Deed', defaultValue:'', required:getInputParameters('Transfer','type_of_deed').required, ...getInputParameters('Transfer','type_of_deed').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Transfer','gata').component, id:'gata', label:'Gata', defaultValue:'', required:getInputParameters('Transfer','gata').required, ...getInputParameters('Transfer','gata').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Transfer','total_title_area').component, id:'total_title_area', label:'Total Title Area', defaultValue:'', required:getInputParameters('Transfer','total_title_area').required, ...getInputParameters('Transfer','total_title_area').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Transfer','sold_area').component, id:'sold_area', label:'Sold Area', defaultValue:'', required:getInputParameters('Transfer','sold_area').required, ...getInputParameters('Transfer','sold_area').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('Transfer','sold_share').component, id:'sold_share', label:'Sold Share', defaultValue:'', required:getInputParameters('Transfer','sold_share').required, ...getInputParameters('Transfer','sold_share').props, ...props})}
         {getButton()}
     
     </Stack>);
     }
    

export function TransferBeforeAadharvarshFormComponent(props)  {
    return ( <Stack>
         {React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('TransferBeforeAadharvarsh','claim').component, id:'claim', label:'Claim', defaultValue:'', required:getInputParameters('TransferBeforeAadharvarsh','claim').required, ...getInputParameters('TransferBeforeAadharvarsh','claim').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('TransferBeforeAadharvarsh','transferor').component, id:'transferor', label:'Transferor', defaultValue:'', required:getInputParameters('TransferBeforeAadharvarsh','transferor').required, ...getInputParameters('TransferBeforeAadharvarsh','transferor').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('TransferBeforeAadharvarsh','transferee').component, id:'transferee', label:'Transferee', defaultValue:'', required:getInputParameters('TransferBeforeAadharvarsh','transferee').required, ...getInputParameters('TransferBeforeAadharvarsh','transferee').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('TransferBeforeAadharvarsh','date_of_transfer').component, id:'date_of_transfer', label:'Date Of Transfer', defaultValue:'', required:getInputParameters('TransferBeforeAadharvarsh','date_of_transfer').required, ...getInputParameters('TransferBeforeAadharvarsh','date_of_transfer').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('TransferBeforeAadharvarsh','gata').component, id:'gata', label:'Gata', defaultValue:'', required:getInputParameters('TransferBeforeAadharvarsh','gata').required, ...getInputParameters('TransferBeforeAadharvarsh','gata').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('TransferBeforeAadharvarsh','sold_area').component, id:'sold_area', label:'Sold Area', defaultValue:'', required:getInputParameters('TransferBeforeAadharvarsh','sold_area').required, ...getInputParameters('TransferBeforeAadharvarsh','sold_area').props, ...props})}
{React.cloneElement(<ReactHookFormInput/>, { comp:getInputParameters('TransferBeforeAadharvarsh','sold_share').component, id:'sold_share', label:'Sold Share', defaultValue:'', required:getInputParameters('TransferBeforeAadharvarsh','sold_share').required, ...getInputParameters('TransferBeforeAadharvarsh','sold_share').props, ...props})}
         {getButton()}
     
     </Stack>);
     }
    
