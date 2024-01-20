import React from 'react';
import logo from '../../ref/header/logo.svg'
import classes from "./BurgerMenu.module.css";
const BurgerMenu = () => {
    return (
        <div className={classes.menu}>
            <img alt={'logo'} src={logo}/>
            <div className={classes.burgerBtn}>-</div>
        </div>
    );
};

export default BurgerMenu;