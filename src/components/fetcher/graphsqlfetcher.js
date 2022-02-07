export async function postGraphSqlQuery(url,query,variables)  {

    // fetch(graphqlurl(querytehsil("'" + district_code + "'")))
    console.log(query, variables)
   var headers = {
       'Content-Type': 'application/json',
   }
   if ((localStorage.getItem('authenticated') == 'true') && (localStorage.getItem('token') != null))
   {
       headers = {
           'Content-Type': 'application/json',
           'Authorization' : 'JWT ' + localStorage.getItem('token')
       }
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
