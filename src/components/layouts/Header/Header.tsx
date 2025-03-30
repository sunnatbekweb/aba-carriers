"use client"

import React, {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {WatsApp} from "../../../../public/icons/WatsApp";
import {Facebook} from "../../../../public/icons/Facebook";
import {Phone} from "../../../../public/icons/Phone";
import {Menu} from "../../../../public/icons/Menu";
import {NavModal} from "@/components/ui/NavModal";
import styles from "@/styles/header.module.css";
import {ContactModal} from "@/components/ui/ContactModal";

export const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);

    const onNavClose = () => {
        setIsNavOpen(false);
    }
    const onContactClose = () => {
        setIsContactOpen(false);
    }

    return (
        <header className={`${styles.header} flex justify-between`}>
            <div className="w-full flex items-center h-[65px] md:h-[95px] lg:h-[110px] xl:h-[135px]">
                <div className="absolute left-0 top-0">
                    <Link href={"/"}
                          className={`${styles.logo} w-40 md:w-[230px] xl:w-[410px] h-fit flex flex-col items-center py-3 lg:py-5`}
                    >
                        <div className="flex flex-col items-center">
                            <Image
                                width={160}
                                height={65}
                                src="/icons/Logo.svg"
                                className="w-[70px] md:w-[120px] xl:w-[160px] md:h-auto"
                                alt="Logo"
                            />
                            <p className="text-[8px] md:text-sm xl:text-lg text-white">
                                CARRIERS
                            </p>
                        </div>
                    </Link>
                </div>
                <div className="container flex justify-end">
                    <div className="flex items-center gap-x-5 md:gap-x-10">
                        <Link href={"#"} className={`${styles.icon}`}>
                            <WatsApp/>
                        </Link>
                        <Link href={"#"} className={`${styles.icon}`}>
                            <Facebook/>
                        </Link>
                        <button
                            onClick={() => setIsContactOpen(true)}
                            className={`${styles.icon} flex items-center text-white gap-x-2.5 text-2xl`}
                        >
                            <div className={"rotate-90"}>
                                <Phone/>
                            </div>
                            <span className="hidden md:block">Call</span>
                        </button>
                        <button onClick={() => setIsNavOpen(true)}
                                className={`${styles.icon} flex items-center gap-x-2.5 text-white text-2xl cursor-pointer`}
                        >
                            <Menu/>
                            <span className="hidden md:block">Menu</span>
                        </button>
                    </div>
                </div>
            </div>
            <NavModal isOpen={isNavOpen} onClose={onNavClose}/>
            <ContactModal isOpen={isContactOpen} onClose={onContactClose}/>
        </header>
    );
};
