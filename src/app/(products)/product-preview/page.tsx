import React from "react";
import Product_layout from "../Product_layout";
import Image from "next/image";
import { Divider } from "antd";
// import Image from 'next/image'

const Page = () => {
  interface truncateText_type {
    truncatedText: string;
    truncated: boolean;
  }

  function truncateText(text: string, maxLength: number): truncateText_type {
    const words = text.split(" ");

    if (words.length <= maxLength) {
      return { truncatedText: text, truncated: false };
    }

    return {
      truncatedText: words.slice(0, maxLength).join(" ") + " ...",
      truncated: true,
    };
  }

  const theText =
    "Wholesale and drop shipping are both welcomed.For wholesale,we will offer discount or free express shipping which only takes 3-7 days to arrive. For drop shipping,we could send the goods to your customers directly and won't leave information about us if you'd like to. How can track my parcel? You can track your parcel on the following website using your tracking number: www.17track.net/en  (Copied to the browser to open) What can I do when purchase protection time is running out? If your purchase protection time is running out, please contact us and we can help you to extend it. So your money will not go to my account.";

  return (
    <div className="h-screen bg-[#fff] flex flex-col min-h-0">
      <div className="px-[1.25rem]  pt-[1.25rem] pb-[20px]">
        <Product_layout text="Product preview" />
      </div>
      <div>
        <div className="w-full h-[360px] md:hidden relative">
          <Image
            src="/productImg.png"
            alt="image"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </div>

        <div className="hidden w-full h-[360px] md:block md:h-[1000px] lg:hidden relative">
          <Image
            src="/productImg2.png"
            alt="image"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </div>

        <div className="hidden lg:block lg:h-[1000px] relative">
          <Image
            src="/productImg2.png"
            alt="image"
            layout="fill"
            objectFit="cover"
            objectPosition="top"
          />
        </div>

        <div className="w-full flex justify-center">
          <div className="w-full flex justify-between items-center px-[1.25rem] my-[12px] lg:px-[unset] lg:w-[50vw]">
            <div className="font-[700] lg:text-[18px]">
              Gucci bag – the epitome of luxury and sophistication
            </div>

            <div className="flex gap-x-[3px]">
              <div className="rounded-md w-[36px] h-[36px] cursor-pointer">
                <Image src="/share.svg" alt="image" width={36} height={36} />
              </div>
              <div className="rounded-md w-[36px] h-[36px] cursor-pointer">
                <Image src="/like.svg" alt="image" width={36} height={36} />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div className="w-full flex justify-between items-center px-[1.25rem]  lg:px-[unset] lg:w-[50vw]">
            <div className="flex items-center gap-x-[3px]">
              <div className="text-[20px] text-[#3b3b3b]">₦18.0</div>
              <div className="text-[12px] text-[#ACACAC]">₦28.0</div>
              <div className="flex justify-center text-[10px] bg-[#8A226F] text-white gap-x-[5px] items-center py-[2px] w-[65px] h-[22px] rounded-full">
                <div className="">25%</div>
                <div className="">OFF</div>
              </div>
            </div>
            <div className="flex items-center gap-x-[3px]">
              <Image src="/star.svg" alt="star image" width={14} height={14} />
              <Image src="/star.svg" alt="star image" width={14} height={14} />
              <Image src="/star.svg" alt="star image" width={14} height={14} />
              <Image src="/star.svg" alt="star image" width={14} height={14} />
              <Image src="/star2.svg" alt="star image" width={14} height={14} />

              <div className="text-[#3b3b3b]">(5 sold)</div>
            </div>
          </div>
        </div>

        <div className="w-full lg:flex lg:justify-center ">
          <div className="w-full lg:w-[50vw]">
            <Divider className="my-[20px]" />
          </div>
        </div>

        <div className="w-full flex justify-center ">
          <div className="w-full  px-[1.25rem] my-[12px] lg:px-[unset] lg:w-[50vw] font-[700]">
            Select variants
          </div>
        </div>
        <div className="w-full flex justify-center ">
          <div className="w-full  px-[1.25rem]  mb-[5px] lg:px-[unset] lg:w-[50vw] font-[700] text-[#3b3b3b]">
            Size: SMALL
          </div>
        </div>
        <div className="w-full flex justify-center ">
          <div className="w-full flex gap-x-[4px] px-[1.25rem] lg:px-[unset] lg:w-[50vw] ">
            <div className="flex justify-center text-[12px] text-white bg-black items-center py-[2px] px-[5px] lg:px-[20px] lg:py-[5px] h-[22px] rounded-full ">
              <div className="">Filter</div>
            </div>
            <div
              className="flex justify-center text-[12px] text-black  items-center py-[2px] px-[5px] lg:px-[20px] lg:py-[5px] h-[22px] rounded-full "
              style={{ backgroundColor: "rgb(0 0 0 / 3%)" }}
            >
              <div className="">Filter</div>
            </div>
            <div
              className="flex justify-center text-[12px] text-black  items-center py-[2px] px-[5px] lg:px-[20px] lg:py-[5px] h-[22px] rounded-full "
              style={{ backgroundColor: "rgb(0 0 0 / 3%)" }}
            >
              <div className="">Filter</div>
            </div>
            <div
              className="flex justify-center text-[12px] text-black  items-center py-[2px] px-[5px] lg:px-[20px] lg:py-[5px] h-[22px] rounded-full "
              style={{ backgroundColor: "rgb(0 0 0 / 3%)" }}
            >
              <div className="">Filter</div>
            </div>
            <div
              className="flex justify-center text-[12px] text-black  items-center py-[2px] px-[5px] lg:px-[20px] lg:py-[5px] h-[22px] rounded-full "
              style={{ backgroundColor: "rgb(0 0 0 / 3%)" }}
            >
              <div className="">Filter</div>
            </div>
            <div
              className="flex justify-center text-[12px] text-black  items-center py-[2px] px-[5px] lg:px-[20px] lg:py-[5px] h-[22px] rounded-full "
              style={{ backgroundColor: "rgb(0 0 0 / 3%)" }}
            >
              <div className="">Filter</div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center mt-[12px] lg:mt-[20px]">
          <div className="w-full  px-[1.25rem]  mb-[5px] lg:px-[unset] lg:w-[50vw] font-[700] text-[#3b3b3b]">
            Color: White
          </div>
        </div>
        <div className="w-full flex justify-center ">
          <div className="w-full flex gap-x-[4px] px-[1.25rem] lg:px-[unset] lg:w-[50vw] ">
            <div
              className="flex justify-center text-[12px] text-black  items-center py-[2px] px-[5px] lg:px-[20px] lg:py-[5px] h-[22px] rounded-full "
              style={{ backgroundColor: "rgb(0 0 0 / 3%)" }}
            >
              <div className="">Filter</div>
            </div>
            <div
              className="flex justify-center text-[12px] text-black  items-center py-[2px] px-[5px] lg:px-[20px] lg:py-[5px] h-[22px] rounded-full "
              style={{ backgroundColor: "rgb(0 0 0 / 3%)" }}
            >
              <div className="">Filter</div>
            </div>
            <div
              className="flex justify-center text-[12px] text-black  items-center py-[2px] px-[5px] lg:px-[20px] lg:py-[5px] h-[22px] rounded-full "
              style={{ backgroundColor: "rgb(0 0 0 / 3%)" }}
            >
              <div className="">Filter</div>
            </div>
          </div>
        </div>

        <div className="w-full lg:flex lg:justify-center ">
          <div className="w-full lg:w-[50vw]">
            <Divider className="my-[20px]" />
          </div>
        </div>
        <div className="w-full lg:flex lg:justify-center ">
        <div className={`w-full   px-[1.25rem] lg:px-[unset]  lg:w-[50vw] `}>
          <div className="w-full flex justify-between items-center mb-[20px]">
            <div className="font-[700]">Shipping</div>

            <div
              className="h-[20px] w-[20px] cursor-pointer flex items-center justify-center "
              // onClick={() => setDropDown5((value) => !value)}
            >
              <Image
                src="/down_arrow.svg"
                alt="tick icon"
                width={15}
                height={20}
              />
            </div>
          </div>

          <p
            className="lg:text-center text-left lg:w-[60%]"
            style={{
              color: "rgb(0 0 0 / 60%)",
              textAlign:"left"
            }}
          >
            {truncateText(theText, 26).truncatedText}
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
