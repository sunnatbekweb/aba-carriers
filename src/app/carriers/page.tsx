"use client";

import Image from "next/image";
import BgImage from "../../../public/images/page_hero/carriers_hero_bg.png";
import { PageHero } from "@/components/ui/PageHero";
import { FeaturedCarousel } from "@/components/ui/FeaturedCarousel";
import { BottomGradient } from "@/components/ui/BottomGradient";
import styles from "@/styles/carriers.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Feedbacks } from "@/types";

export default function Carriers() {
  const [feedbacks, setFeedbacks] = useState<Feedbacks>();

  useEffect(() => {
    getFeedbacks();
  }, []);

  const getFeedbacks = async () => {
    try {
      axios
        .get(`${process.env.NEXT_PUBLIC_BASE_URL}/feedback/`)
        .then((response) => setFeedbacks(response.data));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <PageHero url={BgImage.src} title={"Why ABA Carriers"} />
      <section
        className={
          "relative bg-[#1C2016] text-white py-[50px] md:py-[70px] lg:py-[190px]"
        }
      >
        <div className={"container px-5"}>
          <div className={"w-full lg:w-1/2 lg:pr-14"}>
            <div
              className={
                "pb-5 md:pb-[15px] lg:pb-[30px] border-b-2 border-[#ff0000] mb-10 lg:mb-[65px]"
              }
            >
              <h3
                className={
                  "brigendsExpanded text-[24px] md:text-3xl tracking-[0.08em] mb-2"
                }
              >
                WHA ABA CARRIERS PAGE
              </h3>
              <p className={"text-xs tracking-[0.08em]"}>
                Choose us for reliable service, unmatched expertise, and
                top-notch protection for your freight
              </p>
            </div>
            <p className={"text-base md:text-lg"}>
              At ABA, our mission is to prosper through excellence, delivering
              top-tier service to our customers. Our core policy is simple: do
              our best, do what’s right, and treat others with respect.
              <br /> <br />
              Guided by strong values, we are committed to reliability,
              integrity, and professionalism, ensuring that every load is
              handled with care and efficiency. With a dedicated team and a
              customer-first approach, we strive to exceed expectations every
              step of the way
            </p>
          </div>
        </div>
        <div className={"hidden lg:block absolute w-1/2 h-full top-0 right-0"}>
          <Image
            src={"/images/carriers/carriers_section_image.png"}
            width={940}
            height={900}
            className={"w-full h-full object-cover"}
            alt={"Carriers section image"}
          />
        </div>
      </section>
      <section className={`${styles.second_section}`}>
        <div className="container px-5 flex lg:justify-end">
          <div className="lg:w-1/2">
            <h3 className={`${styles.second_section_title} brigendsExpanded`}>
              What sets ABA apart
            </h3>
            <ol className="flex flex-col gap-y-[30px] text-white lg:text-black">
              <li className="text-base lg:text-lg xl:text-2xl tracking-[0.08em] lg:text-right">
                On-Time Delivery: We guarantee on-time delivery for every
                shipment, ensuring your freight arrives as scheduled
              </li>
              <li className="text-base lg:text-lg xl:text-2xl tracking-[0.08em] lg:text-right">
                Comprehensive Insurance Coverage: We offer A+ Insurance Coverage
                with a $250,000 Cargo Protection Limit for peace of mind
              </li>
              <li className="text-base lg:text-lg xl:text-2xl tracking-[0.08em] lg:text-right">
                Expertise with High-Value Loads: Our highly skilled team drivers
                are experienced in handling time-critical and high-value
                shipments, ensuring secure and efficient transportation
              </li>
            </ol>
          </div>
        </div>
      </section>
      <section className="bg-[#1C2016] py-20">
        <div className="container px-5">
          <h3 className="brigendsExpanded text-[28px] lg:text-[35px] xl:text-[45px] text-white tracking-[0.08em] mb-5 lg:mb-[50px]">
            Our features
          </h3>
        </div>
        <FeaturedCarousel />
      </section>
      <section className="py-[50px] lg:py-[65px] xl:py-[80px]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-5 gap-x-6">
            {feedbacks?.map((item) => (
              <div
                className="h-full flex flex-col justify-between"
                key={item?.id}
              >
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
                      className="brigendsExpanded text-3xl xl:text-4xl tracking-[0.08em] text-center"
                      style={{ color: item?.color }}
                    >
                      {item?.username}
                    </h4>
                    <p className="text-base lg:text-lg xl:text-xl tracking-[0.08em] text-center mt-5 lg:mt-[30px]">
                      {item?.text}
                    </p>
                  </div>
                </div>
                <div
                  className="w-full h-[25px] mt-auto"
                  style={{ backgroundColor: item?.color }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className={`h-14 hidden lg:block`}>
        <BottomGradient />
      </div>
    </>
  );
}
