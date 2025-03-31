import { PageHero } from "@/components/ui/PageHero";
import BgImage from "../../../public/images/page_hero/carriers_hero_bg.png";
import styles from "@/styles/carriers.module.css";
import Image from "next/image";
import { Button_icon } from "../../../public/icons/Button_icon";
import { FeaturedCarousel } from "@/components/ui/FeaturedCarousel";

export default function Carriers() {
  return (
    <>
      <PageHero url={BgImage.src} title={"Why ABA Carriers"} />
      <section
        className={
          "relative bg-[#1C2016] text-white py-[50px] md:py-[70px] lg:py-[190px]"
        }
      >
        <div className={"container"}>
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
            src={"/images/carriers_section_image.png"}
            width={940}
            height={900}
            className={"w-full h-full object-cover"}
            alt={"Carriers section image"}
          />
        </div>
      </section>
      <section className={`${styles.second_section}`}>
        <div className="container flex lg:justify-end">
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
        <div className="container">
          <h3 className="brigendsExpanded text-[28px] lg:text-[35px] xl:text-[45px] text-white tracking-[0.08em] mb-5 lg:mb-[50px]">
            Our features
          </h3>
        </div>
        <FeaturedCarousel />
      </section>
    </>
  );
}
