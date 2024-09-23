"use client";
import React, { useEffect, useState } from "react";
import Onboarding_layout from "../Onboarding_layout";
import { Button, Form, Input, Spin, Upload } from "antd";
import FormItem from "antd/es/form/FormItem";
import { useRouter } from "next/navigation";
import Bottom_bar from "@/components/Bottom_bar";
import useOnboardingStore from "@/store/onboarding";
import Image from "next/image";

const Page = () => {



  
  const set_tabs = useOnboardingStore((state) => state.set_onboarding_tab);

  useEffect(() => {
    set_tabs({
      tab1: true,
      tab2: true,
      tab3: true,
    });
  });

  const router = useRouter();
  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = (): void => {
    setClicked((prev) => !prev);

    router.push("/create-a-product");
  };

  return (
    <div className="h-screen bg-[#fff] p-[1.25rem] flex flex-col min-h-0">
      <Onboarding_layout
        top_text="Complete profile setup"
        sub_text="Connect your socials for quick setup"
      />
      {/* <Form> */}
      <Form
        className="w-full flex flex-col items-center justify-between bg-[#fff] flex-grow "
        onFinish={handleClick}
      >
        <div className="w-full lg:w-fit">
          <div
            className="w-full h-[140px] border-[0.5px] rounded-[12px] flex flex-col items-center pt-[20px] overflow-auto mt-[24px]"
            style={{
              borderColor: "rgb(0 0 0 / 20%)",
            }}
          >
            <Upload action="/upload" listType="picture"
    //  className="bg-slate-100 rounded-sm p-2"
            >
           
              <Image
                src="/deafultAvatar.png"
                alt="avatar"
                width={80}
                height={80}
              />
         
            </Upload>
            <p
              
              style={{
                color: "rgb(0 0 0 / 60%)",
        
              }}
            >
              Upload store logo
            </p>
          </div>

          <FormItem
            className="w-full lg:w-fit"
            name="storeName"
            rules={[
              {
                required: true,
                message: "Please input your store name!",
              },
              {
                pattern: /^[A-Za-z\s]+$/,
                message: "Store name can only contain letters and spaces!",
              },
              {
                min: 2,
                message: "store name must be at least 2 characters long!",
              },
            ]}
          >
            <Input
              type="text"
              placeholder="Store name"
              className="w-full h-[52px] px-[16px] py-[17px] rounded-[12px] font-[400] border mt-[24px]  lg:w-[50vw]"
            />
          </FormItem>
          <FormItem
            className="w-full lg:w-fit"
            name="storeTagName"
            rules={[
              {
                required: true,
                message: "Please input your store tag name!",
              },

              {
                min: 2,
                message: "Store tag name must be at least 2 characters long!",
              },
            ]}
          >
            <Input
              type="text"
              placeholder="Store tag name"
              className="w-full h-[52px] px-[16px] py-[17px] rounded-[12px] font-[400] border  lg:w-[50vw]"
            />
          </FormItem>
          <FormItem
            className="w-full lg:w-fit"
            name="StorePhoneNo"
            rules={[
              {
                required: true,
                message: "Please input your store phone number!",
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
              placeholder="Store Phone number"
              className="w-full h-[52px] px-[16px] py-[17px] rounded-[12px] font-[400] border  lg:w-[50vw]"
            />
          </FormItem>
          <FormItem
            className="w-full lg:w-fit"
            name="storeEmail"
            rules={[
              {
                required: true,
                message: "Please input your store email!",
              },
              {
                type: "email",
                message: "Please enter a valid email!",
              },
            ]}
          >
            <Input
              type="text"
              placeholder="Store email"
              className="w-full h-[52px] px-[16px] py-[17px] rounded-[12px] font-[400] border  lg:w-[50vw]"
            />
          </FormItem>
          <FormItem
            className="w-full lg:w-fit"
            name="storeCategory"
            rules={[
              {
                required: true,
                message: "Please input your store Category!",
              },
              {
                pattern: /^[A-Za-z\s]+$/,
                message: "Store category can only contain letters and spaces!",
              },
              {
                min: 2,
                message: "store category must be at least 2 characters long!",
              },
            ]}
          >
            <Input
              type="text"
              placeholder="Store category"
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
              htmlType="submit"
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
  );
};

export default Page;
