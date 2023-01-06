import React from 'react'
import './beranda.css'
import foto from '../../assets/gor 2.jpg'


const Beranda = () => {
  return (
    <div>
      <br />
      <br />
      <h1 id='name'>Ranchel Al Banna</h1>
      <h2 id='jurusan'>- Rekayasa Perangkat Lunak -</h2>

      <br />
      <br />
      <br />
      <img id="image" src={foto} width="300px" />
      <br />
      <br />
      <p id="paragraf"> Hai, Nama saya Ranchel Al Banna. Saya
berusia 16 tahun. Saya Seorang Siswa
Di SMK Negeri 1 Kota Bekasi di Program
Studi Rekayasa Perangkat Lunak, Saya
tertarik dengan hal-hal komputer dan
tentang yang ber teknologi. Selama
disekolah saya belajar HTML, CSS, dan
PHP</p>
      <br />
      <br />
      <br />
    </div>
  )
}

export default Beranda