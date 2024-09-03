import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";
import banner_2 from "../assets/oppo.jpg";
import banner_1 from "../assets/Realme.jpg";
import { getOverflowOptions } from "antd/es/_util/placements";

const Home = () => {
  return (
    <>
    <div class="overflow-auto ">
      <Navbar />
      <div id="indicators-carousel" class="relative w-full" data-carousel="static">
        <div class="relative h-70 overflow-hidden rounded-lg md:h-100">
          <div class="duration-700 ease-in-out flex justify-center" data-carousel-item="active" style={{margin:'20px '}}>
            <img src={banner_1} alt="banner_1" height={500} width={1200} style={{margin:'auto'}}/>
          </div>
          <div class="duration-700 ease-in-out flex justify-center" data-carousel-item>
            <img src={banner_2} alt="banner_2" height={500} width={1200} style={{margin:'auto'}}/>
          </div>
        </div>
        <div class="absolute z-30 flex  translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
          <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
          <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        </div>
          <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
              </svg>
              <span class="sr-only">Previous</span>
            </span>
          </button>
          <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                </svg>
                <span class="sr-only">Next</span>
            </span>
          </button>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
