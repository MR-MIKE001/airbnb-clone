import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";



export default function Register(){
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

   async function registerUser(e){
    e.preventDefault();
    try{
        await axios.post("/register",{
            name,
            email,
            password
    
         })
    
        alert("registreation successfullnolw u can login")     
    } catch(e){
        console.log(e);
    }
   
    }
    return (
        <div className="mt-4 grow flex items-center justify-around">
        <div className="mb-64" >
        <h1 className="text-4xl text-center mb-4">register</h1>
            <form className="max-w-md mx-auto" onSubmit={registerUser}>
                <input type="text" placeholder="mike IB" value={name} 
                onChange={e=>{setName(e.target.value)}}/>
                <input type="email" placeholder="your@email.com" value={email} 
                onChange={e=>{setEmail(e.target.value)}}/>
                <input type="password" placeholder="password" value={password} 
                onChange={e=>{setPassword(e.target.value) }}/>
                <button className="primary" >register</button>
                <div className="text-center py-2 text-gray-500">
                already a member ? <Link className="underline text-black" to={"/loging"}>
                login </Link></div>
            </form>
        </div>
        </div>
    )
}