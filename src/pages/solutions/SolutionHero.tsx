import { motion } from "motion/react"
import { useRef, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
import { ArrowRight, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/providers/theme-provider"
import Particles from "@/components/Particles"
import { solutions } from "./solutionsData"

const stageColors = [
    { primary: "#3b82f6", secondary: "#60a5fa", glow: "rgba(59, 130, 246, 0.5)", bg: "bg-blue-500" },
    { primary: "#06b6d4", secondary: "#22d3ee", glow: "rgba(6, 182, 212, 0.5)", bg: "bg-cyan-500" },
    { primary: "#f59e0b", secondary: "#fbbf24", glow: "rgba(245, 158, 11, 0.5)", bg: "bg-amber-500" },
    { primary: "#10b981", secondary: "#34d399", glow: "rgba(16, 185, 129, 0.5)", bg: "bg-emerald-500" }
]

function LifecycleDiagram() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null)

    return (
        <div className="relative w-full max-w-xl mx-auto py-8">
            <div className="hidden sm:block absolute top-1/2 left-8 right-8 h-1 -translate-y-1/2">
                <div className="absolute inset-0 bg-border/30 rounded-full" />
                <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 origin-left rounded-full"
                    style={{
                        background: "linear-gradient(90deg, #3b82f6, #06b6d4, #f59e0b, #10b981)"
                    }}
                />
                
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5 + i * 0.2, duration: 0.4 }}
                        className="absolute top-1/2 -translate-y-1/2"
                        style={{ left: `${25 + i * 25}%` }}
                    >
                        <motion.div
                            animate={{ x: [0, 8, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                            className="flex items-center"
                        >
                            <ChevronRight 
                                className="h-4 w-4" 
                                style={{ color: stageColors[i + 1].primary }}
                            />
                        </motion.div>
                    </motion.div>
                ))}
            </div>

            <div className="sm:hidden absolute left-6 top-8 bottom-8 w-1">
                <div className="absolute inset-0 bg-border/30 rounded-full" />
                <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 origin-top rounded-full"
                    style={{
                        background: "linear-gradient(180deg, #3b82f6, #06b6d4, #f59e0b, #10b981)"
                    }}
                />
            </div>

            <div className="relative flex flex-col sm:flex-row sm:justify-between gap-6 sm:gap-2">
                {solutions.map((solution, index) => {
                    const color = stageColors[index]
                    const isActive = activeIndex === index
                    
                    return (
                        <motion.div
                            key={solution.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.6, 
                                delay: 0.2 + index * 0.15,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            onHoverStart={() => setActiveIndex(index)}
                            onHoverEnd={() => setActiveIndex(null)}
                            className="relative flex-1 pl-10 sm:pl-0"
                        >
                            <div className="sm:hidden absolute left-4 top-6 w-5 h-5 rounded-full border-4 border-background z-10"
                                style={{ background: color.primary }}
                            />

                            <motion.div
                                animate={{ 
                                    scale: isActive ? 1.02 : 1,
                                    y: isActive ? -4 : 0
                                }}
                                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                className="relative cursor-pointer group"
                            >
                                <div className="hidden sm:flex justify-center mb-4">
                                    <motion.div
                                        animate={{
                                            scale: isActive ? 1.2 : 1,
                                            boxShadow: isActive 
                                                ? `0 0 30px ${color.glow}`
                                                : `0 0 0px transparent`
                                        }}
                                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                        className="relative w-12 h-12 rounded-full flex items-center justify-center z-10"
                                        style={{
                                            background: `linear-gradient(135deg, ${color.primary}, ${color.secondary})`,
                                            border: "4px solid var(--background)"
                                        }}
                                    >
                                        <solution.icon className="h-5 w-5 text-white" />
                                        
                                        <motion.div
                                            className="absolute inset-0 rounded-full"
                                            animate={{ scale: isActive ? [1, 1.4, 1] : 1, opacity: isActive ? [0.5, 0, 0.5] : 0 }}
                                            transition={{ duration: 1.5, repeat: Infinity }}
                                            style={{ background: color.primary }}
                                        />
                                    </motion.div>
                                </div>

                                <motion.div
                                    animate={{
                                        boxShadow: isActive 
                                            ? `0 20px 40px -12px ${color.glow}, 0 0 0 1px ${color.primary}30`
                                            : '0 4px 20px -4px rgba(0,0,0,0.1), 0 0 0 1px var(--border)'
                                    }}
                                    className="relative overflow-hidden rounded-2xl bg-background/80 backdrop-blur-xl p-4"
                                >
                                    <motion.div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                        style={{
                                            background: `linear-gradient(135deg, ${color.primary}10 0%, transparent 60%)`
                                        }}
                                    />

                                    <motion.div
                                        className="absolute top-0 left-0 right-0 h-1 origin-left"
                                        style={{ background: `linear-gradient(90deg, ${color.primary}, ${color.secondary})` }}
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: isActive ? 1 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    />

                                    <div className="relative">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span 
                                                className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full"
                                                style={{ 
                                                    background: `${color.primary}15`,
                                                    color: color.primary 
                                                }}
                                            >
                                                Stage {index + 1}
                                            </span>
                                        </div>
                                        
                                        <div className="flex items-center gap-2 mb-1 sm:hidden">
                                            <div 
                                                className="w-8 h-8 rounded-lg flex items-center justify-center"
                                                style={{ background: `${color.primary}20` }}
                                            >
                                                <solution.icon className="h-4 w-4" style={{ color: color.primary }} />
                                            </div>
                                            <h3 className="text-base font-bold text-foreground">
                                                {solution.stage}
                                            </h3>
                                        </div>
                                        
                                        <h3 className="hidden sm:block text-base font-bold text-foreground mb-1 text-center">
                                            {solution.stage}
                                        </h3>
                                        
                                        <p className="text-xs text-muted-foreground leading-relaxed sm:text-center">
                                            {solution.shortDescription}
                                        </p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </motion.div>
                    )
                })}
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="hidden sm:flex justify-center mt-8"
            >
                <div className="flex items-center gap-3 px-5 py-2.5 rounded-full bg-background/80 backdrop-blur-xl border border-border/50 shadow-lg">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        className="w-5 h-5 rounded-full"
                        style={{
                            background: "conic-gradient(from 0deg, #3b82f6, #06b6d4, #f59e0b, #10b981, #3b82f6)"
                        }}
                    />
                    <span className="text-sm font-medium text-foreground">Continuous Improvement Cycle</span>
                    <motion.div
                        animate={{ x: [0, 4, 0] }}
                        transition={{ duration: 1, repeat: Infinity }}
                    >
                        <ArrowRight className="h-4 w-4 text-muted-foreground" />
                    </motion.div>
                </div>
            </motion.div>
        </div>
    )
}

