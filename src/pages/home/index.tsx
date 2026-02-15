import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import BusinessChallenges from './BusinessChallenges'
import HomeHero from './HomeHero'
import MainWebsiteLayout from '@/layout/MainWebsiteLayout'
import OurApproach from './OurApproach'
import HomeDiagram from './HomeDiagram'
import SolutionsWeOffer from './SolutionsWeOffer'
import IndustriesWeServe from './IndustriesWeServe'

type Props = {}

function SectionDivider({ variant = "default" }: { variant?: "default" | "wave" | "angle" | "dots" }) {
  if (variant === "wave") {
    return (
      <div className="relative h-24 -mt-1 overflow-hidden pointer-events-none">
        <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1440 96" preserveAspectRatio="none">
          <path
            d="M0,64 C360,96 720,32 1080,64 C1260,80 1380,72 1440,64 L1440,96 L0,96 Z"
            className="fill-background"
          />
          <path
            d="M0,80 C240,48 480,96 720,80 C960,64 1200,88 1440,72 L1440,96 L0,96 Z"
            className="fill-background/80"
          />
        </svg>
      </div>
    )
  }

  if (variant === "angle") {
    return (
      <div className="relative h-20 -mt-1 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5" />
        <svg className="absolute bottom-0 w-full h-20" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <polygon points="0,80 1440,0 1440,80" className="fill-background" />
        </svg>
      </div>
    )
  }

  if (variant === "dots") {
    return (
      <div className="relative py-12 overflow-hidden">
        <div className="flex items-center justify-center gap-3">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className={`rounded-full ${i === 2 ? 'w-3 h-3 bg-primary' : 'w-2 h-2 bg-primary/30'}`}
            />
          ))}
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
      </div>
    )
  }

  return (
    <div className="relative h-px overflow-hidden">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent origin-center"
      />
    </div>
  )
}

function ParallaxSection({ children, speed = 0.5 }: { children: React.ReactNode; speed?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed])

  return (
    <motion.div ref={ref} style={{ y }} className="relative">
      {children}
    </motion.div>
  )
}

function RevealSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

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

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <motion.div
      style={{ scaleX, transformOrigin: "left" }}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary z-50"
    />
  )
}

function HomePage({ }: Props) {
  return (
    <div className="relative">
      <ScrollProgress />
      <FloatingElements />
      
      <MainWebsiteLayout>
        <div className="relative z-10">
          <HomeHero />
          
          
          <RevealSection>
            <HomeDiagram />
          </RevealSection>
          
          <SectionDivider />
          
          <RevealSection delay={0.1}>
            <BusinessChallenges />
          </RevealSection>
          
          <SectionDivider variant="angle" />
          
          <ParallaxSection speed={0.2}>
            <OurApproach />
          </ParallaxSection>
          
          
          <RevealSection delay={0.1}>
            <SolutionsWeOffer />
          </RevealSection>
          
          <SectionDivider variant="wave" />
          
          <IndustriesWeServe />
        </div>
      </MainWebsiteLayout>
    </div>
  )
}


export default HomePage