/* eslint-disable prettier/prettier */
import Image from "next/image";

interface MediumCardProps{
    img: string;
    title: string;
}
function MediumCard({img ,title} :MediumCardProps) {
    return(
        <div>
            <div className="relative">
                <Image
                className="rounded-lg"
                src={img}
                alt='MediumCardImages'
                layout="fill"
                />
            </div>
            <div>
            <h2>{title}</h2>
             
            </div>
        </div>
    );
}
 export default MediumCard;