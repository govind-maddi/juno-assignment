import React, { useContext, useEffect, useState } from 'react'

import './compstyles/header.css';

import { SetPendingTab,SetCompletedTab } from './Layout';

function Header() {

  const [ headerTab1Flag,setHeaderTab1Flag ] = useState(true);
  const [ headerTab2Flag,setHeaderTab2Flag ] = useState(false);

  const [ dialogflag,setdialogFlag ] = useState(false)

  const setPendingTab = useContext(SetPendingTab);
  const setCompletedTab = useContext(SetCompletedTab);

  const handleTab1 = () => {
    setHeaderTab1Flag(true);
    setHeaderTab2Flag(false);
  }

  const handleTab2 = () => {
    setHeaderTab1Flag(false);
    setHeaderTab2Flag(true);
  }

  useEffect(() => {
    setPendingTab(headerTab1Flag);
  },[ headerTab1Flag ]);

  useEffect(() => {
    setCompletedTab(headerTab2Flag);
  },[ headerTab2Flag ]);

  return (
    <div id='header_cont'>
      <header>Monitoring</header>
      <section id='header_actions'>
          <section id='header_tabs'>
            <button onClick={handleTab1}
              className={ headerTab1Flag ? 'tabhighlight headerbtn' : 'tabdehighlight headerbtn'} >
                Pending
            </button>
            <button onClick={handleTab2}
              className={ headerTab2Flag ? 'tabhighlight headerbtn' : 'tabdehighlight headerbtn'} >
                Completed
            </button>
          </section>
          <section id='header_closebtn'>
            <button className='headerbtn' onClick={() => setdialogFlag(true)}>
              <span id='header_close_icon'>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_18_305)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M9 2.25C5.27208 2.25 2.25 5.27208 2.25 9C2.25 12.7279 5.27208 15.75 9 15.75C12.7279 15.75 15.75 12.7279 15.75 9C15.75 5.27208 12.7279 2.25 9 2.25ZM0.75 9C0.75 4.44365 4.44365 0.75 9 0.75C13.5563 0.75 17.25 4.44365 17.25 9C17.25 13.5563 13.5563 17.25 9 17.25C4.44365 17.25 0.75 13.5563 0.75 9Z" fill="#D13B3B"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M11.7803 6.21967C12.0732 6.51256 12.0732 6.98744 11.7803 7.28033L7.28033 11.7803C6.98744 12.0732 6.51256 12.0732 6.21967 11.7803C5.92678 11.4874 5.92678 11.0126 6.21967 10.7197L10.7197 6.21967C11.0126 5.92678 11.4874 5.92678 11.7803 6.21967Z" fill="#D13B3B"/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M6.21967 6.21967C6.51256 5.92678 6.98744 5.92678 7.28033 6.21967L11.7803 10.7197C12.0732 11.0126 12.0732 11.4874 11.7803 11.7803C11.4874 12.0732 11.0126 12.0732 10.7197 11.7803L6.21967 7.28033C5.92678 6.98744 5.92678 6.51256 6.21967 6.21967Z" fill="#D13B3B"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_18_305">
                            <rect width="18" height="18" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>

              </span>
              Close Account
            </button>
          </section>
          <span id='stroke2'></span>
      </section>

      {

        dialogflag
        &&
        <div id='dialog_box'>
        <header style={{fontSize:'20px',fontWeight:'600',marginBottom:'10px'}}>Close Account</header>
        
        <span id='closeicondialog' onClick={() => setdialogFlag(false)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289Z"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z"/>
        </svg>
        </span>

        <section>
          <article className='labels'>Email</article>
          <input type="text" className='dialog_input'/>
        </section>
        <section id='fileuar'>
          <article style={{fontSize:'14px'}}>Want To File An UAR</article>
          <article>
            <input type="radio" name="" id="" />
            <label htmlFor="" style={{fontSize:'14px',}}>Yes</label>
            <input type="radio" name="" id="" />
            <label htmlFor="" style={{fontSize:'14px',}}>No</label>
          </article>
        </section>
        <section>
          <article className='labels'>Reason</article>
          <input type="text" className='dialog_input'/>
        </section>
        <section>
          <article className='labels'>Note</article>
          <textarea name="" id="textarea"></textarea>
        </section>
        <section id='radioclose'>
          <article id='radiocharge'>
            <input type="radio" name="" id=""/>
            <label htmlFor="">Charge closure fee</label>
          </article>

          <article>
            <button id='dialogbtn' onClick={() => setdialogFlag(false)}>Close Account</button>
          </article>
        </section>
      </div>
      }

    </div>
  )
}

export default Header