import Link from "next/link";
import React from "react";

export const Navbar = () => {
  return (
    <nav>
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
