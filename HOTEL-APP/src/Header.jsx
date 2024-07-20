import {useState} from 'react'
import { Link } from 'react-router-dom'
import {MenuOutlined}from "@material-ui/icons"
import { NavMobile } from './NavMobile' 

 export const Header = () => {
  const [Active, setActive]=useState(false)
  const ShowMenu = ()=>{setActive(!Active)}
  return (

    <div className='w-full  absolute lg:flex items-center flex justify-between'>
       <span className=' left-0 top-0 font-extrabold text-3xl text-white font-serif select-none'>SAMZONIC</span>
        <ul className=' hidden lg:flex gap-4 uppercase p-6 justify-between items-center font-medium left-0 top-0'>
         <li>  <Link to ='/' >Home</Link> </li>
         <li>  <Link to ='/'>Pricing</Link></li>
         <li>  <Link to ='/'>Works</Link></li>
         <li>  <Link to ='/'>Clients</Link></li>
         <li>  <Link to ='/'>Testimonials</Link></li>
         <li>  <Link to ='/'>About</Link></li>
         <li>  <Link to ='/Login'>Login</Link></li>
        </ul>
        <NavMobile Active={Active} ShowMenu={ShowMenu}/>
        <div className='lg:hidden scale-150'>
        <MenuOutlined  onClick={ShowMenu} className='cursor-pointer'/>
         
        </div>
    </div>

  )
}

