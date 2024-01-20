import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import HeaderTopItem from "./HeaderTopItem/HeaderTopItem";
import classes from "./HeaderTop.module.css";


const HeaderTop = () => {
    const mas = [
        {head: '#1', text: 'Drupal-разработчик в России'},
        {head: '3+', text: 'средний опыт специалистов более 3 лет'},
        {head: '14', text: 'лет опыта в сфере Drupal'},
        {head: '200+', text: 'модулей и тем в формате DrupalGive'},
        {head: '35000', text: 'часов поддержки сайтов на Drupal'},
        {head: '3+', text: 'Проектов на поддержке'},
    ]
    return (
        <div className={classes.main}>
            <Container>
                <Row>
                    <Col md={6} xs={12}>
                        <div className={classes.wrapper}>
                            <h1>Поддержка<br/> сайтов на Drupal</h1>
                            <p className={classes.text}>Сопровождение и поддержка сайтов<br/>
                                на CMS Drupal любых версий и запущенности</p>
                            <div className={classes.wrapperBtn}>
                                <button className={classes.btn}>ТАРИФЫ</button>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} xs={12}>
                        <Row>
                            {mas.map(i => <HeaderTopItem props={i}/>)}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>

    );
};

export default HeaderTop;