import React from "react";
import logo from "./zoyridelogo.png";
const First = () => {

 const handleclick = ()=>
 {
  const menu = document.querySelector('#menu');
  menu.classList.toggle('hidden');
 }

  return (
    <>
       {/* <section className=" bg- ">
        <div className="px-6 mx-auto h-screen pt-6">
          <nav id="header" class="fixed w-full z-30 top-0 text-white">
            <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
              <div class="pl-4 flex items-center">
                <a
                  class=" toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                  href="#"
                >
                  <img className="w-16 md:w-32 lg:w-48" src={logo} alt="" />
                </a>
              </div>
              <div class="block lg:hidden pr-4">
                <button
                  id="nav-toggle"
                  class="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                >
                  <svg
                    class="fill-current h-6 w-6"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
              </div>
              <div
                class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
                id="nav-content"
              >
                <ul class="list-reset lg:flex justify-end flex-1 items-center">
                  <li class="mr-3">
                    <a
                      href="/login"
                      className=" text-black font-large text-lg mr-3"
                    >
                      Login
                    </a>
                  </li>
                </ul>
                <button
                  id="navAction"
                  class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                >
                  <a
                    href="/register"
                    className=" text-black font-large  text-center text-lg ml-3"
                  >
                    Signup
                  </a>
                </button>
              </div>
            </div>
            <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
          </nav>
          <div className="h-max flex justify-center  mx-20">
            <div className="">
              <h6 className="mt-50">Login/Signup to see Database</h6>
            </div>
            <div class="flex w-full md:w-3/5 py-6 text-center">
              <img
                class=" mt-20 mx-60 w-full md:w-4/5 z-50"
                src="https://raw.githubusercontent.com/tailwindtoolbox/Landing-Page/master/hero.png"
              />
            </div>
          </div>
        </div>
      </section>  */}
     
    <div
    class=" h-screen
      antialiased
      bg-gradient-to-r
      from-pink-300
      via-purple-300
      to-indigo-400
    "
  >
      <header>
        <nav
          class="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-white
        "
        >
          <div>
          <a
                  class=" toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                  href="#"
                >
                  <img className="w-16 md:w-32 lg:w-48" src={logo} alt="" />
                </a>
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            class="h-6 w-6 cursor-pointer md:hidden block"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={handleclick}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>

          <div
            class="hidden w-full md:flex md:items-center md:w-auto"
            id="menu"
          >
            <ul
              class="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
            >
              
              <li>
                <a class=" hover:bg-black text-xl md:p-2 py-1 block border-2 my-2 mx-1 rounded-3xl hover:text-purple-400" href="/login">
                  Login
                </a>
              </li>
              <li>
                <a
                  class=" hover:bg-black text-xl md:p-2 py-1 border-2 my-2 block mx-1 rounded-3xl hover:text-purple-400 text-purple-500"
                  href="/register"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
        </nav>
        
      </header>
      <br className="bg-black"/>
      <div class="px-4">
      <div
        class="
          flex
          justify-center
          items-center
          bg-white
          mx-auto
          max-w-2xl
          rounded-lg
          my-16
          p-16
        "
      >
        <h1 class="text-2xl font-medium">Login/Signup To See Database</h1>
      </div>
    </div>
    </div>
    </>
  );
};

export default First;
