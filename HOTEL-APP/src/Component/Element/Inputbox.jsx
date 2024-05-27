import React from 'react'

const Inputbox = ({Type,Value,Placevalue}) => {
  return (
    <div className=' w-full'>
       <label>{Value}</label>
       <input  type={Type} className=' w-full p-4 text-slate-100 outline-none border-2 bg-transparent' placeholder={Placevalue}/>
    </div>
  )
}

export default Inputbox
