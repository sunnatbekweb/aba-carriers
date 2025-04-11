import { PageHero } from "@/components/ui/PageHero";
import BgImage from "../../../public/images/page_hero/about_hero_bg.webp";

export default function About() {
  return (
    <>
      <PageHero url={BgImage.src} title={"ABOUT ABA"} />
      <section className="container mx-auto px-5 py-12 text-center">
        <h2 className="brigendsExpanded mt-12 text-2xl md:text-[28px] lg:text-[36px] uppercase leading-[1.1] tracking-widest text-center whitespace-pre-line">
          ABOUT ABA <br /> CARRIERS INC
        </h2>
        <div className="w-[90%] sm:w-[80%] md:w-[696px] border-t-2 border-red-500 mx-auto mt-5"></div>
        <p
          className="mx-auto text-[14px] lg:text-[19px] text-black leading-relaxed text-center px-4 mt-12 
              max-w-[300px] sm:max-w-[900px] lg:max-w-[1400px] tracking-widest"
        >
          Founded in 2021, <span>[Your Company Name]</span> has rapidly grown
          into a trusted name in the trucking industry. With a strong focus on
          efficiency and reliability, we have successfully delivered tens of
          thousands of loads across the country. Backed by a dedicated team of
          nearly 200 professionals, we handle high-value and time-sensitive
          freight with precision and care. Our commitment to excellence has
          earned the trust of industry-leading brokers, and we continue to
          expand while maintaining the highest standards in transportation.
        </p>
      </section>
      <section className="bg-[#1b2016] text-white py-12 md:py-16">
        <div className="container px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-15 gap-x-10">
            <div className="flex flex-col gap-y-2.5 lg:gap-y-6">
              <p className="md:text-lg text-center lg:text-left">
                Total Loads Delivered:
              </p>
              <h4 className="brigendsExpanded text-xl sm:text-2xl lg:text-xl 2xl:text-3xl text-center lg:text-left">
                Tens of thousands
              </h4>
            </div>
            <div className="flex flex-col gap-y-2.5 lg:gap-y-6">
              <p className="md:text-lg text-center lg:text-left">
                Miles Covered Annually:
              </p>
              <h4 className="brigendsExpanded text-xl sm:text-2xl lg:text-xl 2xl:text-3xl text-center lg:text-left">
                Hundreds of thousands
              </h4>
            </div>
            <div className="flex flex-col gap-y-2.5 lg:gap-y-6">
              <p className="lg:text-lg text-center lg:text-left">
                Satisfied Clients:
              </p>
              <h4 className="font-sans text-3xl lg:text-5xl font-black text-center lg:text-left">
                200+
              </h4>
            </div>
            <div className="flex flex-col gap-y-2.5 lg:gap-y-6">
              <p className="md:text-lg text-center lg:text-left">Team Size:</p>
              <h4 className="brigendsExpanded text-2xl lg:text-xl 2xl:text-3xl text-center lg:text-left">
                Nearly{" "}
                <span className="font-sans text-2xl lg:text-3xl font-black">
                  200
                </span>{" "}
                employees
              </h4>
            </div>
          </div>
          <div className="flex flex-col gap-y-2.5 lg:gap-y-6 mt-15 lg:mt-20 lg:max-w-1/2 mx-auto">
            <p className="md:text-lg text-center">Industry Trust:</p>
            <h4 className="brigendsExpanded text-xl sm:text-2xl lg:text-xl 2xl:text-3xl text-center">
              Trusted by leading brokers across the country
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}
