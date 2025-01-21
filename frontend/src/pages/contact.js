import { useEffect, useState } from 'react';
import '../App.css';
import './contact.css';

export const Contact = () => {
    return(
        <div>
            <section className='section-header'>Contact</section>
            <div>
                    <p>If you would like to get in contact with me, please email me at 
                        <b><a href='mailto:alinacorpora@gmail.com'>alinacorpora@gmail.com</a></b>
                        or fill out the form below and I will get back to you. Thank you!
                    </p>
                <form className='contactBox' action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value={process.env.REACT_APP_CONTACT_KEY}/>
                    <input type='text' name='name' placeholder='Your Name' required></input>
                    <input type='email' name='email' placeholder='Your Email' required></input>
                    <textarea name='message' placeholder='Send me a message' required></textarea>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    );
};