import {PageHero} from "@/components/ui/PageHero";
import BgImage from "../../../public/images/page_hero/services_hero_bg.png"

export default function Services() {
    return (
        <>
            <PageHero url={BgImage.src} title={"ABA SERVICES"}/>
        </>
    )
}