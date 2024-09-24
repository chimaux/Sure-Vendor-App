"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';



const NetworkStatus = () => {




    const onlineStatus = navigator.onLine

    const [isOnline, setIsOnline] = useState<boolean>(onlineStatus);
    const [close, setClose] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
      // Update network status
      const handleStatusChange = () => {
        setIsOnline(navigator.onLine);
                setClose(false)
     
      };
  
      // Listen to the online status
      window.addEventListener('online', handleStatusChange);
  
      // Listen to the offline status
      window.addEventListener('offline', handleStatusChange);
  
// AUTOMATICALY CLOSE THE TOAST MESSAGE IF USER IS ONLINE
      setTimeout(() => {
        
        if (isOnline) {
          setClose(true);
        }
      }, 3000);

      return () => {
        window.removeEventListener('online', handleStatusChange);
        window.removeEventListener('offline', handleStatusChange);
      };
    }
    }, [isOnline]);






  
  return (
    <>
       {
        close === true ?"":    <div className="w-[200px] h-[40px] bg-white flex items-center justify-between rounded-l-md absolute shadow-md right-0 bottom-[100px] z-[999] lg:h-[50px] lg:w-[250px]">
        {isOnline ? <div className="bg-green-500 w-[40px] h-full rounded-l-md mr-[10px] lg:w-[50px]"></div> : <div className="bg-red-500 w-[40px] h-full rounded-l-md mr-[10px] lg:w-[50px]" ></div>}
      
      <div className="text-[18px] font-bold text-gray-800">
      
        <div className="text-[14px] font-[700] lg:text-[16px]">  {isOnline ? "You're online":"You're offline"}</div>
      </div>
      <div 
      onClick={()=>setClose(true)}
       className="flex items-center justify-center cursor-pointer w-[60px]">
        <Image src="/close.svg" alt="..." width={15} height={15}/>
      </div>
    </div>
    }
    </>
 

  )
}

export default NetworkStatus






