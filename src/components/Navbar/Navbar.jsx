import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from "@material-ui/core";
import {ShoppingCart} from "@material-ui/icons"
// import classes from '*.module.css';
import {Link, useLocation} from "react-router-dom"
import useStyles from "./styles";

import logo from "../../assets/ecommerce.png"


function Navbar({totalItems}) {
    const classes = useStyles();
    const location = useLocation();

   
    return (
        <>
          <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography component={Link} to="/"variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="Ecommerce site" height= "25px" className={classes.image}/>
                    Ecommerce site
                </Typography>
                <div className={classes.grow} />
                {location.pathname === "/"  && (
                <div className={classes.button}>
                    <IconButton component={Link} to="/cart" aria-label="Show cart items" color= "inherit">
                        <Badge badgeContent={totalItems} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
                )}
            </Toolbar>
           </AppBar>  
        </>
    )
}

export default Navbar