import Image from "next/image";
import Navbar from "./component/Navbar";
import Herosection from "./component/Herosection";
import Shop from "./component/Shop";
import Product from "./component/Product";
import Blog from "./component/Blog";
import Contact from "./component/Contact";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Herosection />
        <Shop />
        <Product />
        <Blog />
        <Contact/>
      </main>
    </>
  );
}