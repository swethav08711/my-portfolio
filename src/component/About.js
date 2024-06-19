import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
const About = () => {
  const configLanguage = useSelector((store) => store?.config?.language);

  return (
    <div id="About">
      <div className=" dark:bg-[rgb(38,41,53)] h-[450px]">
        <div className="md:container mx-auto   p-7 dark:text-white py-14">
          <div className="flex flex-col lg:flex-row gap-4">
            <div>
              <p className="lg:text-4xl  md:text-2xl uppercase  text-xl dark:text-gray-300  text-gray-600  ">
                {lang[configLanguage]?.hello}
              </p>

              <p className="py-0 md:py-5">
                <span className="text-gray-400 text-xl lg:text-5xl md:text-3xl">
                  {lang[configLanguage]?.am}
                </span>{" "}
                <span className="lg:text-5xl md:text-3xl text-xl font-bold">
                  {lang[configLanguage]?.fullName}
                </span>
              </p>

              <p className="lg:text-4xl  md:text-2xl text-xl text-teal-600 py-0 md:py-3">
                {lang[configLanguage]?.profile}
              </p>
              <p className="md:text-2xl py-2 text-xl">
                {lang[configLanguage]?.des}
              </p>
              <p className="text-xl text-gray-400">
                {lang[configLanguage]?.keepScrolling}
              </p>

              <button className="font-bold uppercase border border-black dark:border-gray-300 px-4  py-3 rounded-md md:my-6 my-2 hover:shadow-lg cursor-pointer">
                {lang[configLanguage]?.resume}
              </button>
            </div>

            <div className="flex flex-col lg:w-1/3   w-full ">
              <div className=" h-[315px]  z-20 border-4 rounded-tl-[4rem] rounded-br-[4rem]">
                <img
                  className="object-cover h-full w-full rounded-tl-[3.6rem] rounded-br-[3.6rem]"
                  src="./portfolio.jpeg"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between lg:w-1/5   w-full">
            <GitHubIcon />
            <LinkedInIcon />
            <EmailIcon />
            <PhoneIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
