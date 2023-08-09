import Image from "next/image";
import React from "react";

function Header() {
    return(

        <header>
           {/* left */}
           <div className='relative flex items-center max-w-fit p-10'>
            <Image
            src ="https://links.papareact.com/qd3"
            height={100}
            width={100}
            objectFit='contain'
            objectPosition="left"
            />
           </div>



           {/* middle */}
           <div>
           </div>


           {/* Right */}
           <div>

           </div>
        </header>

    )
}
 export default Header;