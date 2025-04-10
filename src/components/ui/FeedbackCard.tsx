import React from "react";
import Image from "next/image";
import styles from "@/styles/carriers.module.css";
import { FeedbackItem } from "@/types";

export const FeedbackCard: React.FC<{ item: FeedbackItem }> = ({ item }) => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <div
          className={`${styles.logo} w-full h-[140px] lg:h-[180px] xl:h-[210px] p-5 flex justify-center items-center`}
        >
          <Image
            src={item?.icon}
            width={500}
            height={200}
            className="w-full h-[140px] lg:h-[180px] xl:h-[200px] object-contain"
            alt={item?.username}
          />
        </div>
        <div
          className="w-full h-[25px]"
          style={{ backgroundColor: item?.color }}
        ></div>
        <div className="px-6 py-5 lg:px-7 xl:px-[50px] lg:py-[30px]">
          <h4
            className="brigendsExpanded text-xl xl:text-2xl tracking-[0.08em] text-center"
            style={{ color: item?.color }}
          >
            {item?.username}
          </h4>
          <p className="text-sm md:text-base tracking-[0.08em] text-center mt-5 lg:mt-[30px]">
            {item?.text}
          </p>
        </div>
      </div>
      <div
        className="w-full h-[25px] mt-auto"
        style={{ backgroundColor: item?.color }}
      ></div>
    </div>
  );
};
