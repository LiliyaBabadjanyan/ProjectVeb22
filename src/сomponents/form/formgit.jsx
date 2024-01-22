import React, { useEffect, useState } from "react";
import classes from "./form.module.css";
import up from "../../../images/logo10/D-flying.svg";
import down from "../../../images/logo10/D.svg";
import phone from "../../../images/logo10/phone-line (2).svg";
import mail from "../../../images/logo10/mail.svg";
import { FaCheckSquare, FaRegSquare } from "react-icons/fa";
import Aos from "aos";
import apiURL from "../../IP/config";

const Form = () => {
    useEffect(() => {
        Aos.init();
    }, []);

    const [isChecked, setIsChecked] = useState(false);
    const [name, setName] = useState(localStorage.getItem("name") || "");
    const [number, setNumber] = useState(localStorage.getItem("number") || "");
    const [email, setEmail] = useState(localStorage.getItem("email") || "");
    const [message, setMessage] = useState(localStorage.getItem("message") || "");
    const [error, setError] = useState("");
    const [showError, setShowError] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();

        if (!name || !number || !email || !message) {
            setError("Пожалуйста, заполните все поля ");
            setShowError(true);
            setTimeout(() => {
                setShowError(false);
            }, 5000);
            return;
        }

        if (isChecked === false) {
            setError("Пожалуйста, дайте согласия на обработку персональных данных ");
            setShowError(true);
            setTimeout(() => {
                setShowError(false);
            }, 5000);
            return;
        }
//сайт formcarry
        fetch(apiURL, {
            method: 'POST',
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, number, email, message })
        })
            .then(response => response.json())
            .then(response => {
                if (response.code === 200) {
                    alert("Мы получили ваш запрос, спасибо!");
                    setName("");
                    setNumber("");
                    setEmail("");
                    setMessage("");
                    setIsChecked(false);
                } else if (response.code === 422 ) {
                    setShowError(true);
                    setTimeout(() => {
                        setShowError(false);
                    }, 5000);
                    setError(response.message);

                }
                else if(response.code === 429){
                    setShowError(true);
                    setTimeout(() => {
                        setShowError(false);
                    }, 3000);
                    setError("Слишком много запросов. Пожалуйста, попробуйте позже.");
                }
                else {
                    setShowError(true);
                    setTimeout(() => {
                        setShowError(false);
                    }, 5000);
                    setError(response.message);
                }
            })
            .catch(error => {
                setError(error.message ? error.message : error);
                setShowError(true);
                setTimeout(() => {
                    setShowError(false);
                }, 3000);
            })

    }



    const handleClick = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className={classes.main}>
            <img src={up} alt={up} className={classes.SvgUp} />
            <div className={classes.mainContent}>
                <div className={classes.Contacts}>
                    <h1 data-aos="fade-up" data-aos-duration="1400">Оставить заявку на поддержку сайта</h1>
                    <p data-aos="fade-up" data-aos-duration="1500" style={{ opacity: 0.7 }}>Срочно нужна поддержка сайта? Ваша команда не успевает справиться самостоятельно или предыдущий подрядчик не справился с работой? Тогда вам точно к нам! Просто оставьте заявку и наш менеджер с вами свяжется!</p>
                    <div data-aos="fade-up" data-aos-duration="1600" className={classes.phone}>
                        <img alt={phone} src={phone} style={{ marginRight: 18, opacity: 0.5 }} />8 800 222-26-73
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1700" className={classes.mail}>
                        <img alt={mail} src={mail} style={{ marginRight: 18, opacity: 0.5 }} />info@drupal-coder.ru
                    </div>
                </div>
                <form className={classes.form} onSubmit={(e) => handleSubmit(e)} method={"post"} >
                    <div data-aos="fade-up" data-aos-duration="1800" className={classes.form1}>
                        <input
                            id={"name"}
                            placeholder={"Ваше имя"}
                            value={name}
                            onChange={(e) => {
                                setName(e.target.value);
                                localStorage.setItem("name", e.target.value);
                            }}
                            autoComplete={"off"}
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1900" className={classes.form1}>
                        <input
                            id={"number"}
                            placeholder={"Телефон"}
                            type={"number"}
                            value={number}
                            onChange={(e) => {
                                setNumber(e.target.value);
                                localStorage.setItem("number", e.target.value);
                            }}
                            onKeyPress={(e) => {
                                // Обработчик onKeyPress для предотвращения ввода нецифровых символов
                                const isDigit = /\d/.test(e.key);
                                if (!isDigit) {
                                    e.preventDefault();
                                }
                            }}
                            autoComplete={"off"}
                            pattern="\d*"
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2000" className={classes.form1}>
                        <input
                            id={"email"}
                            placeholder={"E-mail"}
                            type="email"
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value);
                                localStorage.setItem("email", e.target.value);
                            }}
                            autoComplete={"off"}
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2100" className={classes.form2}>
                        <input
                            id={"message"}
                            placeholder={"Ваш комментарий"}
                            value={message}
                            onChange={(e) => {
                                setMessage(e.target.value);
                                localStorage.setItem("message", e.target.value);
                            }}
                            autoComplete={"off"}
                        />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="2200" className={classes.checkbox}>
                        <div className={classes.checkboxСontainer} onClick={handleClick}>
                            {isChecked ? (
                                <FaCheckSquare className={classes.customIcon1} />
                            ) : (
                                <FaRegSquare className={classes.customIcon2} />
                            )}
                        </div>
                        Отправляя заявку, я даю согласие на обработку своих персональных данных
                    </div>
                    <button data-aos="fade-up" data-aos-duration="2300" type={"submit"}>
                        Оставить заявку!
                    </button>
                    {error && showError && (
                        <p className={classes.erorr} >
                            {error}
                        </p>
                    )}
                </form>
            </div>
            <div className={classes.down}>
                <p data-aos="fade-up" data-aos-duration="2400" style={{ opacity: 0.5 }}>
                    Проект ООО «Инитлаб», Краснодар, Россия.
                </p>
                <p data-aos="fade-up" data-aos-duration="2500" style={{ opacity: 0.5 }}>
                    Drupal является зарегистрированной торговой маркой Dries Buytaert.
                </p>
            </div>
            <img src={down} alt={down} className={classes.SvgDown} />
            <div className={classes.down1}></div>
        </div>
    );
};

export default Form;
