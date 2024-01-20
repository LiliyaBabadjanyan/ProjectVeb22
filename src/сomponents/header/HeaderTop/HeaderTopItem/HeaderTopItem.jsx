import React from 'react';
import {Col} from "react-bootstrap";
import classes from "./HeaderTopItem.module.css";

const HeaderTopItem = ({props}) => {
    return (
        <Col md={4} xs={6}>
            <div className={classes.wrapper}>
                <h3>{props.head}</h3>
                <p className={classes.tB}>{props.text}</p>
            </div>
        </Col>
    );
};

export default HeaderTopItem;