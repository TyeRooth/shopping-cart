import '../App.css';
import { mdiGithub } from '@mdi/js';
import { mdiFacebook } from '@mdi/js';
import { mdiInstagram } from '@mdi/js';
import { mdiTwitter } from '@mdi/js';
import Icon from '@mdi/react';

const Contact = () => {
  return (
    <div className='contact'>
        <div className='socials-div'>
            <a href='https://github.com/TyeRooth'>
                <Icon path={mdiGithub} size={4} color='white'/>
            </a>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
                <Icon path={mdiFacebook} size={4} color='white'/>
            </a>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
                <Icon path={mdiInstagram} size={4} color='white'/>
            </a>
            <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>
                <Icon path={mdiTwitter} size={4} color='white'/>
            </a>
        </div>
        <div>
            <div className='address'>Crazy Cryptoes <br/>Alive Drive 45, Toronto CA</div>
        </div>
        <footer>
            Created by Tye Rooth as part of <span>
                <a href='https://www.theodinproject.com/lessons/node-path-javascript-shopping-cart' className='link'>
                    The Odin Project
                </a>
            </span>
        </footer>
    </div>
  );  
};

export default Contact;