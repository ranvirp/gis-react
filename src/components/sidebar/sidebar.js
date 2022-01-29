import React, {useContext, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
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
import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';
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
    const context = props.context
    console.log(context)

    const [state, setState] = useState({comp:null, props:null});

    const handleClick = ( comp, props=null) => {
        // console.log("clicked");
        // console.log(comp);
        setState({comp:comp, props:props});
    };
    var loginOrLogout = <LoginFormSideBarItem handleClick={handleClick}/>
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

                    {
                        context.auth.authenticated == true && <LogoutSideBarItem logout={context.logout} handleClick={handleClick}/>
                    }
                    {
                        context.auth.authenticated != true && <><LoginFormSideBarItem handleClick={handleClick}/>
                            <SignUpFormSideBarItem handleClick={handleClick}/></>
                    }
                    {props.sidebaritems(handleClick)}
                     </List>
                <Divider />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <ErrorBoundary>

                {state.comp!=null && React.cloneElement(state.comp, state.props)}
                </ErrorBoundary>
            </main>
        </div>
    );
}
