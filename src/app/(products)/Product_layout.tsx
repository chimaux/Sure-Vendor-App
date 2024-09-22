"use client"
import Get_started_back from '@/components/Get_started_back'
import Image from 'next/image'
import React from 'react'

const Product_layout = () => {
  return (
    <div className='flex justify-between items-center'>
<Get_started_back
text='Create a product'
/>

<div className='p-[10px] cursor-pointer'>
<Image
src="/more_vert.svg"
alt='more icon'
width={3}
height={12}

/>
</div>



    </div>
  )
}

export default Product_layout