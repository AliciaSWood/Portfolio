import React from "react";
import styles from "./Navbar.module.scss";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link to="Main" spy={true} smooth={true} offset={0} duration={500}>
              Home
            </Link>
          </li>
          <li>
          <Link to="AboutMe" spy={true} smooth={true} offset={0} duration={500}>
              About
            </Link>
          </li>
          <li>
          <Link to="Skills" spy={true} smooth={true} offset={0} duration={500}>
              Skills
            </Link>
          </li>
          <li>
          <Link to="Projects" spy={true} smooth={true} offset={0} duration={500}>
              Projects
            </Link>
          </li>
          <li>
          <Link to="Contact" spy={true} smooth={true} offset={0} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
