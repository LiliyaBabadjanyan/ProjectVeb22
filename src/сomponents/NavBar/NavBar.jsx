import React, {useState} from 'react';
import { CSSTransition, Transition, TransitionGroup } from 'react-transition-group';
import classes from './NavBar.module.css';
import './reset.css';
import logo from '../../ref/header/logo.svg';
import arrow from '../../ref/free-icon-down-arrow-892498.png';

const NavBar = (props) => {
    const { menuItems, number, } = props;
    const [isExpanded, setExpanded] = useState(false);
    const [isRotated, setRotate] = useState(false);
    const [isBurgerClicked, setBurgerClicked] = useState(false);
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [subMenuItems, setSubMenuItems] = useState([]);
    const [activeSubMenuIndex, setActiveSubMenuIndex] = useState(null);
    const [arrowRotations, setArrowRotations] = useState({});

    const handleSubMenuToggleArrow = (index) => {
        const options = menuItems[index].options;

        setArrowRotations((prevRotations) => ({
            ...prevRotations,
            [index]: !prevRotations[index],
        }));

        if (options) {
            if (activeSubMenuIndex === index) {
                handleSubMenuClose();
            } else {
                handleSubMenuToggle(index, options);
            }
        } else {
            handleSubMenuClose();
        }
    };

    const handleArrowClick = () => {
        setExpanded(!isExpanded);
        setRotate(!isRotated);
        setShowSubMenu(false);
    };

    const handleBurgerClick = () => {
        setBurgerClicked(!isBurgerClicked);
    };

    const handleSubMenuToggle = (index, options) => {
        if (options) {
            setActiveSubMenuIndex(index);
            setShowSubMenu(true);
            setSubMenuItems(options);
        }
    };

    const handleSubMenuClose = () => {
        setActiveSubMenuIndex(null);
        setShowSubMenu(false);
    };

    return (
        <div className={classes.Main}>
            <ul className={classes.container}>
                <div className={classes.containerItemMain}>
                    <img src={logo} alt="логотип" />
                    {menuItems.map((item, index) => (
                        <li
                            key={index}
                            className={classes.containerItem}
                            onMouseEnter={() => {
                                handleSubMenuToggle(index, item.options);
                            }}
                            onMouseLeave={() => {
                                handleSubMenuClose();
                            }}
                        >
                            <a href="#" className={`${index === 0 ? classes.active : ''} ${item.options ? classes.withOptions : ''}${classes.NuA}`}>
                                {item.label}
                            </a>
                            <TransitionGroup>
                                {activeSubMenuIndex === index && item.options && (
                                    <CSSTransition
                                        in={showSubMenu}
                                        timeout={800}
                                        classNames={{
                                            enter: classes.subMenuEnter,
                                            exit: classes.subMenuExit,
                                        }}
                                    >
                                        <ul className={classes.subMenu}>
                                            {subMenuItems.map((subItem, subIndex) => (
                                                <li className={classes.subItem} key={subIndex}>
                                                    {subItem}
                                                </li>
                                            ))}
                                        </ul>
                                    </CSSTransition>
                                )}
                            </TransitionGroup>
                        </li>
                    ))}
                </div>
                <div className={classes.containerItemMain2}>
                    <li className={classes.Number}>{number}</li>
                </div>
            </ul>
            <div className={classes.navBar}>
                <img style={{ paddingRight: '50px', zIndex: 3 }} src={logo} alt="логотип" />
                <div className={classes.burger} onClick={handleBurgerClick}>
                    {[1, 2, 3].map((i) => (
                        <div key={i} className={isBurgerClicked ? classes.burgerLinesActive : classes.burgerLines}></div>
                    ))}
                </div>
                <CSSTransition
                    in={isBurgerClicked}
                    timeout={{ enter: 800, exit: 800 }}
                    classNames={{
                        enterActive: classes.slideIn,
                        exitActive: classes.slideOut,
                    }}
                    unmountOnExit
                >
                    {(state) => (
                        <ul className={classes.TabletMenu}>
                            {menuItems.map((item, index) => (
                                <li
                                    key={index}
                                    className={classes.containerItemTable}
                                    onClick={() => {
                                        handleSubMenuToggle(index, item.options);
                                    }}
                                >
                                    <a href="#"
                                       className={`${index === 0 ? classes.active : ''} ${item.options ? classes.withOptions : ''}${classes.NuA}`}
                                    >
                                        {item.label}
                                        {item.options && (
                                            <img
                                                className={`${arrowRotations[index] && activeSubMenuIndex === index ? classes.rotate : ''} ${arrowRotations[index] && activeSubMenuIndex === index ? '' : classes.AgainRotate}`}
                                                style={{ paddingLeft: '10px', paddingTop:'6px'}}
                                                src={arrow}
                                                alt="стрелка"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleSubMenuToggleArrow(index);
                                                }}
                                            />
                                        )}
                                        <TransitionGroup>
                                            {activeSubMenuIndex === index && item.options && (
                                                <CSSTransition
                                                    in={activeSubMenuIndex === index && showSubMenu && item.options}
                                                    timeout={800}
                                                    classNames={{
                                                        enter: classes.subMenuTableEnter,
                                                        exit: classes.subMenuTableExit,
                                                    }}
                                                >
                                                    <ul className={`${classes.subMenuTable}`}>
                                                        {subMenuItems.map((subItem, subIndex) => (
                                                            <li className={classes.subItemTable } key={subIndex}>
                                                                {subItem}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </CSSTransition>
                                            )}
                                        </TransitionGroup>
                                    </a>
                                </li>
                            ))}
                            <li className={classes.Number} style={{ paddingLeft: '5%' }}>
                                {number}
                            </li>
                        </ul>
                    )}
                </CSSTransition>
            </div>
        </div>
    );
};

export default NavBar;
//
// const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     comment: "",
// });
//
// useEffect(() => {
//     const savedFormData = JSON.parse(localStorage.getItem("formData"));
//     if (savedFormData) {
//         setFormData(savedFormData);
//     }
// }, []);
//
// const handleChange = (e, field) => {
//     const value = e.target.value;
//     setFormData((prevFormData) => ({
//         ...prevFormData,
//         [field]: value,
//     }));
//     localStorage.setItem("formData", JSON.stringify({ ...formData, [field]: value }));
// }
