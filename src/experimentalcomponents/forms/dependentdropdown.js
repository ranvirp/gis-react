import React from 'react';
import {useFormik} from "formik";
import {Select, InputLabel, MenuItem, Box} from "@material-ui/core";
import {FormControl} from "@material-ui/core";

export function Dependentdropdown(props) {
    console.log(props)
    const [state, setState] = React.useState({'fieldA':null})
    const formik = useFormik({
        initialValues: {
            fieldA: 'Thirty',
            fieldB: '',
        },
        //validationSchema: validationSchema,


        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
      const newfunction = (e) => {
          formik.handleChange(e)
          setState({fieldA:e.target.value})
      }
    return (<div>
         <form>
             <Box sx={{ minWidth: 120 }}>
             <FormControl fullWidth>
                 <InputLabel id="demo-simple-select-label" variant="outlined">{props.fieldA_label}</InputLabel>

                 <Select
                     labelId= {props.formid + "fieldA-label"}
                     id={props.fieldA}

                     name={props.fieldA}
                     value={formik.values.fieldA}
                     label={props.fieldA_label}
                     onChange={newfunction}
                 >
                     <em>None</em>
                     {props.fieldAValues.map((value)=>(
                         <MenuItem value={value.value} key={value.key}>{value.label}</MenuItem>
                     ))}
                 </Select>
             </FormControl>
             </Box>
             <Box sx={{ minWidth: 120 }}>
             <FormControl fullWidth>
                 <InputLabel id="demo-simple-select-label">{props.fieldB_label}</InputLabel>

                 <Select

                     labelId= {props.formid + "fieldB-label"}
                     id={props.fieldB}

                     name={props.fieldB}
                     value={formik.values.fieldB}
                     label={props.fieldB_label}
                     onChange={formik.handleChange}
                 >
                     <em>None</em>

                     {props.getFieldBValues(state.fieldA).map((value)=>(
                         <MenuItem value={value.value} key={value.key}>{value.label}</MenuItem>
                     ))}
                 </Select>
             </FormControl>
             </Box>
         </form>
    </div>)
}
