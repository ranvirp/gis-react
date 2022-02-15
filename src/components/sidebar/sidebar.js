import React, {useContext, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import LoginFormSideBarItem from "./sidebar_items/LoginFormSideBarItem";
import DistrictList from "../../reports/districts";
import MainComponent from "../../Village"
import SignUpFormSideBarItem from "./sidebar_items/SignUpFormSideBarItem";
import LogoutSideBarItem from "./sidebar_items/LogoutSideBarItem";

import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import Typography from "@mui/material/Typography";
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
//TODO: replace this with context or something
export var globalState = {}
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
    globalState.handleClick = handleClick

    var loginOrLogout = <LoginFormSideBarItem handleClick={handleClick}/>
    //loginOrLogout += <SignUpFormSideBarItem handleClick={handleClick}/>
    if (context.authenticated == 'true') {
        loginOrLogout = <LogoutSideBarItem handleClick={handleClick}/>
    }
    //console.log(loginOrLogout)
    var list = []
    var dict1 = props.sidebaritems(handleClick)
    for (var key of Object.keys(dict1)) {
        list.push( <Typography key={key} variant="h7">{key}</Typography>)
        list.push(<Divider/>)
        list = list.concat(dict1[key])
    }
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
                <Typography variant="h6">MENU</Typography>
                <Divider />
                <List>
                    {list}
                    <Divider />

                    {
                        context.auth.authenticated == true && <LogoutSideBarItem logout={context.logout} handleClick={handleClick}/>
                    }
                    {
                        context.auth.authenticated != true && <><LoginFormSideBarItem handleClick={handleClick}/>
                            <SignUpFormSideBarItem handleClick={handleClick}/></>
                    }

                     </List>
                <Divider />
            </Drawer>
            <ErrorBoundary>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                

                {state.comp!=null && React.cloneElement(state.comp, state.props)}

            </main>
            </ErrorBoundary>
        </div>
    );
}
