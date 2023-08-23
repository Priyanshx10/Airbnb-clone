/* eslint-disable prettier/prettier */
import Image from "next/image";

interface MediumCardProps{
    img: string;
    title: string;
}

function MediumCard({img,title} :MediumCardProps) {
    return(
        <div className=" cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <div className="relative  h-80 w-80">
                <Image
                className="rounded-xl"
                src={img}
                alt='MediumCardImages'
                layout="fill"
                /> 
            </div>
            <div>
            <h2 className="text-2xl mt-3">{title}</h2>
            </div>
        </div>
    );
}
 export default MediumCard;