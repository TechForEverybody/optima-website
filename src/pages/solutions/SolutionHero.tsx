import { motion } from "motion/react"
import { useRef, useMemo } from "react"
import { ArrowRight, Shield, RefreshCw, Target, CheckCircle, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/providers/theme-provider"
import Particles from "@/components/Particles"

const lifecycleStages = [
    { 
        icon: Target, 
        label: "Assess", 
        description: "Identify gaps",
        color: "from-blue-500/20 to-blue-600/10"
    },
    { 
        icon: Shield, 
        label: "Control", 
        description: "Implement rules",
        color: "from-violet-500/20 to-violet-600/10"
    },
    { 
        icon: RefreshCw, 
        label: "Govern", 
        description: "Establish ownership",
        color: "from-amber-500/20 to-amber-600/10"
    },
    { 
        icon: CheckCircle, 
        label: "Sustain", 
        description: "Continuous trust",
        color: "from-emerald-500/20 to-emerald-600/10"
    },
]

export default function SolutionHero() {
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
        <section ref={containerRef} className="relative  w-full overflow-hidden bg-background py-0 lg:py-16">
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
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16  items-center py-5 lg:py-0">
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
                            <Sparkles className="h-4 w-4 text-primary" />
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
                                className="h-14 px-8 text-base font-semibold rounded-2xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group"
                            >
                                Explore Solutions
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Button>
                            <Button 
                                size="lg" 
                                variant="outline" 
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
                        className="order-1 lg:order-2 relative mt-10 lg:mt-0"
                    >
                        <div className="relative w-full max-w-md mx-auto">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
                                className="absolute -inset-8 opacity-60"
                            >
                                <div className="absolute inset-0 rounded-full border border-dashed border-primary/15" />
                            </motion.div>

                            <div className="relative grid grid-cols-2 gap-4">
                                {lifecycleStages.map((stage, index) => (
                                    <motion.div
                                        key={stage.label}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ 
                                            duration: 0.5, 
                                            delay: 0.5 + index * 0.12,
                                            ease: [0.22, 1, 0.36, 1]
                                        }}
                                        className="relative"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.03, y: -2 }}
                                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                            className={`group relative p-5 rounded-2xl border border-border/50 backdrop-blur-xl shadow-lg hover:shadow-xl cursor-pointer overflow-hidden ${
                                                index === 0 ? 'bg-blue-500/10 hover:bg-blue-500/15' :
                                                index === 1 ? 'bg-violet-500/10 hover:bg-violet-500/15' :
                                                index === 2 ? 'bg-amber-500/10 hover:bg-amber-500/15' :
                                                'bg-emerald-500/10 hover:bg-emerald-500/15'
                                            } transition-colors duration-300`}
                                        >
                                            <div className={`absolute top-0 right-0 w-20 h-20 rounded-full blur-2xl opacity-30 ${
                                                index === 0 ? 'bg-blue-500' :
                                                index === 1 ? 'bg-violet-500' :
                                                index === 2 ? 'bg-amber-500' :
                                                'bg-emerald-500'
                                            }`} />
                                            
                                            <div className="relative flex flex-col items-center text-center gap-3">
                                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-colors duration-300 ${
                                                    index === 0 ? 'bg-blue-500/20 border-blue-500/30 group-hover:bg-blue-500/30' :
                                                    index === 1 ? 'bg-violet-500/20 border-violet-500/30 group-hover:bg-violet-500/30' :
                                                    index === 2 ? 'bg-amber-500/20 border-amber-500/30 group-hover:bg-amber-500/30' :
                                                    'bg-emerald-500/20 border-emerald-500/30 group-hover:bg-emerald-500/30'
                                                }`}>
                                                    <stage.icon className={`h-6 w-6 ${
                                                        index === 0 ? 'text-blue-500' :
                                                        index === 1 ? 'text-violet-500' :
                                                        index === 2 ? 'text-amber-500' :
                                                        'text-emerald-500'
                                                    }`} />
                                                </div>
                                                <div>
                                                    <div className="text-base font-semibold text-foreground mb-1">{stage.label}</div>
                                                    <div className="text-xs text-muted-foreground">{stage.description}</div>
                                                </div>
                                            </div>

                                            {index < 3 && (
                                                <div className={`absolute ${
                                                    index === 0 ? 'bottom-0 right-0 translate-x-1/2 translate-y-1/2' :
                                                    index === 1 ? 'bottom-0 left-0 -translate-x-1/2 translate-y-1/2' :
                                                    'top-0 right-0 translate-x-1/2 -translate-y-1/2'
                                                } z-20`}>
                                                    <motion.div
                                                        animate={{ rotate: [0, 360] }}
                                                        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                                                        className="w-6 h-6 rounded-full bg-background border border-border/50 flex items-center justify-center shadow-md"
                                                    >
                                                        <ArrowRight className={`h-3 w-3 ${
                                                            index === 0 ? 'text-blue-500 rotate-45' :
                                                            index === 1 ? 'text-violet-500 rotate-135' :
                                                            'text-amber-500 -rotate-45'
                                                        }`} />
                                                    </motion.div>
                                                </div>
                                            )}
                                        </motion.div>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.6, delay: 0.9 }}
                                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
                            >
                                <motion.div
                                    animate={{ 
                                        boxShadow: [
                                            '0 0 20px rgba(59, 130, 246, 0.3)',
                                            '0 0 40px rgba(139, 92, 246, 0.3)',
                                            '0 0 20px rgba(59, 130, 246, 0.3)'
                                        ]
                                    }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                    className="w-20 h-20 rounded-2xl bg-background border border-border/50 backdrop-blur-xl flex items-center justify-center"
                                >
                                    <div className="text-center">
                                        <div className="text-2xl font-bold text-foreground">4</div>
                                        <div className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Stages</div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-border to-transparent z-10" />
        </section>
    )
}