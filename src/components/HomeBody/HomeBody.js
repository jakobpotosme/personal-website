import React from "react";
import pfp2 from '../../pfp2.png';
export default function HomeBody() {
    return (
        <div class="container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
          <div class="flex flex-wrap md:flex-nowrap">
            {/* <nav class='inline-block lg:mr-24 lg:w-4 fixed left-percentage hidden xl:'>
                <div className="absolute left-50 transform -translate-x-1/2 space-y-6 mt-36">
                  <a href='#home' class='nav-dot selected-circle block w-7 h-7 rounded-full border-4 border-nav bg-body'>
                      <span class="bg-black px-2 py-1 rounded-md ml-10">Home</span>
                  </a>
                  <a href='#about' class='nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body'>
                      <span class="bg-black px-2 py-1 rounded-md ml-10">My Work</span>
                  </a>
                  <a href='#home' class='nav-dot block w-7 h-7 rounded-full border-4 border-nav bg-body'>
                      <span class="bg-black px-2 py-1 rounded-md ml-10">About Me</span>
                  </a>
                </div>
            </nav> */}

            {/* <img alt='profile' src={pfp2}  class="object-cover h-180 w-96 w-3/4 mt-12 md:absolute -mt-6 md:mt-0 right-0 -z-1 lg:mr-40 scale-125"></img> */}
            <img alt='profile' src={pfp2}  class="object-cover h-180 w-96 w-3/4 mt-12 -mt-6 md:mt-0 right-0 -z-1 lg:mr-40 scale-75"></img>

            <div class="flex flex-wrap lg:ml-20 justify-center md:justify-start max-w-xl mt-0 md:my-36">
              <h1 class="font-bold text-5xl md:text-6xl lg:text-7xl text-center md:text-left"> Building <br/> beautiful web experiences</h1>
              <button class="px-8 py-4 bg-theme text-white font-bold mt-12 flex items-center space-x-3">
                        <span>View my work.</span>
                    </button>
            </div>
          </div>
        
        </div>
    );
}