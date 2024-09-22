import Bottom_bar from "@/components/Bottom_bar";
import My_button from "@/components/My_button";
import { what_we_do_list_type } from "@/types/welcome";
import Image from "next/image";

// 1) NEXT JS PRE RENDERS YOUR ENTIRE SITE AT BUILD TIME BY DEFAULT EVEN IF YOU USE REACT SERVER COMPONENT
// 2) SINCE THE CONTENT ON THIS PAGE DOES NOT CHANGE REGULARLY, THIS IS A GOOD PAGE TO IMPLEMNT SSG. BUT
// 3) FROM NEXT 13 getServerSideProps, getStaticProps, and getInitialProps ARE NOT SURPORTED
//
//  SINCE THERE IS NOTHING TO FETCH I'LL SIMULATE FETCH PART OF THE COMPONENTS ON THIS PAGE
//  TO DEMOSTRATE STATIC SITE GENERATION IN NEXT 14
//
//
//
//


// SSG IMPLEMENTED

async function fetch_what_we_do_list() {
  const listResponse = await fetch("http://localhost:3000/api/whatWeDo", {
    // SSG IMPLEMENTATION
    cache: "force-cache",
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
            {the_list.what_we_do_list.map((item: what_we_do_list_type, index: number) => (
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
