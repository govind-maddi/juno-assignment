import React, { useContext, useEffect, useRef, useState } from 'react'

import { RiskSelect, Text, TriggerSelect } from '../UserData';
import { PendingTab, CompletedTab } from '../Layout';

import UserTableRow from './UserTableRow';
import UserTableRow1 from './UserTableRow1';

import './userdatastyles/usertable.css';

function UserTable() {

  const [ pendingTable,setPendingTable ] = useState([]);
  const [ filterTable,setfilterTable ] = useState([]);
  const [ defaultSortTable,setDefaultSortTable ] = useState([]);

  const [ completedTable,setCompletedTable ] = useState([]);
  const [ filterCompTable,setFilterCompTable ] = useState([]);
  const [ defaultCompSortTable,setDefaultCompTable ] = useState([]);

  const sortFlag = useRef(false);

  const text = useContext(Text);
  const trigger = useContext(TriggerSelect);
  const risk = useContext(RiskSelect);

  const tab1 = useContext(PendingTab);
  const tab2 = useContext(CompletedTab);

/* ------------------------------------------------------------------- */
  const defaultSortRisk = () => {
    if( sortFlag.current === true )
    {
      setfilterTable(defaultSortTable);
      sortFlag.current = false;
    }
  }

  const ascSortRisk = () => {
    
    const customOrder = ['Low', 'Medium', 'High'];

    const temp = [];

    for (let i = 0; i < filterTable.length; i++) {
        temp.push(filterTable[i]);
    }

    temp.sort((a, b) => {
      const indexA = customOrder.indexOf(a.risk_level);
      const indexB = customOrder.indexOf(b.risk_level);

      return indexA - indexB;
    });

    if(sortFlag.current === false)
      setDefaultSortTable(filterTable);
    
    sortFlag.current = true;

      setfilterTable(temp);
  }
  /* ------------------------------------------------------------------- */

/* ------------------------------------------------------------------- */
const defaultCompletedSortRisk = () => {
  if( sortFlag.current === true )
  {
    setFilterCompTable(defaultCompSortTable);
    sortFlag.current = false;
  }
}

const ascCompletedSortRisk = () => {
  
  const customOrder = ['Low', 'Medium', 'High'];

  const temp = [];

  for (let i = 0; i < filterCompTable.length; i++) {
      temp.push(filterCompTable[i]);
  }

  temp.sort((a, b) => {
    const indexA = customOrder.indexOf(a.risk_level);
    const indexB = customOrder.indexOf(b.risk_level);

    return indexA - indexB;
  });

  if(sortFlag.current === false)
    setDefaultCompTable(filterCompTable);
  
  sortFlag.current = true;

    setFilterCompTable(temp);
}
/* ------------------------------------------------------------------- */

/* ------------------------------------------------------------------- */
const defaultCompletedSortQueue = () => {
  if(sortFlag.current === true)
  {
    setFilterCompTable(defaultCompSortTable);
    sortFlag.current = false;
  }
}
const ascCompletedSortQueue = () => {
  
  const temp = [];

  for (let i = 0; i < filterCompTable.length; i++) {
    temp.push(filterCompTable[i]);
  }

  temp.sort((a, b) => {
    const x = a.time_to_close;
    const y = b.time_to_close;

    if (x < y) {return -1;}
    if (x > y) {return 1;}

    return 0;
  })
  if(sortFlag.current === false)
    setDefaultCompTable(filterCompTable);

  sortFlag.current = true;

  setFilterCompTable(temp);
}
/* --------------------------------------------------------------------- */

  /* ------------------------------------------------------------------- */
  const defaultSortQueue = () => {
    if(sortFlag.current === true)
    {
      setfilterTable(defaultSortTable);
      sortFlag.current = false;
    }
  }
  const ascSortQueue = () => {
    
    const temp = [];

    for (let i = 0; i < filterTable.length; i++) {
      temp.push(filterTable[i]);
    }

    temp.sort((a, b) => {
      const x = a.in_queue_for;
      const y = b.in_queue_for;

      if (x < y) {return -1;}
      if (x > y) {return 1;}

      return 0;
    })
    if(sortFlag.current === false)
      setDefaultSortTable(filterTable);

    sortFlag.current = true;

    setfilterTable(temp);
  }
/* --------------------------------------------------------------------- */

/* --------------------------------------------------------------------- */

const defaultCompletedSortDate = () => {
  if(sortFlag.current === true)
  {
    setFilterCompTable(defaultCompSortTable);
    sortFlag.current = false;
  }
}
const ascCompletedSortDate = () => {
  const temp = [];

  for (let i = 0; i < filterCompTable.length; i++) {
    temp.push(filterCompTable[i]);
  }

  temp.sort((a, b) => {
    const x = a.date_added_on;
    const y = b.date_added_on;

    if (x < y) {return -1;}
    if (x > y) {return 1;}

    return 0;      
  })

  if(sortFlag.current === false)
    setDefaultCompTable(filterCompTable);

  sortFlag.current = true;

  setFilterCompTable(temp);
}
/* ----------------------------------------------------------------------- */

/* ----------------------------------------------------------------------- */
  const defaultSortDate = () => {
    if(sortFlag.current === true)
    {
      setfilterTable(defaultSortTable);
      sortFlag.current = false;
    }
  }
  const ascSortDate = () => {
    const temp = [];

    for (let i = 0; i < filterTable.length; i++) {
      temp.push(filterTable[i]);
    }

    temp.sort((a, b) => {
      const x = a.date_added_on;
      const y = b.date_added_on;

      if (x < y) {return -1;}
      if (x > y) {return 1;}

      return 0;      
    })

    if(sortFlag.current === false)
      setDefaultSortTable(filterTable);

    sortFlag.current = true;

    setfilterTable(temp);
  }


  useEffect(() => {
    const filtering = () => {
      if(trigger === 'All')
      {
          setfilterTable(pendingTable);
      }
      else
      {
        const temp = [];
        for(let i= 0; i < filterTable.length; i++)
        {
          if(filterTable[i].trigger_reason.includes(trigger))
          {
            temp.push(filterTable[i]);
          }
        }
        setfilterTable(temp);
      }
    }
    filtering();
  },[ trigger ]);

  useEffect(() => {
    const filtering = () => {
      if(risk === 'All')
      {
          setfilterTable(pendingTable);
          setFilterCompTable(completedTable);
      }
      else
      {
        const temp = [];
        const temp1 = [];
        for(let i= 0; i < filterTable.length; i++)
        {
          if(filterTable[i].risk_level.includes(risk))
          {
            temp.push(filterTable[i]);
          }
        }

        for(let i= 0; i < filterCompTable.length; i++)
        {
          if(completedTable[i].risk_level.includes(risk))
          {
            temp1.push(filterCompTable[i]);
          }
        }

        setfilterTable(temp);
        setFilterCompTable(temp1);
      }
    }
    filtering();
  },[ risk ]);


  useEffect(() => {
    const filtering = () => {
      if(text === '')
      {
        setfilterTable(pendingTable);
      }
      else{
        const temp = [];
        for(let i= 0; i < filterTable.length; i++)
        {
          if(filterTable[i].username.includes(text))
          {
            temp.push(filterTable[i]);
          }
        }
        setfilterTable(temp);
      }
    }

    const filtering1 = () => {
      if(text === '')
      {
        setFilterCompTable(completedTable);
      }
      else{
        const temp = [];
        for(let i= 0; i < filterCompTable.length; i++)
        {
          if(filterCompTable[i].username.includes(text))
          {
            temp.push(filterCompTable[i]);
          }
        }
        setFilterCompTable(temp);
      }
    }

    filtering();
    filtering1();
    

  },[ text ])

  useEffect(() => {

    const fetchTableData = async () => {
      try{
        const usertable = await fetch('details.json');
        const userdata = await usertable.json();

        const pendingtable = [];
        const completedtable = [];

        userdata.forEach(detail => {
          if(detail.tab === "pending")
            pendingtable.push(detail);
          else
            completedtable.push(detail);
        });

        setPendingTable(pendingtable);
        setfilterTable(pendingtable);

        setCompletedTable(completedtable);
        setFilterCompTable(completedtable);
      }
      catch(err){
        console.log(err.msg);
      }
      finally{
        console.log('finally');
      }
    }
    fetchTableData();

  },[])


  return (
    <div id='table_cont'>

      {
        tab1 
        && 
        <div className='table'>
        <section>

          <header className='tablecell headercell'>User</header>

          <header className='tablecell headercell'>Risk Level 
          <span className='up' onClick={defaultSortRisk}>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46967 0.46967C4.76256 0.176777 5.23744 0.176777 5.53033 0.46967L9.28033 4.21967C9.57322 4.51256 9.57322 4.98744 9.28033 5.28033C8.98744 5.57322 8.51256 5.57322 8.21967 5.28033L5 2.06066L1.78033 5.28033C1.48744 5.57322 1.01256 5.57322 0.71967 5.28033C0.426777 4.98744 0.426777 4.51256 0.71967 4.21967L4.46967 0.46967Z" fill="#1A1A1A"/>
            </svg>
          </span>
          <span className='down' onClick={ascSortRisk}>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.71967 0.71967C1.01256 0.426777 1.48744 0.426777 1.78033 0.71967L5 3.93934L8.21967 0.71967C8.51256 0.426777 8.98744 0.426777 9.28033 0.71967C9.57322 1.01256 9.57322 1.48744 9.28033 1.78033L5.53033 5.53033C5.23744 5.82322 4.76256 5.82322 4.46967 5.53033L0.71967 1.78033C0.426777 1.48744 0.426777 1.01256 0.71967 0.71967Z" fill="#ADADAD"/>
            </svg>
          </span>
          </header>

          <header className='tablecell headercell'>Trigger Reason</header>

          <header className='tablecell headercell'>In queue for
          <span className='up' onClick={defaultSortQueue}>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46967 0.46967C4.76256 0.176777 5.23744 0.176777 5.53033 0.46967L9.28033 4.21967C9.57322 4.51256 9.57322 4.98744 9.28033 5.28033C8.98744 5.57322 8.51256 5.57322 8.21967 5.28033L5 2.06066L1.78033 5.28033C1.48744 5.57322 1.01256 5.57322 0.71967 5.28033C0.426777 4.98744 0.426777 4.51256 0.71967 4.21967L4.46967 0.46967Z" fill="#1A1A1A"/>
            </svg>
          </span>
          <span className='down' onClick={ascSortQueue}>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.71967 0.71967C1.01256 0.426777 1.48744 0.426777 1.78033 0.71967L5 3.93934L8.21967 0.71967C8.51256 0.426777 8.98744 0.426777 9.28033 0.71967C9.57322 1.01256 9.57322 1.48744 9.28033 1.78033L5.53033 5.53033C5.23744 5.82322 4.76256 5.82322 4.46967 5.53033L0.71967 1.78033C0.426777 1.48744 0.426777 1.01256 0.71967 0.71967Z" fill="#ADADAD"/>
            </svg>
          </span>
          </header>

          <header className='tablecell headercell'>Date added on
          <span className='up1' onClick={defaultSortDate}>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46967 0.46967C4.76256 0.176777 5.23744 0.176777 5.53033 0.46967L9.28033 4.21967C9.57322 4.51256 9.57322 4.98744 9.28033 5.28033C8.98744 5.57322 8.51256 5.57322 8.21967 5.28033L5 2.06066L1.78033 5.28033C1.48744 5.57322 1.01256 5.57322 0.71967 5.28033C0.426777 4.98744 0.426777 4.51256 0.71967 4.21967L4.46967 0.46967Z" fill="#1A1A1A"/>
            </svg>
          </span>
          <span className='down1' onClick={ascSortDate}>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.71967 0.71967C1.01256 0.426777 1.48744 0.426777 1.78033 0.71967L5 3.93934L8.21967 0.71967C8.51256 0.426777 8.98744 0.426777 9.28033 0.71967C9.57322 1.01256 9.57322 1.48744 9.28033 1.78033L5.53033 5.53033C5.23744 5.82322 4.76256 5.82322 4.46967 5.53033L0.71967 1.78033C0.426777 1.48744 0.426777 1.01256 0.71967 0.71967Z" fill="#ADADAD"/>
            </svg>
          </span>
          </header>

          <header className='tablecell headercell'>Previously reviewed</header>

        </section>
        {
          filterTable.map((user,index) => {
            return <section key={index}><UserTableRow user={user}/></section>
          })
        }
      </div>
      }

      {
        tab2
        &&
        <div className='table'>
        <section>

          <header className='tablecell headercell'>User</header>

          <header className='tablecell headercell'>Risk Level 
          <span className='up' onClick={defaultCompletedSortRisk}>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46967 0.46967C4.76256 0.176777 5.23744 0.176777 5.53033 0.46967L9.28033 4.21967C9.57322 4.51256 9.57322 4.98744 9.28033 5.28033C8.98744 5.57322 8.51256 5.57322 8.21967 5.28033L5 2.06066L1.78033 5.28033C1.48744 5.57322 1.01256 5.57322 0.71967 5.28033C0.426777 4.98744 0.426777 4.51256 0.71967 4.21967L4.46967 0.46967Z" fill="#1A1A1A"/>
            </svg>
          </span>
          <span className='down' onClick={ascCompletedSortRisk}>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.71967 0.71967C1.01256 0.426777 1.48744 0.426777 1.78033 0.71967L5 3.93934L8.21967 0.71967C8.51256 0.426777 8.98744 0.426777 9.28033 0.71967C9.57322 1.01256 9.57322 1.48744 9.28033 1.78033L5.53033 5.53033C5.23744 5.82322 4.76256 5.82322 4.46967 5.53033L0.71967 1.78033C0.426777 1.48744 0.426777 1.01256 0.71967 0.71967Z" fill="#ADADAD"/>
            </svg>
          </span>
          </header>

          <header className='tablecell headercell'>Action Reason</header>

          <header className='tablecell headercell'>Time To Close
          <span className='up' onClick={defaultCompletedSortQueue}>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46967 0.46967C4.76256 0.176777 5.23744 0.176777 5.53033 0.46967L9.28033 4.21967C9.57322 4.51256 9.57322 4.98744 9.28033 5.28033C8.98744 5.57322 8.51256 5.57322 8.21967 5.28033L5 2.06066L1.78033 5.28033C1.48744 5.57322 1.01256 5.57322 0.71967 5.28033C0.426777 4.98744 0.426777 4.51256 0.71967 4.21967L4.46967 0.46967Z" fill="#1A1A1A"/>
            </svg>
          </span>
          <span className='down' onClick={ascCompletedSortQueue}>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.71967 0.71967C1.01256 0.426777 1.48744 0.426777 1.78033 0.71967L5 3.93934L8.21967 0.71967C8.51256 0.426777 8.98744 0.426777 9.28033 0.71967C9.57322 1.01256 9.57322 1.48744 9.28033 1.78033L5.53033 5.53033C5.23744 5.82322 4.76256 5.82322 4.46967 5.53033L0.71967 1.78033C0.426777 1.48744 0.426777 1.01256 0.71967 0.71967Z" fill="#ADADAD"/>
            </svg>
          </span>
          </header>

          <header className='tablecell headercell'>Date added on
          <span className='up1' onClick={defaultCompletedSortDate}>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M4.46967 0.46967C4.76256 0.176777 5.23744 0.176777 5.53033 0.46967L9.28033 4.21967C9.57322 4.51256 9.57322 4.98744 9.28033 5.28033C8.98744 5.57322 8.51256 5.57322 8.21967 5.28033L5 2.06066L1.78033 5.28033C1.48744 5.57322 1.01256 5.57322 0.71967 5.28033C0.426777 4.98744 0.426777 4.51256 0.71967 4.21967L4.46967 0.46967Z" fill="#1A1A1A"/>
            </svg>
          </span>
          <span className='down1' onClick={ascCompletedSortDate}>
            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.71967 0.71967C1.01256 0.426777 1.48744 0.426777 1.78033 0.71967L5 3.93934L8.21967 0.71967C8.51256 0.426777 8.98744 0.426777 9.28033 0.71967C9.57322 1.01256 9.57322 1.48744 9.28033 1.78033L5.53033 5.53033C5.23744 5.82322 4.76256 5.82322 4.46967 5.53033L0.71967 1.78033C0.426777 1.48744 0.426777 1.01256 0.71967 0.71967Z" fill="#ADADAD"/>
            </svg>
          </span>
          </header>

          <header className='tablecell headercell'>Action Taken By</header>

        </section>
        {
          filterCompTable.map((user,index) => {
            return <section key={index}><UserTableRow1 user={user}/></section>
          })
        }
      </div>
      }

    </div>
  )
}

export default UserTable;