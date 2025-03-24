import { ButtonPrimary } from "@/components/ui/ButtonPrimary";
import { ButtonSecondary } from "@/components/ui/ButtonSecondary";
import styles from "@/styles/homepage.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className={`${styles.intro}`}>
        <div className="max-w-[795px] flex flex-col items-center">
          <h1 className="brigendsExpanded text-[50px] text-white mb-14">
            Your belongings are in safe hands
          </h1>
          <div className="flex items-center gap-x-[50px]">
            <ButtonSecondary text="Get a quote" />
            <ButtonPrimary text="Drive with us" />
          </div>
        </div>
      </section>
      <section className="py-40 bg-[#1C2016] text-white overflow-hidden">
        <div className="container flex items-center justify-between">
          <div className="max-w-[795px]">
            <Image
              src={"/icons/truck.svg"}
              width={60}
              height={45}
              alt="Truck icon"
            />
            <h2 className="brigendsExpanded text-[40px] border-b-2 border-[#ff0000] w-fit mt-10 pb-[30px]">
              WHY ABA CARRIERS
            </h2>
            <p className="my-[65px] text-2xl">
              At ABA, we are dedicated to delivering freight safely,
              efficiently, and on time across the USA. With a growing fleet and
              a team of experienced professionals, we provide reliable trucking
              services tailored to your logistics needs
            </p>
            <ButtonPrimary text="Read more" />
          </div>
          <div className="flex flex-col gap-y-10">
            <Image
              src={"/images/truck.svg"}
              className="translate-x-[350px]"
              width={800}
              height={160}
              alt="Truck"
            />
            <Image
              src={"/images/truck.svg"}
              className="translate-x-[175px]"
              width={800}
              height={160}
              alt="Truck"
            />
            <Image
              src={"/images/truck.svg"}
              width={800}
              height={160}
              alt="Truck"
            />
          </div>
        </div>
      </section>
      <section className={`${styles.third_section}`}>
        <div className="container flex flex-col items-end">
          <Image
            src={"/icons/wheel.svg"}
            width={60}
            height={45}
            alt="Wheel icon"
          />
          <div className="mt-10 pl-[100px] pb-[30px] border-b-2 border-[#ff0000]">
            <h2 className="brigendsExpanded text-[45px]">Drive for aba</h2>
          </div>
          <p className="text-2xl my-[65px] max-w-[656px] text-right">
            Looking for a trucking company that values you? At ABA, we put our
            drivers first with competitive pay, steady miles, and a supportive
            team that treats you like family. Whether you're an owner operator
            or a company driver we offer the opportunities, resources, and
            respect you deserve. Join us today and drive your future forward!
          </p>
          <ButtonPrimary text="Read more" />
        </div>
      </section>
      <div className={`${styles.section_bottom_gradient} h-14`}></div>
      <section className={`${styles.services}`}>
        <div className="container flex items-center justify-between">
          <div>
            <Image
              src={"/icons/operator.svg"}
              width={60}
              height={45}
              alt="Operator icon"
            />
            <h2 className="brigendsExpanded text-[40px] border-b-2 border-[#ff0000] w-fit mt-10 pb-[30px]">
              ABA SERVICES
            </h2>
            <ol className="flex flex-col gap-y-[60px] my-[65px] list-decimal">
              <li className="max-w-[570px] text-2xl">
                Team Transit Shipments: Focused on expedited team transit to
                provide time-sensitive transportation solutions
              </li>
              <li className="max-w-[570px] text-2xl">
                Experienced Dry Van Drivers: Skilled professionals ensuring
                secure, efficient and on-time delicate shipments
              </li>
            </ol>
            <ButtonPrimary text="Read more" />
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2">
          <Image
            src={"/images/boxes.png"}
            width={1400}
            height={1000}
            alt="Section side image"
          />
          <Image
            src={"/images/American-Truck.png"}
            width={1080}
            height={834}
            className="absolute top-[120px]"
            alt="Section side image"
          />
        </div>
      </section>
      <div className={`${styles.section_bottom_gradient} h-14`}></div>
      <section className={`${styles.carriers} py-[125px]`}>
        <div className="absolute top-0 w-1/2 h-full">
          <Image
            src={"/images/carriers_image.png"}
            width={960}
            height={1020}
            className="h-full w-full"
            alt="Carriers section image"
          />
        </div>
        <div className="container flex flex-col items-end">
          <Image
            src={"/icons/carriers_icon.svg"}
            width={60}
            height={60}
            alt="Carriers image"
          />
          <div className="border-b-2 border-[#ff0000] max-w-[540px]">
            <h2 className="brigendsExpanded text-[40px] w-fit mt-10 pb-[30px] text-right">
              ABOUT ABA CARRIERS INC
            </h2>
          </div>
          <p className="max-w-[690px] text-2xl my-[65px] text-right">
            Since 2021, ABA has successfully delivered tens of thousands of
            loads, earning the trust of industry-leading brokers. Each year, we
            cover hundreds of thousands of miles, ensuring reliable and
            efficient transportation. With 200+ satisfied clients, we are
            committed to excellence in every shipment
          </p>
          <ButtonPrimary text="Read more" />
        </div>
      </section>
      <div className={`${styles.section_bottom_gradient} h-14`}></div>
    </>
  );
}
