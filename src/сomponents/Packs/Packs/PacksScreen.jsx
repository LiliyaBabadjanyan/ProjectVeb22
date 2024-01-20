import React from 'react';
import {Container, Row} from "react-bootstrap";
import Packs from "../Packs";
import classes from './PacksSceen.module.css'

const PacksScreen = () => {
    const mas = [
        {text: "Стартовый", price: "2000",},
        {text: "Бизнес", price: "2000",},
        {text: "VIP", price: "2000",},
    ]
    return (
        <div className={classes.wrapper}>
            <div className={classes.title}>
                <h1 className={classes.titleIn}>ТАРИФЫ</h1>
            </div>
            <Container>
                <Row>
                    {mas.map(item => <Packs text={item.text} price={item.price}/>)}
                </Row>
            </Container>
            <div className={classes.text}>
                <p className={classes.inText}>Вам не подходят наши тарифы? Оставьте заявку и мы<br/> предложим вам индивидуальные условия!<br/>
                    <a className={classes.priceLink} href={"#"}>Получить индивидуальный тариф</a></p>
            </div>
        </div>
    );
};

export default PacksScreen;