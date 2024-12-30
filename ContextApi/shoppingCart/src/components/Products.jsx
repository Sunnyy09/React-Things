import React from "react";
import { useTheme } from "../context/ThemeContext";

function Products({ title, details, price, reviews, addItemToCart, id }) {
  const { theme } = useTheme();

  return (
    <div
      className={`w-full rounded-md ${
        theme === "dark" ? "bg-[#121212]" : "bg-white"
      }`}
    >
      <div className="pt-6 w-[580px] max-h-[350px]">
        <nav aria-label="Breadcrumb">
          <ol
            role="list"
            className="mx-auto flex max-w-2xl items-center space-x-2 px-4 sm:px-6 lg:max-w-7xl lg:px-8"
          >
            <li>
              <div className="flex items-center">
                <a
                  href="#"
                  className={`mr-2 text-sm font-medium  ${
                    theme === "dark" ? "text-gray-200" : "text-gray-900"
                  }`}
                >
                  Men
                </a>
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className={`h-5 w-4  ${
                    theme === "dark" ? "text-white" : "text-gray-300"
                  }`}
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <a
                  href="#"
                  className={`mr-2 text-sm font-medium  ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}
                >
                  Clothing
                </a>
                <svg
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="currentColor"
                  aria-hidden="true"
                  className="h-5 w-4 text-gray-300"
                >
                  <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
                </svg>
              </div>
            </li>

            <li class="text-sm">
              <a
                href="#"
                aria-current="page"
                className={`font-medium  hover:text-gray-600 ${
                  theme === "dark" ? "text-white" : " text-gray-500"
                }`}
              >
                {/* Basic Tee 6-Pack */}
                {title}
              </a>
            </li>
          </ol>
        </nav>

        {/*  Image gallery  */}
        {/* <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:gap-x-8 lg:px-8">
          <img
            src={image}
            alt="Two each of gray, white, and black shirts laying flat."
            className="hidden aspect-[3/4] size-full rounded-lg object-cover lg:block"
          /> */}
        {/* <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <img
              src="https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg"
              alt="Model wearing plain black basic tee."
              className="aspect-[3/2] size-full rounded-lg object-cover"
            />
            <img
              src="https://tailwindui.com/plus/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg"
              alt="Model wearing plain gray basic tee."
              className="aspect-[3/2] size-full rounded-lg object-cover"
            />
          </div>
          <img
            src="https://tailwindui.com/plus/img/ecommerce-images/product-page-02-featured-product-shot.jpg"
            alt="Model wearing plain white basic tee."
            className="aspect-[4/5] size-full object-cover sm:rounded-lg lg:aspect-[3/4]"
          /> 
        </div>*/}

        {/* <!-- Product info --> */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto_auto_1fr] lg:gap-x-8 lg:px-8 lg:pt-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1
              className={`text-2xl font-bold tracking-tight  sm:text-3xl ${
                theme === "dark" ? "text-gray-300" : "text-gray-900"
              }`}
            >
              {/* Basic Tee 6-Pack */} {title}
            </h1>
          </div>

          {/* <!-- Options --> */}
          <div className="mt-4 lg:row-span-3 lg:mt-0">
            <h2 className="sr-only">Product information</h2>
            <p
              className={`text-3xl tracking-tight ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              ${price}
            </p>

            {/* <!-- Reviews --> */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  <svg
                    className={`size-5 shrink-0 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    className={`size-5 shrink-0 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    className={`size-5 shrink-0 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    className={`size-5 shrink-0 ${
                      theme === "dark" ? "text-white" : "text-gray-900"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <svg
                    className={`size-5 shrink-0 ${
                      theme === "dark" ? "text-gray-900" : "text-white"
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    data-slot="icon"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <p className="sr-only">4 out of 5 stars</p>
                <a
                  href="#"
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {reviews} reviews
                </a>
              </div>
            </div>

            <form className="mt-10">
              <button
                type="submit"
                onClick={(e) => {
                  e.preventDefault();
                  addItemToCart({ id, title, price, reviews });
                }}
                className="mt-10 flex lg:w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Add to bag
              </button>
            </form>
          </div>

          <div className="lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pr-8">
            <div className="mt-8">
              <h2
                className={`text-sm font-medium ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Details
              </h2>

              <div className="mt-4 space-y-6">
                <p
                  className={`text-sm ${
                    theme === "dark" ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {details}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
