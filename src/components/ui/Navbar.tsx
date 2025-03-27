"use client";

import Link from "next/link";
import React, {useState} from "react";
import {Home} from "../../../public/icons/nav_icons/Home";
import {NavIcon2} from "../../../public/icons/nav_icons/NavIcon2";
import {NavIcon3} from "../../../public/icons/nav_icons/NavIcon3";
import {NavIcon4} from "../../../public/icons/nav_icons/NavIcon4";
import {NavIcon5} from "../../../public/icons/nav_icons/NavIcon5";
import styles from "@/styles/nav.module.css"
import Image from "next/image";

export const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <>
            <button onClick={() => setNavOpen(true)} className={`${navOpen ? "opacity-0 collapse" : "opacity-100 visible"} w-[74px] h-[74px] rounded-full fixed top-[33%] z-20 -left-[36px] bg-[#202020] flex items-center justify-end pr-1.5`}>
                <Image src={"/icons/nav_open.svg"} width={25} height={25} alt={"Nav button icon"}/>
            </button>
            <nav
                className={`${styles.nav} ${navOpen ? "opacity-100 visible" : "opacity-0 collapse"} fixed z-10 top-1/2 -translate-y-1/2 left-3 lg:left-8 xl:left-16 px-2.5 py-3.5 rounded-[50px] bg-[#202020] duration-300`}>
                <ul className="flex flex-col gap-y-12">
                    <li>
                        <Link href={"#"}>
                            <Home/>
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"}>
                            <NavIcon2/>
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"}>
                            <NavIcon3/>
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"}>
                            <NavIcon4/>
                        </Link>
                    </li>
                    <li>
                        <Link href={"#"}>
                            <NavIcon5/>
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
};
