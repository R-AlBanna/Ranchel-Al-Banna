import React from 'react'
import './tentang.css'


const Tentang = () => {
    return (
        <div>
            <h3 id='hobi'>Tentang Saya</h3>
            <br />

            <div class="box">
                <dl id='tentang'>
                    <div class="margin">
                        <dt id="dt">-Nama :</dt>
                        <dd id="dt">Ranchel Al Banna</dd>
                        <br />
                        <dt id="dt">-Agama :</dt>
                        <dd id="dt">Islam</dd>
                        <br />
                        <dt id="dt">-Email :</dt>
                        <dd id="dt">ranchelalbanna27@gmail.com</dd>
                        <br />
                        <dt id="dt">-No HP :</dt>
                        <dd id="dt">+62895344638371</dd>
                        <br />
                        <dt id="dt">-Sosial Media   :</dt>
                        <dd id="dt">IG  : @bannn_.</dd>
                        <br />
                        <dt id="dt">-Alamat :</dt>
                        <dd id="dt">Jalan Fajar Pratama Jakasampura Bekasi Barat</dd>
                        <br />
                        <dt id="dt">Tempat Tanggal Lahir :</dt>
                        <dd id="dt">Bekasi,27 Juni 2006</dd>
                        <br />
                        <dt id="dt">Gender :</dt>
                        <dd id="dt">Laki-Laki</dd>
                        <br />
                    </div>
                </dl>


                <h3 class="text3" id="hobi">Hobi</h3>
                <br />
                <ul className='pendidikan'>
                    <li className='hobi'>Menonton Film</li>
                    <li className='hobi'>Mendengarkan Musik</li>
                </ul>
                <br />

                <h3 class="text3" id="skill">Kemampuan</h3>
                <br />
                <ol type="A" class="pendidikan">
                    <li>HTML</li>
                    <div className='skill-bar-html'>

                    </div>
                    <br />
                    <li>CSS</li>
                    <div className='skill-bar-css'>

                    </div>
                    <br />
                    <li>PHP</li>
                    <div className="skill-bar-php">
                        
                    </div>
                </ol>
                <br />
                <h3 id="pendidikan">Riwayat Pendidikan</h3>
                <br />
                <table border="2" cellspacing="0" cellspading="10" className='tabel-pendidikan'>
                    <tr>
                        <td>No</td>
                        <td>Jenjang</td>
                        <td>Nama Instasi</td>
                        <td>Tahun Masuk</td>
                        <td>Tahun Keluar</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Sekolah Dasar</td>
                        <td>MI AL MUHAJIRIN JAKAPERMAI</td>
                        <td>2012</td>
                        <td>2018</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Sekolah Menengah Pertama</td>
                        <td>SMP Martia Bhakti Bekasi</td>
                        <td>2018</td>
                        <td>2021</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Sekolah Menengah Kejuruan</td>
                        <td>SMK Negeri 1 Kota Bekasi</td>
                        <td>2021</td>
                        <td>2024</td>
                    </tr>
                </table>
                <br />
                <h3 id="organisasi">Riwayat Organisasi</h3>
                <br />
                <table border="2" cellspacing="1" cellppading="10" className='tabel-organisasi'>
                    <tr>
                        <th>No.</th>
                        <th>Nama Organisasi</th>
                        <th>Jabatan</th>
                        <th>Tahun Aktif</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Paskibra</td>
                        <td>Anggota</td>
                        <td>2018-2020</td>
                    </tr>
                </table>
                <br />
                <h3 id="prestasi">Riwayat Prestasi</h3>
                <br />
                <table border="1px" className='tabel-prestasi'>
                    <tr>
                        <th>No</th>
                        <th>Nama Prestasi</th>
                        <th>Tingkat</th>
                        <th>Peringkat</th >
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Tahfidz</td>
                        <td>RT</td>
                        <td>2</td>
                    </tr>
                </table>

            </div>
            <br />
            <br />

        </div>
    )
}

export default Tentang