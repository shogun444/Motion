"use client"

import { useState } from "react";
import {motion} from "motion/react"
export default function Dashboard(){
  const [size,setSize] = useState(false)

   const dashboardStats = [
  {
    id: 1,
    title: "Total Users",
    value: "12,480",
    percentage: "+8.2%",
    increment: "+945 users this month",
    trend: "up",
  },
  {
    id: 2,
    title: "Revenue",
    value: "$48,750",
    percentage: "+12.5%",
    increment: "+$5,420 this month",
    trend: "up",
  },
  {
    id: 3,
    title: "Conversion Rate",
    value: "4.6%",
    percentage: "-0.8%",
    increment: "-0.3% vs last month",
    trend: "down",
  },
  {
    id: 4,
    title: "Active Sessions",
    value: "1,342",
    percentage: "+5.1%",
    increment: "+65 active users today",
    trend: "up",
  },
];

const nav=[{
  id : 1,
  name : "Home",
  svg : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house-icon lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>},
  {
  id : 2,
  name : "Analytics",
  svg : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chart-no-axes-combined-icon lucide-chart-no-axes-combined"><path d="M12 16v5"/><path d="M16 14v7"/><path d="M20 10v11"/><path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15"/><path d="M4 18v3"/><path d="M8 14v7"/></svg>},{
  id : 3,
  name : "Users",
  svg : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M16 3.128a4 4 0 0 1 0 7.744"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><circle cx="9" cy="7" r="4"/></svg>},{
  id : 4,
  name : "Settings",
  svg : <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-settings-icon lucide-settings"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"/><circle cx="12" cy="12" r="3"/></svg>},
]
const sidebarVarient ={
  open : {
    width : "16rem"
  },
  closed : {
    width : "4rem"
  }
}

const childvarint ={
  open : {
    opacity : 1,
    y :4,
  },
  closed : {
    opacity : 0,
    y: -10
  }
}
const parentVarient = {
  open : 
  
  {
     opacity : 1,
    transition : {
     
  staggerChildren : 0.1,
    delayChildren : 0.01
    }
  
  },
  closed : {
     transition :
    {
  
      staggerChildren : 0.1,
    staggerDirection : -1
  }
   }
}
  return(<>
  <div className="flex h-screen">
    
    {size ?
    <div className="w-70 p-4  bg-neutral-50  shadow-md"> 
    <motion.div 

    variants={sidebarVarient}
    animate = { size ? "open" : "closed"}
    transition={{
      duration : 0.3,
      ease : "easeInOut"
    }}
    className="w-16 flex justify-between items-center">
    <h1 className="text-lg font-semibold ">Dashboard</h1>
    <button className="p-2 shadow-md rounded-full bg-neutral-100"  onClick={()=>setSize(prev => !prev)}> 
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-right-icon lucide-chevrons-right"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>
    </button>
</motion.div>
    <motion.div 
 
    variants={parentVarient}
    
      animate={size? "open" : "closed"}
    className="flex-col  space-y-3 pt-5">
      
      {nav.map((itm)=>(
        <motion.div 
        initial={{opacity : 0}}
        variants={childvarint}
  
        key={itm.id}  className="flex items-center justify-between"> 
        {itm.svg}
        
        <h1 className="font-semibold opacity-80">{itm.name}</h1>
    </motion.div>
    
    ))}
    </motion.div>
    </div> 
    : 
    <motion.div 
   variants={parentVarient}
    animate={size ? "open" : "closed"}
    className="w-16 h-full p-2  bg-neutral-50 shadow-md flex-col "> 
   <button className="p-2 shadow-md rounded-full bg-neutral-100"  onClick={()=>setSize(prev => !prev)}> 
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevrons-right-icon lucide-chevrons-right"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>
    </button>
    <div>{nav.map((itm)=>(<motion.div 
       variants={childvarint}
   
    className="p-2 pl-2"  key={itm.id}>{itm.svg}</motion.div>))}</div>
    </motion.div>
    }
    <div></div>
  <div className="w-full h-15 flex items-center p-2 bg-neutral-200  justify-between">
  
  <h1 className=" text-lg font-semibold ">Overview</h1>

 <div className="flex items-center gap-4"> 
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell-icon lucide-bell"><path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/></svg>
  <h1 className="h-4 w-2 rounded-full p-5 bg-neutral-500"></h1>
 </div>
  </div>

 </div>
 <div className="flex absolute top-15 left-100 gap-5 justify-center"> 
  {dashboardStats.map((itm)=>(
 <div key={itm.id} className="p-7 text-sm bg-neutral-50 shadow-lg  rounded-md">
  <div className="flex justify-between items-center gap-4">
    <h1 >{itm.title}</h1>
  <h1 className="p-1 text-amber-50 bg-green-500 rounded-lg">{itm.percentage}</h1>
  </div>
  
  <h1 className="font-semibold pt-2 text-lg">{itm.value}</h1>
  <h1 className="opacity-85 pt-2">{itm.increment}</h1>
  </div>
  ))}
 </div>
  </>)
}