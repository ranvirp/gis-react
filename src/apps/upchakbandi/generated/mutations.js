 
export const updateAmaldaramadMutation = `mutation something($id:String!, $claim:String!, $order:String!, $date_of_order:String!, $transferor:String!, $transferee:String!, $date_of_transfer:String!, $gata:String!, $total_title_area:String!, $transferred_area:String!, $transferred_share:String!, $status_of_amaldaramad:String!){
    update_amaldaramad(id: $id, claim: $claim, order: $order, date_of_order: $date_of_order, transferor: $transferor, transferee: $transferee, date_of_transfer: $date_of_transfer, gata: $gata, total_title_area: $total_title_area, transferred_area: $transferred_area, transferred_share: $transferred_share, status_of_amaldaramad: $status_of_amaldaramad) {
        amaldaramad {id claim order date_of_order transferor transferee date_of_transfer gata total_title_area transferred_area transferred_share status_of_amaldaramad }
      ok
      errormessage
      
    }
    }`
    

    export const createAmaldaramadMutation = `mutation something($claim:String!, $order:String!, $date_of_order:String!, $transferor:String!, $transferee:String!, $date_of_transfer:String!, $gata:String!, $total_title_area:String!, $transferred_area:String!, $transferred_share:String!, $status_of_amaldaramad:String!){
        create_amaldaramad(claim: $claim, order: $order, date_of_order: $date_of_order, transferor: $transferor, transferee: $transferee, date_of_transfer: $date_of_transfer, gata: $gata, total_title_area: $total_title_area, transferred_area: $transferred_area, transferred_share: $transferred_share, status_of_amaldaramad: $status_of_amaldaramad) {
            amaldaramad {id claim order date_of_order transferor transferee date_of_transfer gata total_title_area transferred_area transferred_share status_of_amaldaramad }
          ok
          errormessage

        }
        }`
        


export const updateAuditlogsMutation = `mutation something($id:String!, $object_id:String!, $object_name:String!, $object_value:String!, $object_hash:String!, $type_of_action:String!, $hash_code:String!, $action_by:String!, $action_on:String!){
    update_auditlogs(id: $id, object_id: $object_id, object_name: $object_name, object_value: $object_value, object_hash: $object_hash, type_of_action: $type_of_action, hash_code: $hash_code, action_by: $action_by, action_on: $action_on) {
        auditlogs {id object_id object_name object_value object_hash type_of_action hash_code action_by action_on }
      ok
      errormessage
      
    }
    }`
    

    export const createAuditlogsMutation = `mutation something($object_id:String!, $object_name:String!, $object_value:String!, $object_hash:String!, $type_of_action:String!, $hash_code:String!, $action_by:String!, $action_on:String!){
        create_auditlogs(object_id: $object_id, object_name: $object_name, object_value: $object_value, object_hash: $object_hash, type_of_action: $type_of_action, hash_code: $hash_code, action_by: $action_by, action_on: $action_on) {
            auditlogs {id object_id object_name object_value object_hash type_of_action hash_code action_by action_on }
          ok
          errormessage

        }
        }`
        


export const updateClaimMutation = `mutation something($id:String!, $petition:String!, $claimant:String!, $date_of_claim:String!, $type_of_claim:String!, $latest_order:String!){
    update_claim(id: $id, petition: $petition, claimant: $claimant, date_of_claim: $date_of_claim, type_of_claim: $type_of_claim, latest_order: $latest_order) {
        claim {id petition claimant date_of_claim type_of_claim latest_order }
      ok
      errormessage
      
    }
    }`
    

    export const createClaimMutation = `mutation something($petition:String!, $claimant:String!, $date_of_claim:String!, $type_of_claim:String!, $latest_order:String!){
        create_claim(petition: $petition, claimant: $claimant, date_of_claim: $date_of_claim, type_of_claim: $type_of_claim, latest_order: $latest_order) {
            claim {id petition claimant date_of_claim type_of_claim latest_order }
          ok
          errormessage

        }
        }`
        


