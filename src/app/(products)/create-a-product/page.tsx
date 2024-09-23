"use client";
import React from "react";
import Product_layout from "../Product_layout";
import Image from "next/image";
import { Divider, Form,  Button } from "antd";

import "@coreui/coreui/dist/css/coreui.min.css";
import FloatLabelInput from "@/components/FloatLabelinput";
import FloatLabelTextArea from "@/components/FloatLabelTextArea";
import FloatLabelAutoCompleteCollection from "@/components/FloatLabelAutoCompleteCollection";
import FloatLabelShortInput from "@/components/FloatLabelShortInput";

const Page = () => {
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
          className="flex justify-center gap-x-[5px] items-center py-[2px] w-[65px] h-[22px] rounded-full border-[0.5px]"
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

        <div className="text-[12px] text-[#8A226F] font-[500]">
          Preview product
        </div>
      </div>
      <Divider
        style={{
          marginTop: 10,
        }}
      />
      <div className="px-[1.25rem]">
        <div className="flex justify-between items-center my-[10px]">
          <div className="font-[700]">Basic details</div>

          <Image src="/down_arrow.svg" alt="tick icon" width={15} height={20} />
        </div>
      </div>

      <div className="px-[1.25rem]">
        <Form
          onFinish={(values) => console.log(values)}
          className="w-full flex flex-col items-center justify-between bg-[#fff] flex-grow "
          // onFinish={handleClick}
        >
          <div className="w-full lg:w-fit">
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
              label="Product collect"
              placeholder=""
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
          <Button htmlType="submit">click</Button>
        </Form>
      </div>
    </div>
  );
};

export default Page;
