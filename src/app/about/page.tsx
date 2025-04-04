import {PageHero} from "@/components/ui/PageHero";
import BgImage from "../../../public/images/page_hero/about_page.png"

export default function About() {
    return (
        <>

            <PageHero url={BgImage.src} title={"ABOUT ABA"}/>
            <section className="container mx-auto px-5 py-12 text-center">
            <h2 className="brigendsExpanded mt-12 text-[20px] sm:text-[35px] lg:text-[50px] uppercase leading-[1.1] tracking-widest text-center whitespace-pre-line">ABOUT ABA <br /> CARRIERS INC</h2>

            <div className="w-[90%] sm:w-[80%] md:w-[696px] border-t-2 border-red-500 mx-auto mt-10"></div>
            <p className="mx-auto text-[14px] lg:text-[19px] text-black leading-relaxed text-center px-4 mt-12 
              max-w-[300px] sm:max-w-[900px] lg:max-w-[1400px] tracking-widest">
              Founded in 2021, <span>[Your Company Name]</span> has rapidly grown into a trusted name in 
              the trucking industry. With a strong focus on efficiency and reliability, we have successfully delivered tens of 
              thousands of loads across the country. Backed by a dedicated team of nearly 200 professionals, we handle high-value 
              and time-sensitive freight with precision and care. Our commitment to excellence has earned the trust of 
              industry-leading brokers, and we continue to expand while maintaining the highest standards in transportation.
            </p>
            
            </section>

          <section className="bg-[#1b2016] text-white py-12 md:py-16 px-4 sm:px-6 w-full max-w-[1920px] min-h-[550px] mx-auto">
  <div className="mx-auto max-w-[1200px]">
   
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
   
      <div className=" mb-12 sm:mb-0 text-center md:text-start">
        <p className="text-white text-lg tracking-[0.2em] mb-6 leading-snug font-light">
          <span className="block">Total Loads</span>
          <span className="block">Delivered:</span>
        </p>
        <p className="brigendsExpanded text-2xl tracking-[0.2em] leading-[1.1]">
          <span className="block">TENS OF</span>
          <span className="block">THOUSANDS</span>
        </p>
      </div>

      <div className=" mb-12 sm:mb-0 text-center md:text-start">
        <p className="text-white text-lg tracking-[0.2em] mb-6 leading-snug font-light">
          <span className="block">Miles Covered</span>
          <span className="block">Annually:</span>
        </p>
        <p className="brigendsExpanded text-2xl tracking-[0.2em] leading-[1.1]">
          <span className="block">HUNDREDS</span>
          <span className="block">OF</span>
          <span className="block">THOUSANDS</span>
        </p>
      </div>

      
      <div className=" mb-12 sm:mb-0 text-center md:text-start">
        <p className="text-white text-lg tracking-[0.2em] mb-6 leading-snug font-light">
          <span className="block">Satisfied</span>
          <span className="block">Clients:</span>
        </p>
        <p className="font-bold text-2xl sm:text-6xl tracking-[0.05em] leading-none">
          200+
        </p>
      </div>

     
      <div className="">
        <p className="text-white text-lg tracking-[0.2em] mb-6 leading-snug font-light">
          <span className="block">Team Size:</span>
        </p>
        <div className="brigendsExpanded text-2xl tracking-[0.2em] leading-[1.1] text-center md:text-start">
          <span className="block">NEARLY</span>
          <span className="font-sans font-bold text-4xl sm:text-5xl">200</span>
          <span className="block">EMPLOYEES</span>
        </div>
      </div>
    </div>

    <div className="mt-16 sm:mt-20 text-center">
      <p className="text-white text-lg sm:text-xl tracking-[0.2em] mb-4 font-light">
        Industry Trust:
      </p>
      <p className="brigendsExpanded text-2xl sm:text-3xl md:text-4xl tracking-[0.2em] leading-[1.2]">
        <span className="block sm:inline">TRUSTED BY</span>{' '}
        <span className="block sm:inline">LEADING BROKERS</span>{' '}
        <span className="block sm:inline">ACROSS THE COUNTRY</span>
      </p>
    </div>
  </div>
</section>

        </>
    )
}