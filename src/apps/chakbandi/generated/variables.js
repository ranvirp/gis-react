 
export const varsAuditlogs= (data) => {
return {id:data.id, object_id:data.object_id, object_name:data.object_name, object_value:data.object_value, object_hash:data.object_hash, type_of_action:data.type_of_action, hash_code:data.hash_code, action_by:data.action_by, action_on:data.action_on}
}
    

export const varsCourt= (data) => {
return {id:data.id, court_type:data.court_type, location:data.location, location_eng:data.location_eng}
}
    

export const varsCourtOrder= (data) => {
return {id:data.id, khatauni:data.khatauni, date_of_order:data.date_of_order, ordering_court:data.ordering_court, ordering_presiding_officer:data.ordering_presiding_officer, order_txt:data.order_txt, operative_part:data.operative_part, copy_of_order:data.copy_of_order, section_of_order:data.section_of_order, cause_of_action_type:data.cause_of_action_type, cause_of_action_id:data.cause_of_action_id, appeal_or_revision:data.appeal_or_revision, status_of_amaldaramad:data.status_of_amaldaramad, revision_appeal:data.revision_appeal, remarks:data.remarks}
}
    

export const varsFarmer= (data) => {
return {id:data.id, village:data.village, aadhar_no:data.aadhar_no, mobile_no:data.mobile_no, name:data.name, relationship:data.relationship, relative_name:data.relative_name, year_of_birth:data.year_of_birth, gender:data.gender, majra:data.majra}
}
    

export const varsGata= (data) => {
return {id:data.id, khatauni:data.khatauni, gata_no:data.gata_no, gata_no_txt:data.gata_no_txt, area:data.area, khata_no:data.khata_no, fasli_year:data.fasli_year, land_category:data.land_category, remarks:data.remarks}
}
    

export const varsGataDelta= (data) => {
return {id:data.id, order:data.order, type_of_correction:data.type_of_correction, gata_no:data.gata_no, gata_no_txt:data.gata_no_txt, area:data.area, khata_no:data.khata_no, bhaumik_year:data.bhaumik_year, land_category:data.land_category, remarks:data.remarks}
}
    

export const varsKhata= (data) => {
return {id:data.id, khata_no:data.khata_no, village:data.village, category:data.category, area:data.area}
}
    

export const varsKhataDelta= (data) => {
return {id:data.id, order:data.order, type_of_correction:data.type_of_correction, khata_no:data.khata_no, khatedar_name:data.khatedar_name, farmer_code:data.farmer_code, order_in_khatauni:data.order_in_khatauni, share:data.share, remarks:data.remarks}
}
    

export const varsKhatauni= (data) => {
return {id:data.id, village:data.village, fasli_year:data.fasli_year, type_of_khatauni:data.type_of_khatauni, no_of_khatas:data.no_of_khatas, area:data.area}
}
    

export const varsKhatedar= (data) => {
return {id:data.id, khatauni:data.khatauni, khata_no:data.khata_no, farmer:data.farmer, slno_in_khata:data.slno_in_khata, share:data.share, remarks:data.remarks}
}
    

export const varsLandCategory= (data) => {
return {id:data.id, category:data.category, name:data.name, name_eng:data.name_eng}
}
    

export const varsLandTransfer= (data) => {
return {id:data.id, order:data.order, transferor:data.transferor, transferee_khata_no:data.transferee_khata_no, transferee_order_in_khata:data.transferee_order_in_khata, transferee_name:data.transferee_name, reason:data.reason, date_of_transfer:data.date_of_transfer, area:data.area, status_of_amaldaramad:data.status_of_amaldaramad}
}
    

export const varsPresidingoffier= (data) => {
return {id:data.id, court:data.court, name:data.name, name_eng:data.name_eng, charge_from:data.charge_from, charge_to:data.charge_to}
}
    

export const varsRevenueVillage= (data) => {
return {vname:data.vname, village_code_census:data.village_code_census, vname_eng:data.vname_eng, pname:data.pname, flg_chakbandi:data.flg_chakbandi, flg_survey:data.flg_survey, pargana_code_new:data.pargana_code_new, tehsil_code:data.tehsil_code, district_code:data.district_code}
}
    

export const varsShareUpdate= (data) => {
return {id:data.id, order:data.order, khata_no:data.khata_no, khata_sl_no:data.khata_sl_no, khatedar_name:data.khatedar_name, old_share:data.old_share, new_share:data.new_share, effective_date_of_update:data.effective_date_of_update, status_of_amaldaramad:data.status_of_amaldaramad}
}
    
