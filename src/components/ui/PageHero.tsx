import React from "react";
import {HeroProps} from "@/types";

export const PageHero: React.FC<HeroProps> = ({url, title}) => {
    return (
        <section className={`h-screen bg-[url(${url})] flex items-center justify-center`}>
            <h2 className={"brigendsExpanded text-[60px] text-white"}>{title}</h2>
        </section>
    )
}