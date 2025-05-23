import { PageHero } from "@/components/ui/PageHero";
import BgImage from "../../../public/images/page_hero/services_hero_bg.webp";
import { QuoteForm } from "@/components/ui/form/QuoteForm";
import { ToastContainer } from "react-toastify";

export default function Services() {
  return (
    <>
      <PageHero url={BgImage.src} title={"ABA SERVICES"} />
      <ToastContainer />
      <section className="py-12 bg-black text-white md:bg-white md:text-black">
        <div className="container px-5">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 xl:gap-20 items-start">
            <div className="text-start">
              <h2 className="brigendsExpanded text-2xl md:text-[28px] lg:text-[36px] uppercase leading-tight tracking-widest">
                Reliable Freight Shipping With Team Drivers
              </h2>
              <div className="w-full max-w-[500px] border-t-2 border-red-500 mt-3"></div>
              <p className="text-white text-sm md:text-base lg:text-lg mt-6 sm:mt-8 tracking-wider leading-relaxed md:text-gray-700">
                When you choose ABA, you get the advantage of team driver
                deliveries, ensuring faster and more efficient freight
                transportation. Our experienced office staff works closely with
                you to plan and schedule shipments, tailoring solutions to meet
                your needs.
              </p>
            </div>
            <div>
              <p className="text-white tracking-wider text-sm md:text-base lg:text-lg mb-6 md:mb-10 leading-relaxed md:text-gray-700">
                With a focus on time-sensitive and high-priority freight,
                our team drivers provide expedited and secure deliveries.
                Whether you need dedicated freight services or specialised dry
                van transportation, we are committed to efficiency, reliability,
                and customer satisfaction.
              </p>
              <p className="text-white tracking-wider text-sm md:text-base lg:text-lg leading-relaxed md:text-gray-700">
                Whether you are exploring new logistics partnerships or need immediate
                freight support, we are here to make the process simple and stress-free.
                Get in touch with us to learn how ABA can help streamline your
                transportation needs with speed, safety, and reliability
                For more details about our services, rates, or to request a free
                freight quote, contact us today or use the form below!
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="get_quote" className="py-12 bg-white">
        <div className="container px-5">
          <div className="text-start mb-10">
            <h2 className="text-xl md:text-[28px] lg:text-[36px] brigendsExpanded uppercase tracking-widest text-gray-900 mb-3">
              GET A QUOTE
            </h2>
            <p className="text-gray-600 text-sm md:text-base lg:text-lg">
              Fill our request quote form and we will get in touch with you
            </p>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
