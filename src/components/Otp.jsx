import React from 'react'
import { Form, Button, Image, Input } from 'antd'
import { Flex, Typography } from 'antd';
import { ArrowLeftOutlined } from '@ant-design/icons'
import testSvg from '/src/assets/Menu.svg'
import testSvg1 from '/src/assets/Menu(1).svg'
import testSvg2 from '/src/assets/Menu(2).svg'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '/src/assets/logo-87.svg';


const { Link, Text } = Typography;

const Otp = () => {

  const navigate = useNavigate();

  //function to redirect to Multi-Step Form
  const handleRedirect = () => {
    navigate('/Form');
  }
  const homePage = () => {
    navigate('/');
  }

  // usestate for timer
  const [timeLeft, setTimeLeft] = useState(99);

  useEffect(() => {
    // Exit if the countdown is complete
    if (timeLeft <= 0) return;

    // Set up the interval to decrement the timer
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, [timeLeft]);

  // Convert seconds to minutes:seconds format
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <div className='h-screen w-full flex'>
      <div className='bg-custom-gradient w-2/4 h-screen flex flex-col p-10 gap-5'>
        <Button type='text' size='large' className='text-white-main font-semibold w-1/6' onClick={homePage} icon={<ArrowLeftOutlined style={{ color: 'white' }} />}>Back</Button>
        <h1 className='mt-20 text-white-main tracking-wide font-bold text-center text-4xl cursor-default'>Layout Cards</h1>
        <div className='w-full  p-5 flex justify-center items-center box-border'>
          <Image src={testSvg} className='rounded-lg'></Image>
        </div>
        <div className='w-full gap-10 p-5 flex box-border'>
          <Image src={testSvg2} className='rounded-lg'></Image>
          <Image src={testSvg1} className='rounded-lg'></Image>
        </div>
      </div>
      <div className='w-2/4 h-screen flex flex-col p-10 gap-5'>
        <img src={logo} className='w-3/12 mt-8 ml-5' alt="" />
        <Form className='mt-20  w-100 h-auto  flex flex-col gap-4  items-center'>
          <h1 className='text-5xl font-extrabold ' >Verify your Email</h1>
          <Text>Please enter the 6 digit code we just sent to m*********@gmail.com</Text>
          <div className='flex flex-col gap-5 w-3/6 '>
            <Input.OTP length={6} size='large' />
            <Button type='primary' size='large' onClick={handleRedirect} className='!bg-red-500 hover:!bg-red-600'>Verify</Button>
            <p className="text-black">
              {timeLeft > 0 ?
                `Wait ${formatTime(timeLeft)} seconds before requesting a new code.` :
                <a href="#" className="text-blue-500">You can now request a new code!</a>
              }
            </p>
          </div>
        </Form>
        <div className='pl-12 h-4/5 flex items-end justify-center  pb-10 w-100'>
          <p className='text-black'>By continuing, you're agreeing to Nobody's  <a href="#" className='text-blue-500'>Terms of Service</a>, <a href="#" className='text-blue-500'>Privacy Policy</a> and <a href="#" className='text-blue-500'>Cookie Policy</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Otp