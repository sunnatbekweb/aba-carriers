import {PageHero} from "@/components/ui/PageHero";
import BgImage from "../../../public/images/page_hero/about_page.png"

export default function About() {
    return (
        <>
            <PageHero url={BgImage.src} title={"ABOUT ABA"}/>
            <section className="container mx-auto px-5 py-16 text-center">
            <h2 className="brigendsExpanded mt-12 text-[20px] sm:text-[35px] lg:text-[50px] uppercase leading-[1.1] tracking-widest text-center whitespace-pre-line">ABOUT ABA <br /> CARRIERS INC</h2>

            <div className="w-[90%] sm:w-[80%] md:w-[696px] border-t-2 border-red-500 mx-auto mt-10"></div>
            <p className="mx-auto text-[14px] lg:text-[19px] text-black leading-relaxed text-center px-4 mt-12 
              max-w-[327px] sm:max-w-[940px] lg:max-w-[1495px] tracking-widest">
              Founded in 2021, <span>[Your Company Name]</span> has rapidly grown into a trusted name in 
              the trucking industry. With a strong focus on efficiency and reliability, we have successfully delivered tens of 
              thousands of loads across the country. Backed by a dedicated team of nearly 200 professionals, we handle high-value 
              and time-sensitive freight with precision and care. Our commitment to excellence has earned the trust of 
              industry-leading brokers, and we continue to expand while maintaining the highest standards in transportation.
            </p>

            </section>


    <section className="bg-[#1b2016] text-white py-16 px-5 mt-12 w-full max-w-[1920px] h-[650px] mx-auto">
  <div className="container mx-auto">

{/* 
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[40px] text-left">
  <div className="w-full h-[280px] mx-auto flex flex-col justify-start items-start space-y-2">
    <p className=" text-gray-400 text-lg">Total Loads Delivered:</p>
    <p className="brigendsExpanded text-3xl break-words">TENS OF <br /> THOUSANDS</p>
  </div>

  <div className="w-full h-[280px] mx-auto flex flex-col justify-start items-start space-y-2">
    <p className=" text-gray-400 text-lg">Miles Covered Annually:</p>
    <p className="brigendsExpanded text-3xl break-words">HUNDREDS OF <br /> THOUSANDS</p>
  </div>

  <div className="w-full h-[280px] mx-auto flex flex-col justify-start items-start space-y-2">
    <p className=" text-gray-400 text-lg">Satisfied Clients:</p>
    <p className="text-5xl font-bold break-words">200+</p>
  </div>

  <div className="w-full h-[280px] mx-auto flex flex-col justify-start items-start space-y-2">
    <p className=" text-gray-400 text-lg">Team Size:</p>
    <p className="brigendsExpanded text-3xl break-words">NEARLY <br /> EMPLOYEES</p>
  </div>
</div> */}


    <div className="mt-12 text-center">
      <p className=" text-gray-400 text-lg">Industry Trust:</p>
      <p className="brigendsExpanded text-xl sm:text-2xl font-bold">
        TRUSTED BY LEADING BROKERS <br className="hidden sm:block" /> ACROSS THE COUNTRY
      </p>
    </div>
  </div>
</section>




        </>
    )
}