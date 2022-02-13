import React from 'react';
import { Nav } from '../../Components/Nav/Nav';
import CodeIcon from '../../logo/code.png'
import { Link } from "react-router-dom";
import './main.css'

function main(props) {
    return (
        <div>
            <Nav />
            <section className='home'>
                <div className='text'>
                    <h1 className='nametext'>
                        <div>
                            <span className='letterhi'>H</span>
                            <span className='letterhi'>i</span>
                            <span className='letter'>,</span>
                        </div>
                        <div>
                            <span className='letter'>I</span>
                            <span className='letter'>'</span>
                            <span className='letter'>m&nbsp;</span>
                            <span className='letterdif'>J</span>
                            <span className='letter'>i</span>
                            <span className='letter'>a</span>
                            <span className='letter'>h</span>
                            <span className='letter'>a</span>
                            <span className='letter'>n</span>
                            <span className='letter'>g</span>
                        </div>
                    </h1>
                    <p className='mainrole'>Full Stack Web Developer</p>
                    <Link className='contact' to ='/contact'>
                        <span className='contacttext'> Contact Me</span>
                    </Link>
                </div>
                <div className="x">
                    <img className="y" src={CodeIcon} alt="codepen" />
                </div>
            </section>
        </div>
    );
}

export default main;