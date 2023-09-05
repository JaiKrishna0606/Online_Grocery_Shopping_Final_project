import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./signup.css";
import signuppage from "../Assets/signuppage.jpg"
function SignUp() {
  const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
      const handleChange =(e)=>
      {
        const{name,value} = e.target;
        setFormData(
            {
                ...formData,
                [name]: value
            }
        )
      };
      const handleSubmit = async ()=>
      {
        const response = await axios.post('http://127.0.0.1:8080/adddonor', formData)
        console.log(response.data)
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
          });
          navigate(`/cart/${response.data.transaction_id}`);/////

      };
      const handleLogin = () =>
      {
        navigate('/login');
      }
  return (
    <div className='nn'>
        <h1 className='nnn'> Sign Up</h1>
        <label className='nnnn'>First Name </label>
        <input  name='firstName' onChange={handleChange} type='text'></input>
        <br></br>
        <label>Last Name </label>
        <input name='lastName'  onChange={handleChange} type='text'></input>
        <br></br>
        <label>Email </label>
        <input  name='email' onChange={handleChange} type='text'></input>
        <br></br>
        <label>Password </label>
        <input  name='password' onChange={handleChange} type='text'></input>
        <br></br>
        <button  className = 'n'onClick={handleSubmit}>Sign Up</button>
        <br></br>
        <label><h4>Already a user?</h4></label>
        <button className='n' onClick={handleLogin}>Login</button>
    </div>
  )
}

export default SignUp




