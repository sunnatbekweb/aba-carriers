import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav className="fixed top-1/2 -translate-y-1/2 left-16 px-2.5 py-3.5 rounded-[50px] bg-[#202020]">
      <ul className="flex flex-col">
        <li>
          <Link href={"#"}></Link>
        </li>
        <li>
          <Link href={"#"}></Link>
        </li>
        <li>
          <Link href={"#"}></Link>
        </li>
        <li>
          <Link href={"#"}></Link>
        </li>
      </ul>
    </nav>
  );
};
