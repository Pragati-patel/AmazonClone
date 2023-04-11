import Image from "next/image";
import {Images} from '../../public/assests/images'
import Rating from '@mui/material/Rating';


export default function TodayDeals(){
    const heading='NYTK RETAIL 12 in 1 Vegetable Multifunctional Chopper & Adjustable Slicer with Storage Container, Household Kitchen for Cutter, Grater, Peeler, Chipser, ChoppeR (Acrylonitrile Butadiene Styrene)'
    return(
        <div className="my-8  w-full">
            <div className="w-[80%] mx-auto bg-white border border-gray-400 px-4 flex py-8 items-center ">
                <div className="mr-8 flex w-[50%]">
                    <Image src={Images.Deal1} alt="today'sDealProduct" className="w-full"/>
                </div>
                <div className="flex flex-col ">
                    <p className="text-base font-AmazonEmberMedium font-medium leading-[24px]">{heading.slice(0,100)}....</p>
                    <p><Rating name="read-only" value={4} readOnly/></p>
                    <p className="text-red-800 text-2xl font-AmazonEmberMedium flex">
                        <span className="text-sm pt-1">₹</span>599<span className="text-sm">00</span>
                <Image src={Images.primeLogo} alt="primeLogo" className=" p-1 pb-0"/>
                </p>
                </div>
                <div className="md:w-[30%]"></div>

            </div>
        </div>
    )
}