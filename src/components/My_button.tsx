"use client";
import { button_type } from "@/types/welcome";
import { Button, Spin } from "antd";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import FormItem from "antd/es/form/FormItem";


const My_button = ({ text, page_route }: button_type) => {
  const router = useRouter();
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = (): void => {
    setClicked((prev) => !prev);
  
      router.push(page_route);
   
  };

  return (
  

    <FormItem className="w-full lg:w-fit">
    <Button
      // htmlType=""
      // key=""
      type="primary"
      className="w-full h-[40px] text-white font-500 bg-[#8a226f] rounded-full mt-[10px] lg:mt-[unset] lg:w-[50vw] lg:text-[18px] md:h-[50px] lg:h-[60px]"
      onClick={handleClick}
      style={{
        backgroundColor: clicked ? "rgb(138 34 111 / 68%)" : "#8a226f",
      }}
      disabled={clicked && true}
    >
      {clicked && <Spin size="small" />}
      {text}
    </Button>

    </FormItem>
   
  );
};

export default My_button;
