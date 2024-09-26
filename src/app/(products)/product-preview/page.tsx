import React from 'react'
import Product_layout from '../Product_layout'
// import Image from 'next/image'

const Page = () => {
  return (
    <div className="h-screen bg-[#fff] flex flex-col min-h-0">
      <div className="px-[1.25rem]  pt-[1.25rem]">
        <Product_layout 
        text="Product preview"
        />
      </div>
 

    </div>
  )
}

export default Page