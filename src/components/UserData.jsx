import React, { createContext, useState } from 'react'

import UserFilter from './Userdata/UserFilter';
import UserTable from './Userdata/UserTable';

import './compstyles/userdata.css';

export const Text = createContext();
export const SetText = createContext();

export const TriggerSelect = createContext();
export const SetTriggerSelect = createContext();

export const RiskSelect = createContext();
export const SetRiskSelect = createContext();

function UserData() {

  const [ text,setText ] = useState('');
  const [ trigger,setTrigger ] = useState('');
  const [ risk,setRisk ] = useState('');

  return (
    <div id='userdata_cont'>
        <Text.Provider value={text}>
          <SetText.Provider value={setText}>

            <TriggerSelect.Provider value={trigger}>
              <SetTriggerSelect.Provider value={setTrigger}>

                <RiskSelect.Provider value={risk}>
                  <SetRiskSelect.Provider value={setRisk}>

                  <UserFilter/>
                  <UserTable/> 

                  </SetRiskSelect.Provider>
                </RiskSelect.Provider>

            </SetTriggerSelect.Provider>
            </TriggerSelect.Provider>

          </SetText.Provider>
        </Text.Provider>
    </div>
  )
}

export default UserData;