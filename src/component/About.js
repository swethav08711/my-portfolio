import React from "react";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";
import email from "../resources/icons/email.png";
import github from "../resources/icons/github.png";
import linked from "../resources/icons/linked.png";
import phone from "../resources/icons/phone.png";
const About = () => {
  const configLanguage = useSelector((store) => store?.config?.language);
  const skills = [
    {
      label: "email",
      icon: email,
    },
    {
      label: "github",
      icon: github,
    },
    {
      label: "linked",
      icon: linked,
    },
    {
      label: "phone",
      icon: phone,
    },
  ];
  return (
    <div id="About">
      <div className=" dark:bg-[rgb(38,41,53)] ">
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
          <div className="flex lg:justify-between lg:w-1/4  justify-evenly w-full py-9 mx-4 ">
            {skills.map((ele) => (
              <img
                className="w-8 h-8 filter invert-0 dark:invert dark:brightness-0 dark:contrast-200"
                src={ele.icon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
