import { PageHero } from "@/components/ui/PageHero";
import BgImage from "../../../public/images/page_hero/drive_hero.webp";
import Image from "next/image";
import { BottomGradient } from "@/components/ui/BottomGradient";
import { DriveForm } from "@/components/ui/form/DriveForm";

export default function Drive() {
  return (
    <>
      <PageHero url={BgImage.src} title={"Drive For ABA"} />
      <section className="py-[50px] lg:py-[105px] xl:py-[180px] relative">
        <div className="container px-5 text-white lg:text-black">
          <div className="w-full lg:w-1/2 flex flex-col gap-y-5 lg:gap-y-10 xl:gap-y-[65px] lg:pr-16 xl:pr-[120px]">
            <h2 className="brigendsExpanded text-xl sm:text-2xl md:text-[28px] lg:text-[36px] tracking-[0.08em] uppercase border-b-2 border-[#ff0000] pb-5">
              Your road to success starts here
            </h2>
            <p className="text-sm md:text-base lg:text-lg tracking-[0.08em]">
              At ABA, we are committed to providing stable income and excellent
              working conditions for both owner-operators and company drivers.
              As we expand to meet the growing demand for freight transportation
              across the United States, we are seeking experienced drivers to
              partner with us
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full absolute right-0 top-0 -z-10">
          <Image
            src={"/images/drive/image1.png"}
            width={1020}
            height={840}
            className="hidden lg:flex w-full h-full object-cover"
            alt="Drive section image"
          />
          <Image
            src={"/images/drive/image3.png"}
            width={1020}
            height={840}
            className="lg:hidden w-full h-full object-cover"
            alt="Drive section image"
          />
        </div>
      </section>
      <BottomGradient />
      <section className="py-[50px] lg:py-20 xl:py-[100px]">
        <div className="container px-5 flex flex-col gap-y-10">
          <div className="flex flex-col xl:flex-row-reverse items-center gap-x-12 gap-y-10">
            <div className="md:w-[75%] xl:w-1/2 ml-auto">
              <h2 className="brigendsExpanded text-xl sm:text-2xl md:text-[28px] lg:text-[36px] tracking-[0.08em] md:text-right uppercase border-b-2 border-[#ff0000] pb-5">
                Join Our Team as a company driver
              </h2>
              <p className="text-sm md:text-base lg:text-lg tracking-[0.08em] md:text-right mt-5 lg:mt-10 xl:mt-[65px]">
                We value our drivers and offer excellent career growth
                opportunities. Join our team and enjoy the freedom of the open
                road while building a rewarding career with competitive pay and
                top-notch working conditions
              </p>
            </div>
            <div className="bg-clip lg:w-[60%] xl:w-1/2">
              <ol
                start={1}
                className="list-decimal list-inside text-white font-bold pl-4 xl:pl-0"
              >
                <li className="py-2 text-base lg:text-lg xl:text-xl">
                  Long runs for team drivers
                </li>
                <li className="py-2 text-base lg:text-lg xl:text-xl">
                  Non-forced, friendly, professional, experienced 24/7 dispatch
                </li>
                <li className="py-2 text-base lg:text-lg xl:text-xl">
                  Market or above market level pay
                </li>
                <li className="py-2 text-base lg:text-lg xl:text-xl">
                  Weekly direct deposit. Always on time!
                </li>
                <li className="py-2 text-base lg:text-lg xl:text-xl">
                  1099 Tax Form.
                </li>
                <li className="py-2 text-base lg:text-lg xl:text-xl">
                  We run all 48 continental USA states
                </li>
              </ol>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row xl:items-center gap-x-12 gap-y-10">
            <div className="md:w-[60%] xl:w-1/2">
              <h2 className="brigendsExpanded text-xl sm:text-2xl md:text-[28px] lg:text-[36px] tracking-[0.08em] uppercase border-b-2 border-[#ff0000] pb-5">
                Join Our Team as an Owner-Operator
              </h2>
              <p className="text-sm md:text-base lg:text-lg tracking-[0.08em] mt-5 lg:mt-10 xl:mt-[65px]">
                We value our drivers and offer excellent career growth
                opportunities. Join our team and enjoy the freedom of the open
                road while building a rewarding career with competitive pay and
                top-notch working conditions
              </p>
            </div>
            <div className="bg-clip lg:w-[60%] xl:w-1/2 lg:ml-auto">
              <ol
                start={1}
                className="list-decimal list-inside text-white font-bold pl-4 xl:pl-0 md:text-right xl:text-left md:flex flex-col items-end"
              >
                <li className="py-2 text-base lg:text-lg xl:text-xl w-fit xl:w-full">
                  Pay 12% of gross revenue
                </li>
                <li className="py-2 text-base lg:text-lg xl:text-xl w-fit xl:w-full">
                  Non-forced, friendly, professional, experienced 24/7 dispatch
                </li>
                <li className="py-2 text-base lg:text-lg xl:text-xl w-fit xl:w-full">
                  Weekly direct deposit. Always on time!
                </li>
                <li className="py-2 text-base lg:text-lg xl:text-xl w-fit xl:w-full">
                  1099 Tax Form.
                </li>
                <li className="py-2 text-base lg:text-lg xl:text-xl w-fit xl:w-full">
                  Only Full TL (no partials no headaches)
                </li>
                <li className="py-2 text-base lg:text-lg xl:text-xl w-fit xl:w-full">
                  ELDs
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section id="form" className="bg-[#1c2016] py-[50px] xl:py-[75px]">
        <div className="container px-5">
          <div className="w-full md:w-[70%] mx-auto xl:w-1/2 text-white mb-10">
            <h3 className="brigendsExpanded text-xl sm:text-2xl md:text-[28px] lg:text-[36px] tracking-[0.08em] text-center uppercase mb-5">
              quick pre-qualify form
            </h3>
            <p className="text-sm md:text-base lg:text-lg tracking-[0.08em] text-center">
              if you have Tractor-Trailar Experience, fill out our Pre Qualify
              form and a recruiter will you shortly
            </p>
          </div>
          <DriveForm />
        </div>
      </section>
      <section className="relative lg:py-[95px] xl:py-[115px]">
        <div className="w-full lg:w-1/2 h-full lg:absolute left-0 top-0">
          <Image
            src={"/images/drive/image2.png"}
            width={1020}
            height={840}
            className="w-full h-auto sm:h-[450px] lg:h-full object-cover"
            alt="Drive section image"
          />
        </div>
        <div className="container px-5 text-black">
          <div className="drive_section_top hidden lg:block"></div>
          <div className="w-full lg:w-1/2 flex flex-col ml-auto gap-y-5 lg:gap-y-10 xl:gap-y-[65px] lg:pl-12 py-10 lg:py-0">
            <h2 className="brigendsExpanded text-xl lg:text-3xl xl:text-4xl tracking-[0.08em] uppercase lg:text-right border-b-2 border-[#ff0000] pb-5">
              Driver qualifications minimum requirements
            </h2>
            <p className="text-sm md:text-base lg:text-lg tracking-[0.08em] lg:text-right">
              ⁃ Valid Commercial Driver’s License Class A
              <br />
              ⁃ Clean Driving Record: Safe and reliable driving history.
              <br />
              ⁃ Experience: At least 1year of professional driving experience
              preferred
              <br />
              ⁃ Strong Work Ethic: Commitment to safety, timeliness, and
              customer service
              <br />⁃ Must be able to meet minimum medical qualifications set by
              the Federal Motor Carrier Safety Administration
            </p>
          </div>
          <div className="drive_section_bottom hidden lg:block xl:hidden"></div>
        </div>
      </section>
    </>
  );
}
