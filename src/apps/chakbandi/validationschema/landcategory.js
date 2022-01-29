import * as yup from "yup";
export const schema = yup.object({
    category: yup.string().required(),
    name: yup.string().required()
}).required();