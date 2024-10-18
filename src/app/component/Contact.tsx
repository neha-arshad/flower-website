import React from 'react'

const Contact = () => {
  return (
    <div className="ml-60 mr-60 bg-white p-20 relative" id="contact">
      <div className="flex justify-between">
        {/* Left Side: About Us Section */}
        <div className="w-1/2">
          <h1 className="text-black font-semibold ">About us</h1>
          <p className="text-black mt-4 text-sm">Email: Flowers@gmail.com</p>
          <p className="text-black mt-3 text-xs">
            Lorem ipsum dolor sit amet consectetur adipisici..
          </p>
          <p className="text-black mt-3 text-sm">
            Address: 125 Main Street, Flower USA
          </p>
        </div>

        {/* Right Side: Instagram Section */}
        <div className="w-1/2">
          <div className="mb-8">
            <h2 className="text-black font-semibold pl-14">Instagram</h2>
            <p className="text-black mt-3 pl-14 text-xs">about us</p>
            <p className="text-black mt-3 pl-14 text-xs">
              delivery information
            </p>
            <p className="text-black mt-3 pl-14 text-xs">privacy policy</p>
            <p className="text-black mt-3 pl-14 text-xs">terms & condition</p>
            <p className="text-black mt-3 pl-14 text-xs">custumer service</p>
            <p className="text-black mt-3 pl-14 text-xs">return policy</p>
          </div>
        </div>

        {/* Account Section */}

        <div className="mb-8">
          <h2 className="text-black font-semibold pl-14">Account</h2>
          <p className="text-black mt-3 pl-14 text-xs">My Account</p>
          <p className="text-black mt-3 pl-14 text-xs">Order history</p>
          <p className="text-black mt-3 pl-14 text-xs">Whislist</p>
          <p className="text-black mt-3 pl-14 text-xs">NewsSettler</p>
          <p className="text-black mt-3 pl-14 text-xs">size chart</p>
          <p className="text-black mt-3 pl-14 text-xs">International order</p>
        </div>

        {/* Support Email Section */}
        <div>
          <h2 className="text-black font-semibold pl-14">
            Join our newsletter now
          </h2>
          <p className="text-black mt-3 pl-14 text-xs">
            get email updates about our latest shop ans special offers
          </p>
          <input
            type="text"
            placeholder="Enter your email address"
            className=" mt-5 pl-14"
          />
          <button className="bg-[#E6493C] p-3 rounded-md m-24">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

