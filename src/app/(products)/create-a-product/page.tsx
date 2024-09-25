"use client";
import React, { useState } from "react";
import Product_layout from "../Product_layout";
import Image from "next/image";
import {
  Divider,
  Form,
  Button,
  Spin,
  Switch,
  Checkbox,
  ConfigProvider,
} from "antd";

import FloatLabelInput from "@/components/FloatLabelinput";
import FloatLabelTextArea from "@/components/FloatLabelTextArea";
import FloatLabelAutoCompleteCollection from "@/components/FloatLabelAutoCompleteCollection";
import FloatLabelShortInput from "@/components/FloatLabelShortInput";
import FormItem from "antd/es/form/FormItem";
import Bottom_bar from "@/components/Bottom_bar";
import { useRouter } from "next/navigation";
import InventoryVariationCollectionComponent from "@/components/InventoryVariationCollectionComponent";

const Page = () => {
  const productImages = [
    {
      image: "/picture1.png",
      name: "picture1.png",
    },
    {
      image: "/picture1.png",
      name: "picture1.png",
    },
    {
      image: "/picture1.png",
      name: "picture1.png",
    },
    {
      image: "/picture1.png",
      name: "picture1.png",
    },
    {
      image: "/picture1.png",
      name: "picture1.png",
    },
  ];


  const router = useRouter();
  const [checked, setChecked] = useState<boolean[]>(
    Array(productImages.length).fill(false)
  );
  const [dropDown1, setDropDown1] = useState<boolean>(true);
  const [dropDown2, setDropDown2] = useState<boolean>(true);
  const [dropDown3, setDropDown3] = useState<boolean>(true);
  // const [dropDown4, setDropDown4] = useState<boolean>(false);
  // const [dropDown5, setDropDown5] = useState<boolean>(false);

  const [box_checked, set_box_Checked] = useState<boolean>(true);

  const handleSwitchChange = (index: number, value: boolean) => {
    const updatedChecked = [...checked];
    updatedChecked[index] = value; // Update the specific index
    setChecked(updatedChecked);
  };

  const [clicked, setClicked] = useState<boolean>(false);

  const handleClick = (): void => {
    setClicked((prev) => !prev);

    router.push("/product-preview");
  };

  const productCollectionItems: string[] = [
    "Apple",
    "Banana",
    "Cherry",
    "Date",
    "Grape",
    "Orange",
  ];

  return (
    <div className="h-screen bg-[#fff] flex flex-col min-h-0">
      <div className="px-[1.25rem] pt-[1.25rem]">
        <Product_layout />
      </div>
      <div className="flex justify-between items-center mt-[20px] px-[1.25rem] ">
        <div
          className="flex justify-center gap-x-[5px] items-center py-[2px] w-[65px] h-[22px] rounded-full border-[0.5px] cursor-pointer"
          style={{
            borderColor: "rgb(0 0 0 / 20%)",
          }}
        >
          <div
            className="font-[400] text-[12px]"
            style={{
              borderColor: "rgb(0 0 0 / 20%)",
            }}
          >
            Draft
          </div>
          <Image src="/tick.svg" alt="tick icon" width={15} height={13} />
        </div>

        <div className="text-[12px] text-[#8A226F] font-[500] cursor-pointer lg:text-[14px]">
          Preview product
        </div>
      </div>
      <Divider
        style={{
          marginTop: 10,
        }}
      />


      <Form
        onFinish={handleClick}
        className="w-full flex flex-col items-center justify-between bg-[#fff] flex-grow"
      >
        
<div className="w-full flex flex-col items-center ">

<div className="w-full px-[1.25rem] lg:w-[50vw]">
        <div className="w-full flex justify-between items-center my-[10px]">
          <div className="font-[700] text-[#000]">Basic details</div>
          <div className="h-[20px] w-[20px] cursor-pointer flex items-center justify-center "
          onClick={()=>setDropDown1(value => !value)}
          >
            <Image
              src="/down_arrow.svg"
              alt="tick icon"
              width={15}
              height={20}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>


        
 
  <div className={`w-full lg:w-fit px-[1.25rem] ${!dropDown1 ? "h-[0px] overflow-hidden":"" }`}>
  <div className="mt-[20px]">
    <FloatLabelInput
      label="Product title"
      theName="ProductTitle"
      placeholder=""
      //  required={true}
      requiredMessage="Please input your product title!"
      pattern={/^[A-Za-z\s]+$/}
      patternMessage="Product title can only contain letters and spaces!"
      min={2}
      minMessage="product title must be at least 2 characters long!"
    />
  </div>

  <div>
    <FloatLabelTextArea
      label="Product description"
      theName="productDescription"
      placeholder=""
      //  required={true}
      requiredMessage="Please enter description!"
    />
  </div>

  <div className="flex gap-x-[10px] mt-10px lg:w-[50vw]">
    <FloatLabelShortInput
      label="Price"
      theName="thePrice"
      placeholder=""
      //  required={true}
      requiredMessage="Please input your price!"
      pattern={/^[0-9]+$/}
      patternMessage="Price must be a number!"
    />

    <FloatLabelShortInput
      label="Old price"
      theName="oldPrice"
      placeholder=""
      //  required={true}
      requiredMessage="Please input your old price!"
      pattern={/^[0-9]+$/}
      patternMessage="Price must be a number!"
    />
  </div>

  {/* gybdfdybduvsbgds */}
  <FloatLabelAutoCompleteCollection
    requiredMessage="Please enter collections"
    allItems={productCollectionItems}
    theName="productCollection"
    label="Product collection"
    placeholder="Search or create collection"
  />

  <div>
    <FloatLabelInput
      label="Inventory stocks"
      theName="inventorystocks"
      placeholder=""
      //  required={true}
      requiredMessage="Please input inventory stock!"
      pattern={/^[0-9]+$/}
      patternMessage="Inventory stock can only be numbers"
    />
  </div>
</div>


   

        <div className={`w-full  ${dropDown2 === true ? "mb-[20px]" : ""} px-[1.25rem]  lg:w-[50vw]`}>
          <div className="w-full flex justify-between items-center">
            <div className="font-[700]">Product images</div>

            <div className="h-[20px] w-[20px] cursor-pointer flex items-center justify-center "
            onClick={()=> setDropDown2(value =>!value)}
            >
              <Image
                src="/down_arrow.svg"
                alt="tick icon"
                width={15}
                height={20}
              />
            </div>
          </div>
        </div>
{

dropDown2 && (
  <div className="w-full px-[1.25rem]  ">
  <div className="w-full flex flex-col items-center justify-center ">
    {productImages.map((items, index) => (
      <div
        key={index.toString()}
        className="w-full flex items-center justify-between mb-[12px] lg:w-[50vw] lg:mb-[20px]"
      >
        <div className="flex gap-x-[5px] items-center ">
          <div className="rounded-md w-[60px] h-[60px]">
            <Image
              src={items.image}
              alt="image"
              width={60}
              height={60}
            />
          </div>
          <div>{items.name}</div>
        </div>

        <div className="flex gap-x-[5px] items-center">
          <div className="h-[20px] w-[20px] cursor-pointer flex items-center justify-center ">
            <Image
              src="/more_horiz.svg"
              alt="image"
              width={12}
              height={3}
            />
          </div>
          <Switch
            checked={checked[index]}
            onChange={(value) => handleSwitchChange(index, value)}
            style={{
              backgroundColor: checked[index] ? "#8A226F" : "",
            }}
          />
        </div>
      </div>
    ))}

<div className="w-full flex justify-center">
<div
      className="w-full h-[40px] rounded-full flex items-center gap-x-[10px] justify-center cursor-pointer lg:w-[50vw] lg:text-[18px]  md:h-[50px] lg:h-[60px]"
      style={{
        backgroundColor: "rgb(0 0 0 / 10%)",
      }}
    >
      <div className="text-[#8A226F] font-[500]">Add image</div>
      <div className="w-[15.83px] h-[15.83px] lg:w-[20px] lg:h-[20px] relative">
      <Image 
       
       src="/snap.svg" 
       alt="image" 
       layout="fill"
       objectFit="cover"
       />
      </div>

    </div>
</div>
  </div>
</div>
)
}


        <div className="w-full mb-[20px] lg:w-[50vw]">
          <Divider className="mb-[20px]" />

          <div className="w-full  mb-[20px] px-[1.25rem]">
            <div className="w-full flex justify-between items-center">
              <div className="font-[700]">Inventory variations</div>

              <div className="h-[20px] w-[20px] cursor-pointer flex items-center justify-center "
              onClick={()=> setDropDown3(value =>!value)}
              >
                <Image
                  src="/down_arrow.svg"
                  alt="tick icon"
                  width={15}
                  height={20}
                />
              </div>
            </div>
          </div>
<div className={`${!dropDown3 ? "h-[0px] overflow-hidden":"" }`}>
    <div className="w-[90%] h-[40px] rounded-full flex items-center gap-x-[10px] px-[1.25rem] ml-[10px] mb-[20px] ">
            <ConfigProvider
              theme={{
                token: {
                  colorPrimary: box_checked ? "#8A226F" : "",
                },
              }}
            >
              <Checkbox
                checked={box_checked}
                onClick={() => set_box_Checked((value) => !value)}
              />
            </ConfigProvider>

            <div
              className="font-[400]"
              style={{
                color: "rgb(0 0 0 / 60%)",
              }}
            >
              This product is variable; has different colors, sizes, weight,
              materials, etc.
            </div>
          </div>
    






          <div className="w-full mb-[12px] justify-center px-[1.25rem] lg:px-[unset]">
<InventoryVariationCollectionComponent
            requiredMessage="Please enter collections"
            allItems={productCollectionItems}
            theName="productCollection"
      
            placeholder="Enter values"
/>
</div>
</div>








        </div>




</div>





        <div className="flex flex-col w-full gap-y-[44px] items-center lg:gap-y-[500px] xl:gap-y-[44px] px-[1.25rem]">
          <FormItem className="w-full lg:w-fit">
            <Button
              // htmlType=""
              // key=""
              type="primary"
              className="w-full h-[40px] text-white font-500 bg-[#8a226f] rounded-full mt-[10px] lg:mt-[unset] lg:w-[50vw] lg:text-[18px]  md:h-[50px] lg:h-[60px]"
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
    </div>
  );
};

export default Page;
