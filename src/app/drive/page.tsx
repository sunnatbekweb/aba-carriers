import {PageHero} from "@/components/ui/PageHero";
import BgImage from "../../../public/images/page_hero/drive_hero.png"

export default function Drive() {
    return (
        <>
            <PageHero url={BgImage.src} title={"Drive For ABA"}/>
        </>
    )
}