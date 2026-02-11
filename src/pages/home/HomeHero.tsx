import { motion, useScroll, useTransform } from "motion/react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef, useMemo } from "react"
import { useTheme } from "@/providers/theme-provider"
import LiquidEther from "@/components/LiquidEther"

type Props = {}

export default function HomeHero({ }: Props) {
    const containerRef = useRef<HTMLElement>(null)
    const { theme } = useTheme()
    
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    const liquidColors = useMemo(() => {
        const isDark = theme === "dark" || 
            (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
        
        return isDark 
            ? ["#8EBDFF", "#27D4FF", "#b7791f", "#4897FF"]
            : ["#3182ce", "#4299e1", "#d69e2e", "#2b6cb0"]
    }, [theme])

    return (
        <section ref={containerRef} className="relative min-h-[90vh] w-full overflow-hidden">
            <div className="absolute inset-0 z-0">
                <LiquidEther
                    key={theme}
                    colors={liquidColors}
                    mouseForce={15}
                    cursorSize={80}
                    autoDemo={true}
                    autoSpeed={0.3}
                    autoIntensity={1.8}
                    resolution={0.5}
                />
            </div>

            <div className="absolute inset-0 bg-background/50 dark:bg-background/65 z-[1]" />

            <div className="absolute inset-0 overflow-hidden z-[2] pointer-events-none">
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 right-0 w-200 h-200 translate-x-1/4 -translate-y-1/4"
                >
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/10 dark:border-primary/8" />
                    <div className="absolute inset-8 rounded-full border border-primary/8 dark:border-primary/5" />
                    <div className="absolute inset-16 rounded-full border-2 border-dotted border-accent/15 dark:border-accent/10" />
                </motion.div>

                <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 left-0 w-150 h-150 -translate-x-1/4 translate-y-1/4"
                >
                    <div className="absolute inset-0 rounded-full border border-accent/15 dark:border-accent/10" />
                    <div className="absolute inset-6 rounded-full border-2 border-dashed border-primary/10 dark:border-primary/6" />
                </motion.div>

                <motion.div
                    animate={{ y: [-20, 20, -20] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-32 right-24 w-16 h-16 rounded-2xl border border-primary/15 dark:border-primary/10 bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm rotate-12"
                />
                <motion.div
                    animate={{ y: [15, -15, 15] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-48 right-48 w-10 h-10 rounded-xl border border-accent/20 dark:border-accent/12 bg-gradient-to-br from-accent/8 to-transparent backdrop-blur-sm -rotate-6"
                />
                <motion.div
                    animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-40 right-32 w-12 h-12 rounded-full border border-primary/12 dark:border-primary/8 bg-gradient-to-br from-primary/5 to-transparent backdrop-blur-sm"
                />
                <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-64 left-16 w-8 h-8 rounded-lg border border-accent/15 dark:border-accent/10 bg-gradient-to-br from-accent/8 to-transparent backdrop-blur-sm rotate-45"
                />
                <motion.div
                    animate={{ y: [-15, 15, -15] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-56 left-24 w-14 h-14 rounded-2xl border border-primary/12 dark:border-primary/8 bg-gradient-to-br from-primary/6 to-transparent backdrop-blur-sm -rotate-12"
                />
            </div>

            <motion.div style={{ y, opacity }} className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
                <div className="flex flex-col items-center justify-center py-20 lg:py-20">
                    <div className="max-w-4xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="mb-8 flex justify-center"
                        >
                            <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card/80 backdrop-blur-md px-5 py-2.5 shadow-lg">
                                <span className="relative flex h-2.5 w-2.5">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                                </span>
                                <span className="text-sm font-medium text-foreground/80">Enterprise Data Quality Platform</span>
                            </div>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08] mb-8"
                        >
                            Trusted Data.
                            <br />
                            <span className="text-primary">Confident Decisions.</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="text-xl sm:text-2xl text-foreground/70 font-normal leading-relaxed mb-6 mx-auto max-w-2xl"
                        >
                            Enabling organizations to build, monitor, and sustain reliable data across enterprise systems.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-12 mx-auto max-w-2xl"
                        >
                            We help organizations systematically assess, control, and govern data quality 
                            across SAP and enterprise landscapes, ensuring that data can be trusted—not 
                            just once, but continuously.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col sm:flex-row justify-center gap-4"
                        >
                            <Button 
                                size="lg" 
                                className="h-14 px-8 text-base font-semibold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 group"
                            >
                                Start a Data Quality Assessment
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                            <Button 
                                size="lg" 
                                variant="outline" 
                                className="h-14 px-8 text-base font-semibold rounded-xl border-2 hover:bg-secondary transition-all duration-300 backdrop-blur-sm"
                            >
                                Request a Pilot
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            <div className="absolute bottom-0 left-0 right-0 h-px bg-border z-10" />
        </section>
    )
}
