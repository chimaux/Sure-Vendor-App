"use client"
import { Button } from 'antd'
import React from 'react'
import { useState } from 'react'

interface text_type{
  text:string
}

const My_button = ({text}:text_type) => {

  const [clicked, setClicked] = useState<boolean>(false); 

  const handleClick = (): void => {
    setClicked((prev) => !prev); 
  };


  return (
    <Button 
    type="primary" 
    className="w-full h-[40px] text-white font-500 bg-[#8a226f] rounded-full lg:w-[50%] lg:text-[18px]"
    onClick={handleClick}
    style={{
      backgroundColor: clicked ? "rgb(138 34 111 / 68%)" : "#8a226f", 
    }}
  >
   {text}
  </Button>
  )
}

export default My_button