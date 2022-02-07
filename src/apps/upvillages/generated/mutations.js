 
export const updateDistrictMutation = `mutation something($dname:String!, $district_code_census:String!, $dname_eng:String!){
    update_district(dname: $dname, district_code_census: $district_code_census, dname_eng: $dname_eng) {
        district {dname district_code_census dname_eng }
      ok
      errormessage
      
    }
    }`
    

    export const createDistrictMutation = `mutation something($dname:String!, $dname_eng:String!){
        create_district(dname: $dname, dname_eng: $dname_eng) {
            district {dname district_code_census dname_eng }
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
        


export const updateTehsilMutation = `mutation something($district_code:String!, $tname:String!, $tehsil_code_census:String!, $tname_eng:String!){
    update_tehsil(district_code: $district_code, tname: $tname, tehsil_code_census: $tehsil_code_census, tname_eng: $tname_eng) {
        tehsil {district_code tname tehsil_code_census tname_eng }
      ok
      errormessage
      
    }
    }`
    

    export const createTehsilMutation = `mutation something($district_code:String!, $tname:String!, $tname_eng:String!){
        create_tehsil(district_code: $district_code, tname: $tname, tname_eng: $tname_eng) {
            tehsil {district_code tname tehsil_code_census tname_eng }
          ok
          errormessage

        }
        }`
        

