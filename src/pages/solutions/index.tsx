import MainWebsiteLayout from "@/layout/MainWebsiteLayout"
import SolutionHero from "./SolutionHero"
import SolutionDiagram from "./SolutionDiagram"

type Props = {}

function SolutionsPage({ }: Props) {
    return (
        <MainWebsiteLayout>
            <SolutionHero />
            <SolutionDiagram />
        </MainWebsiteLayout>
    )
}

export default SolutionsPage
