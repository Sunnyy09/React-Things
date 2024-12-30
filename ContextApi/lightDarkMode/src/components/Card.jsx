import React from "react";

function Card({ theme }) {
  return (
    <section
      className={`w-[620px] h-[300px] shadow-lg border border-gray-200 rounded-lg ${
        theme === "light"
          ? "shadow-sm border-none text-gray-200 shadow-white/20"
          : "text-black"
      }`}
    >
      <div className={`flex h-full justify-center`}>
        <a href="">
          <img
            className="w-[850px] h-full rounded-l-md"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt=""
          />
        </a>
        <div
          className={`px-6 py-4 flex flex-col justify-center space-y-4 flex-wrap`}
        >
          <h1 className="text-2xl font-bold">
            Noteworthy technology acquisitions 2025
          </h1>
          <p
            className={`text-gray-600 text-lg ${
              theme === "light" ? "text-gray-500" : "text-gray-600"
            }`}
          >
            Here are the biggest enterprise technology acquisitions of 2025 so
            far, in reverse chronological order.
          </p>
          <a
            href="#"
            className="inline-flex items-center w-32 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Card;
