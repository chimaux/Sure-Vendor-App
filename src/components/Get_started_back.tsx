
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react'


interface text_type{
  text?:string
}
const Get_started_back = ({text='Get Started'}:text_type) => {

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
      <div className="font-500 text-[16px]">
        {text}

        </div>
    </div>
  )
}

export default Get_started_back