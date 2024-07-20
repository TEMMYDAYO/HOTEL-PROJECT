import React, { useState } from 'react';
import Custombtn from './Element/Custombtn';
import SendMessage from './Tabs/SendMessage';
import Request from './Tabs/Request';
import Reservation from './Tabs/Reservation';


const Information = () => {
  const [completed, setcompleted]=useState("send message");
  return (
    
    <div className='w-full min-h-screen bg-hotelhouse-img bg-cover bg-center text-white p-8'>

           <div className=' children:m-2 md:flex lg:flex'>

               <Custombtn Children="Send Message" Clickitem={()=>setcompleted("send message")}/>
               <Custombtn Children="Request Info" Clickitem={()=>setcompleted("request info")}/>
               <Custombtn Children="Make Reservation" Clickitem={()=>setcompleted("make reservation")}/>

           </div>
           {completed==="send message"&&<SendMessage/>}
           {completed==="request info"&&<Request/>}
           {completed==="make reservation"&&<Reservation/>}
          
           
    </div>
  )
}

export default Information