import Get_started_back from "@/components/Get_started_back";
import Top_bar from "@/components/Top_bar";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

interface LayoutProps {

  top_text: string;
  sub_text: string;
}

const Onboarding_layout = ({ top_text, sub_text }: LayoutProps) => {




   

  return (
    <div >
<Get_started_back/>

<Top_bar/>

<h1 className="font-500 text-[24px] text-[#000]">
 {top_text}
</h1>

<div className="w-[70%]">
<p style={{
  color:"rgb(0 0 0 / 60%)"
}}>
{sub_text}
</p>
</div>


    </div>
  );
};

export default Onboarding_layout;
