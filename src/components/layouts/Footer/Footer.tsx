import React from "react";
import Image from "next/image";
import styles from "@/styles/footer.module.css";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className={`${styles.footer} py-22 relative`}>
      <div className="container">
        <div className="lg:pl-[64px]">
          <div className="w-fit absolute left-1/2 -translate-x-1/2 top-[10px] md:left-[25px] md:translate-x-0 md:top-[10px] lg:top-10 lg:left-[115px]">
            <Image
              src={"/icons/footer_icons/Logo_red.svg"}
              width={160}
              height={65}
              className="w-[120px] h-auto sm:w-[160px] md:w-[120px] lg:w-[160px]"
              alt="Logo"
            />
          </div>
          <div className="pt-[60px] lg:pt-[120px] grid grid-cols-1 gap-y-10 items-center md:grid-cols-2 lg:items-start lg:grid-cols-4 lg:gap-x-10 justify-between">
            <div className="flex flex-col items-center md:flex-row md:items-start gap-x-5">
              <Image
                src={"/icons/footer_icons/email.svg"}
                width={40}
                height={40}
                alt="Email icon"
              />
              <div className="flex flex-col">
                <h3 className="text-lg text-center md:text-left text-white font-bold leading-[200%] border-b border-[#ff0000] pb-1 mb-2.5">
                  - Contact email
                </h3>
                <ul className={`${styles.footer_list} flex flex-col gap-y-1.5`}>
                  <li className="flex flex-col">
                    <Link
                      href={"mailto:Hiring@abacarriers.com"}
                      className="font-normal text-sm 2xl:text-base text-center md:text-left"
                    >
                      Hiring@abacarriers.com
                    </Link>
                    <Link
                      href={"mailto:Dispatch@abacarriers.com"}
                      className="font-normal text-sm 2xl:text-base text-center md:text-left"
                    >
                      Dispatch@abacarriers.com
                    </Link>
                  </li>
                  <li className="flex flex-col">
                    <Link
                      href={"mailto:Billing@abacarriers.com"}
                      className="font-normal text-sm 2xl:text-base text-center md:text-left"
                    >
                      Billing@abacarriers.com
                    </Link>
                    <Link
                      href={"mailto:Fleet@abacarriers.com"}
                      className="font-normal text-sm 2xl:text-base text-center md:text-left"
                    >
                      Fleet@abacarriers.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-start gap-x-5">
              <Image
                src={"/icons/footer_icons/location.svg"}
                width={40}
                height={40}
                alt="Email icon"
              />
              <div className="flex flex-col">
                <h4 className="text-lg text-center md:text-left text-white font-bold leading-[200%] border-b border-[#ff0000] pb-1 mb-2.5">
                  - Contact address
                </h4>
                <ul className={`${styles.footer_list} flex flex-col gap-y-1.5`}>
                  <li className="flex flex-col text-sm 2xl:text-base text-center md:text-left">
                    4764 Fishburg Rd, Suite D2 <br />
                    Huber Heights, OH 45424 (Official address)
                  </li>
                  <li className="flex flex-col text-sm 2xl:text-base text-center md:text-left">
                    537 E S Frontage Rd Suite 202, <br />
                    Bolingbrook, IL 60440 (Main address, Yard)
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col items-center md:flex-row md:items-start gap-x-5">
              <Image
                src={"/icons/footer_icons/phone.svg"}
                width={40}
                height={40}
                alt="Email icon"
              />
              <div className="flex flex-col">
                <h5 className="text-lg text-center md:text-left text-white font-bold leading-[200%] border-b border-[#ff0000] pb-1 mb-2.5">
                  - Contact email
                </h5>
                <ul className={`${styles.footer_list} flex flex-col gap-y-1.5`}>
                  <li className="flex flex-col">
                    <Link
                      href={"tel:+12404498888"}
                      className="font-normal text-sm 2xl:text-base text-center md:text-left"
                    >
                      +1 240-449-8888 (Hiring)
                    </Link>
                    <Link
                      href={"tel:+16103335555"}
                      className="font-normal text-sm 2xl:text-base text-center md:text-left"
                    >
                      +1 610-333-5555 (Dispatch)
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex gap-x-10 justify-center lg:justify-start">
              <Link href={"#"}>
                <Image
                  src={"/icons/telegram.svg"}
                  width={40}
                  height={40}
                  alt="telegram icon"
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={"/icons/instagram.svg"}
                  width={40}
                  height={40}
                  alt="telegram icon"
                />
              </Link>
              <Link href={"#"}>
                <Image
                  src={"/icons/facebook.svg"}
                  width={40}
                  height={40}
                  alt="telegram icon"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
