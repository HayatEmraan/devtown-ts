import { useState } from "react";
import ReactStars from "react-rating-stars-component";

interface Product {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
  image: string;
  rating: number;
  seller: string;
  category: string;
  sub_category: string;
  featuers: string[];
  tag: string;
}

const ProductList = ({ product }: { product: Product[] }) => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = useState(1);

  const [currentItem, setCurrentItem] = useState(8);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = product.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    window.scrollTo(0, 0);
    setCurrentItem(
      pageNumber * itemsPerPage > product.length
        ? product.length
        : pageNumber * itemsPerPage
    );
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
        {currentItems.map(
          (item: {
            description: string;
            _id: string;
            name: string;
            image: string;
            price: number;
            rating: number;
          }) => {
            return (
              <div
                key={item._id}
                className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
              >
                <div data-aos="zoom-in">
                  <img
                    className="p-8 rounded-t-lg w-[400px] h-[300px]"
                    src={item?.image}
                    alt="product image"
                  />
                </div>
                <div className="px-5 pb-5">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    {item?.name}
                  </h5>
                  <div className="flex items-center mt-2.5 mb-5">
                    <ReactStars size={22} value={item?.rating} edit={false} />
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                      {item?.rating}
                    </span>
                  </div>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item?.description.slice(0, 60) + "..."}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      ${item?.price}
                    </span>
                    <a
                      href={`/details/${item?._id}`}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
      <div className="mt-6 pb-12">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-semibold">
            {currentItem} results of {product.length}
          </h1>
          <ul className="flex justify-center">
            {Array(Math.ceil(product.length / itemsPerPage))
              .fill(null)
              .map((_, index) => (
                <li key={index} className="mr-2">
                  <button
                    onClick={() => handlePageChange(index + 1)}
                    className={`${
                      currentPage === index + 1
                        ? "bg-blue-700 text-white"
                        : "bg-white text-blue-700"
                    } hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
