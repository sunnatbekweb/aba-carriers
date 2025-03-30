import {PageHero} from "@/components/ui/PageHero";
import BgImage from "../../../public/images/page_hero/carriers_hero_bg.png"

export default function Carriers() {
    return (
        <>
            <PageHero url={BgImage.src} title={"Why ABA Carriers"}/>
        </>
    )
}