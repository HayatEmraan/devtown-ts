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

  const [filterdb, setFilterdb] = useState([]);

  useEffect(() => {
    Aos.init();
    (async () => {
      const data = await products();
      setFilterdb(data);
      setProducts(data);
    })();
  }, []);

  const handleFilter = (checkedItems: string[], checkedPrice: string) => {
    console.log(checkedItems, checkedPrice);
    console.log(productdb);
    const filterProducts =
      checkedItems.length > 0
        ? productdb.filter((product) => checkedItems.includes(product.category))
        : productdb;
    if (checkedPrice === "Highest") {
      setFilterdb(filterProducts.sort((a, b) => b.price - a.price));
    } else if (checkedPrice === "Lowest") {
      setFilterdb(filterProducts.sort((a, b) => a.price - b.price));
    } else {
      setFilterdb(filterProducts);
    }
    handleMenu(!isMenuOpen);
  };

  const All = () => {
    setFilterdb(productdb);
  };
  const Robot = () => {
    const filter = productdb.filter((item) => item.category === "Robot");
    setFilterdb(filter);
  };
  const Car = () => {
    const filter = productdb.filter((item) => item.category === "Car");
    setFilterdb(filter);
  };
  const Disney = () => {
    const filter = productdb.filter((item) => item.category === "Disney");
    setFilterdb(filter);
  };
  const Marvel = () => {
    const filter = productdb.filter((item) => item.category === "Marvel");
    setFilterdb(filter);
  };

  return (
    <div className="bg-[#F2ECE1] min-h-screen">
      <SortAndFilter
        filterBtn={isMenuOpen}
        handleState={handleMenu}
        handleFilter={handleFilter}
      />
      <Header />
      <main className="my-8 container mx-auto px-6">
        <h3 className="text-gray-700 text-5xl font-bold mb-8">Clothes</h3>
        <div className="flex justify-between mt-10 flex-col-reverse sm:flex-row">
          <Categories
            All={All}
            Robot={Robot}
            Car={Car}
            Disney={Disney}
            Marvel={Marvel}
          />
          <SortFilter filterBtn={isMenuOpen} handleState={handleMenu} />
        </div>
        {children}
        <ProductList product={filterdb} />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
