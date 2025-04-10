import Image from "next/image";
import Link from "next/link";
import { HomeNavbar } from "@/components/ui/HomeNavbar";
import { ButtonPrimary } from "@/components/ui/buttons/ButtonPrimary";
import { ButtonSecondary } from "@/components/ui/buttons/ButtonSecondary";
import { TruckImages } from "@/components/ui/TruckImages";
import { BottomGradient } from "@/components/ui/BottomGradient";
import { ServiceSectionGsap } from "@/components/ui/animation/ServiceSectionGsap";
import { AboutSectionGsap } from "@/components/ui/animation/AboutSectionGsap";
import styles from "@/styles/homepage.module.css";

export default function Home() {
  return (
    <>
      <HomeNavbar />
      <section className={`${styles.intro}`}>
        <Image
          src={"/images/page_hero/homepage_hero.webp"}
          width={1920}
          height={1080}
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full -z-10 object-cover"
          alt="Hero background image"
        />
        <div className="container px-5 flex justify-center">
          <div className="max-w-[520px] lg:max-w-[795px] flex flex-col items-center">
            <h1 className="brigendsExpanded text-2xl md:text-[28px] lg:text-[36px] text-white text-center mb-5 lg:mb-10">
              Your belongings are in safe hands
            </h1>
            <div className="flex gap-y-7 items-center gap-x-5 lg:gap-x-[50px]">
              <Link href={"/services#get_quote"}>
                <ButtonSecondary text="Get a quote" />
              </Link>
              <Link href={"/drive#form"}>
                <ButtonPrimary text="Drive with us" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        id={"carriers"}
        className="py-10 md:py-20 bg-[#1C2016] text-white overflow-hidden"
      >
        <div className="container pl-12 md:pl-14 pr-5 flex items-center justify-between">
          <div className="max-w-[795px]">
            <Image
              src={"/icons/truck.svg"}
              width={60}
              height={45}
              className="w-[30] h-[25px] md:w-[50px] md:h-[35px] lg:w-[60] lg:h-[45px]"
              alt="Truck icon"
            />
            <h2 className="brigendsExpanded text-2xl md:text-[28px] lg:text-[36px] border-b-2 border-[#ff0000] w-fit mt-10 pb-3">
              WHY ABA CARRIERS
            </h2>
            <p className="mt-5 mb-10 md:my-10 lg:my-[65px] text-sm md:text-base lg:text-lg">
              At ABA, we are dedicated to delivering freight safely,
              efficiently, and on time across the USA. With a growing fleet and
              a team of experienced professionals, we provide reliable trucking
              services tailored to your logistics needs
            </p>
            <Link href={"/carriers"} aria-label="Link to carriers page">
              <ButtonPrimary text="Read more" />
            </Link>
          </div>
          <div className="hidden min-w-1/2 xl:min-w-auto lg:flex flex-col gap-y-6 xl:gap-y-10">
            <TruckImages />
          </div>
        </div>
      </section>
      <section
        id={"drive"}
        className={`${styles.third_section} text-white lg:text-black`}
      >
        <div className="container pl-12 md:pl-14 pr-5 flex flex-col items-start lg:items-end">
          <div className="lg:w-[45%]">
            <Image
              src={"/icons/wheel.svg"}
              width={60}
              height={45}
              className="w-[30] h-[25px] md:w-[50px] md:h-[35px] lg:w-[60] lg:h-[45px] lg:ml-auto"
              alt="Wheel icon"
            />
            <div className="mt-10 lg:ml-auto lg:pl-[100px] pb-3 w-full lg:w-fit border-b-2 border-[#ff0000]">
              <h2 className="brigendsExpanded text-2xl md:text-[28px] lg:text-[36px] lg:text-right">
                Drive for aba
              </h2>
            </div>
            <p className="mt-5 mb-10 md:my-10 lg:my-[65px] text-sm lg:text-lg lg:text-right">
              Looking for a trucking company that values you? At ABA, we put our
              drivers first with competitive pay, steady miles, and a supportive
              team that treats you like family. Whether you&apos;re an owner
              operator or a company driver we offer the opportunities,
              resources, and respect you deserve. Join us today and drive your
              future forward!
            </p>
            <div className="flex lg:justify-end">
              <Link href={"/drive"} aria-label="Link to drive page">
                <ButtonPrimary text="Read more" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <BottomGradient />
      <section id={"services"} className={`${styles.services}`}>
        <div className="container pl-12 md:pl-14 pr-5 flex flex-col">
          <Image
            src={"/icons/operator.svg"}
            width={60}
            height={45}
            className="w-[30] h-[25px] md:w-[50px] md:h-[35px] lg:w-[60] lg:h-[45px]"
            alt="Operator icon"
          />
          <h2 className="brigendsExpanded text-2xl md:text-[28px] lg:text-[36px] border-b-2 border-[#ff0000] w-fit mt-10 pb-3">
            ABA SERVICES
          </h2>
          <ol className="flex flex-col w-full lg:w-1/2 gap-y-[60px] my-[65px] list-decimal">
            <li className="text-sm md:text-base lg:text-lg">
              Team Transit Shipments: Focused on expedited team transit to
              provide time-sensitive transportation solutions
            </li>
            <li className="text-sm md:text-base lg:text-lg">
              Experienced Dry Van Drivers: Skilled professionals ensuring
              secure, efficient and on-time delicate shipments
            </li>
          </ol>
          <Link href={"/services"} aria-label="Link to services page">
            <ButtonPrimary text="Read more" />
          </Link>
        </div>
        <div className="relative lg:absolute right-0 top-1/2 -z-10 lg:-translate-y-1/2 lg:w-1/2">
          <Image
            src={"/images/boxes.png"}
            width={1400}
            height={1000}
            alt="Section side image"
          />
          <ServiceSectionGsap />
        </div>
      </section>
      <BottomGradient />
      <section
        id={"about"}
        className={`${styles.carriers} pb-[60px] lg:py-[125px]`}
      >
        <div className="w-full lg:absolute top-0 lg:w-1/2 h-full mb-6">
          <div className="relative -z-10 h-full">
            <Image
              src={"/images/carriers_image.png"}
              width={960}
              height={1020}
              className="h-auto sm:h-[400px] lg:h-full w-full object-cover"
              alt="Carriers section image"
            />
            <AboutSectionGsap />
          </div>
        </div>
        <div className="container px-5">
          <div className="lg:w-1/2 flex flex-col lg:items-end ml-auto pl-5">
            <Image
              src={"/icons/carriers_icon.svg"}
              width={60}
              height={60}
              className="w-[30] h-[25px] md:w-[50px] md:h-[35px] lg:w-[60] lg:h-[45px]"
              alt="Carriers image"
            />
            <div className="border-b-2 border-[#ff0000] max-w-[540px]">
              <h2 className="brigendsExpanded text-2xl md:text-[28px] lg:text-[36px] text-left w-fit mt-10 pb-3 lg:text-right">
                ABOUT ABA CARRIERS INC
              </h2>
            </div>
            <p className="max-w-[690px] text-sm md:text-base lg:text-lg my-[65px] text-left lg:text-right">
              Since 2021, ABA has successfully delivered tens of thousands of
              loads, earning the trust of industry-leading brokers. Each year,
              we cover hundreds of thousands of miles, ensuring reliable and
              efficient transportation. With 200+ satisfied clients, we are
              committed to excellence in every shipment
            </p>
            <Link href={"/about"} aria-label="Link to about page">
              <ButtonPrimary text="Read more" />
            </Link>
          </div>
        </div>
      </section>
      <div className={`h-14 hidden lg:block`}>
        <BottomGradient />
      </div>
    </>
  );
}
