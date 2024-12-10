import React from 'react'
import { Input, Steps, Typography, Dropdown, Space } from 'antd'
import { DownOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

const items = [
  {
    title: 'Finished',
    description: 'Business Type',
  },
  {
    title: 'In Progress',
    description: 'Business Details',
  },
  {
    title: 'Waiting',
    description: 'Authorized Representative',
  },
  {
    title: 'Waiting',
    description: 'Business Owners',
  },
  {
    title: 'Waiting',
    description: 'Company Directors',
  },
  {
    title: 'Waiting',
    description: 'Support Information',
  },
  {
    title: 'Waiting',
    description: 'Add Details',
  },
  {
    title: 'Waiting',
    description: 'Complete registration',
  },
]

const D_items = [
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
    key: '0',
  },
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item
      </a>
    ),
    key: '1',
  },
  {
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        3rd menu item
      </a>
    ),
  }
];

const Form = () => {


  return (
    <div className='w-full h-screen bg-white-primary flex flex-col items-center'>
      <h1 className='mt-5 text-black font-bold text-4xl text-center'>Multi-Step Process Form</h1>
      <div className='w-4/6 p-10 mb-10'>
        <Steps current={1} percent={60} labelPlacement='vertical' items={items}></Steps>
      </div>
      <div className='bg-white-main w-3/6 h-3/5 rounded-2xl px-10 py-16'>
        <Title level={2}>Tell us more about your business</Title>
        <Text className='text-gray-600 font-medium'>Your info is like the Wi-Fi password—totally crucial for keeping things running,
          impressing the money folks, and making sure you get top-notch service without any buffering!</Text>
        <div className='flex flex-wrap gap-5 pt-5 w-full'>
          <div className='w-2/5'>
            <Text>
              Legal Name <span className='text-red-500'>*</span>
            </Text>
            <Input size='large' className='mt-2 w-full' placeholder='Legal name'></Input>
          </div>
          <div className='w-2/5'>
            <Text>
              Doing as business <span className='text-red-500'>*</span>
            </Text>
            <Input size='large' className='mt-2 w-full' placeholder='Doing business as'></Input>
          </div>
          <div className='w-2/5'>
            <Text>
              Company Registration Number<span className='text-red-500'>*</span>
            </Text>
            <Input size='large' className='mt-2 w-full' placeholder='Company Registration Number'></Input>
          </div>
          <div className='w-2/5'>
            <Text>
              Random Registration Number<span className='text-red-500'>*</span>
            </Text>
            <Input size='large' className='mt-2 w-full' placeholder='Random Registration Number'></Input>
          </div>
          <div className='w-2/5'>
            <Text>
              Website URL <span className='text-red-500'>*</span>
            </Text>
            <Input size='large' className='mt-2 w-full' placeholder='Website URL'></Input>
          </div>
          <div className='w-2/5'>
            <Text>
              Industry Name <span className='text-red-500'>*</span>
            </Text>
            {/* <Dropdown menu={{ D_items, }} size='large' className='mt-2 w-full'>
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  Industry Name
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown> */}
          </div>
          <div className='w-2/5'>
            <Text>
              One Random Dropdown <span className='text-red-500'>*</span>
            </Text>
            <Input size='large' className='mt-2 w-full' placeholder='Options nai options'></Input>
          </div>
          <div className='w-2/5'>
            <Text>
              Which Dropdown would you like? <span className='text-red-500'>*</span>
            </Text>
            <Input size='large' className='mt-2 w-full' placeholder='More Options'></Input>
          </div>
          <div className='w-2/5'>
            <Text>
              Another Random Dropdown Apppears<span className='text-red-500'>*</span>
            </Text>
            <Input size='large' className='mt-2 w-full' placeholder='Return of the options'></Input>
          </div>
          <div className='w-2/5'>
            <Text>
              Account Usage Intent<span className='text-red-500'>*</span>
            </Text>
            <Input size='large' className='mt-2 w-full' placeholder='Account Usage Intent'></Input>
          </div>
          <div className='w-2/5'>
            <Text>
              Random count per month <span className='text-red-500'>*</span>
            </Text>
            <Input size='large' className='mt-2 w-full' placeholder='Put the value get the answer'></Input>
          </div>
          <div className='w-2/5'>
            <Text>
              Expected total visits in this page <span className='text-red-500'>*</span>
            </Text>
            <Input size='large' className='mt-2 w-full' placeholder='In Number'></Input>
          </div>
          <div className='w-2/5'>
            <Text>
              Purpose of using fake form <span className='text-red-500'>*</span>
            </Text>
            <Input size='large' className='mt-2 w-full' placeholder='Purpose of using fake form'></Input>
          </div>
          <div className='w-2/5'>
            <Text>
              Description <span className='text-red-500'>*</span>
            </Text>
            <Input size='large' className='mt-2 w-full h-full' placeholder='Product Description'></Input>
          </div>
          <div className='w-2/5'>
            <Text>
              Contact email <span className='text-red-500'>*</span>
            </Text>
            <Input size='large' className='mt-2 w-full' placeholder='Contact email'></Input>
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default Form