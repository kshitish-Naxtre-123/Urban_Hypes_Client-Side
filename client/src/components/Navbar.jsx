import React from "react";
import Logo from "../assets/logo.png";
import { Input } from "antd";
const { Search } = Input;
import { PiUserCircle } from "react-icons/pi";
import { MdOutlineFavorite } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { useGetAllCetgoriesQuery } from "../redux/api/categoryApiSlice";
import { Link } from "react-router-dom";

const Navbar = () => {
    const { data: categories } = useGetAllCetgoriesQuery();
    console.log("catgeories", categories);
  return (
    <div className="mt-2 flex flex-row gap-2 items-center bg-green-950 justify-around font-poppins">
      <div className="relative flex items-center gap-4">
        <img src={Logo} alt="logo" width={80} height={80} />
        <ul className="flex gap-5 text-white font-bold relative">
          <li className="group relative">
            Categories
            <div className="absolute left-0 mt-2 w-[750px] bg-white text-black p-4 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="font-bold text-lg mb-2">Categories</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                <div>
                  <ul className=" list-inside list-none font-medium text-md ">
                    {categories?.map((category) => (
                      <Link to={`category/${category._id}`}>
                        <li key={categories._id}>{category?.name}</li>
                      </Link>
                    ))}
                  </ul> 
                </div>
              </div>
            </div>
          </li>

          <li className="group relative">Top Selling</li>

          <li>Offer Zone</li>
        </ul>
      </div>

      <Search
        placeholder="Search our products"
        style={{
          width: 400,
        }}
        size="middle"
      />
      <div className="flex items-center gap-5">
        <PiUserCircle className="w-[32px] h-[32px]" color="white" />
        <MdOutlineFavorite className="w-[30px] h-[30px]" color="white" />
        <FaCartShopping className="w-[26px] h-[26px]" color="white" />
      </div>
    </div>
  );
}

export default Navbar;
