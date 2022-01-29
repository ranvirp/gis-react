export function Dropdownschema(values) {
        console.log(values)

    var fieldValues = values.map((x)=>{return x['value']})
    var fieldLabels = values.map((x)=>{return x['label']})

    return  {
        title: "Todo",
        type: "object",
        required: ["title"],
        properties: {

        dd:{type: "string", title:'label', enum: fieldValues, enumNames: fieldLabels}
    }
    };
}
