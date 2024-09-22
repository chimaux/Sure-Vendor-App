import { what_we_do_list_type } from "@/types/welcome";
import { NextResponse } from "next/server";

const record:what_we_do_list_type[] = [
  {
    icon: "/check_circle.svg",
    text: "Reach millions of Shoppers"
  },
  {
    icon: "/check_circle.svg",
    text: "Easy Product Listing"
  },
  {
    icon: "/check_circle.svg",
    text: "Secure and Fast Payments"
  },
  {
    icon: "/check_circle.svg",
    text: "Boost Your Visibility"
  }
];


export async function GET(){
  return NextResponse.json({
    the_data:record
  })
}


