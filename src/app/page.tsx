import Bottom_bar from "@/components/Bottom_bar";
import My_button from "@/components/My_button";
import { what_we_do_list_type } from "@/types/welcome";
import Image from "next/image";


// 1) NEXT JS PRE RENDERS YOUR ENTIRE SITE AT BUILD TIME BY DEFAULT EVEN IF YOU USE REACT SERVER COMPONENT
// 2) SINCE THE CONTENT ON THIS PAGE DOES NOT CHANGE REGULARLY, THIS IS A GOOD PAGE TO IMPLEMNT SSG. BUT
// 3) FROM NEXT 13 getServerSideProps, getStaticProps, and getInitialProps ARE NOT SURPORTED
//
// I'LL MOCK PART OF THE DATA ON THIS PAGE USING JSONBIN.IO TO SHOW SSG
//
//
//
//





// SSG IMPLEMENTED ON NEXT 14

async function fetch_what_we_do_list() {
  // const listResponse = await fetch(apiUrl, {
  const listResponse = await fetch("https://api.jsonbin.io/v3/b/66effdf3ad19ca34f8aa9f77", {
    // SSG IMPLEMENTATION
    cache: "force-cache",

    headers: {
      "X-Master-Key": "$2a$10$l5D3D7XKNlD0xmioop.Eyuocgp6Ckpjg2N6P/EdsPkJM3qEcGK16q",
      "X-Access-Key": "$2a$10$nHW/.zAKvaXff./bgOD8zOjTCOyo7j4Vk9YsFE1RGAJiqsufUZxFO",
    },
    // cache: "no-store" SSR IMPLEMENTATION
    // next:{
    //   revalidate:20, ISR IMPLEMENTATION
    // }
  });

  if (!listResponse.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await listResponse.json(); // Await the JSON parsing
  console.log(data);
  return data;
}






export default async function Home() {


  const the_list = await fetch_what_we_do_list();

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
            {the_list.record.what_we_do_list.map((item: what_we_do_list_type, index: number) => (
              <div
                className="flex gap-x-[8px] items-center mb-[12px]"
                key={index.toString()}
              >
                <Image
                  src={item.icon}
                  alt="check_icon"
                  width={20}
                  height={20}
                />
                <div className="font-[500]">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-y-[44px] items-center lg:gap-y-[500px] xl:gap-y-[44px]">
        <My_button text="Get Started" page_route="/welcome-phone-no" />

        <Bottom_bar />
      </div>
    </div>
  );
}
