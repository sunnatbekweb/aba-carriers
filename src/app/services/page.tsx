import {PageHero} from "@/components/ui/PageHero";
import BgImage from "../../../public/images/page_hero/services_hero_bg.png"

export default function Services() {
    return (
        <>
            <PageHero url={BgImage.src} title={"ABA SERVICES"}/>

           <section className="max-w-[1700px] mx-auto px-4 md:px-8 lg:px-[108px] py-12 bg-black text-white md:bg-white md:text-black">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 xl:gap-20 items-start">
           
            <div className="w-full max-w-full lg:max-w-[600px] mx-auto text-start">
                <h2 className="brigendsExpanded text-2xl sm:text-3xl uppercase leading-tight tracking-widest">
                Reliable Freight Shipping With Team Drivers
                </h2>
                <div className="w-full max-w-[500px] border-t-2 border-red-500 mt-3"></div>
                <p className="text-white text-base sm:text-lg mt-6 sm:mt-8 tracking-wider leading-relaxed md:text-gray-700">
                When you choose ABA, you get the advantage of team driver deliveries, ensuring faster and more efficient freight transportation. Our experienced office staff works closely with you to plan and schedule shipments, tailoring solutions to meet your needs.
                </p>
            </div>

            <div className="w-full max-w-full lg:max-w-[600px] mx-auto">
                <p className="text-white tracking-wider text-base sm:text-lg mb-6 md:mb-10 leading-relaxed md:text-gray-700">
                When you choose ABA, you get the advantage of team driver deliveries, ensuring faster and more efficient freight transportation. Our experienced office staff works closely with you to plan and schedule shipments, tailoring solutions to meet your needs
                </p>
                <p className="text-white tracking-wider text-base sm:text-lg leading-relaxed md:text-gray-700">
                For more details about our services, rates, or to request a free freight quote, contact us today or use the form below!
                </p>
            </div>
            </div>

          </section>






          <section className="max-w-[1700px] mx-auto px-4 md:px-8 lg:px-[108px] py-12 bg-white">
        <div className="text-start mb-10">
            <h2 className="text-3xl brigendsExpanded uppercase tracking-widest text-gray-900 mb-3">
            GET A QUOTE
            </h2>
            <p className="text-gray-600 text-lg">
            Fill our request quote form and we will get in touch with you
            </p>
        </div>

  <form className="space-y-6">
  {/* Row 1 */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
    <div>
      <div className="flex justify-between items-center">
        <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
        <span className="text-red-500 text-xs hidden">Required field</span>
      </div>
      <input
        type="text"
        placeholder="Enter your name"
        className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-red-500"
        required
      />
    </div>
    <div>
      <div className="flex justify-between items-center">
        <label className="block text-sm font-semibold text-gray-700 mb-1">E-mail</label>
        <span className="text-red-500 text-xs hidden">Required field</span>
      </div>
      <input
        type="email"
        placeholder="Enter your email"
        className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-red-500"
        required
      />
    </div>
    <div>
      <div className="flex justify-between items-center">
        <label className="block text-sm font-semibold text-gray-700 mb-1">Phone</label>
        <span className="text-red-500 text-xs hidden">Required field</span>
      </div>
      <input
        type="tel"
        placeholder="Enter your Phone"
        className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-red-500"
        required
      />
    </div>
  </div>

  {/* Row 2 */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
    <div>
      <div className="flex justify-between items-center">
        <label className="block text-sm font-semibold text-gray-700 mb-1">Company</label>
        <span className="text-red-500 text-xs hidden">Required field</span>
      </div>
      <input
        type="text"
        placeholder="Enter your Company"
        className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-red-500"
        required
      />
    </div>
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-1">Equipment</label>
      <select className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-red-500 bg-white">
        <option value="TL">TL</option>
      </select>
    </div>
    <div>
      <div className="flex justify-between items-center">
        <label className="block text-sm font-semibold text-gray-700 mb-1">Trailer type</label>
        <span className="text-red-500 text-xs hidden">Required field</span>
      </div>
      <input
        type="text"
        placeholder="Enter your Trailer type"
        className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-red-500"
        required
      />
    </div>
  </div>

  {/* Row 3 */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
    <div>
      <div className="flex justify-between items-center">
        <label className="block text-sm font-semibold text-gray-700 mb-1">Commodity</label>
        <span className="text-red-500 text-xs hidden">Required field</span>
      </div>
      <input
        type="text"
        placeholder="Enter your Commodity"
        className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-red-500"
        required
      />
    </div>
    <div>
      <div className="flex justify-between items-center">
        <label className="block text-sm font-semibold text-gray-700 mb-1">Weight</label>
        <span className="text-red-500 text-xs hidden">Required field</span>
      </div>
      <input
        type="text"
        placeholder="Enter your Weight"
        className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-red-500"
        required
      />
    </div>
    <div>
      <div className="flex justify-between items-center">
        <label className="block text-sm font-semibold text-gray-700 mb-1">Description</label>
        <span className="text-red-500 text-xs hidden">Required field</span>
      </div>
      <input
        type="text"
        placeholder="Enter your Description"
        className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-red-500"
        required
      />
    </div>
  </div>

  {/* Row 4 */}
  <div className="grid grid-cols-1 sm:grid-cols-4 gap-5">
    <div>
      <div className="flex justify-between items-center">
        <label className="block text-sm font-semibold text-gray-700 mb-1">Pick Up zip code</label>
        <span className="text-red-500 text-xs hidden">Required field</span>
      </div>
      <input
        type="text"
        placeholder="Enter Pick Up zip code"
        className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-red-500"
        required
      />
    </div>
    <div>
      <div className="flex justify-between items-center">
        <label className="block text-sm font-semibold text-gray-700 mb-1">Pick UP date</label>
        <span className="text-red-500 text-xs hidden">Required field</span>
      </div>
      <input
        type="text"
        placeholder="mm.dd.yyyy"
        className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-red-500"
        required
      />
    </div>
    <div>
      <div className="flex justify-between items-center">
        <label className="block text-sm font-semibold text-gray-700 mb-1">Delivery zip code</label>
        <span className="text-red-500 text-xs hidden">Required field</span>
      </div>
      <input
        type="text"
        placeholder="Enter Delivery zip code"
        className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-red-500"
        required
      />
    </div>
    <div>
      <div className="flex justify-between items-center">
        <label className="block text-sm font-semibold text-gray-700 mb-1">Delivery date</label>
        <span className="text-red-500 text-xs hidden">Required field</span>
      </div>
      <input
        type="text"
        placeholder="mm.dd.yyyy"
        className="w-full px-4 py-2.5 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-red-500"
        required
      />
    </div>
  </div>

  <div className="pt-4">
    <button
      type="submit"
      className="w-full sm:w-auto px-10 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-sm transition-colors"
    >
      SUBMIT REQUEST
    </button>
  </div>
</form>
</section>

        </>
    )
}