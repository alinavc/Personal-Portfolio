import '../App.css';
import './contact.css';

export const Contact = () => {
    return(
        <div>
            <section className='section-header'>Contact</section>
            <div className='contactBox'>
                <form>
                    <input type='text' id='name' placeholder='Your Name' required></input>
                    <input type='email' id='email' placeholder='Your Email' required></input>
                    <textarea id='msg' placeholder='Send me a message' required></textarea>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    );
};