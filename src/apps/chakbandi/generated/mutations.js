 
export const updateAuditlogsMutation = `mutation something($id:String!, $object_id:String!, $object_name:String!, $object_value:String!, $object_hash:String!, $type_of_action:String!, $hash_code:String!, $action_by:String!, $action_on:String!){
    update_auditlogs(id: $id, object_id: $object_id, object_name: $object_name, object_value: $object_value, object_hash: $object_hash, type_of_action: $type_of_action, hash_code: $hash_code, action_by: $action_by, action_on: $action_on) {
        auditlogs {
            id
object_id
object_name
object_value
object_hash
type_of_action
hash_code
action_by
action_on
           }
      ok
      
    }
    }`
    

    export const createAuditlogsMutation = `mutation something($object_id:String!, $object_name:String!, $object_value:String!, $object_hash:String!, $type_of_action:String!, $hash_code:String!, $action_by:String!, $action_on:String!){
        create_auditlogs(object_id: $object_id, object_name: $object_name, object_value: $object_value, object_hash: $object_hash, type_of_action: $type_of_action, hash_code: $hash_code, action_by: $action_by, action_on: $action_on) {
            auditlogs {
                id
object_id
object_name
object_value
object_hash
type_of_action
hash_code
action_by
action_on
               }
          ok

        }
        }`
        


export const updateCourtMutation = `mutation something($id:String!, $court_type:String!, $location:String!, $location_eng:String!){
    update_court(id: $id, court_type: $court_type, location: $location, location_eng: $location_eng) {
        court {
            id
court_type
location
location_eng
           }
      ok
      
    }
    }`
    

    export const createCourtMutation = `mutation something($court_type:String!, $location:String!, $location_eng:String!){
        create_court(court_type: $court_type, location: $location, location_eng: $location_eng) {
            court {
                id
court_type
location
location_eng
               }
          ok

        }
        }`
        


export const updateCourtOrderMutation = `mutation something($id:String!, $khatauni:String!, $date_of_order:String!, $ordering_court:String!, $ordering_presiding_officer:String!, $order_txt:String!, $operative_part:String!, $copy_of_order:String!, $section_of_order:String!, $cause_of_action_type:String!, $cause_of_action_id:String!, $appeal_or_revision:String!, $status_of_amaldaramad:String!, $revision_appeal:String!, $remarks:String!){
    update_court_order(id: $id, khatauni: $khatauni, date_of_order: $date_of_order, ordering_court: $ordering_court, ordering_presiding_officer: $ordering_presiding_officer, order_txt: $order_txt, operative_part: $operative_part, copy_of_order: $copy_of_order, section_of_order: $section_of_order, cause_of_action_type: $cause_of_action_type, cause_of_action_id: $cause_of_action_id, appeal_or_revision: $appeal_or_revision, status_of_amaldaramad: $status_of_amaldaramad, revision_appeal: $revision_appeal, remarks: $remarks) {
        court_order {
            id
khatauni
date_of_order
ordering_court
ordering_presiding_officer
order_txt
operative_part
copy_of_order
section_of_order
cause_of_action_type
cause_of_action_id
appeal_or_revision
status_of_amaldaramad
revision_appeal
remarks
           }
      ok
      
    }
    }`
    

    export const createCourtOrderMutation = `mutation something($khatauni:String!, $date_of_order:String!, $ordering_court:String!, $ordering_presiding_officer:String!, $order_txt:String!, $operative_part:String!, $copy_of_order:String!, $section_of_order:String!, $cause_of_action_type:String!, $cause_of_action_id:String!, $appeal_or_revision:String!, $status_of_amaldaramad:String!, $revision_appeal:String!, $remarks:String!){
        create_court_order(khatauni: $khatauni, date_of_order: $date_of_order, ordering_court: $ordering_court, ordering_presiding_officer: $ordering_presiding_officer, order_txt: $order_txt, operative_part: $operative_part, copy_of_order: $copy_of_order, section_of_order: $section_of_order, cause_of_action_type: $cause_of_action_type, cause_of_action_id: $cause_of_action_id, appeal_or_revision: $appeal_or_revision, status_of_amaldaramad: $status_of_amaldaramad, revision_appeal: $revision_appeal, remarks: $remarks) {
            court_order {
                id
khatauni
date_of_order
ordering_court
ordering_presiding_officer
order_txt
operative_part
copy_of_order
section_of_order
cause_of_action_type
cause_of_action_id
appeal_or_revision
status_of_amaldaramad
revision_appeal
remarks
               }
          ok

        }
        }`
        


