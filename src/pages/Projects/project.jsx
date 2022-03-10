import React from 'react';
import './project.css'
import LiCode from '../../picture/LiCode.png'
import Capsule from '../../picture/Project-Capsule.png'
import Note from '../../picture/Reactive-Notes.png'

function project(props) {
    return (
        <div>
            <div className='projectsContainer'>
                <div className='project'>
                    <a href="https://licodewastaken.herokuapp.com/">
                    <img className='projectPic' src={LiCode} alt="" />
                    </a>
                    <p>LiCode</p>
                </div>
                <div className='project'>
                    <a href="https://projectcapsule.netlify.app/">
                    <img className='projectPic' src={Capsule} alt="" />
                    </a>
                    <p>Project Capsule</p>
                </div>
                <div className='project'>
                    <a href="https://reactive-note.netlify.app/">
                    <img className='projectPic' src={Note} alt="" />
                    </a>
                    <p>Reactive Notes</p>
                </div>
            </div>
        </div>
    );
}

export default project;