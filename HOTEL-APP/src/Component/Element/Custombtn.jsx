import React from 'react'

const Custombtn = ({Clickitem,Btnpadding,Children}) => {
  return (
    <div>
       <button onClick={Clickitem} className={`px-12 py-3 bg-white/10 rounded-md animate-pulse font-bold ring-2 ring-offset-2 uppercase ${Btnpadding}`}>{Children}</button>
    </div>
  )
}

export default Custombtn
