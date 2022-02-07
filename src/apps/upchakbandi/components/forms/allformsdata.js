import * as yup from "yup";

export function FormData(defaultValues, yupSchema, mutationQuery)
{
    this.defaultValues = defaultValues
    this.yupSchema = yupSchema
    this.mutationQuery = mutationQuery
}
export const khatauniFormData = FormData({}, yup.object({
    category: yup.string().required(),
    name: yup.string().required()
}).required(), )