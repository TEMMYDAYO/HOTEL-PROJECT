import React from 'react'
import Custombtn from '../Element/Custombtn'
import Inputbox from '../Element/Inputbox'

const Request = () => {
  return (
    <div>
      <div className='py-3'>
         
         <Inputbox Value={"Email"} Placevalue={"samzonic@gmail.com"}/>
         
      </div>
      <div className='py-3'>
        <Custombtn Children=" Request Info"/>
      </div>
    </div>
  )
}

export default Request