export const updateFarmerMutation = `mutation something($id:String!, $village:String!, $aadhar_no:String!, $mobile_no:String!, $name:String!, $relationship:String!, $relative_name:String!, $year_of_birth:String!, $gender:String!, $majra:String!){
    update_farmer(id: $id, village: $village, aadhar_no: $aadhar_no, mobile_no: $mobile_no, name: $name, relationship: $relationship, relative_name: $relative_name, year_of_birth: $year_of_birth, gender: $gender, majra: $majra) {
        farmer {
            id
village
aadhar_no
mobile_no
name
relationship
relative_name
year_of_birth
gender
majra
           }
      ok
      
    }
    }`
    

    export const createFarmerMutation = `mutation something($village:String!, $aadhar_no:String!, $mobile_no:String!, $name:String!, $relationship:String!, $relative_name:String!, $year_of_birth:String!, $gender:String!, $majra:String!){
        create_farmer(village: $village, aadhar_no: $aadhar_no, mobile_no: $mobile_no, name: $name, relationship: $relationship, relative_name: $relative_name, year_of_birth: $year_of_birth, gender: $gender, majra: $majra) {
            farmer {
                id
village
aadhar_no
mobile_no
name
relationship
relative_name
year_of_birth
gender
majra
               }
          ok

        }
        }`
        


export const updateGataMutation = `mutation something($id:String!, $khatauni:String!, $gata_no:String!, $gata_no_txt:String!, $area:String!, $khata_no:String!, $fasli_year:String!, $land_category:String!, $remarks:String!){
    update_gata(id: $id, khatauni: $khatauni, gata_no: $gata_no, gata_no_txt: $gata_no_txt, area: $area, khata_no: $khata_no, fasli_year: $fasli_year, land_category: $land_category, remarks: $remarks) {
        gata {
            id
khatauni
gata_no
gata_no_txt
area
khata_no
fasli_year
land_category
remarks
           }
      ok
      
    }
    }`
    

    export const createGataMutation = `mutation something($khatauni:String!, $gata_no:String!, $gata_no_txt:String!, $area:String!, $khata_no:String!, $fasli_year:String!, $land_category:String!, $remarks:String!){
        create_gata(khatauni: $khatauni, gata_no: $gata_no, gata_no_txt: $gata_no_txt, area: $area, khata_no: $khata_no, fasli_year: $fasli_year, land_category: $land_category, remarks: $remarks) {
            gata {
                id
khatauni
gata_no
gata_no_txt
area
khata_no
fasli_year
land_category
remarks
               }
          ok

        }
        }`
        


export const updateGataDeltaMutation = `mutation something($id:String!, $order:String!, $type_of_correction:String!, $gata_no:String!, $gata_no_txt:String!, $area:String!, $khata_no:String!, $bhaumik_year:String!, $land_category:String!, $remarks:String!){
    update_gata_delta(id: $id, order: $order, type_of_correction: $type_of_correction, gata_no: $gata_no, gata_no_txt: $gata_no_txt, area: $area, khata_no: $khata_no, bhaumik_year: $bhaumik_year, land_category: $land_category, remarks: $remarks) {
        gata_delta {
            id
order
type_of_correction
gata_no
gata_no_txt
area
khata_no
bhaumik_year
land_category
remarks
           }
      ok
      
    }
    }`
    

    export const createGataDeltaMutation = `mutation something($order:String!, $type_of_correction:String!, $gata_no:String!, $gata_no_txt:String!, $area:String!, $khata_no:String!, $bhaumik_year:String!, $land_category:String!, $remarks:String!){
        create_gata_delta(order: $order, type_of_correction: $type_of_correction, gata_no: $gata_no, gata_no_txt: $gata_no_txt, area: $area, khata_no: $khata_no, bhaumik_year: $bhaumik_year, land_category: $land_category, remarks: $remarks) {
            gata_delta {
                id
order
type_of_correction
gata_no
gata_no_txt
area
khata_no
bhaumik_year
land_category
remarks
               }
          ok

        }
        }`
        


export const updateKhataMutation = `mutation something($id:String!, $khata_no:String!, $village:String!, $category:String!, $area:String!){
    update_khata(id: $id, khata_no: $khata_no, village: $village, category: $category, area: $area) {
        khata {
            id
khata_no
village
category
area
           }
      ok
      
    }
    }`
    

    export const createKhataMutation = `mutation something($khata_no:String!, $village:String!, $category:String!, $area:String!){
        create_khata(khata_no: $khata_no, village: $village, category: $category, area: $area) {
            khata {
                id
khata_no
village
category
area
               }
          ok

        }
        }`
        


