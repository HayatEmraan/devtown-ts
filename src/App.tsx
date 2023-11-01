import React, { useEffect, useState } from "react";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Categories from "./components/categories/categories";
import SortFilter from "./components/sortfilter/sortfilter";
import SortAndFilter from "./components/sortfilter/filtermenu";
import { products } from "./utils/products";
import Aos from "aos";
import "aos/dist/aos.css";
import ProductList from "./components/product/product";
function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, handleMenu] = useState(false);
  const [productdb, setProducts] = useState([]);

  useEffect(() => {
    Aos.init();
    (async () => {
      const data = await products();
      setProducts(data);
    })();
  }, []);

  console.log(productdb);
  return (
    <div className="bg-[#F2ECE1] min-h-screen">
      <SortAndFilter filterBtn={isMenuOpen} handleState={handleMenu} />
      <Header />
      <main className="my-8 container mx-auto px-6">
        <h3 className="text-gray-700 text-5xl font-bold mb-8">Clothes</h3>
        <div className="flex justify-between mt-10 flex-col-reverse sm:flex-row">
          <Categories />
          <SortFilter filterBtn={isMenuOpen} handleState={handleMenu} />
        </div>
        {children}
        <ProductList product={productdb} />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
