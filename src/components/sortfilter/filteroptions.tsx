import React, { useState } from "react";
import { gender, size, category } from "./sortandfilter";

const SortFilterItems = () => {
  const productsGender = gender;
  const productsSize = size;
  const productsCategory = category;

  const [checkedItems, setCheckedItems] = useState({});

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckedItems({ ...checkedItems, [e.target.value]: e.target.checked });
  };

  const queryArray: string[] = [];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const needToBeFilteredQuery = Object.entries(checkedItems).forEach(
    ([key, value]) => {
      if (value === true) {
        queryArray.push(key);
      }
    }
  );


  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="mt-8">
        <ul className="mb-8">
          <strong>
            <span className="font-mono">Gender:</span>
          </strong>
          {productsGender.map((item, index) => (
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
        <ul className="mb-8">
          <strong>
            <span className="font-mono">Size:</span>
          </strong>
          {productsSize.map((item, index) => (
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