export const updateKhataDeltaMutation = `mutation something($id:String!, $order:String!, $type_of_correction:String!, $khata_no:String!, $khatedar_name:String!, $farmer_code:String!, $order_in_khatauni:String!, $share:String!, $remarks:String!){
    update_khata_delta(id: $id, order: $order, type_of_correction: $type_of_correction, khata_no: $khata_no, khatedar_name: $khatedar_name, farmer_code: $farmer_code, order_in_khatauni: $order_in_khatauni, share: $share, remarks: $remarks) {
        khata_delta {
            id
order
type_of_correction
khata_no
khatedar_name
farmer_code
order_in_khatauni
share
remarks
           }
      ok
      
    }
    }`
    

    export const createKhataDeltaMutation = `mutation something($order:String!, $type_of_correction:String!, $khata_no:String!, $khatedar_name:String!, $farmer_code:String!, $order_in_khatauni:String!, $share:String!, $remarks:String!){
        create_khata_delta(order: $order, type_of_correction: $type_of_correction, khata_no: $khata_no, khatedar_name: $khatedar_name, farmer_code: $farmer_code, order_in_khatauni: $order_in_khatauni, share: $share, remarks: $remarks) {
            khata_delta {
                id
order
type_of_correction
khata_no
khatedar_name
farmer_code
order_in_khatauni
share
remarks
               }
          ok

        }
        }`
        


export const updateKhatauniMutation = `mutation something($id:String!, $village:String!, $fasli_year:String!, $type_of_khatauni:String!, $no_of_khatas:String!, $area:String!){
    update_khatauni(id: $id, village: $village, fasli_year: $fasli_year, type_of_khatauni: $type_of_khatauni, no_of_khatas: $no_of_khatas, area: $area) {
        khatauni {
            id
village
fasli_year
type_of_khatauni
no_of_khatas
area
           }
      ok
      
    }
    }`
    

    export const createKhatauniMutation = `mutation something($village:String!, $fasli_year:String!, $type_of_khatauni:String!, $no_of_khatas:String!, $area:String!){
        create_khatauni(village: $village, fasli_year: $fasli_year, type_of_khatauni: $type_of_khatauni, no_of_khatas: $no_of_khatas, area: $area) {
            khatauni {
                id
village
fasli_year
type_of_khatauni
no_of_khatas
area
               }
          ok

        }
        }`
        


export const updateKhatedarMutation = `mutation something($id:String!, $khatauni:String!, $khata_no:String!, $farmer:String!, $slno_in_khata:String!, $share:String!, $remarks:String!){
    update_khatedar(id: $id, khatauni: $khatauni, khata_no: $khata_no, farmer: $farmer, slno_in_khata: $slno_in_khata, share: $share, remarks: $remarks) {
        khatedar {
            id
khatauni
khata_no
farmer
slno_in_khata
share
remarks
           }
      ok
      
    }
    }`
    

    export const createKhatedarMutation = `mutation something($khatauni:String!, $khata_no:String!, $farmer:String!, $slno_in_khata:String!, $share:String!, $remarks:String!){
        create_khatedar(khatauni: $khatauni, khata_no: $khata_no, farmer: $farmer, slno_in_khata: $slno_in_khata, share: $share, remarks: $remarks) {
            khatedar {
                id
khatauni
khata_no
farmer
slno_in_khata
share
remarks
               }
          ok

        }
        }`
        


export const updateLandCategoryMutation = `mutation something($id:String!, $category:String!, $name:String!, $name_eng:String!){
    update_land_category(id: $id, category: $category, name: $name, name_eng: $name_eng) {
        land_category {
            id
category
name
name_eng
           }
      ok
      
    }
    }`
    

    export const createLandCategoryMutation = `mutation something($category:String!, $name:String!, $name_eng:String!){
        create_land_category(category: $category, name: $name, name_eng: $name_eng) {
            land_category {
                id
category
name
name_eng
               }
          ok

        }
        }`
        


export const updateLandTransferMutation = `mutation something($id:String!, $order:String!, $transferor:String!, $transferee_khata_no:String!, $transferee_order_in_khata:String!, $transferee_name:String!, $reason:String!, $date_of_transfer:String!, $area:String!, $status_of_amaldaramad:String!){
    update_land_transfer(id: $id, order: $order, transferor: $transferor, transferee_khata_no: $transferee_khata_no, transferee_order_in_khata: $transferee_order_in_khata, transferee_name: $transferee_name, reason: $reason, date_of_transfer: $date_of_transfer, area: $area, status_of_amaldaramad: $status_of_amaldaramad) {
        land_transfer {
            id
order
transferor
transferee_khata_no
transferee_order_in_khata
transferee_name
reason
date_of_transfer
area
status_of_amaldaramad
           }
      ok
      
    }
    }`
    

    export const createLandTransferMutation = `mutation something($order:String!, $transferor:String!, $transferee_khata_no:String!, $transferee_order_in_khata:String!, $transferee_name:String!, $reason:String!, $date_of_transfer:String!, $area:String!, $status_of_amaldaramad:String!){
        create_land_transfer(order: $order, transferor: $transferor, transferee_khata_no: $transferee_khata_no, transferee_order_in_khata: $transferee_order_in_khata, transferee_name: $transferee_name, reason: $reason, date_of_transfer: $date_of_transfer, area: $area, status_of_amaldaramad: $status_of_amaldaramad) {
            land_transfer {
                id
order
transferor
transferee_khata_no
transferee_order_in_khata
transferee_name
reason
date_of_transfer
area
status_of_amaldaramad
               }
          ok

        }
        }`
        


