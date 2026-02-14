import MainWebsiteLayout from "@/layout/MainWebsiteLayout"
import Partners from "./Partners"
import Engagements from "./Engagements"

type Props = {}

function PartnersPage({ }: Props) {
    return (
        <MainWebsiteLayout>
            <Partners />
            <Engagements />
        </MainWebsiteLayout>
    )
}

export default PartnersPage
