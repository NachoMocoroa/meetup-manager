import { useState, useEffect } from "react";
import { ALL_MEETUP_PAGE, FAVORITES_PAGE, NEW_MEETUP_PAGE } from "./../../utils/constants";

import classes from "./MainNavigation.module.css";

export default function MainNavigation({ setPage }) {

  const headerHeigh = 100;
  const [position, setPosition] = useState(window.pageYOffset);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const headerVisibleClasses = headerVisible ? classes.visible : classes.hidden;
  const topBtnVisibleClass = showTopBtn ? classes.top_button_visible : '';

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
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
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <a href="#" onClick={() => setPage(ALL_MEETUP_PAGE)}>
              All Meetups
            </a>
          </li>

          <li>
            <a href="#" onClick={() => setPage(NEW_MEETUP_PAGE)}>
              Add New Meetup
            </a>
          </li>
          <li>
            <a href="#" onClick={() => setPage(FAVORITES_PAGE)}>
              My Favorites
              <span className={classes.badge}>{0}</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
