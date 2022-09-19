import React, { useState, useEffect } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';

import './Certifications.scss';

const Certifications = () => {

  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const [certifications, setCertifications] = useState([]);
  const [filtercertifications, setFilterCertifications] = useState([]);

  useEffect(() => {
    const query = '*[_type == "certifications"]';
    client.fetch(query)
      .then((data) => {
        setCertifications(data);
        setFilterCertifications(data);
      })
  }, [])

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{y:100, opacity: 0}]);

    setTimeout(() => {
      setAnimateCard([{y:0, opacity: 1}]);

      if(item === 'All') {
        setFilterCertifications(certifications);
      } else {
        setFilterCertifications(certifications.filter((certification) => certification.tags.includes(item)));
      }
    }, 500);
  }

  return (
    <>
      <h2 className="head-text">
        Here is a list of my <span>Certifications</span>
      </h2>
      <div className="app__work-filter">
        {[ 'ML', 'Data Science', 'C++', 'Python', 'SQL', 'DSA', 'All'].map((item, index) => (
          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={activeFilter===item?"item-active":""+"app__work-filter-item app__flex p-text"}
          >
            {item}
          </div>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filtercertifications.map((certification, index) => (
          <motion.div
            whielInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween'}}
          >
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(certification.imgUrl)} alt={certification.name}/>

              <motion.div
                whileHover={{opacity:[0,1]}}
                transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
              <a href={certification.projectLink} target="_blank" rel="noreferrer">
                <motion.div
                whileInView={{scale: [0,1]}}
                whileHover={{scale:[1,0.9]}}
                transition={{duration: 0.25 }}
                className="app__flex"
                >
                  <AiFillEye />
                </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{certification.title}</h4>
              <p className="p-text cert-text-dark" style={{ marginTop: 10 }}>{certification.description}</p>
              <div className="app__work-tag app__flex">
                <p className="p-text">{certification.tags[0]}</p>
              </div>
            </div>
          </div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Certifications, 'app__certifications'),
  'certifications',
  "app__primarybg"
);