export const updatePresidingoffierMutation = `mutation something($id:String!, $court:String!, $name:String!, $name_eng:String!, $charge_from:String!, $charge_to:String!){
    update_presidingoffier(id: $id, court: $court, name: $name, name_eng: $name_eng, charge_from: $charge_from, charge_to: $charge_to) {
        presidingoffier {
            id
court
name
name_eng
charge_from
charge_to
           }
      ok
      
    }
    }`
    

    export const createPresidingoffierMutation = `mutation something($court:String!, $name:String!, $name_eng:String!, $charge_from:String!, $charge_to:String!){
        create_presidingoffier(court: $court, name: $name, name_eng: $name_eng, charge_from: $charge_from, charge_to: $charge_to) {
            presidingoffier {
                id
court
name
name_eng
charge_from
charge_to
               }
          ok

        }
        }`
        


export const updateRevenueVillageMutation = `mutation something($vname:String!, $village_code_census:String!, $vname_eng:String!, $pname:String!, $flg_chakbandi:String!, $flg_survey:String!, $pargana_code_new:String!, $tehsil_code:String!, $district_code:String!){
    update_revenue_village(vname: $vname, village_code_census: $village_code_census, vname_eng: $vname_eng, pname: $pname, flg_chakbandi: $flg_chakbandi, flg_survey: $flg_survey, pargana_code_new: $pargana_code_new, tehsil_code: $tehsil_code, district_code: $district_code) {
        revenue_village {
            vname
village_code_census
vname_eng
pname
flg_chakbandi
flg_survey
pargana_code_new
tehsil_code
district_code
           }
      ok
      
    }
    }`
    

    export const createRevenueVillageMutation = `mutation something($vname:String!, $vname_eng:String!, $pname:String!, $flg_chakbandi:String!, $flg_survey:String!, $pargana_code_new:String!, $tehsil_code:String!, $district_code:String!){
        create_revenue_village(vname: $vname, vname_eng: $vname_eng, pname: $pname, flg_chakbandi: $flg_chakbandi, flg_survey: $flg_survey, pargana_code_new: $pargana_code_new, tehsil_code: $tehsil_code, district_code: $district_code) {
            revenue_village {
                vname
village_code_census
vname_eng
pname
flg_chakbandi
flg_survey
pargana_code_new
tehsil_code
district_code
               }
          ok

        }
        }`
        


export const updateShareUpdateMutation = `mutation something($id:String!, $order:String!, $khata_no:String!, $khata_sl_no:String!, $khatedar_name:String!, $old_share:String!, $new_share:String!, $effective_date_of_update:String!, $status_of_amaldaramad:String!){
    update_share_update(id: $id, order: $order, khata_no: $khata_no, khata_sl_no: $khata_sl_no, khatedar_name: $khatedar_name, old_share: $old_share, new_share: $new_share, effective_date_of_update: $effective_date_of_update, status_of_amaldaramad: $status_of_amaldaramad) {
        share_update {
            id
order
khata_no
khata_sl_no
khatedar_name
old_share
new_share
effective_date_of_update
status_of_amaldaramad
           }
      ok
      
    }
    }`
    

    export const createShareUpdateMutation = `mutation something($order:String!, $khata_no:String!, $khata_sl_no:String!, $khatedar_name:String!, $old_share:String!, $new_share:String!, $effective_date_of_update:String!, $status_of_amaldaramad:String!){
        create_share_update(order: $order, khata_no: $khata_no, khata_sl_no: $khata_sl_no, khatedar_name: $khatedar_name, old_share: $old_share, new_share: $new_share, effective_date_of_update: $effective_date_of_update, status_of_amaldaramad: $status_of_amaldaramad) {
            share_update {
                id
order
khata_no
khata_sl_no
khatedar_name
old_share
new_share
effective_date_of_update
status_of_amaldaramad
               }
          ok

        }
        }`
        

