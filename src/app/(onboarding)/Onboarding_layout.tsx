import Get_started_back from "@/components/Get_started_back";
import Top_bar from "@/components/Top_bar";
import React from "react";

interface LayoutProps {

  top_text: string;
  sub_text: string;
}

const Onboarding_layout = ({ top_text, sub_text }: LayoutProps) => {




   

  return (
    <div >
<Get_started_back/>

<Top_bar/>

<h1 className="font-500 text-[24px] text-[#000] lg:text-center">
 {top_text}
</h1>

<div className="w-[70%] lg:w-full">
<p 
className="lg:text-center lg:text-[18px]"
style={{
  color:"rgb(0 0 0 / 60%)"
}}>
{sub_text}
</p>
</div>


    </div>
  );
};

export default Onboarding_layout;
