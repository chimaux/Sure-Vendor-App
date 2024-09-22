import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
  
      <h1 className="font-[700] text-[18px] py-[20px]"> NotFound</h1>
      <Link href="/">Return Home</Link>
    </div>
  );
};

export default NotFound;
