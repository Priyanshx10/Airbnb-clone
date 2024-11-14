function Footer() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-y-10 px-8 md:px-32 py-14 bg-gray-100 text-gray-600">
      {/* ABOUT */}
      <div className="space-y-4 text-xs sm:text-sm text-gray-800">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb Works</p>
        <p>New Rooms</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>

      {/* COMMUNITY */}
      <div className="space-y-4 text-xs sm:text-sm text-gray-800">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>Demo</p>
        <p>Clone</p>
        <p>Referral Accepted</p>
        <p>Wolf</p>
      </div>

      {/* HOST */}
      <div className="space-y-4 text-xs sm:text-sm text-gray-800">
        <h5 className="font-bold">HOST</h5>
        <p>Indian Wolf</p>
        <p>Presents</p>
        <p>Zero to Full Stack</p>
        <p>Hundreds of Students</p>
        <p>Join Now</p>
      </div>

      {/* SUPPORT */}
      <div className="space-y-4 text-xs sm:text-sm text-gray-800">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust and Support</p>
        <p>Say Hi on YouTube</p>
        <p>Easter Eggs</p>
        <p>For the Win</p>
      </div>
    </div>
  );
}

export default Footer;
