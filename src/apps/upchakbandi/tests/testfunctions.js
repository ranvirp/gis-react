 const dropDownPromise = new Promise(function(myResolve, myReject) {
        myResolve([
                {key: '1', value: '1', label: 'Here'},
                {key: '2', value: '2', label: 'THere'}

            ]
        )
    }
)
 export const testDropdowndata = () => {
    return dropDownPromise
 }
export const testKhatas = () => {
    return [1,2,3,10].map ((value)=>{return {key:value, value:value, label:value};})
}