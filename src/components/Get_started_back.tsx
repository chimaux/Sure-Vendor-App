
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'

const Get_started_back = () => {

    const router = useRouter();
  return (
    <div 
    onClick={()=> router.back()}
    className="flex gap-x-[12.17px] cursor-pointer">
      <Image
        src="/arrow_left.svg"
        alt="arrow left"
        width={11.67}
        height={11.67}
      />
      <div className="font-500 text-[16px]">Get Started</div>
    </div>
  )
}

export default Get_started_back