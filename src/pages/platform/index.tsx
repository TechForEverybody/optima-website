import MainWebsiteLayout from "@/layout/MainWebsiteLayout"
import PlatformApproach from "./PlatformApproach"
import ToolDriven from "./ToolDriven"
import PrimaryPlatformPartners from "./PrimaryPlatformPartners"
import PlatformSupports from "./PlatformSupports"
import DifferentApproach from "./DifferentApproach"

type Props = {}

function PlatformPage({}: Props) {
    return (
        <MainWebsiteLayout>
                <PlatformApproach />
                <ToolDriven />
                <PrimaryPlatformPartners />
                <PlatformSupports />
                <DifferentApproach />
        </MainWebsiteLayout>
    )
}

export default PlatformPage
