import React from 'react';
import { Nav } from '../../Components/Nav/Nav';
import CodeIcon from '../../logo/code.png'
import './main.css'

function main(props) {
    return (
        <div>
            <Nav />
            <section className='home'>
                <div className='text'>
                    <h1 className='nametext'>
                        <div>
                            <span className='letter'>H</span>
                            <span className='letter'>i</span>
                            <span className='letter'>,</span>
                        </div>
                        <div>
                            <span className='letter'>I</span>
                            <span className='letter'>'</span>
                            <span className='letter'>m&nbsp;</span>
                            <span className='letter'>J</span>
                            <span className='letter'>i</span>
                            <span className='letter'>a</span>
                            <span className='letter'>h</span>
                            <span className='letter'>a</span>
                            <span className='letter'>n</span>
                            <span className='letter'>g</span>
                        </div>
                    </h1>
                    <p>Full Stack Developer</p>
                    <a className='contact' href="/">
                        <span className='contacttext'> Contact Me</span>
                    </a>
                </div>
                <div className="x">
                    <img className="y" src={CodeIcon} alt="codepen" />
                </div>
            </section>
        </div>
    );
}

export default main;