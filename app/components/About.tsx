"use client";

import { SectionWrapper } from "./HigherOrderComponents";
import { motion } from "framer-motion";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import { fadeIn, textVariant } from "@/app/utils/motion";

type ServiceCardProps = {
  index: number;
  title: string;
  icon: string;
};

const ServiceCard = ({ index, title, icon }: ServiceCardProps) => {
  return (
    <>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className="xs:w-[250px] w-full"
      >
        <motion.div
          variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-px rounded-[20px] shadow-card"
        >
          <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
            <Image
              src={icon}
              width={64}
              height={64}
              alt={title}
              className="w-16 h-16 object-contain"
            />
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    </>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sectionSubText">Introduction</p>
        <h2 className="sectionHeadText">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-[3xl] leading-[30px]"
      >
        I'm a post-graduate student with a passion for data analytics,
        information technology, and machine learning. Experienced computer
        operator in various municipal sectors in Kathmandu, Nepal. Skilled in
        revenue collection, registrar duties, and storekeeping. Conducted a
        climate change impact survey in Nepal's highlands. Interned as a
        front-end developer at Webmandu Nepal. Proficient in Red Hat Enterprise
        Linux and Python, along with languages like C, C++, and JAVA.
        Accomplished projects in Python-based disease prediction and PHP-based
        E-commerce. Actively engaged in co-curricular activities, including
        volunteering for earthquake relief, COVID-19 awareness campaigns,
        wildlife monitoring, and various community service initiatives. Eager to
        apply expertise in both data analytics and machine learning to new
        challenges.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
