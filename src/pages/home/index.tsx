import { motion } from 'motion/react'
import BusinessChallenges from './BusinessChallenges'
import HomeHero from './HomeHero'
import MainWebsiteLayout from '@/layout/MainWebsiteLayout'
import OurApproach from './OurApproach'
import HomeDiagram from './HomeDiagram'
import SolutionsWeOffer from './SolutionsWeOffer'
import IndustriesWeServe from './IndustriesWeServe'

type Props = {}


function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <motion.div
        animate={{
          y: [0, -30, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-[10%] w-64 h-64 bg-primary/3 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{
          y: [0, 40, 0],
          x: [0, -20, 0]
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-[5%] w-80 h-80 bg-accent/3 rounded-full blur-[120px]"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/4 right-[15%] w-72 h-72 bg-primary/2 rounded-full blur-[80px]"
      />
    </div>
  )
}



function HomePage({ }: Props) {
  return (
    <div className="relative">
      <FloatingElements />

      <MainWebsiteLayout>
        <div className="relative z-10">
          <HomeHero />


          <HomeDiagram />


          <BusinessChallenges />

          <OurApproach />
          <SolutionsWeOffer />
          <IndustriesWeServe />
        </div>
      </MainWebsiteLayout>
    </div>
  )
}


export default HomePage