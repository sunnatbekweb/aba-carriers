"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Home } from "../../../public/icons/nav_icons/Home";
import { NavIcon2 } from "../../../public/icons/nav_icons/NavIcon2";
import { NavIcon3 } from "../../../public/icons/nav_icons/NavIcon3";
import { NavIcon4 } from "../../../public/icons/nav_icons/NavIcon4";
import { NavIcon5 } from "../../../public/icons/nav_icons/NavIcon5";
import styles from "@/styles/nav.module.css";

export const HomeNavbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => setNavOpen(false);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <button
        onClick={() => setNavOpen(true)}
        className={`lg:hidden ${
          navOpen ? "opacity-0 collapse" : "opacity-100 visible"
        } w-[64px] h-[64px] rounded-full fixed top-[33%] z-[1] -left-[36px] bg-[#202020] flex items-center justify-end pr-1.5`}
      >
        <Image
          src={"/icons/nav_icons/nav_open.svg"}
          width={20}
          height={20}
          alt={"Nav button icon"}
        />
      </button>

      <nav
        className={`${
          styles.nav
        } fixed z-[1] top-1/2 -translate-y-1/2 left-2 lg:left-4 xl:left-8 px-2.5 py-3.5 rounded-[50px] bg-[#202020] duration-300
      ${
        navOpen ? "opacity-100 visible" : "opacity-0 collapse"
      } lg:opacity-100 lg:visible`}
      >
        <ul className="flex flex-col gap-y-12">
          <li>
            <Link
              href="/"
              className={
                activeSection !== "carriers" &&
                activeSection !== "drive" &&
                activeSection !== "services" &&
                activeSection !== "about"
                  ? "nav_link-active"
                  : ""
              }
            >
              <Home />
            </Link>
          </li>
          <li>
            <Link
              href="#carriers"
              className={activeSection === "carriers" ? "nav_link-active" : ""}
            >
              <NavIcon4 />
            </Link>
          </li>
          <li>
            <Link
              href="#drive"
              className={activeSection === "drive" ? "nav_link-active" : ""}
            >
              <NavIcon5 />
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              className={activeSection === "services" ? "nav_link-active" : ""}
            >
              <NavIcon3 />
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className={activeSection === "about" ? "nav_link-active" : ""}
            >
              <NavIcon2 />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
