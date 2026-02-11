import { motion, useScroll, useTransform } from "motion/react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef } from "react"

type Props = {}

export default function HomeHero({ }: Props) {
    const containerRef = useRef<HTMLElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <section ref={containerRef} className="relative min-h-[80vh] w-full bg-linear-to-br from-background via-background to-secondary/30 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--primary)/0.12,transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--primary)/0.08,transparent)]" />
            
            <div className="absolute inset-0 overflow-hidden">
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                    className="absolute top-0 right-0 w-200 h-200 translate-x-1/4 -translate-y-1/4"
                >
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/15 dark:border-primary/10" />
                    <div className="absolute inset-8 rounded-full border border-primary/10 dark:border-primary/8" />
                    <div className="absolute inset-16 rounded-full border-2 border-dotted border-accent/20 dark:border-accent/12" />
                    <div className="absolute top-1/2 left-0 w-4 h-4 -translate-y-1/2 rounded-full bg-primary/30 dark:bg-primary/20" />
                    <div className="absolute top-0 left-1/2 w-3 h-3 -translate-x-1/2 rounded-full bg-accent/40 dark:bg-accent/25" />
                </motion.div>

                <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-0 left-0 w-150 h-150 -translate-x-1/4 translate-y-1/4"
                >
                    <div className="absolute inset-0 rounded-full border border-accent/20 dark:border-accent/12" />
                    <div className="absolute inset-6 rounded-full border-2 border-dashed border-primary/12 dark:border-primary/8" />
                    <div className="absolute bottom-1/4 right-0 w-3 h-3 rounded-full bg-primary/25 dark:bg-primary/15" />
                </motion.div>

                <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-primary/8 dark:bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 dark:bg-accent/6 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-120 h-120 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/3 dark:to-accent/3 rounded-full blur-3xl" />

                <motion.div
                    animate={{ y: [-20, 20, -20] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-32 right-24 w-16 h-16 rounded-2xl border border-primary/20 dark:border-primary/12 bg-gradient-to-br from-primary/8 to-transparent backdrop-blur-sm rotate-12"
                />
                <motion.div
                    animate={{ y: [15, -15, 15] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-48 right-48 w-10 h-10 rounded-xl border border-accent/25 dark:border-accent/15 bg-gradient-to-br from-accent/12 to-transparent backdrop-blur-sm -rotate-6"
                />
                <motion.div
                    animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-40 right-32 w-12 h-12 rounded-full border border-primary/15 dark:border-primary/10 bg-gradient-to-br from-primary/6 to-transparent backdrop-blur-sm"
                />
                <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-64 left-16 w-8 h-8 rounded-lg border border-accent/20 dark:border-accent/12 bg-gradient-to-br from-accent/10 to-transparent backdrop-blur-sm rotate-45"
                />
                <motion.div
                    animate={{ y: [-15, 15, -15] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-56 left-24 w-14 h-14 rounded-2xl border border-primary/18 dark:border-primary/10 bg-gradient-to-br from-primary/8 to-transparent backdrop-blur-sm -rotate-12"
                />

                <div className="absolute top-20 left-1/3 w-px h-32 bg-gradient-to-b from-transparent via-primary/20 to-transparent dark:via-primary/12" />
                <div className="absolute top-1/3 right-16 w-px h-48 bg-gradient-to-b from-transparent via-accent/25 to-transparent dark:via-accent/15" />
                <div className="absolute bottom-32 left-48 w-24 h-px bg-gradient-to-r from-transparent via-primary/15 to-transparent dark:via-primary/10" />
                <div className="absolute top-1/2 right-1/3 w-32 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent dark:via-accent/12" />

                <div className="absolute top-40 right-1/3 w-2 h-2 rounded-full bg-primary/30 dark:bg-primary/20" />
                <div className="absolute top-60 left-1/4 w-1.5 h-1.5 rounded-full bg-accent/35 dark:bg-accent/20" />
                <div className="absolute bottom-48 right-1/4 w-2.5 h-2.5 rounded-full bg-primary/25 dark:bg-primary/15" />
                <div className="absolute top-1/3 left-20 w-1.5 h-1.5 rounded-full bg-accent/30 dark:bg-accent/18" />
                <div className="absolute bottom-1/3 right-20 w-2 h-2 rounded-full bg-primary/20 dark:bg-primary/12" />

                <svg className="absolute top-24 left-1/2 w-6 h-6 text-primary/20 dark:text-primary/12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M12 2L15 8L22 9L17 14L18 21L12 18L6 21L7 14L2 9L9 8L12 2Z" />
                </svg>
                <svg className="absolute bottom-32 right-1/3 w-5 h-5 text-accent/25 dark:text-accent/15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <polygon points="12,2 22,22 2,22" />
                </svg>
                <svg className="absolute top-1/2 right-12 w-4 h-4 text-primary/15 dark:text-primary/10" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="4" y="4" width="16" height="16" rx="2" />
                </svg>
            </div>

            <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,transparent_49%,var(--border)_50%,transparent_51%,transparent_100%)] bg-size-[80px_100%] opacity-8 dark:opacity-5" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,transparent_49%,var(--border)_50%,transparent_51%,transparent_100%)] bg-size-[100%_80px] opacity-8 dark:opacity-5" />

            <motion.div style={{ y, opacity }} className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
                <div className="flex flex-col items-center justify-center py-24 lg:py-16">
                    <div className="max-w-4xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="mb-8 flex justify-center"
                        >
                            <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card/80 backdrop-blur-sm px-5 py-2.5 shadow-sm">
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
                                className="h-14 px-8 text-base font-semibold rounded-xl border-2 hover:bg-secondary transition-all duration-300"
                            >
                                Request a Pilot
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
        </section>
    )
}
