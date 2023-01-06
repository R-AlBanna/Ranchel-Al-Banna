import React from 'react'
import './kontak.css'
import linked from '../../assets/link.png'
import git from '../../assets/git.png'
import mail from '../../assets/email.png'

const Kontak = () => {
  return (
    <div>
      <br />
      <br />
      <div className='tag-kontak'>
        <h1 id='kontak'>Contact Me</h1>
      </div>

      <br />
      <br />
      <div className='container'>
        <br />
        <div className="info">
        <a href="https://wa.me/62895344638371" id='no-wa'><p>+62895344638371</p></a>
        <p>ranchelalbanna27gmail.com</p>
        <p>Jalan Fajar Pratama. RT 005/ RW 020, Jakasampurna, Bekasi Barat, Jawa Barat</p>
        <br />
        <p>Social Media</p>
        <a href="https://www.instagram.com/baannn._/" id='user-ig'><p>@baannn_.</p></a>
        </div>
      </div>

      <br />

      <ul id="sosmed">
        <div id="icon">
          {/* <li className='git'>
            <a target='_blank' href="https://github.com/R-AlBanna"></a>
            <img src={git} width="50px" />
          </li> */}
          <li class="IG">
            <a target="_blank" href="https://github.com/R-AlBanna">
              <img src={git} width="50px" />
            </a>
          </li>
          <li class="link">
            <a target="_blank" href="https://www.linkedin.com/in/ranchel-al-banna-290800246/">
              <img src={linked} width="50px" />
            </a>
          </li>
          <li className='WA'>
            <a target="_blank" href="ranchelalbanna27@gmail.com">
              <img src={mail} width="50px" />
            </a>
          </li>
        </div>
      </ul>
      <br />

    </div>
  )
}

export default Kontak