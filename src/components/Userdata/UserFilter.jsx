import React, { useContext, useEffect, useState } from 'react'

import { SetText,SetTriggerSelect,SetRiskSelect } from '../UserData';

import './userdatastyles/userfilter.css';

function UserFilter() {

  const [ search,setSearch ] = useState('');

  const [ triggerSelect,setTriggerSelect ] = useState(false);
  const [ triggervalue,setTriggerValue ] = useState('');

  const [ riskSelect,setRiskSelect ] = useState(false);
  const [ riskvalue,setRiskValue ] = useState('');

  const setText = useContext(SetText);
  const setTrigger = useContext(SetTriggerSelect);
  const setRisk = useContext(SetRiskSelect);

  const handleTriggerAction = () => {
    setTriggerSelect(!triggerSelect);
  }

  const handleRiskAction = () => {
    setRiskSelect(!riskSelect);
  }

  useEffect(() => {
    setText(search);
  },[ search ]);

  useEffect(() => {
    setTrigger(triggervalue);
  },[ triggervalue ]);

  useEffect(() => {
    setRisk(riskvalue);
  },[ riskvalue ]);

  const handleChange = (value) => {
    setSearch(value);
  }

  return (
    <div id='filter_cont'>
      <section id='search_cont'>
        <span id='input_search_icon'>
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.25 3C5.3505 3 3 5.3505 3 8.25C3 11.1495 5.3505 13.5 8.25 13.5C11.1495 13.5 13.5 11.1495 13.5 8.25C13.5 5.3505 11.1495 3 8.25 3ZM1.5 8.25C1.5 4.52208 4.52208 1.5 8.25 1.5C11.9779 1.5 15 4.52208 15 8.25C15 11.9779 11.9779 15 8.25 15C4.52208 15 1.5 11.9779 1.5 8.25Z" fill="#050505"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9571 11.9572C12.25 11.6643 12.7249 11.6643 13.0178 11.9572L16.2803 15.2197C16.5732 15.5126 16.5732 15.9874 16.2803 16.2803C15.9874 16.5732 15.5125 16.5732 15.2196 16.2803L11.9571 13.0178C11.6642 12.7249 11.6642 12.2501 11.9571 11.9572Z" fill="#050505"/>
        </svg>
        </span>
        <input type="text" placeholder='Search' onChange={(e) => handleChange(e.target.value)}/>
      </section>
      <section className='filter_action_cont' id='filterbtn1'>
        <button className='filterbtn' onClick={handleTriggerAction}>
          Trigger Reason
          <span className='sort_select_icon' style={{ transform : triggerSelect && 'rotate(0deg)' }}>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.46967 0.46967C4.76256 0.176777 5.23744 0.176777 5.53033 0.46967L9.28033 4.21967C9.57322 4.51256 9.57322 4.98744 9.28033 5.28033C8.98744 5.57322 8.51256 5.57322 8.21967 5.28033L5 2.06066L1.78033 5.28033C1.48744 5.57322 1.01256 5.57322 0.71967 5.28033C0.426777 4.98744 0.426777 4.51256 0.71967 4.21967L4.46967 0.46967Z" fill="var(--contentprimary)"/>
                </svg>
          </span>
        </button>
        <div className='filter_select_action' style={{ display : triggerSelect && 'block' }}>
          <ul>
            <li onClick={() => setTriggerValue('Hard Flag')} >Hard Flag</li>
            <li onClick={() => setTriggerValue('Temp Flag')} >Temp Flag</li>
            <li onClick={() => setTriggerValue('Restricted unflag')} >Restricted unflag</li>
            <li onClick={() => setTriggerValue('Un flag')} >Un flag</li>
            <li onClick={() => setTriggerValue('Reviewed')} >Reviewed</li>
            <li onClick={() => setTriggerValue('All')} >All</li>
          </ul>
        </div>
      </section>
      <section className='filter_action_cont' id='filterbtn2'>
        <button className='filterbtn' onClick={handleRiskAction}>
          Risk Level
          <span className='sort_select_icon' style={{ transform : riskSelect && 'rotate(0deg)' }}>
                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.46967 0.46967C4.76256 0.176777 5.23744 0.176777 5.53033 0.46967L9.28033 4.21967C9.57322 4.51256 9.57322 4.98744 9.28033 5.28033C8.98744 5.57322 8.51256 5.57322 8.21967 5.28033L5 2.06066L1.78033 5.28033C1.48744 5.57322 1.01256 5.57322 0.71967 5.28033C0.426777 4.98744 0.426777 4.51256 0.71967 4.21967L4.46967 0.46967Z" fill="var(--contentprimary)"/>
                </svg>
          </span>
        </button>
        <div className='filter_select_action' style={{ display : riskSelect && 'block' }}>
          <ul>
            <li onClick={() => setRiskValue('Low')} >Low</li>
            <li onClick={() => setRiskValue('Medium')} >Medium</li>
            <li onClick={() => setRiskValue('High')} >High</li>
            <li onClick={() => setRiskValue('All')} >All</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default UserFilter