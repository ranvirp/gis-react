export async function postGraphSqlQuery(url,query,variables)  {

    // fetch(graphqlurl(querytehsil("'" + district_code + "'")))
   // console.log(query, variables)
    console.log(url)


    let   headers = {
           'Content-Type': 'application/json',
           //'Authorization' : 'JWT ' + localStorage.getItem('token')
       }
   let token = localStorage.getItem('token')
    //console.log(token, "token")
    //console.log(token !== "null")
    if (token!="null"){
        headers.Authorization = 'JWT ' + token
    }
  //console.log(headers)
    const res = await  fetch(url, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify({
            query: query,
            variables:variables

        }),
    })
        return res.json()
        
}
