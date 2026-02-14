import MainWebsiteLayout from "@/layout/MainWebsiteLayout"
import About from "./About"
import Experience from "./Experience"

type Props = {}

function AboutPage({}: Props) {
    return (
        <MainWebsiteLayout>
            <About />
            <Experience />
        </MainWebsiteLayout>
    )
}

export default AboutPage
