import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";
import './App.css'

function App() {

  const [ darkMode,setDarkMode ] = useState(false);

  useEffect(() => {
   if(darkMode)
   {
    const r = document.querySelector(':root');
    let rs = getComputedStyle(r);
    
    r.style.setProperty('--contentsecondary', '#c9c1c1');
    r.style.setProperty('--contentprimary', '#f5f5f5');
    r.style.setProperty('--bgcolor', '#1e1b1b');
   }
   else
   {
    const r = document.querySelector(':root');
    let rs = getComputedStyle(r);
    
    r.style.setProperty('--contentsecondary', '');
    r.style.setProperty('--contentprimary', '');
    r.style.setProperty('--bgcolor', '');
   }

  },[darkMode])

  return (
    <>
      <span id="mode_cont" onClick={() => setDarkMode(!darkMode)}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.3807 2.01904C9.91573 3.38786 9 5.33708 9 7.50018C9 11.6423 12.3579 15.0002 16.5 15.0002C18.6631 15.0002 20.6123 14.0844 21.9811 12.6195C21.6613 17.8539 17.3149 22.0002 12 22.0002C6.47715 22.0002 2 17.523 2 12.0002C2 6.68532 6.14629 2.33888 11.3807 2.01904Z"></path></svg>
      </span>
      <Layout/>
    </>
  )
}

export default App;