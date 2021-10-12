import React from 'react';
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles({
    root: {
        backgroundColor: "red",
        minHeight:"100px",
        margin: "auto"
    },
    root2: {
        backgroundColor: "white",
        minHeight:"400px",
        margin: "auto"
    }
});
export default function MultiColumnGrid(props) {
    const classes = useStyles()
    var rows = [];
    for (var i = 0; i < props.numrows * props.noofcolumns; i++) {
        // note: we are adding a key prop here to allow react to uniquely identify each
        // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
        if (i.toString() in props.elems) {
            rows.push(<Grid item xs={12 / props.noofcolumns} md={12 / props.noofcolumns} key={i}
                            className={classes.root2}>{props.elems[i.toString()]}</Grid>);
        } else {
            rows.push(<Grid item xs={12 / props.noofcolumns} md={12 / props.noofcolumns} key={i}
                            className={classes.root2}></Grid>);
        }
    }
    return (
      <Grid container spacing={props.spacing}>
          {rows}
      </Grid>
    );
}
