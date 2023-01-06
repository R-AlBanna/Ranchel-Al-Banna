import React from 'react'
import './porto.css'
import ss1 from '../../assets/ss 1.PNG'
import ss2 from '../../assets/ss 2.PNG'
import ss3 from '../../assets/ss 3.PNG'
import ss4 from '../../assets/Capture.PNG'

const Porto = () => {
    return (


        <div>
            <div className='bates'>

            </div>
            <br />
            <br />

            <h1 id='porto'>Portofolio</h1>

            <br />

            <div id="produk">
                <div class="containerproduk">
                    <h4>Produk Saya</h4>
                    <div class="card">
                        <h5>Web Table</h5>
                        <div class="img-box">
                            <img src={ss1} alt="gambar tidak dapat ditampilkan" class="gambar-card" />

                        </div>
                        <p>- HTML</p>
                        <p>- CSS</p>
                        <br />
                    </div>
                    <div class="card">
                        <h5>Form Biodata</h5>
                        <div class="img-box">
                            <img src={ss2} alt="gambar tidak dapat ditampilkan" class="gambar-card" />

                        </div>
                        <p>- HTML</p>
                        <p>- CSS</p>
                        <br />
                    </div>
                    <div class="card">
                        <h5>Web Input</h5>
                        <div class="img-box">
                            <img src={ss3} alt="gambar tidak dapat ditampilkan" class="gambar-card" />

                        </div>
                        <p>- HTML</p>
                        <p>- CSS</p>
                        <br />
                    </div>
                    <div class="card">
                        <h5>Beranda Web</h5>
                        <div class="img-box">
                            <img src={ss4} alt="gambar tidak dapat ditampilkan" class="gambar-card" />
                        </div>
                        <p>- HTML</p>
                        <p>- CSS</p>
                        <p>- PHP</p>
                    </div>
                </div>


            </div>
            <br />
            <br />
            <br />
            <div className='bates'>

            </div>

        </div>

    )
}

export default Porto