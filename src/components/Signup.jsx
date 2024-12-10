import React from 'react'
import '../App.css'
import 'antd/dist/reset.css';
import { Button, Input, Form, Checkbox } from 'antd';
import { useNavigate  } from 'react-router-dom';
import { useState } from 'react';

const Signup = () => {

  const navigate = useNavigate();

  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // function to route for OTP verification
  const handleRedirect = () => {
    
    if(!email){
      alert('Email required');
    }
    else if(!password){
      alert('Password required');
    }else{
      navigate('/Otp');
    }


    }

  

  return (
    <div className='w-full h-screen flex'>
         <div className='w-2/4 h-screen bg-red-600'>
        <img src="./images/Marketing-amico.png" alt="" />
      </div>
      <div className='p-8 w-2/4 h-screen flex flex-col items-center'>
        <div className='w-full pb-10'>
          <img src="/src/assets/logo-87.svg" className='w-3/12 h-20' alt="" />
        </div>
        <h1 className='mb-16 font-sans font-semibold text-4xl cursor-default text-black'>Get Started Now</h1>
        <Form className='flex flex-col w-2/4 px-5'>
          <Form.Item label="Email address" name='email' className='m-0 font-semibold'></Form.Item>
          <Input size='large' type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your Email' className='mb-8' allowClear required></Input>

          <Form.Item label="Password" name='password' className='m-0 font-semibold'></Form.Item>
          <Input.Password size='large' placeholder='Enter your Password' value={password} onChange={(e)=>setPassword(e.target.value)} className='mb-3' maxLength={10} required></Input.Password>

          <div className='gap-2 flex mb-8'>
            <Checkbox></Checkbox>
            <p className='text-black font-normal text-sm'>I agree to <a href="#" className='text-blue-600 underline'>terms</a> and <a href="#" className='text-blue-600 underline'>policies</a></p>
          </div>
          <Form.Item>
            <Button size='large' type='primary' block htmlType='submit' onClick={handleRedirect} className='!bg-red-500 hover:!bg-red-600'>Send OTP</Button>
          </Form.Item>

        </Form>
      </div>
    </div>
  )
}

export default Signup