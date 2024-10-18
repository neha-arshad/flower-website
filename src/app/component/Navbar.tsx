import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white py-6 h-32 mr-60 ml-60">
      <div className="flex justify-between items-center mt-5">
        <h1 className="text-black text-xl font-bold ml-10">Phuler</h1>

        <div className="space-x-20 m-auto">
          <Link href="#home">
            <button className="text-black hover:bg-pink-100 py-2 px-4 rounded mr-2">
              Home
            </button>
          </Link>
          <Link href="#product">
            <button className="text-black hover:bg-pink-100 py-2 px-4 rounded">
              Products
            </button>
          </Link>
          <Link href="#shop">
            <button className="text-black hover:bg-pink-100 py-2 px-4 rounded mr-2">
              Shop
            </button>
          </Link>
          <Link href="#blog">
            <button className="text-black hover:bg-pink-100 py-2 px-4 rounded mr-2">
              Blog
            </button>
          </Link>
          <Link href="#contact">
            <button className="text-black hover:bg-pink-100 py-2 px-4 rounded mr-2">
              Contact
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
