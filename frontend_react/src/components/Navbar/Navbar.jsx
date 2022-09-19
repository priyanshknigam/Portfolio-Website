import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion'

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h3>P<span>K</span>N</h3>
      </div>
      <ul className="app__navbar-links">
        { ['home', 'about', 'work', 'skills', 'certifications', 'testimonials', 'contact'].map((item) => (
          <li className="app__flex p-text" key={'link-${item}'}>
            <div />
            <a href={'#'+item}>{item}</a>
          </li>
        )) }
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)}/>

        {toggle && (
            <motion.div
              whileInView={{ x: [300, 0], opacity: [0.9, 1] }}
              transition={{duration: 0.85, ease: 'easeOut'}}
              style={{opacity: 0}}
            >
              <HiX onClick={() => setToggle(false)}/>
              <ul>
              { ['home', 'about', 'work', 'skills', 'certifications', 'testimonials', 'contact'].map((item) => (
                <li key={item}>
                  <a href={'#'+item} onClick={() => setToggle(false)}>{item}</a>
                </li>
              )) }
              </ul>
            </motion.div>
          )}
      </div>
    </nav>
  );
}

export default Navbar;