export const updateCourtOrderMutation = `mutation something($id:String!, $khatauni:String!, $petition:String!, $date_of_order:String!, $ordering_court:String!, $order_txt:String!, $operative_part:String!, $copy_of_order:String!, $section_of_order:String!, $appeal_or_revision:String!, $remarks:String!){
    update_court_order(id: $id, khatauni: $khatauni, petition: $petition, date_of_order: $date_of_order, ordering_court: $ordering_court, order_txt: $order_txt, operative_part: $operative_part, copy_of_order: $copy_of_order, section_of_order: $section_of_order, appeal_or_revision: $appeal_or_revision, remarks: $remarks) {
        court_order {id khatauni petition date_of_order ordering_court order_txt operative_part copy_of_order section_of_order appeal_or_revision remarks }
      ok
      errormessage
      
    }
    }`
    

    export const createCourtOrderMutation = `mutation something($khatauni:String!, $petition:String!, $date_of_order:String!, $ordering_court:String!, $order_txt:String!, $operative_part:String!, $copy_of_order:String!, $section_of_order:String!, $appeal_or_revision:String!, $remarks:String!){
        create_court_order(khatauni: $khatauni, petition: $petition, date_of_order: $date_of_order, ordering_court: $ordering_court, order_txt: $order_txt, operative_part: $operative_part, copy_of_order: $copy_of_order, section_of_order: $section_of_order, appeal_or_revision: $appeal_or_revision, remarks: $remarks) {
            court_order {id khatauni petition date_of_order ordering_court order_txt operative_part copy_of_order section_of_order appeal_or_revision remarks }
          ok
          errormessage

        }
        }`
        


export const updateExchangeMutation = `mutation something($id:String!, $claim:String!, $partyA:String!, $partyB:String!, $date_of_exchange:String!, $date_of_order:String!, $gataA:String!, $gataB:String!, $areaA:String!, $areaB:String!){
    update_exchange(id: $id, claim: $claim, partyA: $partyA, partyB: $partyB, date_of_exchange: $date_of_exchange, date_of_order: $date_of_order, gataA: $gataA, gataB: $gataB, areaA: $areaA, areaB: $areaB) {
        exchange {id claim partyA partyB date_of_exchange date_of_order gataA gataB areaA areaB }
      ok
      errormessage
      
    }
    }`
    

    export const createExchangeMutation = `mutation something($claim:String!, $partyA:String!, $partyB:String!, $date_of_exchange:String!, $date_of_order:String!, $gataA:String!, $gataB:String!, $areaA:String!, $areaB:String!){
        create_exchange(claim: $claim, partyA: $partyA, partyB: $partyB, date_of_exchange: $date_of_exchange, date_of_order: $date_of_order, gataA: $gataA, gataB: $gataB, areaA: $areaA, areaB: $areaB) {
            exchange {id claim partyA partyB date_of_exchange date_of_order gataA gataB areaA areaB }
          ok
          errormessage

        }
        }`
        


export const updateFarmerMutation = `mutation something($id:String!, $khatauni:String!, $unique_id:String!, $khatedar_code:String!, $mobile_no:String!, $name:String!, $relationship:String!, $relative_name:String!, $year_of_birth:String!, $gender:String!, $majra:String!){
    update_farmer(id: $id, khatauni: $khatauni, unique_id: $unique_id, khatedar_code: $khatedar_code, mobile_no: $mobile_no, name: $name, relationship: $relationship, relative_name: $relative_name, year_of_birth: $year_of_birth, gender: $gender, majra: $majra) {
        farmer {id khatauni unique_id khatedar_code mobile_no name relationship relative_name year_of_birth gender majra }
      ok
      errormessage
      
    }
    }`
    

    export const createFarmerMutation = `mutation something($khatauni:String!, $unique_id:String!, $khatedar_code:String!, $mobile_no:String!, $name:String!, $relationship:String!, $relative_name:String!, $year_of_birth:String!, $gender:String!, $majra:String!){
        create_farmer(khatauni: $khatauni, unique_id: $unique_id, khatedar_code: $khatedar_code, mobile_no: $mobile_no, name: $name, relationship: $relationship, relative_name: $relative_name, year_of_birth: $year_of_birth, gender: $gender, majra: $majra) {
            farmer {id khatauni unique_id khatedar_code mobile_no name relationship relative_name year_of_birth gender majra }
          ok
          errormessage

        }
        }`
        


