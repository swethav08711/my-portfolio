import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";
import netflixGPT from "../resources/projectImage/netflixGPT.png";
import google from "../resources/projectImage/google.png";
import instagram from "../resources/projectImage/instagram.png";
import pharmEasy from "../resources/projectImage/pharmEasy.png";
const Project = () => {
  const configLanguage = useSelector((store) => store?.config?.language);
  return (

      <div className="dark:bg-[rgb(38,41,53)] dark:text-white pb-12">
        <div class="flex items-center  py-12">
          <div class="flex-grow border-t border-2 border-teal-100"></div>
          <span class="mx-4 lg:text-4xl  md:text-3xl text-2xl drop-shadow-2xl  text-shadow-sm uppercase">
            {lang[configLanguage].project}
          </span>
          <div class="flex-grow border-t border-2 border-teal-100"></div>
        </div>
        <div className="container mx-auto ">
          <div className=" w-full md:w-[80%] flex  h-full flex-col gap-14  justify-center items-center  mx-auto">
            <div className="flex flex-col lg:flex-row border w-[85%] h-full lg:rounded-tl-xl lg:rounded-bl-xl hover:shadow-md  ">
              <img
                className="object-cover w-full lg:w-1/2 lg:rounded-tl-xl lg:rounded-bl-xl"
                src={netflixGPT}
              />
              <div className="p-3">
                <h2 className="py-1 font-bold  text-xl">NetflixGPT</h2>
                <p className="text-sm">
                  Created a movie discovery app featuring robust user
                  authentication, utilizing Gemini APIs to deliver personalized
                  movie recommendations based on user search results.
                </p>
                <p className="uppercase text-md py-2">tech stack:</p>
                <div className="flex flex-wrap gap-2">
                  <p className="border px-2 py-1 text-sm">React</p>
                  <p className="border px-2 py-1 text-sm">Redux Toolkit</p>
                  <p className="border px-2 py-1 text-sm">Firebase</p>
                  <p className="border px-2 py-1 text-sm">Tailwind</p>
                  <p className="border px-2 py-1 text-sm">Gemini Api</p>
                </div>
                <div className="flex gap-3 py-3">
                  <button className="px-6 py-2 text-lg border rounded-lg uppercase hover:bg-[rgb(38,41,53)] hover:text-white dark:hover:bg-white dark:hover:text-black ">
                    code
                  </button>
                  <button className="uppercase px-6 py-2 text-lg border rounded-lg bg-[rgb(38,41,53)] text-white hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-[rgb(38,41,53)] dark:hover:text-white">
                    live
                  </button>
                </div>
              </div>
            </div>
            <div className="lg:self-end flex-col lg:flex-row flex border w-[85%] h-full lg:rounded-tr-xl lg:rounded-br-xl hover:shadow-md  ">
              <div className="p-3">
                <h2 className="py-1 font-bold  text-xl">Google.com</h2>
                <p className="text-sm">
                  Created a Google clone with precise search capabilities, user
                  authentication, and a responsive design, highlighting my
                  proficiency in full-stack development.
                </p>
                <p className="uppercase text-md py-2">tech stack:</p>
                <div className="flex flex-wrap gap-2">
                  <p className="border px-2 py-1 text-sm">React</p>
                  <p className="border px-2 py-1 text-sm">NextJS</p>
                  <p className="border px-2 py-1 text-sm">Tailwind</p>
                </div>
                <div className="flex gap-3 py-3">
                  <button className="px-6 py-2 text-lg border rounded-lg uppercase hover:bg-[rgb(38,41,53)] hover:text-white dark:hover:bg-white dark:hover:text-black ">
                    code
                  </button>
                  <button className="uppercase px-6 py-2 text-lg border rounded-lg bg-[rgb(38,41,53)] text-white hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-[rgb(38,41,53)] dark:hover:text-white">
                    live
                  </button>
                </div>
              </div>
              <img
                className="object-cover w-full lg:w-1/2 lg:rounded-tr-xl lg:rounded-br-xl"
                src={google}
              />
            </div>
            <div className="flex flex-col lg:flex-row border w-[85%] h-full lg:rounded-tl-xl lg:rounded-bl-xl hover:shadow-md  ">
              <img
                className="object-cover w-full lg:w-1/2 lg:rounded-tl-xl lg:rounded-bl-xl"
                src={instagram}
              />
              <div className="p-3">
                <h2 className="py-1 font-bold  text-xl">Instagram.com</h2>
                <p className="text-sm">
                  This project aims to develop a clone of the popular photo-
                  sharing app Instagram. The project was built using Next.js, a
                  React-based framework for server-side rendering, and React.js,
                  a popular JavaScript library for building user interfaces.
                </p>
                <p className="uppercase text-md py-2">tech stack:</p>
                <div className="flex flex-wrap gap-2">
                  <p className="border px-2 py-1 text-sm">React</p>
                  <p className="border px-2 py-1 text-sm">Firebase</p>
                  <p className="border px-2 py-1 text-sm">Tailwind</p>
                  <p className="border px-2 py-1 text-sm">NextJS</p>
                </div>
                <div className="flex gap-3 py-3">
                  <button className="px-6 py-2 text-lg border rounded-lg uppercase hover:bg-[rgb(38,41,53)] hover:text-white dark:hover:bg-white dark:hover:text-black ">
                    code
                  </button>
                  <button className="uppercase px-6 py-2 text-lg border rounded-lg bg-[rgb(38,41,53)] text-white hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-[rgb(38,41,53)] dark:hover:text-white">
                    live
                  </button>
                </div>
              </div>
            </div>
            <div className=" lg:self-end flex flex-col lg:flex-row border w-[85%] h-full lg:rounded-tr-xl lg:rounded-br-xl hover:shadow-md  ">
              <div className="p-3">
                <h2 className="py-1 font-bold  text-xl">PharmEasy.com</h2>
                <p className="text-sm">
                  Developed a PharmEasy clone with features for ordering
                  medications, health products, and medical devices online,
                  highlighting my expertise in e-commerce platforms.
                </p>
                <p className="uppercase text-md py-2">tech stack:</p>
                <div className="flex flex-wrap gap-2">
                  <p className="border px-2 py-1 text-sm">HTML</p>
                  <p className="border px-2 py-1 text-sm">CSS</p>
                  <p className="border px-2 py-1 text-sm">Javascript</p>
                  <p className="border px-2 py-1 text-sm">API</p>
                </div>
                <div className="flex gap-3 py-3">
                  <button className="px-6 py-2 text-lg border rounded-lg uppercase hover:bg-[rgb(38,41,53)] hover:text-white dark:hover:bg-white dark:hover:text-black ">
                    code
                  </button>
                  <button className="uppercase px-6 py-2 text-lg border rounded-lg bg-[rgb(38,41,53)] text-white hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-[rgb(38,41,53)] dark:hover:text-white">
                    live
                  </button>
                </div>
              </div>
              <img
                className="object-cover w-full lg:w-1/2 lg:rounded-tr-xl lg:rounded-br-xl"
                src={pharmEasy}
              />
            </div>
          </div>
        </div>
      </div>

  );
};

export default Project;
