import {PageHero} from "@/components/ui/PageHero";

export default function About() {
    return (
        <main>
            <PageHero url={"/images/about_page.png"} title={"ABOUT ABA"}/>
            {/* <section className="container mx-auto px-5 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide uppercase">
            ABOUT ABA <br /> CARRIERS INC
          </h2>

          <div className="w-16 border-t-2 border-red-500 mx-auto mt-2"></div>

          <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
            Founded in 2021, <span className="font-semibold">[Your Company Name]</span> has rapidly grown into a trusted name 
            in the trucking industry. With a strong focus on efficiency and reliability, we have successfully delivered 
            tens of thousands of loads across the country. Backed by a dedicated team of nearly 200 professionals, we handle 
            high-value and time-sensitive freight with precision and care. Our commitment to excellence has earned the trust of 
            industry-leading brokers, and we continue to expand while maintaining the highest standards in transportation.
          </p>
        </section> */}
        </main>
    )
}