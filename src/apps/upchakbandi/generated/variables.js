 
export const varsAmaldaramad= (data) => {
return {id:data.id, claim:data.claim, order:data.order, date_of_order:data.date_of_order, transferor:data.transferor, transferee:data.transferee, date_of_transfer:data.date_of_transfer, gata:data.gata, total_title_area:data.total_title_area, transferred_area:data.transferred_area, transferred_share:data.transferred_share, status_of_amaldaramad:data.status_of_amaldaramad}
}
    

export const varsAuditlogs= (data) => {
return {id:data.id, object_id:data.object_id, object_name:data.object_name, object_value:data.object_value, object_hash:data.object_hash, type_of_action:data.type_of_action, hash_code:data.hash_code, action_by:data.action_by, action_on:data.action_on}
}
    

export const varsClaim= (data) => {
return {id:data.id, petition:data.petition, claimant:data.claimant, date_of_claim:data.date_of_claim, type_of_claim:data.type_of_claim, latest_order:data.latest_order}
}
    

export const varsCourtOrder= (data) => {
return {id:data.id, khatauni:data.khatauni, petition:data.petition, date_of_order:data.date_of_order, ordering_court:data.ordering_court, order_txt:data.order_txt, operative_part:data.operative_part, copy_of_order:data.copy_of_order, section_of_order:data.section_of_order, appeal_or_revision:data.appeal_or_revision, remarks:data.remarks}
}
    

export const varsExchange= (data) => {
return {id:data.id, claim:data.claim, partyA:data.partyA, partyB:data.partyB, date_of_exchange:data.date_of_exchange, date_of_order:data.date_of_order, gataA:data.gataA, gataB:data.gataB, areaA:data.areaA, areaB:data.areaB}
}
    

export const varsFarmer= (data) => {
return {id:data.id, khatauni:data.khatauni, unique_id:data.unique_id, khatedar_code:data.khatedar_code, mobile_no:data.mobile_no, name:data.name, relationship:data.relationship, relative_name:data.relative_name, year_of_birth:data.year_of_birth, gender:data.gender, majra:data.majra}
}
    

export const varsGata= (data) => {
return {id:data.id, khatauni:data.khatauni, gata_no:data.gata_no, area:data.area, khata_no:data.khata_no, bhaumik_year:data.bhaumik_year}
}
    

export const varsGataOwner= (data) => {
return {id:data.id, khatauni:data.khatauni, gata:data.gata, owner:data.owner, owned_share:data.owned_share, owned_area:data.owned_area, amaldaramad:data.amaldaramad}
}
    

export const varsInheritance= (data) => {
return {id:data.id, claim:data.claim, dead_khatedar:data.dead_khatedar, date_of_death:data.date_of_death, legal_heir:data.legal_heir, share:data.share}
}
    

export const varsKhata= (data) => {
return {id:data.id, khatauni:data.khatauni, khata_no:data.khata_no, category:data.category, area:data.area}
}
    

export const varsKhatauni= (data) => {
return {id:data.id, village:data.village, fasli_year:data.fasli_year, type_of_khatauni:data.type_of_khatauni, no_of_khatas:data.no_of_khatas, area:data.area}
}
    

export const varsKhatedar= (data) => {
return {id:data.id, khatauni:data.khatauni, khata:data.khata, khatedar:data.khatedar, slno_in_khata:data.slno_in_khata, share:data.share}
}
    

export const varsLandCategory= (data) => {
return {code:data.code, category:data.category, category_eng:data.category_eng, name:data.name, name_eng:data.name_eng}
}
    

export const varsOfficer= (data) => {
return {id:data.id, name:data.name, name_eng:data.name_eng, mobile_no:data.mobile_no, unique_id:data.unique_id}
}
    

export const varsPetition= (data) => {
return {id:data.id, khatauni:data.khatauni, date_of_petition:data.date_of_petition, name_of_petitioner:data.name_of_petitioner, case_no:data.case_no}
}
    

export const varsPostings= (data) => {
return {id:data.id, officer:data.officer, designation:data.designation, location_type:data.location_type, location_code:data.location_code, charge_from:data.charge_from, charge_to:data.charge_to}
}
    

export const varsRevenueVillage= (data) => {
return {vname:data.vname, village_code_census:data.village_code_census, vname_eng:data.vname_eng, pname:data.pname, flg_chakbandi:data.flg_chakbandi, flg_survey:data.flg_survey, pargana_code_new:data.pargana_code_new, tehsil_code:data.tehsil_code, district_code:data.district_code}
}
    

export const varsTransfer= (data) => {
return {id:data.id, claim:data.claim, transferor:data.transferor, transferee:data.transferee, date_of_deed:data.date_of_deed, type_of_deed:data.type_of_deed, gata:data.gata, total_title_area:data.total_title_area, sold_area:data.sold_area, sold_share:data.sold_share}
}
    

export const varsTransferBeforeAadharvarsh= (data) => {
return {id:data.id, claim:data.claim, transferor:data.transferor, transferee:data.transferee, date_of_transfer:data.date_of_transfer, gata:data.gata, sold_area:data.sold_area, sold_share:data.sold_share}
}
    
