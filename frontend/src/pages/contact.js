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
                <form className='contactBox' onSubmit={sendEmail}>
                    <input type='text' id='name' className='contact-input' placeholder='Your Name' required></input>
                    <input type='email' id='email' className='contact-input' placeholder='Your Email' required></input>
                    <textarea id='msg' className='contact-input' placeholder='Send me a message' required></textarea>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    );
};