import React from 'react';
import './contact.css'

function contact(props) {
    return (
        <div>
            <form action="https://formsubmit.co/liabraham.1999@gmail.com" method="POST">
        <input type="hidden" name="_subject" value="Portfolio"/>
        <input type="text" name="name" placeholder="Name" required/>
        <input type="email" name="email" placeholder="Email Address" required/>
        <input type="text" name="subject" placeholder="Subject" required/>
        <input type="text" name="message" placeholder="Write your message here"/>
        <input type="hidden" name="_autoresponse" value="Thanks for checking out my portfolio, I will get back to ASAP"/>
        <button type="submit">Send</button>
   </form>
        </div>
    );
}

export default contact;