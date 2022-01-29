import React from "react";
import {KhatauniForm} from "../apps/chakbandi/components/forms/khatauni";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import Typography from "@mui/material/Typography";
import {Grid} from "@mui/material";
export function ComponentTester(props)
{
    return (
        <ErrorBoundary>
            <Grid sx={{height:"300px", backgroundColor:"green",  lineHeight: "300px"
                }}>
            <Typography variant={"h5" } sx={{ display:'inline-block', verticalAlign: "middle",backgroundColor:"#5fffff"}}>
                Hello my deara friendou can center a div within a div with Flexbox. Flexbox is a great method since it’s responsive and doesn’t require margin calculations — but there are a few extra steps to keep in mind.

                To center a div horizontally and vertically with Flexbox, you need to set the height of the HTML and body to 100%. You can set the height of the parent container to 100% as well, if you'd like it to take up the whole viewport even if it was resized. For this demo, I'll set the parent container to a specific height instead.
            </Typography>
            </Grid>
        </ErrorBoundary>
    )
}