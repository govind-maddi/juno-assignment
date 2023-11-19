import React, { createContext, useState } from 'react'
import Navbar from './Navbar';
import Header from './Header';
import UserData from './UserData';

import './compstyles/layout.css';

export const PendingTab = createContext();
export const SetPendingTab = createContext();

export const CompletedTab = createContext();
export const SetCompletedTab = createContext();

export const LayoutDarken = createContext();
export const SetLayoutDarken = createContext();

function Layout() {

  const [ tab1,setTab1 ] = useState(true);
  const [ tab2,setTab2 ] = useState(false);

  const [layout,setLayout] = useState(false);

  return (
    <div id='layout_grid_cont' className={ layout ? 'layout_grid2' : 'layout_grid1'}/* ' layout_grid2' */>
      <PendingTab.Provider value={tab1}>
        <SetPendingTab.Provider value={setTab1}>

          <CompletedTab.Provider value={tab2}>
            <SetCompletedTab.Provider value={setTab2}>

              <LayoutDarken.Provider value={layout}>
                <SetLayoutDarken.Provider value={setLayout}>

              <Navbar/>
              <Header/>
              <UserData/>

                </SetLayoutDarken.Provider>
              </LayoutDarken.Provider>

          </SetCompletedTab.Provider>
          </CompletedTab.Provider>

        </SetPendingTab.Provider>
      </PendingTab.Provider>
    </div>
  )
}

export default Layout;