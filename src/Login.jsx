import {Auth,Provider} from "./Configuration/config";
import {signInWithPopup,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import {useNavigate, Link} from "react-router-dom";
import { useState } from "react";
export const Login =()=> { 
  const [Registeremail, setRegisteremail]=useState("");
  const [Regpswd, setRegpswd]=useState("");
  const [Loginemail, setLoginemail]=useState("");
  const [Loginpswd, setLoginpswd]=useState("");
   
    const Navigate= useNavigate();
    const Signin = async()=>{
      try{
    await signInWithPopup(Auth,Provider.setCustomParameters({prompt:'select_account'}));
      Navigate("/");  
         }
       catch(error){alert(error)};
    } 
    const Createuser = async()=>{
      try{
      await createUserWithEmailAndPassword(Auth,Registeremail,Regpswd);
        }
        catch(error){alert(error)};
      } 
    const Loginuser = async()=>{
      try{
        await signInWithEmailAndPassword(Auth,Loginemail,Loginpswd);Navigate("/");
         }
      catch(error){alert(error)};
        } 
return (
<div className='w-full min-h-screen min-w-full bg-reception-img bg-center bg-cover'>
<div className=" flex justify-between  ">
<span className=' left-0 top-0 font-extrabold text-3xl text-white font-serif select-none'>SAMZONIC</span>
<ul className=' flex uppercase font-bold text-white underline left-0 top-0 justify-end'>
<li > <Link to ='/' >Home</Link> </li> </ul> </div>
    <h1 className=" uppercase font-bold text-white text-2xl text-center">Welcome To Login Page</h1> <div/>
    <div className="p-4">
    <h1 className="font-bold text-white text-2xl"> Register User </h1>
    <div className="flex w-full flex-col gap-2">
    <input className='w-full p-4 text-slate-100 outline-none border-2 border-black bg-transparent'placeholder="Email..." onChange={(e)=>{setRegisteremail(e.target.value)}}/>
    <input className=' w-full p-4 text-slate-100 outline-none border-2 border-black bg-transparent' placeholder="Password" onChange={(e)=>{setRegpswd(e.target.value)}}/>
    </div>
    <button className='items-center space-x-3  font-bold text-1.5xl bg-slate-800 px-1 py-1 rounded-md 
      focus:outline-none focus:ring-4 focus:ring-teal-600
      focus:ring-offset-2 text-slate-200' onClick={Createuser}> Create User</button> 
    </div>
    <div className=" w-full p-4"> 
    <h1 className="font-bold text-white text-2xl"> Login  </h1>
    <div className="flex w-full flex-col gap-2"> 
    <input className=' w-full p-4 text-slate-100 outline-none border-2 border-black bg-transparent' placeholder="Email..." onChange={(e)=>{setLoginemail(e.target.value)}}/>
    <input className=' w-full p-4 text-slate-100 outline-none border-2 border-black bg-transparent' placeholder="Password" type="Password" onChange={(e)=>{setLoginpswd(e.target.value)}}/>
    </div>
    <button className='flex items-center space-x-3  font-bold text-1.5xl bg-slate-800 px-1 py-1 rounded-md 
      focus:outline-none focus:ring-4 focus:ring-teal-600
      focus:ring-offset-2 text-slate-200' onClick={Loginuser}> Login</button>
    </div>
    <div className=" flex items-center flex-col gap-4">
    <h1 className=" px-1 py-1font-bold text-white text-2xl font-bold ">Sign In With Your Google Account To Continue?...</h1>
    <button className='flex items-center space-x-3  font-bold text-1.5xl bg-slate-800 px-1 py-1 rounded-md 
      focus:outline-none focus:ring-4 focus:ring-teal-600
      focus:ring-offset-2 text-slate-200' onClick={Signin}>Google Sign On</button>
      </div>
    </div>
)} 