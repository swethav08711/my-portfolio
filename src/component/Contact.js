import React from "react";
import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import email from "../resources/icons/email.png";
import github from "../resources/icons/github.png";
import linked from "../resources/icons/linked.png";
import phone from "../resources/icons/phone.png";
import location from "../resources/icons/location.png";

const Contact = () => {
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
  console.log(lang[configLanguage]?.navBar[3]);
  return (
    <div
      id="contact"
    >
      <div className="dark:bg-[rgb(38,41,53)] dark:text-white pb-12">
        <div class="flex items-center  py-12">
          <div class="flex-grow border-t border-2 border-teal-100"></div>
          <span class="mx-4 lg:text-4xl  md:text-3xl text-2xl drop-shadow-2xl  text-shadow-sm uppercase">
            {lang[configLanguage].contact}
          </span>
          <div class="flex-grow border-t border-2 border-teal-100"></div>
        </div>
        <div className="container mx-auto text-center">
          <h1 className="text-5xl tracking-wider py-5">Get In Touch</h1>
          <p className="text-xl text-gray-400 py-2">
            Ready to Collaborate? I'm Just a Message Away!
          </p>
          <button className="px-8 py-4 border border-teal-400 my-6 hover:shadow-xl text-xl">
            Say Hello
          </button>
          <div className="flex  mx-auto lg:justify-between lg:w-1/4  justify-evenly w-full py-9  cursor-pointer">
            {skills.map((ele) => (
              <img
                className="w-11 h-11 filter invert-0 dark:invert dark:brightness-0 dark:contrast-200"
                src={ele.icon}
              />
            ))}
          </div>
          <div className="flex lg:justify-around justify-center items-center flex-col lg:flex-row">
            <div className="flex items-center">
              <img
                className="w-5 h-5 filter invert-0 dark:invert dark:brightness-0 dark:contrast-200"
                src={email}
              />
              <p className="px-2">shwe08711@gmail.com</p>
            </div>
            <div className="flex items-center">
              <img
                className="w-5 h-5 filter invert-0 dark:invert dark:brightness-0 dark:contrast-200"
                src={phone}
              />
              <p className="px-2">7892839931</p>
            </div>
            <div className="flex items-center">
              <img
                className="w-5 h-5 filter invert-0 dark:invert dark:brightness-0 dark:contrast-200"
                src={location}
              />
              <p className="px-2">Bengaluru, Karnataka, India</p>
            </div>
          </div>
          <p className="text-xs py-5">Designed & built by Swetha v</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
