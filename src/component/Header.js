import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { SUPPORETED_LANGUAGES } from "../utils/constant";
import { changeLanguage, changeTheme } from "../utils/configSlice";

const Header = () => {
  const configLanguage = useSelector((store) => store?.config?.language);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const dispatch = useDispatch();
  const handleLanguage = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      dispatch(changeTheme("dark"));
    } else {
      dispatch(changeTheme("light"));
    }
  }, []);
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  const handleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="shadow-lg bg-white dark:bg-[rgb(38,41,53)] dark:text-white">
      <div className="flex flex-col md:flex-row justify-between items-center gap-1 sm:gap-2  lg:container   mx-auto md:px-2  py-4">
        <div>
          <h2 className=" font-elite text-2xl font-bold ">
            {lang[configLanguage]?.name}
          </h2>
        </div>
        <div className="w-full md:w-10/12 flex  justify-evenly ">
          <ul className="hidden  w-2/3 sm:flex justify-evenly text-lg items-center ">
            {lang[configLanguage]?.navBar?.map((ele, index) => (
              <li key={index} value={ele} id={ele} className="scroll-smooth">
                <a href={"#" + lang?.en?.navBar[index]?.toLowerCase()}>{ele}</a>
              </li>
            ))}
          </ul>

          <a
            href={require("../resources/swetha_v_resume.pdf")}
            target="_blank"
            download="Swetha-v-Resume"
            className="font-bold uppercase  border dark:border-gray-300 border-black px-2 rounded-md "
          >
            <button>{lang[configLanguage]?.resume}</button>
          </a>
          <select
            onChange={handleLanguage}
            className=" text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            {SUPPORETED_LANGUAGES?.map((lan, index) => (
              <option key={index} value={lan.identifier}>
                {lan.name}
              </option>
            ))}
          </select>
          <div class="flex flex-col justify-center">
            <button
              onClick={handleTheme}
              className="p-2 rounded bg-gray-200 dark:bg-gray-700"
            >
              {theme === "light" ? (
                <svg
                  class="dark:hidden"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="fill-slate-300"
                    d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
                  />
                  <path
                    class="fill-slate-400"
                    d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
                  />
                </svg>
              ) : (
                <svg
                  class="hidden dark:block"
                  width="16"
                  height="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    class="fill-slate-400"
                    d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
                  />
                  <path
                    class="fill-slate-500"
                    d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
