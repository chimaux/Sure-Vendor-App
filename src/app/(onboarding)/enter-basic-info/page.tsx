"use client"
import React, { useEffect, useState } from 'react'
import Onboarding_layout from '../Onboarding_layout'
import { Button, Form, Input, Spin } from 'antd'
import FormItem from 'antd/es/form/FormItem'
import { useRouter } from 'next/navigation'
import Bottom_bar from '@/components/Bottom_bar'
import useOnboardingStore from '@/store/onboarding'
import Image from 'next/image'


const Page = () => {


  const set_tabs = useOnboardingStore((state) => state.set_onboarding_tab);

  useEffect(()=>{
    set_tabs({   
      tab1:true,
      tab2:true,
      tab3:false,
    })
  })


  const router = useRouter();
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = (): void => {
    setClicked((prev) => !prev);

      router.push("/create-your-store");

  }


  return (

    <div className="h-screen bg-[#fff] p-[1.25rem] flex flex-col min-h-0">
<Onboarding_layout
      top_text="Complete profile setup"
      sub_text="Connect your socials for quick setup"
/>

<div className='w-full flex justify-between items-center py-[10px] lg:justify-center lg:gap-x-[30px]'>
<Image
src="/social1.svg"
alt='social icon'
height={48}
width={101.33}
className='cursor-pointer'
/>
<Image
src="/social2.svg"
alt='social icon'
height={48}
width={101.33}
className='cursor-pointer'
/>
<Image
src="/social3.svg"
alt='social icon'
height={48}
width={101.33}
className='cursor-pointer'
/>
</div>


<p 
className='lg:text-center'
style={{
  color:"rgb(0 0 0 / 60%)"
}}>
Or enter it manually
</p>
      {/* <Form> */}
      <Form className="w-full flex flex-col items-center justify-between bg-[#fff] flex-grow "
      onFinish={handleClick}
      >
<div className='w-full lg:w-fit'>
<FormItem
         className="w-full lg:w-fit"
          name="name"
          rules={[
            {
              required: true,
              message: "Please input your name!",
            },
            {
              pattern: /^[A-Za-z\s]+$/,
              message: "Name can only contain letters and spaces!",
            },
            {
              min: 2,
              message: "Name must be at least 2 characters long!",
            },
          ]}
        >
          <Input
            type="text"
            placeholder="Full name"
            className="w-full h-[52px] px-[16px] py-[17px] rounded-[12px] font-[400] border mt-[24px]  lg:w-[50vw]"
          />
        </FormItem>
        <FormItem
         className="w-full lg:w-fit"
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your username!",
            },

            {
              min: 2,
              message: "username must be at least 2 characters long!",
            },
          ]}
        >
          <Input
            type="text"
            placeholder="Username"
            className="w-full h-[52px] px-[16px] py-[17px] rounded-[12px] font-[400] border  lg:w-[50vw]"
          />
        </FormItem>
        <FormItem
         className="w-full lg:w-fit"
          name="phoneNo"
          rules={[
            {
              required: true,
              message: "Please input your phone number!",
            },
            {
              pattern: /^(080|090|070|081|091)\d{8}$/,
              message: "Please enter a valid phone number!",
            },
            {
              max: 11,
              message: "Phone number input currently accepts only 11 digits",
            },
          ]}
        >
          <Input
            type="text"
      
            placeholder="Phone number"
            className="w-full h-[52px] px-[16px] py-[17px] rounded-[12px] font-[400] border  lg:w-[50vw]"
          />
        </FormItem>
        <FormItem
         className="w-full lg:w-fit"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
            {
              type: "email",
              message: "Please enter a valid email!",
            },
          ]}
        >
          <Input
            type="text"
            placeholder="Email"
            className="w-full h-[52px] px-[16px] py-[17px] rounded-[12px] font-[400] border  lg:w-[50vw]"
          />
        </FormItem>

</div>
        <div className="flex flex-col w-full gap-y-[44px] items-center lg:gap-y-[500px] xl:gap-y-[44px] ">
          <FormItem className="w-full lg:w-fit">
            <Button
              // htmlType=""
              // key=""
              type="primary"
              className="w-full h-[40px] text-white font-500 bg-[#8a226f] rounded-full mt-[10px] lg:mt-[unset] lg:w-[50vw] lg:text-[18px] md:h-[50px] lg:h-[60px]"
              htmlType='submit'
              style={{
                backgroundColor: clicked ? "rgb(138 34 111 / 68%)" : "#8a226f",
              }}
              disabled={clicked && true}
            >
              {clicked && <Spin size="small" />}
              Continue
            </Button>
          </FormItem>

          <Bottom_bar />
        </div>
      </Form>
      {/* </Form> */}
    </div>
   
  )
}

export default Page