import React from "react";
import Image from "next/image";
import { WatsApp } from "../../../../public/icons/WatsApp";
import { Facebook } from "../../../../public/icons/Facebook";
import { Phone } from "../../../../public/icons/Phone";
import styles from "@/styles/header.module.css";
import { Menu } from "../../../../public/icons/Menu";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex items-center relative h-[135px]">
      <div className="absolute left-0 top-0">
        <div
          className={`${styles.logo} w-[410px] flex flex-col items-center py-5`}
        >
          <div className="relative z-[1]">
            <Image width={160} height={65} src="/icons/Logo.svg" alt="Logo" />
            <p className="text-lg text-white">CARRIERS</p>
          </div>
        </div>
      </div>
      <div className="container flex justify-end">
        <div className="flex items-center gap-x-10">
          <Link href={"#"} className={`${styles.icon}`}>
            <WatsApp />
          </Link>
          <Link href={"#"} className={`${styles.icon}`}>
            <Facebook />
          </Link>
          <Link
            href="#"
            className={`${styles.icon} flex items-center text-white gap-x-2.5 text-2xl`}
          >
            <Phone />
            <span>Call</span>
          </Link>
          <button
            className={`${styles.icon} flex items-center gap-x-2.5 text-white text-2xl cursor-pointer`}
          >
            <Menu />
            <span>Menu</span>
          </button>
        </div>
      </div>
    </header>
  );
};
