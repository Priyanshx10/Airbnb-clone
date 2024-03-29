import Image from 'next/image';

interface SmallCardProps {
  img: string;
  location: string;
  distance: string;
}

function SmallCard({ img, location, distance }: SmallCardProps) {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-200 hover:scale-105 transform duration-200 ease-out">
      {/* left */}
      <div className="relative h-16 w-16">
        <Image
          src={img}
          layout="fill"
          alt="SmallCardImages"
          className="rounded-lg"
        />
      </div>

      {/*  Right */}
      <div>
        <h2>{location}</h2>
        <h3>{distance}</h3>
      </div>
    </div>
  );
}
export default SmallCard;
