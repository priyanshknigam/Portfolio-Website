import React from 'react';
import { BsLinkedin, BsInstagram, BsFacebook, BsGithub } from 'react-icons/bs';
import { SiCodechef, SiLeetcode } from 'react-icons/si';

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/priyansh-kumar-nigam-74a54a186" target="_blank"><BsLinkedin /></a>
      </div>
      <div>
        <a href="https://github.com/priyanshknigam" target="_blank"><BsGithub /></a>
      </div>
      <div>
        <a href="https://www.codechef.com/users/priyansh_1" target="_blank"><SiCodechef /></a>
      </div>
      <div>
        <a href="https://leetcode.com/priyansh_1/" target="_blank"><SiLeetcode /></a>
      </div>
    </div>
  )
}

export default SocialMedia
