import React, {useState} from 'react';
import classes from './Packs.module.css'
import {Col, Row} from "react-bootstrap"
import Points from "./Points"

const Packs = ({text, price}) => {
    const [blocks, setBlocks] = useState([
        {text: 'Предоплата от 10 часов',},
        {text: 'Консультации и работы по SEO',},
        {text: 'Услуги дизайнера',},
        {text: 'Консультации и работы по SEO',},
        {text: 'Консультации и работы по SEO',},
        {text: 'Консультации и работы по SEO',},
        {text: 'Консультации и работы по SEO',},
    ])

    return (

            <Col sm={4} xs={12}>
                <div className={classes.wrapper}>
                    <div className={classes.titles}>
                        <h3 className={classes.titlePacks}>{text}</h3>
                        <h1 className={classes.price}>{price} <span>Р</span></h1>
                        <h6 className={classes.time}>в час</h6>
                    </div>
                    <div className={classes.PointList}>
                        {blocks.map(i => <Points props={i}/>)}
                    </div>
                    <div className={classes.button}>
                        <button>Свяжитесь с нами</button>
                    </div>
                </div>
            </Col>
    );
};

export default Packs;