export const updateGataMutation = `mutation something($id:String!, $khatauni:String!, $gata_no:String!, $area:String!, $khata_no:String!, $bhaumik_year:String!){
    update_gata(id: $id, khatauni_id: $khatauni, gata_no: $gata_no, area: $area, khata_no: $khata_no, bhaumik_year: $bhaumik_year) {
        gata {id khatauni gata_no area khata_no bhaumik_year }
      ok
      errormessage
      
    }
    }`
    

    export const createGataMutation = `mutation something($khatauni:String!, $gata_no:String!, $area:String!, $khata_no:String!, $bhaumik_year:String!){
        create_gata(khatauni: $khatauni, gata_no: $gata_no, area: $area, khata_no: $khata_no, bhaumik_year: $bhaumik_year) {
            gata {id khatauni gata_no area khata_no bhaumik_year }
          ok
          errormessage

        }
        }`
        


export const updateGataOwnerMutation = `mutation something($id:String!, $khatauni:String!, $gata:String!, $owner:String!, $owned_share:String!, $owned_area:String!, $amaldaramad:String!){
    update_gata_owner(id: $id, khatauni: $khatauni, gata: $gata, owner: $owner, owned_share: $owned_share, owned_area: $owned_area, amaldaramad: $amaldaramad) {
        gata_owner {id khatauni gata owner owned_share owned_area amaldaramad }
      ok
      errormessage
      
    }
    }`
    

    export const createGataOwnerMutation = `mutation something($khatauni:String!, $gata:String!, $owner:String!, $owned_share:String!, $owned_area:String!, $amaldaramad:String!){
        create_gata_owner(khatauni: $khatauni, gata: $gata, owner: $owner, owned_share: $owned_share, owned_area: $owned_area, amaldaramad: $amaldaramad) {
            gata_owner {id khatauni gata owner owned_share owned_area amaldaramad }
          ok
          errormessage

        }
        }`
        


export const updateInheritanceMutation = `mutation something($id:String!, $claim:String!, $dead_khatedar:String!, $date_of_death:String!, $legal_heir:String!, $share:String!){
    update_inheritance(id: $id, claim: $claim, dead_khatedar: $dead_khatedar, date_of_death: $date_of_death, legal_heir: $legal_heir, share: $share) {
        inheritance {id claim dead_khatedar date_of_death legal_heir share }
      ok
      errormessage
      
    }
    }`
    

    export const createInheritanceMutation = `mutation something($claim:String!, $dead_khatedar:String!, $date_of_death:String!, $legal_heir:String!, $share:String!){
        create_inheritance(claim: $claim, dead_khatedar: $dead_khatedar, date_of_death: $date_of_death, legal_heir: $legal_heir, share: $share) {
            inheritance {id claim dead_khatedar date_of_death legal_heir share }
          ok
          errormessage

        }
        }`
        


export const updateKhataMutation = `mutation something($id:String!, $khatauni:String!, $khata_no:String!, $category:String!, $area:String!){
    update_khata(id: $id, khatauni: $khatauni, khata_no: $khata_no, category: $category, area: $area) {
        khata {id khatauni khata_no category area }
      ok
      errormessage
      
    }
    }`
    

    export const createKhataMutation = `mutation something($khatauni:String!, $khata_no:String!, $category:String!, $area:String!){
        create_khata(khatauni: $khatauni, khata_no: $khata_no, category: $category, area: $area) {
            khata {id khatauni khata_no category area }
          ok
          errormessage

        }
        }`
        


export const updateKhatauniMutation = `mutation something($id:String!, $village:String!, $fasli_year:String!, $type_of_khatauni:String!, $no_of_khatas:String!, $area:String!){
    update_khatauni(id: $id, village: $village, fasli_year: $fasli_year, type_of_khatauni: $type_of_khatauni, no_of_khatas: $no_of_khatas, area: $area) {
        khatauni {id village fasli_year type_of_khatauni no_of_khatas area }
      ok
      errormessage
      
    }
    }`
    

    export const createKhatauniMutation = `mutation something($village:String!, $fasli_year:String!, $type_of_khatauni:String!, $no_of_khatas:String!, $area:String!){
        create_khatauni(village: $village, fasli_year: $fasli_year, type_of_khatauni: $type_of_khatauni, no_of_khatas: $no_of_khatas, area: $area) {
            khatauni {id village fasli_year type_of_khatauni no_of_khatas area }
          ok
          errormessage

        }
        }`
        


