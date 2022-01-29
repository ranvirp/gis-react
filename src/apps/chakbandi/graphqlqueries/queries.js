export const landCategoryMutation = `
mutation something($category:String!,$name:String!, $name_eng:String!){
    update_land_category(category: $cat, name:$name, name_eng:$name_eng) {
        land_category {
            name
            name_eng
            category
           }
      ok
      
    }
    }
    `