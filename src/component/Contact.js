import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";

const Contact = () => {
  const configLanguage = useSelector((store) => store?.config?.language);
  return (
    <div className="dark:bg-[rgb(38,41,53)] dark:text-white pb-12">
      <div class="flex items-center  py-12">
        <div class="flex-grow border-t border-2 border-teal-100"></div>
        <span class="mx-4 lg:text-4xl  md:text-3xl text-2xl drop-shadow-2xl  text-shadow-sm uppercase">
          {lang[configLanguage].contact}
        </span>
        <div class="flex-grow border-t border-2 border-teal-100"></div>
      </div>
    </div>
  );
};

export default Contact;
