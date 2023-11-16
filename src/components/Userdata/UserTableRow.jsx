import React from 'react'

import './userdatastyles/usertablerow.css';

function UserTableRow( {user} ) {

    

  return (
    <>
        <article className='specialcell'>
            {user.username}<br/>
            <span>{user.email}</span>
            <span className='redirect'>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.75 5.25C3.55109 5.25 3.36032 5.32902 3.21967 5.46967C3.07902 5.61032 3 5.80109 3 6V14.25C3 14.4489 3.07902 14.6397 3.21967 14.7803C3.36032 14.921 3.55109 15 3.75 15H12C12.1989 15 12.3897 14.921 12.5303 14.7803C12.671 14.6397 12.75 14.4489 12.75 14.25V9.75C12.75 9.33579 13.0858 9 13.5 9C13.9142 9 14.25 9.33579 14.25 9.75V14.25C14.25 14.8467 14.0129 15.419 13.591 15.841C13.169 16.2629 12.5967 16.5 12 16.5H3.75C3.15326 16.5 2.58097 16.2629 2.15901 15.841C1.73705 15.419 1.5 14.8467 1.5 14.25V6C1.5 5.40326 1.73705 4.83097 2.15901 4.40901C2.58097 3.98705 3.15326 3.75 3.75 3.75H8.25C8.66421 3.75 9 4.08579 9 4.5C9 4.91421 8.66421 5.25 8.25 5.25H3.75Z" fill="#4643EE"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M10.5 2.25C10.5 1.83579 10.8358 1.5 11.25 1.5H15.75C16.1642 1.5 16.5 1.83579 16.5 2.25V6.75C16.5 7.16421 16.1642 7.5 15.75 7.5C15.3358 7.5 15 7.16421 15 6.75V3H11.25C10.8358 3 10.5 2.66421 10.5 2.25Z" fill="#4643EE"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.2803 1.71967C16.5732 2.01256 16.5732 2.48744 16.2803 2.78033L8.03033 11.0303C7.73744 11.3232 7.26256 11.3232 6.96967 11.0303C6.67678 10.7374 6.67678 10.2626 6.96967 9.96967L15.2197 1.71967C15.5126 1.42678 15.9874 1.42678 16.2803 1.71967Z" fill="#4643EE"/>
            </svg>

            </span>
        </article>
        <article className='highlightcell'>
                <>
                {user.risk_level === 'High' && <><span style={{backgroundColor:'#7D2424'}}></span><label style={{color:'#7D2424'}}>{user.risk_level}</label></>}
                {user.risk_level === 'Medium' && <><span style={{backgroundColor:'#88670F'}}></span><label style={{color:'#88670F'}}>{user.risk_level}</label></>}
                {user.risk_level === 'Low' && <><span style={{backgroundColor:'#006540'}}></span><label style={{color:'#006540'}}>{user.risk_level}</label></>}
                </>
                
        </article>
        <article className='tablecell'>
            {user.trigger_reason}
        </article>
        <article className='tablecell'>
            {user.in_queue_for}
        </article>
        <article className='tablecell datecell'>
            {user.date_added_on}
        </article>
        <article className='specialcell'>
            {user.previously_reviewed[0]}<br/>
            { 
                (user.previously_reviewed).length > 1 && <span>{user.previously_reviewed[1]}</span>
            }
        </article>
    </>
  )
}

export default UserTableRow;