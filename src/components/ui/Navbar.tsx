import Link from "next/link";
import React from "react";
import { Home } from "../../../public/icons/nav_icons/Home";
import { NavIcon2 } from "../../../public/icons/nav_icons/NavIcon2";
import { NavIcon3 } from "../../../public/icons/nav_icons/NavIcon3";
import { NavIcon4 } from "../../../public/icons/nav_icons/NavIcon4";
import { NavIcon5 } from "../../../public/icons/nav_icons/NavIcon5";
import styles from "@/styles/nav.module.css"

export const Navbar = () => {
  return (
    <nav className={`${styles.nav} fixed top-1/2 -translate-y-1/2 left-3 lg:left-8 xl:left-16 px-2.5 py-3.5 rounded-[50px] bg-[#202020]`}>
      <ul className="flex flex-col gap-y-12">
        <li>
          <Link href={"#"}>
            <Home />
          </Link>
        </li>
        <li>
          <Link href={"#"}>
            <NavIcon2 />
          </Link>
        </li>
        <li>
          <Link href={"#"}>
            <NavIcon3 />
          </Link>
        </li>
        <li>
          <Link href={"#"}>
            <NavIcon4 />
          </Link>
        </li>
        <li>
          <Link href={"#"}>
            <NavIcon5 />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
