import MainWebsiteLayout from "@/layout/MainWebsiteLayout"
import SolutionHero from "./SolutionHero"
import SolutionCTA from "./SolutionCTA"
import SolutionsList from "./SolutionsList"

type Props = {}

function SolutionsPage({ }: Props) {
    return (
        <MainWebsiteLayout>
            <SolutionHero />
            <SolutionsList />
            <SolutionCTA />
        </MainWebsiteLayout>
    )
}

export default SolutionsPage
