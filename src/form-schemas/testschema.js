const testschema = {
    title: "Todo",
    type: "object",
    required: ["title"],
    properties: {
        title: {type: "string", title: "Title", default: "A new task"},
        done: {type: "boolean", title: "Done?", default: false},
        dd:{type: "number", title:"My Form", enum: [1, 2, 3], enumNames: ["one", "two", "three"]}
    }
};
export default testschema;
