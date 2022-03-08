import React from 'react';
import linkedInLogo from '../../logo/linkedin.png'
import githubLogo from '../../logo/github.png'
import logo from '../../logo/logo.png'
import { Link } from "react-router-dom";
import './Nav.css'

export const Nav = () => {
  return (
    <div className='nav'>
      <div className='logo'>
      <Link className='top-a' to="/">
          <span className='name'>Jiahang</span>
          <span className='role'>Web Developer</span>
          <img className='profilepicture' src={logo} alt="" />
        </Link>
      </div>
      <div className='middle'>
        <Link className='links' to='/about'>About</Link>
        <Link className='links' to='/skills'>Skills</Link>
        <p className='links'>Projects</p>
        <p className='links'>Resume</p>
        <p className='links'>Contact</p>
      </div>
      <div className='socialMediaIcon'>
        <a href="https://www.linkedin.com/in/jiahang-li99/"><img className='linkedin' src={linkedInLogo} alt="Error" /></a>
        <a href="https://github.com/jiahangli99"><img className='github' src={githubLogo} alt="Error" /></a>
      </div>

    </div>
  )
};