export const updateKhatedarMutation = `mutation something($id:String!, $khatauni:String!, $khata:String!, $khatedar:String!, $slno_in_khata:String!, $share:String!){
    update_khatedar(id: $id, khatauni: $khatauni, khata: $khata, khatedar: $khatedar, slno_in_khata: $slno_in_khata, share: $share) {
        khatedar {id khatauni khata khatedar slno_in_khata share }
      ok
      errormessage
      
    }
    }`
    

    export const createKhatedarMutation = `mutation something($khatauni:String!, $khata:String!, $khatedar:String!, $slno_in_khata:String!, $share:String!){
        create_khatedar(khatauni: $khatauni, khata: $khata, khatedar: $khatedar, slno_in_khata: $slno_in_khata, share: $share) {
            khatedar {id khatauni khata khatedar slno_in_khata share }
          ok
          errormessage

        }
        }`
        


export const updateLandCategoryMutation = `mutation something($code:String!, $category:String!, $category_eng:String!, $name:String!, $name_eng:String!){
    update_land_category(code: $code, category: $category, category_eng: $category_eng, name: $name, name_eng: $name_eng) {
        land_category {code category category_eng name name_eng }
      ok
      errormessage
      
    }
    }`
    

    export const createLandCategoryMutation = `mutation something($category:String!, $category_eng:String!, $name:String!, $name_eng:String!){
        create_land_category(category: $category, category_eng: $category_eng, name: $name, name_eng: $name_eng) {
            land_category {code category category_eng name name_eng }
          ok
          errormessage

        }
        }`
        


export const updateOfficerMutation = `mutation something($id:String!, $name:String!, $name_eng:String!, $mobile_no:String!, $unique_id:String!){
    update_officer(id: $id, name: $name, name_eng: $name_eng, mobile_no: $mobile_no, unique_id: $unique_id) {
        officer {id name name_eng mobile_no unique_id }
      ok
      errormessage
      
    }
    }`
    

    export const createOfficerMutation = `mutation something($name:String!, $name_eng:String!, $mobile_no:String!, $unique_id:String!){
        create_officer(name: $name, name_eng: $name_eng, mobile_no: $mobile_no, unique_id: $unique_id) {
            officer {id name name_eng mobile_no unique_id }
          ok
          errormessage

        }
        }`
        


export const updatePetitionMutation = `mutation something($id:String!, $khatauni:String!, $date_of_petition:String!, $name_of_petitioner:String!, $case_no:String!){
    update_petition(id: $id, khatauni: $khatauni, date_of_petition: $date_of_petition, name_of_petitioner: $name_of_petitioner, case_no: $case_no) {
        petition {id khatauni date_of_petition name_of_petitioner case_no }
      ok
      errormessage
      
    }
    }`
    

    export const createPetitionMutation = `mutation something($khatauni:String!, $date_of_petition:String!, $name_of_petitioner:String!, $case_no:String!){
        create_petition(khatauni: $khatauni, date_of_petition: $date_of_petition, name_of_petitioner: $name_of_petitioner, case_no: $case_no) {
            petition {id khatauni date_of_petition name_of_petitioner case_no }
          ok
          errormessage

        }
        }`
        


export const updatePostingsMutation = `mutation something($id:String!, $officer:String!, $designation:String!, $location_type:String!, $location_code:String!, $charge_from:String!, $charge_to:String!){
    update_postings(id: $id, officer: $officer, designation: $designation, location_type: $location_type, location_code: $location_code, charge_from: $charge_from, charge_to: $charge_to) {
        postings {id officer designation location_type location_code charge_from charge_to }
      ok
      errormessage
      
    }
    }`
    

    export const createPostingsMutation = `mutation something($officer:String!, $designation:String!, $location_type:String!, $location_code:String!, $charge_from:String!, $charge_to:String!){
        create_postings(officer: $officer, designation: $designation, location_type: $location_type, location_code: $location_code, charge_from: $charge_from, charge_to: $charge_to) {
            postings {id officer designation location_type location_code charge_from charge_to }
          ok
          errormessage

        }
        }`
        


