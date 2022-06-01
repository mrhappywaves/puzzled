import React from 'react';
import '../styles/footer.css'

const Footer = () => {
    return (
        <div className='footer fixed-bottom'>
            <div className='container text-center mb-4'>
                <p>Made with <span role='img' aria-label='heart'>❤️</span> by the Puzzle People</p>
            </div>
        </div>
    );
};

export default Footer;