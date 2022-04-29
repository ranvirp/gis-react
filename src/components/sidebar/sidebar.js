import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import {createTheme, useTheme} from '@mui/material/styles';
import {List,Divider, Typography, Grid } from '@mui/material';

import LoginFormSideBarItem from "./sidebar_items/LoginFormSideBarItem";

import SignUpFormSideBarItem from "./sidebar_items/SignUpFormSideBarItem";
import LogoutSideBarItem from "./sidebar_items/LogoutSideBarItem";

import ErrorBoundary from "antd/es/alert/ErrorBoundary";
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
        zIndex:theme.zIndex.drawer,
    },
    // necessary for content to be below app bar
    toolbar:  theme.mixins.toolbar,
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
    const user = props.user


    const [state, setState] = useState({comp:null, props:null});

    const handleClick = ( comp, myprops=null) => {
        // console.log("clicked");
        // console.log(comp);
        /*
        const fn1 = ()=> {
            setState({comp: comp, props: myprops});
        }
        console.log("now setting fn on ", props.fn, fn1)
        props.fn2(Date.now()/1000)
        props.fn(fn1)

         */
        props.fn({comp:comp, props:myprops})

    };
    globalState.handleClick = handleClick

    var loginOrLogout = <LoginFormSideBarItem handleClick={handleClick}/>
    //loginOrLogout += <SignUpFormSideBarItem handleClick={handleClick}/>
    if (user.authenticated == 'true') {
        loginOrLogout = <LogoutSideBarItem handleClick={handleClick}/>
    }
    //console.log(loginOrLogout)
    var list = []
    var dict1 = props.sidebaritems(handleClick)
    for (var key of Object.keys(dict1)) {
        list.push( <Typography key={key} variant="h6">{key}</Typography>)
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
                <Typography component={"span"} variant="h6">MENU</Typography>
                <Divider />
                <List>
                    {list}
                    <Divider />

                    {
                        user.authenticated == true && <LogoutSideBarItem logout={user.logout} handleClick={handleClick}/>
                    }
                    {
                        user.authenticated != true && <><LoginFormSideBarItem handleClick={handleClick}/>
                            <SignUpFormSideBarItem handleClick={handleClick}/></>
                    }

                     </List>
                <Divider />
            </Drawer>
            <ErrorBoundary>
            <main className={classes.content}>
                <div className={classes.toolbar} />


                
                {props.comp?.comp!=null && React.cloneElement(props.comp.comp, props.comp.props)}

            </main>
            </ErrorBoundary>
        </div>
    );
}
