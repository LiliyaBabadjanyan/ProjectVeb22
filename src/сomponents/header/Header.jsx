import React from 'react';
import Nav from "./Nav";
import HeaderTop from "./HeaderTop/HeaderTop";
import Drupal from '../../ref/header/druplicon.svg'
import video from '../../ref/header/video.mp4'
import classes from "./Header.module.css";

const Header = () => {
    return (
        <div className={classes.main}>
            <img className={classes.druplicon} src={Drupal} alt={'drupal'}/>
            <video src={video} autoPlay muted loop className={classes.bgVideo}/>
            <Nav></Nav>
            <HeaderTop/>
        </div>
    );
};

export default Header;