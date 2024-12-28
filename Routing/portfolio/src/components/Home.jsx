import React from "react";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div className="w-full min-h-screen font-serif">
      <div className="w-full pt-16 px-4 flex justify-center items-center">
        <div className="w-1/2 px-12">
          <video autoPlay muted loop className="w-full rounded">
            <source
              src="https://videos.pexels.com/video-files/852421/852421-sd_640_360_30fps.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="w-1/2">
          <div className="m-12">
            <h2 className="text-2xl my-4 font-bold">
              I'm a Full Stack developer
            </h2>
            <p className="text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
              mollitia tenetur nobis quam natus. Id dolore quos sunt tempore
              maiores cupiditate nam minima voluptate nihil non, magni omnis
              quod quia. Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Adipisci ipsam veniam eaque, debitis similique cum dolorum
              alias ab rem consequuntur?
            </p>
          </div>
        </div>
      </div>
      <div className="w-full my-6">
        <div className="py-8 px-16">
          <div className="relative flex justify-end">
            <img
              src="https://images.pexels.com/photos/16027811/pexels-photo-16027811/free-photo-of-person-using-chat-gpt-on-computer.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt=""
              className="w-full h-72 rounded"
            />
            <div className="absolute space-y-2 top-28 w-1/2 text-center">
              <div className="">
                <span className="text-gray-200 text-2xl">Social Links</span>
              </div>
              <div className="w-full flex justify-center gap-3">
                <NavLink className={`text-white text-2xl hover:text-blue-500`}>
                  <i className="fa-brands fa-linkedin "></i>
                </NavLink>
                <NavLink className={`text-white text-2xl hover:text-blue-500`}>
                  <i class="fa-brands fa-github"></i>
                </NavLink>
                <NavLink className={`text-white text-2xl hover:text-blue-500`}>
                  <i class="fa-brands fa-facebook"></i>
                </NavLink>
                <NavLink className={`text-white text-2xl hover:text-blue-500`}>
                  <i class="fa-brands fa-instagram"></i>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
