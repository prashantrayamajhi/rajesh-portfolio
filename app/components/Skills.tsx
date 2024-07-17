"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { dataAnalystFeatures } from "../constants";
import { fadeIn, textVariant } from "@/app/utils/motion";
import { SectionWrapper } from "./HigherOrderComponents";

type SkillsCardProps = {
  index: number;
  feature: string;
  name: string;
  image: string;
};

const SkillsCard = ({ index, feature, name, image }: SkillsCardProps) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-8 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-medium text-[1.7rem]">{name}</p>

    <div className="mt-4 ">
      <p className="text-white tracking-wider text-[1rem]">{feature}</p>
      <div className="mt-7 flex justify-between items-center gap-1">
        {/* <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">{name}</p>
        </div> */}
        {/* <Link href={link}>
          <Image
            src={image}
            width={40}
            height={40}
            alt={`feedback by ${name}`}
            className="w-10 h-10 rounded-full object-cover "
          />
        </Link> */}
      </div>
    </div>
  </motion.div>
);

const Skills = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className="padding bg-tertiary rounded-2xl min-h-[300px]">
        <motion.div variants={textVariant()}>
          <h2 className="sectionHeadText">My Expertise</h2>
          <p className="sectionSubText">
            Here are the skillsets that I have acquired in my career
          </p>
        </motion.div>
      </div>
      <div className="paddingX -mt-20 pb-14 flex flex-wrap gap-7">
        {dataAnalystFeatures.map((item, index) => (
          <SkillsCard key={item.id} index={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Skills, "skills");
