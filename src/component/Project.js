import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";
import netflixGPT from "../resources/projectImage/netflixGPT.png";
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
        <div className="w-[80%] flex  h-full flex-col gap-14  justify-center  mx-auto">
          <div className="flex border w-[85%] h-full rounded-tl-xl rounded-bl-xl hover:shadow-md  ">
            <img
              className="object-cover w-1/2 rounded-tl-xl rounded-bl-xl"
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
          <div className="self-end flex border w-[85%] h-full rounded-tr-xl rounded-br-xl hover:shadow-md  ">
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
            <img
              className="object-cover w-1/2 rounded-tr-xl rounded-br-xl"
              src={netflixGPT}
            />
          </div>
          <div className="flex border w-[85%] h-full rounded-tl-xl rounded-bl-xl hover:shadow-md  ">
            <img
              className="object-cover w-1/2 rounded-tl-xl rounded-bl-xl"
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
          <div className=" self-end flex border w-[85%] h-full rounded-tr-xl rounded-br-xl hover:shadow-md  ">
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
            <img
              className="object-cover w-1/2 rounded-tr-xl rounded-br-xl"
              src={netflixGPT}
            />
          </div>
          <div className="flex border w-[85%] h-full rounded-tl-xl rounded-bl-xl hover:shadow-md  ">
            <img
              className="object-cover w-1/2 rounded-tl-xl rounded-bl-xl"
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
        </div>
      </div>
    </div>
  );
};

export default Project;
