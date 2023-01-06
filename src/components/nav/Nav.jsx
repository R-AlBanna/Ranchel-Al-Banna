import React from 'react';
import './nav.css'

function Nav() {
    return (
        <div>
            <div id="nav">
                <h1 id='gatau'><i>Banna</i></h1>
                <div id='tengah'>
                    <ul className='nav-link'>
                        <li><a href="#name">
                            Beranda
                        </a></li>
                        <li><a href="#hobi">
                            Tentang
                        </a></li>
                        <li><a href="#porto">
                            Projek
                        </a></li>
                        <li><a href="#kontak">
                            Kontak
                        </a></li>
                    </ul>
                </div>
                <a href="CV_RANCHEL AL BANNA.pdf" download='CV Ranchel Al Banna.pdf'><button className="donglod">Download CV</button></a>
            </div>
            <br />
            <br />
        </div>
    )
}

export default Nav