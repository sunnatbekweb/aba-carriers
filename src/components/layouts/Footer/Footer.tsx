import React from "react";
import Image from "next/image";
import styles from "@/styles/footer.module.css";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className={`${styles.footer} py-10 relative`}>
      <div className="container pl-[160px]">
        <div className="w-fit absolute top-10 left-[140px]">
          <Image
            src={"/icons/Logo_red.svg"}
            width={160}
            height={65}
            alt="Logo"
          />
          <p className="text-lg text-[#ff0000] tracking-[0.5em] text-center">
            CARRIERS
          </p>
        </div>
        <div className="pt-[160px] flex flex-col gap-y-10 items-center lg:items-start lg:flex-row justify-between">
          <div className="flex flex-col items-center md:flex-row md:items-start gap-x-5">
            <Image
              src={"/icons/email.svg"}
              width={40}
              height={40}
              alt="Email icon"
            />
            <div className="flex flex-col">
              <h5 className="text-lg text-center md:text-left text-white font-bold leading-[200%] border-b border-[#ff0000] pb-1 mb-2.5">
                - Contact email
              </h5>
              <ul className="flex flex-col gap-y-1.5">
                <li className="flex flex-col">
                  <Link
                    href={"mailto:Hiring@abacarriers.com"}
                    className="font-normal text-center md:text-left"
                  >
                    Hiring@abacarriers.com
                  </Link>
                  <Link
                    href={"mailto:Dispatch@abacarriers.com"}
                    className="font-normal text-center md:text-left"
                  >
                    Dispatch@abacarriers.com
                  </Link>
                </li>
                <li className="flex flex-col">
                  <Link
                    href={"mailto:Billing@abacarriers.com"}
                    className="font-normal text-center md:text-left"
                  >
                    Billing@abacarriers.com
                  </Link>
                  <Link
                    href={"mailto:Fleet@abacarriers.com"}
                    className="font-normal text-center md:text-left"
                  >
                    Fleet@abacarriers.com
                  </Link>
                </li>
                <li className="flex flex-col">
                  <Link
                    href={"mailto:Steve@abacarriers.com"}
                    className="font-normal text-center md:text-left"
                  >
                    Steve@abacarriers.com
                  </Link>
                  <Link
                    href={"mailto:Batir@abacarriers.com"}
                    className="font-normal text-center md:text-left"
                  >
                    Batir@abacarriers.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-row md:items-start gap-x-5">
            <Image
              src={"/icons/location.svg"}
              width={40}
              height={40}
              alt="Email icon"
            />
            <div className="flex flex-col">
              <h5 className="text-lg text-center md:text-left text-white font-bold leading-[200%] border-b border-[#ff0000] pb-1 mb-2.5">
                - Contact address
              </h5>
              <ul className="flex flex-col gap-y-1.5">
                <li className="flex flex-col text-center md:text-left">
                  4764 Fishburg Rd, Suite D2 <br />
                  Huber Heights, OH 45424 ( Official address )
                </li>
                <li className="flex flex-col text-center md:text-left">
                  537 E S Frontage Rd Suite 202, <br />
                  Bolingbrook, IL 60440 ( Main address, Yard  )
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-center md:flex-row md:items-start gap-x-5">
            <Image
              src={"/icons/phone.svg"}
              width={40}
              height={40}
              alt="Email icon"
            />
            <div className="flex flex-col">
              <h5 className="text-lg text-center md:text-left text-white font-bold leading-[200%] border-b border-[#ff0000] pb-1 mb-2.5">
                - Contact email
              </h5>
              <ul className="flex flex-col gap-y-1.5">
                <li className="flex flex-col">
                  <Link href={"tel:+12404498888"} className="font-normal text-center md:text-left">
                    +1 240-449-8888 ( Hiring )
                  </Link>
                  <Link href={"tel:+16103335555"} className="font-normal text-center md:text-left">
                    +1 610-333-5555 ( Dispatch )
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-x-10">
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
    </footer>
  );
};
