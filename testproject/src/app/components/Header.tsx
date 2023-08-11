import Image from "next/image";

function Header() {
  return (
    <header>
      {/* left */}
      <div className="p-8">
        <Image
          src="https://links.papareact.com/qd3"
          height={100}
          width={100}
          alt="Airbnb logo"
        />
      </div>

      {/* middle */}
      <div />

      {/* Right */}
      <div />
    </header>
  );
}

export default Header;
