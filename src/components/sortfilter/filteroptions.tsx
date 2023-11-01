import React, { useState } from "react";
import { price, category } from "./sortandfilter";

const SortFilterItems = ({
  handleFilter,
}: {
  handleFilter: (stringArray: string[], singleString: string) => void;
}) => {
  const productsSize = price;
  const productsCategory = category;

  const [checkedItems, setCheckedItems] = useState([] as string[]);
  const [checkedPrice, setCheckedPrice] = useState("");

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedItems([...checkedItems, e.target.value]);
  };
  const changeHandlerPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedPrice(e.target.value);
  };

  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    handleFilter(checkedItems, checkedPrice);
  };

  return (
    <>
      <div className="mt-8">
        <ul className="mb-8">
          <strong>
            <span className="font-mono">Price:</span>
          </strong>
          {productsSize.map((item, index) => (
            <li key={index} className="">
              <label className="font-mono">
                <input
                  type="radio"
                  value={item.value}
                  onChange={changeHandlerPrice}
                  name="price"
                />
                <span className="ml-2">{item.value}</span>
              </label>
            </li>
          ))}
        </ul>
        <ul className="mb-8">
          <strong>
            <span className="font-mono">Category:</span>
          </strong>
          {productsCategory.map((item, index) => (
            <li key={index} className="">
              <label className="font-mono">
                <input
                  type="checkbox"
                  value={item.value}
                  onChange={changeHandler}
                />
                <span className="ml-2">{item.value}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <button
          className="border font-mono p-2 w-4/5 bg-lime-300 border-black shadow-offset-black"
          onClick={submitHandler}
        >
          <span className="text-sm">APPLY</span>
        </button>
      </div>
    </>
  );
};

export default SortFilterItems;
