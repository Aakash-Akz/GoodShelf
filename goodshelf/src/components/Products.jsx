import axios from "axios";
import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data from MongoDB
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/product`); // Replace '/api/products' with your API endpoint
        const data = response.data;
        // console.log(data);
        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container px-4 w-[80%] md:w-[92%] py-5 mx-auto mt-3">
      <div>
        <h2 className="text-2xl font-Concert  mb-4">Value Deals</h2>
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-6 ">
          {products
            .filter((product) => product.sectionName === "Value Deals")
            .map((product) => (
              <div key={product._id} className="bg-white rounded-lg shadow-md">
                <img
                  src={product.Image}
                  alt={product.productName}
                  className="rounded-t-lg object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-Montserrat font-bold mt-2">
                    {product.productName}
                  </h3>
                  <p className="text-sm font-Roboto text-gray-500 mt-1">
                    {product.oneLiner}
                  </p>
                  <div className="flex items-center justify-between mt-10 py-5">
                    <p className="text-lg font-Montserrat font-bold text-gray-700">
                      <span>&#8377;</span> {product.Price} /{" "}
                      <span className="text-gray-400 font-Montserrat">
                        {product.Quantity}
                      </span>
                    </p>
                    <button className="px-3.5 bg-white text-red-500 border border-red-500  text-lg  rounded-lg p-2 focus:outline-1">
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Repeat the above code for the 'Kid Friendly' and 'Millet Alternatives' sections */}
      <div className="my-10">
        <h2 className="text-2xl font-Concert  mb-4">Kid Friendly</h2>
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-6 ">
          {products
            .filter((product) => product.sectionName === "Kid Friendly")
            .map((product) => (
              <div key={product._id} className="bg-white rounded-lg shadow-md">
                <img
                  src={product.Image}
                  alt={product.productName}
                  className="rounded-t-lg object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-Montserrat font-bold mt-2">
                    {product.productName}
                  </h3>
                  <p className="text-sm font-Roboto text-gray-500 mt-1">
                    {product.oneLiner}
                  </p>
                  <div className="flex items-center justify-between mt-10 py-5">
                    <p className="text-lg font-Montserrat font-bold text-gray-700">
                      <span>&#8377;</span> {product.Price} /{" "}
                      <span className="text-gray-400 font-Montserrat">
                        {product.Quantity}
                      </span>
                    </p>
                    <button className="px-3.5 bg-white text-red-500 border border-red-500  text-lg  rounded-lg p-2 focus:outline-1">
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Replace the sectionName in the filter and the section heading */}
      <div className="my-10">
        <h2 className="text-2xl font-Concert  mb-4">Millet Alternatives</h2>
        <div className="grid grid-cols-1  lg:grid-cols-3 gap-6 ">
          {products
            .filter((product) => product.sectionName === "Millet Alternatives")
            .map((product) => (
              <div key={product._id} className="bg-white rounded-lg shadow-md">
                <img
                  src={product.Image}
                  alt={product.productName}
                  className="rounded-t-lg object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-Montserrat font-bold mt-2">
                    {product.productName}
                  </h3>
                  <p className="text-sm font-Roboto text-gray-500 mt-1">
                    {product.oneLiner}
                  </p>
                  <div className="flex items-center justify-between mt-10 py-5">
                    <p className="text-lg font-Montserrat font-bold text-gray-700">
                      <span>&#8377;</span> {product.Price} /{" "}
                      <span className="text-gray-400 font-Montserrat">
                        {product.Quantity}
                      </span>
                    </p>
                    <button className="px-3.5 bg-white text-red-500 border border-red-500  text-lg  rounded-lg p-2 focus:outline-1">
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

