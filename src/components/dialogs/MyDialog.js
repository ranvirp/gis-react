import React from "react"
import Slide from '@mui/material/Slide';
import {AppBar, Dialog, Modal} from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export  function FullScreenDialog(props) {
    const [open,setOpen] = React.useState(props.open)
   // console.log("rerender dialog")



    const handleClose = () => {
       // console.log("closing")
        props.cloeFunction(false)
        setOpen(false)

    };

    return (

            <Dialog

                open={open}
                onClose={handleClose}
                TransitionComponent={Transition}
            >
                <AppBar sx={{ position: 'relative' }}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            onClick={handleClose}
                            aria-label="close"
                        >
                        <CloseIcon/>
                        </IconButton>
                        <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                            Close
                        </Typography>
                        <Button autoFocus color="inherit" onClick={handleClose}>
                            Close
                        </Button>
                    </Toolbar>
                </AppBar>
                {props.comp}
            </Dialog>

    );
}