export const updateRevenueVillageMutation = `mutation something($vname:String!, $village_code_census:String!, $vname_eng:String!, $pname:String!, $flg_chakbandi:String!, $flg_survey:String!, $pargana_code_new:String!, $tehsil_code:String!, $district_code:String!){
    update_revenue_village(vname: $vname, village_code_census: $village_code_census, vname_eng: $vname_eng, pname: $pname, flg_chakbandi: $flg_chakbandi, flg_survey: $flg_survey, pargana_code_new: $pargana_code_new, tehsil_code: $tehsil_code, district_code: $district_code) {
        revenue_village {vname village_code_census vname_eng pname flg_chakbandi flg_survey pargana_code_new tehsil_code district_code }
      ok
      errormessage
      
    }
    }`
    

    export const createRevenueVillageMutation = `mutation something($vname:String!, $vname_eng:String!, $pname:String!, $flg_chakbandi:String!, $flg_survey:String!, $pargana_code_new:String!, $tehsil_code:String!, $district_code:String!){
        create_revenue_village(vname: $vname, vname_eng: $vname_eng, pname: $pname, flg_chakbandi: $flg_chakbandi, flg_survey: $flg_survey, pargana_code_new: $pargana_code_new, tehsil_code: $tehsil_code, district_code: $district_code) {
            revenue_village {vname village_code_census vname_eng pname flg_chakbandi flg_survey pargana_code_new tehsil_code district_code }
          ok
          errormessage

        }
        }`
        


export const updateTransferMutation = `mutation something($id:String!, $claim:String!, $transferor:String!, $transferee:String!, $date_of_deed:String!, $type_of_deed:String!, $gata:String!, $total_title_area:String!, $sold_area:String!, $sold_share:String!){
    update_transfer(id: $id, claim: $claim, transferor: $transferor, transferee: $transferee, date_of_deed: $date_of_deed, type_of_deed: $type_of_deed, gata: $gata, total_title_area: $total_title_area, sold_area: $sold_area, sold_share: $sold_share) {
        transfer {id claim transferor transferee date_of_deed type_of_deed gata total_title_area sold_area sold_share }
      ok
      errormessage
      
    }
    }`
    

    export const createTransferMutation = `mutation something($claim:String!, $transferor:String!, $transferee:String!, $date_of_deed:String!, $type_of_deed:String!, $gata:String!, $total_title_area:String!, $sold_area:String!, $sold_share:String!){
        create_transfer(claim: $claim, transferor: $transferor, transferee: $transferee, date_of_deed: $date_of_deed, type_of_deed: $type_of_deed, gata: $gata, total_title_area: $total_title_area, sold_area: $sold_area, sold_share: $sold_share) {
            transfer {id claim transferor transferee date_of_deed type_of_deed gata total_title_area sold_area sold_share }
          ok
          errormessage

        }
        }`
        


export const updateTransferBeforeAadharvarshMutation = `mutation something($id:String!, $claim:String!, $transferor:String!, $transferee:String!, $date_of_transfer:String!, $gata:String!, $sold_area:String!, $sold_share:String!){
    update_transfer_before_aadharvarsh(id: $id, claim: $claim, transferor: $transferor, transferee: $transferee, date_of_transfer: $date_of_transfer, gata: $gata, sold_area: $sold_area, sold_share: $sold_share) {
        transfer_before_aadharvarsh {id claim transferor transferee date_of_transfer gata sold_area sold_share }
      ok
      errormessage
      
    }
    }`
    

    export const createTransferBeforeAadharvarshMutation = `mutation something($claim:String!, $transferor:String!, $transferee:String!, $date_of_transfer:String!, $gata:String!, $sold_area:String!, $sold_share:String!){
        create_transfer_before_aadharvarsh(claim: $claim, transferor: $transferor, transferee: $transferee, date_of_transfer: $date_of_transfer, gata: $gata, sold_area: $sold_area, sold_share: $sold_share) {
            transfer_before_aadharvarsh {id claim transferor transferee date_of_transfer gata sold_area sold_share }
          ok
          errormessage

        }
        }`
        

