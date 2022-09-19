import React from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';

import './Header.scss';

const scaleVariants = {
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}

const Header = () => {
  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition = {{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img"
      >
        <img src={ images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition = {{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-about"
      >
        <h1 className="app__header-about-text">Hello! Welcome to my <span>Portfolio Website</span></h1>
        <p className="app__header-about-p-text">
        Greetings! I am Priyansh Kumar Nigam, 5th year Dual Degree student at IIT Bhubaneswar,
        persuing B.Tech in Civil Engineering and M.Tech in Structural Engineering. I like Competetive
        Coding, Machine Learning, Web Development and have done numerous projects on these topics.
        I am a hard working individual intersted in the fields of software development, web development,
        data analysis and deep learning. Apart from these, I also like singing and listening to music.
        I hope you'll enjoy your time going through my portfolio.
        </p>
      </motion.div>
    </div>
  );
}

export default AppWrap(
  MotionWrap(Header, 'app__about'),
  'home',
  "app__primarybg"
);
