import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    navigate(`/dashboard${selectedValue}`);
  };

  return (
    <header className="w-full bg-gray-400">
      <div className="h-full p-2">
        <nav className="w-full py-4 flex items-center justify-between mx-8">
          <div className="ml-6">
            <Link to="/" className="text-3xl">
              Logo
            </Link>
          </div>
          <div className="w-1/2">
            <ul className="flex justify-center items-center gap-6">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-purple-800" : "text-gray-800"
                    } text-lg font-semibold`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <select
                  onChange={handleSelectChange}
                  className="bg-gray-200 text-gray-800 font-semibold p-2 rounded"
                >
                  <option value="">Dashboard</option>
                  <option value="/all-posts">All Posts</option>
                  <option value="/add-post">Add Post</option>
                </select>
              </li>
              {/* <li>
                <NavLink
                  to="/all-posts"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-purple-800" : "text-gray-800"
                    } text-lg font-semibold`
                  }
                >
                  All Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/add-post"
                  className={({ isActive }) =>
                    `${
                      isActive ? "text-purple-800" : "text-gray-800"
                    } text-lg font-semibold`
                  }
                >
                  Add Post
                </NavLink>
              </li> */}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