export default function SolutionHero() {
    const navigate = useNavigate()
    const containerRef = useRef<HTMLElement>(null)
    const { theme } = useTheme()

    const particleColors = useMemo(() => {
        const isDark = theme === "dark" || 
            (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
        
        return isDark 
            ? ["#3b82f6", "#8b5cf6", "#f59e0b"]
            : ["#2563eb", "#7c3aed", "#d97706"]
    }, [theme])

    return (
        <section ref={containerRef} className="relative  w-full overflow-hidden bg-background py-12 lg:py-16">
            <div className="absolute inset-0 z-0">
                <Particles
                    key={theme}
                    particleColors={particleColors}
                    particleCount={200}
                    particleSpread={10}
                    speed={0.3}
                    particleBaseSize={80}
                    moveParticlesOnHover={true}
                    particleHoverFactor={0.4}
                    alphaParticles={true}
                    sizeRandomness={0.8}
                    cameraDistance={20}
                />
            </div>

            <div className="absolute inset-0 bg-linear-to-b from-background/40 via-background/60 to-background z-1" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16  items-center py-20 lg:py-20">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="order-2 lg:order-1"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm px-4 py-2 mb-6"
                        >
                            <span className="text-sm font-medium text-primary">Solutions Overview</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground leading-[1.05] mb-6"
                        >
                            <span className="block">Trusted Data</span>
                            <span className="block mt-2">
                                <span className="relative inline-block">
                                    <span className="relative z-10 bg-linear-to-r from-primary via-violet-500 to-accent bg-clip-text text-transparent">
                                        Quality Lifecycle
                                    </span>
                                    <motion.span
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                        className="absolute -bottom-2 left-0 right-0 h-3 bg-linear-to-r from-primary/20 via-violet-500/20 to-accent/20 rounded-full origin-left"
                                    />
                                </span>
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl"
                        >
                            Our data quality solutions are designed as an integrated lifecycle—not isolated services. 
                            Move from data uncertainty to sustained trust through a structured, business-led approach.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col sm:flex-row gap-4"
                        >
                            <Button 
                                size="lg" 
                                onClick={() => navigate("/contact")}
                                className="h-14 px-8 text-base font-semibold rounded-2xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group"
                            >
                                Explore Solutions
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                            <Button 
                                size="lg" 
                                variant="outline" 
                                onClick={() => navigate("/contact")}
                                className="h-14 px-8 text-base font-semibold rounded-2xl border-2 hover:bg-secondary/80 transition-all duration-300"
                            >
                                Talk to Expert
                            </Button>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="order-1 lg:order-2 relative"
                    >
                        <LifecycleDiagram />
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent z-10" />
        </section>
    )
}