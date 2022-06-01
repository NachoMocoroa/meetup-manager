import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import classes from "./MainNavigation.module.css";
import { NAVIGATION, TEXTS } from "./../../utils/constants";

export default function MainNavigation() {

  const linkActiveClassName = classes.link_active;
  const headerHeigh = 100;
  const [position, setPosition] = useState(window.pageYOffset);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [burgerClicked, setBurgerClicked] = useState(false);
  const headerVisibleClasses = headerVisible ? classes.visible : classes.hidden;
  const topBtnVisibleClass = showTopBtn ? classes.top_button_visible : '';
  const classBurgerClicked = burgerClicked ? classes.change : '';
  const { meetupFavorite } = useSelector((state) => state);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };

  const toggleMenu = () => {
    setBurgerClicked(!burgerClicked);
  };

  useEffect(()=> {
    const handleScroll = () => {
      let moving = window.pageYOffset;
      setPosition(moving);
      setHeaderVisible(position > moving);
      setShowTopBtn(position > headerHeigh);
    };
    window.addEventListener("scroll", handleScroll);
    return(() => {
      window.removeEventListener("scroll", handleScroll);
    });
  });

  return (
    <header 
      className={`${classes.header} ${headerVisibleClasses}`} 
      data-test="navigation-header"
    >
      <button 
        onClick={() => scrollToTop()} 
        className={`${classes.top_button} ${topBtnVisibleClass}`}
      ></button> 
      <div className={classes.header_items}>
        <div className={classes.logo}>{TEXTS.LOGO.text}</div>
        <div className={`${classes.burger_btn} ${classBurgerClicked}`} onClick={() => toggleMenu()}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <nav className={`${classBurgerClicked ? '' : classes.hidden}`}>
        <ul>
          <li>
            <NavLink to={NAVIGATION.ALL_MEETUP_PAGE.path} className={({ isActive }) => isActive ? linkActiveClassName : undefined}>{NAVIGATION.ALL_MEETUP_PAGE.text}</NavLink>
          </li>
          <li>
            <NavLink to={NAVIGATION.NEW_MEETUP_PAGE.path} className={({ isActive }) => isActive ? linkActiveClassName : undefined}>{NAVIGATION.NEW_MEETUP_PAGE.text}</NavLink>
          </li>
          <li>
            <NavLink to={NAVIGATION.FAVORITES_PAGE.path} className={({ isActive }) => isActive ? linkActiveClassName : undefined}>
              {NAVIGATION.FAVORITES_PAGE.text}
              <span className={classes.badge}>{meetupFavorite.length}</span>
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
