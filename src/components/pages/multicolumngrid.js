import React from 'react';
import {Grid, Box} from "@mui/material";
import {makeStyles} from "@mui/styles";
import useWindowDimensions from "../windowdimensions";

const useStyles = makeStyles({
    root: {
        backgroundColor: "#343434",
        height:"900px",

        margin: "auto"
    },
    root2: {
        backgroundColor: "#121212",

        height:"900px",

        margin: "auto"
    }
});



export default function MultiColumnGrid(props) {
    const { height, width } = useWindowDimensions();

    const noofrows = props.rowheights.length

    var rows = [];
    var colors = ["#655D8A", "#7897AB", "#D885A3"]
    var defaultElem = <div/>
    for (var i = 0; i <  noofrows; i++) {
        const noofcols = props.colwidths[i].length
        for (var j = 0; j <  noofcols; j++) {

            // note: we are adding a key prop here to allow react to uniquely identify each
            // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
            var elem = props.elems[i.toString() + j.toString()]?? defaultElem
            var style = props.styles?.[i.toString() + i.toString()] ?? props.defaultStyle
            var xsvalue = 11.5 * props.colwidths[i][j] / 100
            const elemHeight = (height * props.rowheights[i] / 100).toString() + "px"


            rows.push(<Grid item xs={xsvalue} sx={{


                margin: "5px",
                display: 'flex',
                height: elemHeight ,

                alignItems:"center",
                justifyContent:"center", ...style
            }} key={i.toString() + j.toString()}
            >{React.cloneElement(elem,{sx:{height:elemHeight}})}</Grid>);
        }
    }
    return (

      <Grid container alignItems={"center"} spacing={props.spacing} item xs={12} sx={props.containerStyle}>
          <Grid item xs={props.left}></Grid>
          <Grid item container xs={12-(props.left + props.right) % 12} sx={{ display:'flex'}}>
          {rows}
              </Grid>
          <Grid item xs={props.right} ></Grid>

      </Grid>

    );
}
