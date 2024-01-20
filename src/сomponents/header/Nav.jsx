import React, {Component} from 'react';
import {Container} from "react-bootstrap";
import logo from '../../ref/header/logo.svg'
import classes from "./Nav.module.css";

class Nav extends Component {
    render() {
        return (
            <Container>
                <div className={classes.wrapper}>
                    <div>
                        <img src={logo}/>
                    </div>
                    <div>
                        <nav>
                            <ul>
                                <li><a>ПОДДЕРЖКА DRUPAL</a></li>
                                <li><a>АДМИНИСТРОВАНИЕ</a></li>
                                <li><a>ПРОДВИЖЕНИЕ</a></li>
                                <li><a>РЕКЛАМА</a></li>
                                <li><a>О НАС</a></li>
                                <li><a>ПРОЕКТЫ</a></li>
                                <li><a>КОНТАКТЫ</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

            </Container>
        );
    }
}

export default Nav;