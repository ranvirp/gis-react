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

    const [state, setState] = useState({comp:props.mainc, props:null});
    const [context, setContext] = useContext(myContext)

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
console.log(loginOrLogout)
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
