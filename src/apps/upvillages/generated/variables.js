 
export const varsDistrict= (data) => {
return {dname:data.dname, district_code_census:data.district_code_census, dname_eng:data.dname_eng}
}
    

export const varsLandCategory= (data) => {
return {code:data.code, category:data.category, category_eng:data.category_eng, name:data.name, name_eng:data.name_eng}
}
    

export const varsRevenueVillage= (data) => {
return {vname:data.vname, village_code_census:data.village_code_census, vname_eng:data.vname_eng, pname:data.pname, flg_chakbandi:data.flg_chakbandi, flg_survey:data.flg_survey, pargana_code_new:data.pargana_code_new, tehsil_code:data.tehsil_code, district_code:data.district_code}
}
    

export const varsTehsil= (data) => {
return {district_code:data.district_code, tname:data.tname, tehsil_code_census:data.tehsil_code_census, tname_eng:data.tname_eng}
}
    
