import React, {useContext, useState} from 'react';
import { makeStyles } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';

import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import DistrictSideBarItem from "./sidebar_items/DistrictSideBarItem";
import VillageSideBarItem from "./sidebar_items/VillageSideBarItem";
import LoginFormSideBarItem from "./sidebar_items/LoginFormSideBarItem";
import DistrictList from "../../reports/districts";
import MainComponent from "../../Village"
import SignUpFormSideBarItem from "./sidebar_items/SignUpFormSideBarItem";
import LogoutSideBarItem from "./sidebar_items/LogoutSideBarItem";
import {myContext} from "../App";
import LeafletSideBarItem from "./sidebar_items/LeafletSideBarItem";
import SideBarItem from "./sidebar_items/SideBarItem";
import LeafletMap from "../leaflet/components/leafletmap";
import GeoJSONFromURL, {addLayer} from "../leaflet/components/geojsonurltoleaflet";
import DistVillForm from "../../experimentalcomponents/forms/distvill";
import SchemaFormSideBarItem from "./sidebar_items/SchemaFormSidebarItem";
import testschema from "../../form-schemas/testschema";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',

    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        zIndex:100,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

export default function PermanentDrawerLeft(props) {
    const classes = useStyles();
    const [context, setContext] = useContext(myContext)

    const [state, setState] = useState({comp:props.mainc, props:null});

    const handleClick = ( comp, props=null) => {
        // console.log("clicked");
        // console.log(comp);
         setState({comp:comp, props:props});
    };
    let loginOrLogout = <LoginFormSideBarItem handleClick={handleClick}/>
    //loginOrLogout += <SignUpFormSideBarItem handleClick={handleClick}/>
if (context.authenticated == 'true') {
    loginOrLogout = <LogoutSideBarItem handleClick={handleClick}/>
}
//console.log(loginOrLogout)
    return (
        <div className={classes.root}>
            <CssBaseline />

            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} />
                <Divider />
                <List>
                    <DistrictSideBarItem handleClick={handleClick}/>
                    <VillageSideBarItem handleClick={handleClick}/>
                    {
                        context.authenticated == 'true' && <LogoutSideBarItem handleClick={handleClick}/>
                    }
                    {
                        context.authenticated != 'true' && <><LoginFormSideBarItem handleClick={handleClick}/>
                            <SignUpFormSideBarItem handleClick={handleClick}/></>
                    }

                    <LeafletSideBarItem handleClick={handleClick}/>
                    <SideBarItem comp={{url:'http://localhost:8080/aligarh/acs/ac_72.geojson'}} title={'Map1'} key={'map1'}
                                 handleClick={addLayer}/>
                    <SideBarItem comp={{url:'/aligarh-centroids.geojson'}} title={'Revenue Villages'} key={'villmap'}
                                 handleClick={addLayer}/>
                    <SideBarItem comp={{url:'http://localhost:8080/aligarh/booths/district_n_Aligarh.geojson'}} title={'Booth Maps'} key={'boothmap'}
                                 handleClick={addLayer}/>
                    <SideBarItem comp={<DistVillForm/>} key={'form1'} title='DistVillForm' handleClick={handleClick}/>
                    <SchemaFormSideBarItem schema={testschema} key={'haha'} handleClick={handleClick}/>
                </List>
                <Divider />
                <List>

                    {['All mail', 'Trash', 'Spam'].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {React.cloneElement(state.comp, state.props)}
          </main>
        </div>
    );
}
