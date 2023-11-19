import React, { useState } from 'react'

import Logo from "../assets/images/logo.png";
import Elon from "../assets/icons/elonmusk.png";

import './compstyles/navbar.css'

function Navbar() {

  const [ menuFlag,setMenuFlag ] = useState(false);


  const handleMenuFlag = () => {
    setMenuFlag(prevMenuFlag => !prevMenuFlag);
  }


  return (
  <>
    <div id='nav_mob_cont'>
        <figure id='nav_menu_cont' onClick={handleMenuFlag}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
        </figure>
        <section id='nav_userprofile_mob_cont'>
        <figure>
          <img src={Elon} alt="elonmusk" />
        </figure>
        <article id='nav_user_info_mob'>
          <header>Elon Musk</header>
          <span>elon@twitter.com</span>
        </article>
      </section>
      </div>

    <nav className={ menuFlag ? 'nav_cont_visible' : 'nav_cont_hide' } >

      <figure id='nav_logo_cont'>
        <img src={Logo} alt="Logo"/>
      </figure>

      <figure id='nav_mob_close_cont' onClick={handleMenuFlag}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289Z"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"/>
          </svg>
      </figure>

      <span id='stroke'></span>

      <section id='nav_links_cont'>
        <article className='nav_links'>Overview</article>
        <article className='nav_links'>Onboarding</article>
        <article className='nav_links' id='target_link'>Monitoring</article>
        <article className='nav_links'>Flagging</article>
        <article className='nav_links'>Source Of Income</article>
        <article className='nav_links'>UAR</article>
      </section>

      <section id='nav_userprofile_cont'>
        <figure>
          <img src={Elon} alt="elonmusk" />
        </figure>
        <article id='nav_user_info'>
          <header>Elon Musk</header>
          <span>elon@twitter.com</span>
        </article>
      </section>

    </nav>
  </>
  )
}

export default Navbar