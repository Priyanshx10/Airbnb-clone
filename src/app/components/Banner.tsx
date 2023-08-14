/* eslint-disable prettier/prettier */
import Image from "next/image";
import React from 'react';


function Banner() {
    return(
        <div className=" relative h-[300px] sm:h-[400px] lg:h=[500px] xl:h-[600px] 2xl:h-[700px]">
            <Image
             src="https://links.papareact.com/0fm"
             alt ="Banner"
             layout="fill"
             objectFit="cover"
            />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-md text-black ">Not Sure where to go ? Perfect.</p>
            <button type="button" className=" text-purple-800 bg-white py-06 px-10 shadow-md
             rounded-full font-bold my-3 hover:shadow-xl 
             active:scale-90 transition duration-150">I am flexible.</button>
            </div>

        </div>
    );
    
} export default Banner;
