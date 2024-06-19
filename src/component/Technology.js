import React from "react";
import htmlIcon from "../resources/icons/Tech/BW/htmlbw.png";
import cssIcon from "../resources/icons/Tech/BW/cssbw.png";
import jsIcon from "../resources/icons/Tech/BW/jsbw.png";
import tsIcon from "../resources/icons/Tech/BW/typescript.png";
import reactIcon from "../resources/icons/Tech/BW/reactbw.png";
import reduxIcon from "../resources/icons/Tech/BW/redux.png";
import chakraIcon from "../resources/icons/Tech/BW/chakrabw.png";
import nuxtjs from "../resources/icons/Tech/BW/nuxtjs.png";
import antDesign from "../resources/icons/Tech/BW/ant.png";
import vueJS from "../resources/icons/Tech/BW/vuejs.png";
import gitIcon from "../resources/icons/Tech/BW/git.png";
import nextIcon from "../resources/icons/Tech/BW/nextjs.png";
import tailwind from "../resources/icons/Tech/BW/tailwind.png";
import bootstrap from "../resources/icons/Tech/BW/bootstrap.png";
import postman from "../resources/icons/Tech/BW/postman.png";
import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";
const Technology = () => {
  const configLanguage = useSelector((store) => store?.config?.language);
  const skills = [
    {
      label: "HTML5",
      icon: htmlIcon,
    },
    {
      label: "CSS3",
      icon: cssIcon,
    },
    {
      label: "JavaScript",
      icon: jsIcon,
    },

    {
      label: "ReactJS",
      icon: reactIcon,
    },
    {
      label: "VueJS",
      icon: vueJS,
    },
    {
      label: "NuxtJS",
      icon: nuxtjs,
    },
    {
      label: "NextJS",
      icon: nextIcon,
    },
    {
      label: "React Redux",
      icon: reduxIcon,
    },

    {
      label: "tailwindcss",
      icon: tailwind,
    },
    {
      label: "Bootstrap",
      icon: bootstrap,
    },

    {
      label: "Ant Design",
      icon: antDesign,
    },
    {
      label: "GitHub",
      icon: gitIcon,
    },
    {
      label: "Postman",
      icon: postman,
    },
  ];
  return (
    <div className="dark:bg-[rgb(38,41,53)] dark:text-white pb-12">
      <div class="flex items-center  py-12">
        <div class="flex-grow border-t border-2 border-teal-100"></div>
        <span class="mx-4 lg:text-4xl  md:text-3xl text-2xl drop-shadow-2xl  text-shadow-sm ">
          {lang[configLanguage].technical}
        </span>
        <div class="flex-grow border-t border-2 border-teal-100"></div>
      </div>
      <div className="container mx-auto">
        <div className="flex gap-5 flex-wrap justify-center items-center">
          {skills.map((ele) => (
            <div className=" border min-w-44 min-h-36 flex flex-col justify-center items-center shadow-sm">
              <img
                className="w-10 h-10 filter invert-0 dark:invert dark:brightness-0 dark:contrast-200"
                src={ele.icon}
              />
              <p className="py-5 dark:text-white font-elite tracking-wider">
                {ele.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;
