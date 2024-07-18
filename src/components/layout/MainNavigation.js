import { useEffect, useRef, useState } from "react";
import {Link} from 'react-router-dom'

import { useInfo } from "../../context/meetupContext";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  const {favorites} = useInfo();
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY.current) {
      // This is when we are scrolling down
      setIsVisible(false);
    } else {
      // This is when we are scrolling up
      setIsVisible(true);
    }
    lastScrollY.current = window.scrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${classes.header} ${isVisible ? '' : classes.hidden}`} data-test="navigation-header">
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              All Meetups
            </Link>
          </li>

          <li>
            <Link to="/new-meetup">
              Add New Meetup
            </Link>
          </li>
          <li>
            <Link to="/favorite-meetups">
              My Favorites
              <span className={classes.badge}>{favorites.length}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
