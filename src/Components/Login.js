import React, { useState } from 'react'
import pngImage from '../images/../images/banner.jpg'
import '../CascadingStyleSheet/login.css'
import CarForm from './CarForm';

const Login = () => {

    localStorage.setItem('carLogin',JSON.stringify({username:"dealer",password:123456}));

    const[userInput,setuserInput] = useState({
        username:"",
        password:""
    });
    const[login,setLogin] = useState(false);
    const[error,setError] = useState(false);

    function handleChange(key,value){
        setuserInput({...userInput,[key]:value})
        setError(false)
    }

    function handleClick(){
        let dataLocalStorage = JSON.parse(localStorage.getItem("carLogin"));
        dataLocalStorage.username==userInput.username && dataLocalStorage.password==userInput.password?setLogin(true):setError(true)
    }
  return (
    <>
    {login===true?<CarForm/>:
    <div className='main-container'>
        <div className='Top-container'>
            <div className='leftConatiner'>
                <div className='quote'>
                    <h1 className='slogan'>Accelerating the Future.</h1>
                </div>
                <div className='Top-conatiner-form'>
                    <h1>Login</h1>
                        <input className="inputFieldUser" onChange={(e)=>handleChange('username',e.target.value)} type='text' placeholder='Enter Your Username'></input>
                        <input className="inputFieldUser" onChange={(e)=>handleChange('password',e.target.value)} type='password' placeholder='Enter Your Password'></input>
                        {error===true?<div style={{color:"red",fontWeight:600}}>username or password is incorrect</div>:null}
                        <button className='loginBtn' onClick={handleClick}>Login</button>
                </div>
            </div>
            <div className='Top-container-Image'>
                <img src={pngImage} alt='carPng' className='pngImage'></img>
            </div>
        </div>
    </div>
}
</>
  )
}

export default Login