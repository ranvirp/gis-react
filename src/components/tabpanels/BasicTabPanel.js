import React from "react"
import {Box, Tab, Tabs} from "@mui/material";
import Typography from "@mui/material/Typography";


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}
export  function BasicTabs({items}) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    {items.map((value1,index)=> {
                       return  <Tab label={value1.label} {...a11yProps(index)} />

                    })
                    }
                </Tabs>
            </Box>
            {items.map((value1,index)=> {

                return <TabPanel value={value} index={index}>
                    {value1.comp}
                </TabPanel>
            })
            }

        </Box>
    );
}