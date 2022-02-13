import React from 'react';
// import logo from '../../logo/logo.png'
import linkedInLogo from '../../logo/linkedin.png'
import githubLogo from '../../logo/github.png'
import logo from '../../logo/logo.png'
import './Nav.css'

export const Nav = () => {
  return (
    <div className='nav'>
      <div className='logo'>
        <a className='top-a' href="/">
          <span className='name'>Jiahang</span>
          <span className='role'>Web Developer</span>
          <img className='profilepicture' src={logo} alt="" />
        </a>
      </div>
      <div className='middle'>
        <p className='about'>About</p>
        <p>Skills</p>
        <p>Projects</p>
        <p>Resume</p>
        <p>Contact</p>
      </div>
      <div className='socialMediaIcon'>
        <a href="https://www.linkedin.com/in/jiahang-li99/"><img className='linkedin' src={linkedInLogo} alt="Error" /></a>
        <a href="https://github.com/jiahangli99"><img className='github' src={githubLogo} alt="Error" /></a>
      </div>

    </div>
  )
};

