import Bottom_bar from "@/components/Bottom_bar";
import My_button from "@/components/My_button";
import { what_we_do_list_type } from "@/types/welcome";
import { Button } from "antd";
import Image from "next/image";

export default function Home() {




const what_we_do_list:what_we_do_list_type[] = [
  {
    icon:"/check_circle.svg",
    text:"Reach millions of Shoppers"
  },
  {
    icon:"/check_circle.svg",
    text:"Easy Product Listing"
  },
  {
    icon:"/check_circle.svg",
    text:"Secure and Fast Payments"
  },
  {
    icon:"/check_circle.svg",
    text:"Boost Your Visibility"
  }
]


  return (
    <div className="h-screen bg-[#fff] px-5 flex flex-col justify-between">
      <div className="flex flex-col mt-[48px] items-center lg:flex-row justify-center lg:gap-x-[50px] lg:mt-[100px]">
        <div className="w-[296px] h-[210px] relative lg:w-[496px] lg:h-[340px]">
          <Image
            src="/welcome_img.svg"
            alt="image"
            layout="fill"
            objectFit="cover"
            // className="rounded-lg"
          />
        </div>
        <div>
          <div className="my-[25px] lg:my-0 lg:mb-[25px]">
            <h1 className="text-[32px] font-bold text-[#000] text-center">
              Welcome
            </h1>
            <p className="text-center">
              The safest platfrom to shop from social media vendors
            </p>
          </div>
          <div className="bg-[#ffeafa] border-[#8a226f] border-[0.5px] w-full h-[140px] rounded-[12px] p-[10px]">
          {
            what_we_do_list.map((item:what_we_do_list_type,index:number)=>(
              <div className="flex gap-x-[8px] items-center mb-[12px]"
              key={index.toString()}
              >
              <Image
              src={item.icon}
              alt="check_icon"
              width={20}
              height={20}
              />
              <div className="font-[500]">
         {item.text}
              </div>
            </div>
            ))
          }
      

          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-[44px] items-center lg:gap-y-[500px] xl:gap-y-[44px]">
<My_button
text="Get Started"
/>

<Bottom_bar/>
      </div>
    </div>
  );
}
