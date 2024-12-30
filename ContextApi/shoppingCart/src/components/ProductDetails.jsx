import React from "react";
import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useTheme } from "../context/ThemeContext";

function ProductDetails() {
  const { id } = useParams();
  const { theme } = useTheme();

  const product = products.find((product) => product.id === parseInt(id));

  return (
    <div className={` min-h-[90vh] p-6`}>
      <div className="h-[80vh] flex py-4 px-6">
        <div className="w-1/2">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="w-1/2 mx-6">
          <h1 className="text-3xl font-bold leading-relaxed">
            {product.title}
          </h1>
          <div className="flex flex-col gap-2">
            <span className="text-lg leading-relaxed">
              <i>${product.price}</i>
            </span>
            <span>
              <Link className="text-blue-600 font-semibold">
                {product.reviews} reviews
              </Link>
            </span>
          </div>
          <div
            className={`mt-8 ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}
          >
            <p className={`text-lg py-4 `}>{product.details}</p>
            <p className="text-lg ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <p className="text-lg">
              Aliquam deserunt sequi minima sint pariatur rem ipsum culpa
              consequatur. Reprehenderit, quia.
            </p>
          </div>
          <div className="mt-6">
            <p className="text-lg text-gray-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
              vel qui deleniti impedit hic adipisci vitae dolor cupiditate,
              aspernatur molestiae!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
