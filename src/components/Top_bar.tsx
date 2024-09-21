import useOnboardingStore from "@/store/onboarding";
import React, { useEffect} from "react";

const Top_bar = () => {
  const tabs = useOnboardingStore((state) => state.onboard_tab);
  const { tab1, tab2, tab3 } = tabs;



  const top_tab = [
    {
      color: tab1 === true ? "#8a226f" : "#e5e5e5",
    },
    {
      color: tab2 === true ? "#8a226f" : "rgb(0 0 0 / 10%)",
    },
    {
      color:tab3 === true ? "#8a226f" : "rgb(0 0 0 / 10%)",
    },
  ];

  return (
    <div className="flex w-full justify-between my-[29px]">
      {top_tab.map((item, index) => (
        <div 
        key={index.toString()}
        className={`w-[30%] rounded-full h-[5px]`}
        style={{
            backgroundColor:item.color
        }}
        ></div>
      ))}
    </div>
  );
};
export default Top_bar;
