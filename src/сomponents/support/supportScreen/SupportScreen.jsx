import React, {useState} from 'react';
import BG1 from '../../../ref/supports/support1.svg'
import BG2 from '../../../ref/supports/support2.svg'
import BG3 from '../../../ref/supports/support3.svg'
import BG4 from '../../../ref/supports/support4.svg'
import BG5 from '../../../ref/supports/support5.svg'
import BG6 from '../../../ref/supports/support6.svg'
import BG7 from '../../../ref/supports/support7.svg'
import BG8 from '../../../ref/supports/support8.svg'
import {Col, Container, Row} from "react-bootstrap";
import classes from "./SupportScreen.module.css";
import Support from "../Support";

const SupportScreen = () => {
    const mas = [
        {id: '01.', title: 'Постановка задачи по Email', text: 'Удобная и привычная модель постановки задач, при которой задачи фиксируются и никогда\n' +
                'не теряются.', img: BG1},
        {id: '01.', title: 'Постановка задачи по Email', text: 'Удобная и привычная модель постановки задач, при которой задачи фиксируются и никогда\n' +
                'не теряются.', img: BG2},
        {id: '01.', title: 'Постановка задачи по Email', text: 'Удобная и привычная модель постановки задач, при которой задачи фиксируются и никогда\n' +
                'не теряются.', img: BG3},
        {id: '01.', title: 'Постановка задачи по Email', text: 'Удобная и привычная модель постановки задач, при которой задачи фиксируются и никогда\n' +
                'не теряются.', img: BG4},
        {id: '01.', title: 'Постановка задачи по Email', text: 'Удобная и привычная модель постановки задач, при которой задачи фиксируются и никогда\n' +
                'не теряются.', img: BG5},
        {id: '01.', title: 'Постановка задачи по Email', text: 'Удобная и привычная модель постановки задач, при которой задачи фиксируются и никогда\n' +
                'не теряются.', img: BG6},
        {id: '01.', title: 'Постановка задачи по Email', text: 'Удобная и привычная модель постановки задач, при которой задачи фиксируются и никогда\n' +
                'не теряются.', img: BG7},
        {id: '01.', title: 'Постановка задачи по Email', text: 'Удобная и привычная модель постановки задач, при которой задачи фиксируются и никогда\n' +
                'не теряются.', img: BG8},
    ]


    return (
        <div className={classes.wrapper}>
            <Container className={classes.main}>
                <Row>
                    <Col md={12}>
                        <h2>Поддержка <br/> от Drupal-coder</h2>
                    </Col>
                </Row>
                <Row>
                    {mas.map(i => <Support props={i}/>)}
                </Row>
            </Container>
        </div>
    );
};

export default SupportScreen;