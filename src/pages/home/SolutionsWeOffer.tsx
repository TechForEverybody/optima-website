import { useRef } from "react"
import { useNavigate } from "react-router-dom"
import { motion, useMotionValue, useSpring, useTransform } from "motion/react"
import { ClipboardCheck, Activity, Users, Shield, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Magnet from "@/components/Magnet"
import GradientText from "@/components/GradientText"

type Props = {}

const solutions = [
    {
        id: 1,
        icon: ClipboardCheck,
        title: "Data Quality Assessment",
        description: "Rapid, structured assessment to identify risks, root causes, and improvement opportunities—ideal for migrations, reporting stabilization, or steady-state environments.",
        features: ["Risk Identification", "Root Cause Analysis", "Migration Support"],
        color: "primary"
    },
    {
        id: 2,
        icon: Activity,
        title: "Continuous Monitoring & Controls",
        description: "Automated checks and alerts that proactively detect issues and prevent downstream impact.",
        features: ["Automated Checks", "Proactive Alerts", "Impact Prevention"],
        color: "accent"
    },
    {
        id: 3,
        icon: Users,
        title: "Remediation & Ownership Framework",
        description: "Ownership models and workflows to ensure issues are resolved and not repeatedly rediscovered.",
        features: ["Clear Ownership", "Defined Workflows", "Issue Resolution"],
        color: "primary"
    },
    {
        id: 4,
        icon: Shield,
        title: "Data Governance Enablement",
        description: "Practical governance structures, KPIs, and stewardship models that integrate with business operations.",
        features: ["Governance Structures", "Quality KPIs", "Stewardship Models"],
        color: "accent"
    }
]

function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 })
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 })

    function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2
        x.set((e.clientX - centerX) / rect.width)
        y.set((e.clientY - centerY) / rect.height)
    }

    function handleMouseLeave() {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
                transformPerspective: 1000
            }}
            className={className}
        >
            {children}
        </motion.div>
    )
}

export default function SolutionsWeOffer({ }: Props) {
    const navigate = useNavigate()

    return (
        <section className="relative py-5 lg:py-10 bg-gradient-to-b from-secondary/30 via-background to-background overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/8 dark:bg-primary/4 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/10 dark:bg-accent/5 rounded-full blur-[80px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-6"
                    >
                        
                            <span className="px-5 py-2 text-sm font-semibold tracking-wider uppercase text-primary bg-background">
                                What We Deliver
                            </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-6"
                    >
                        <GradientText
                            colors={["oklch(0.45 0.15 250)", "oklch(0.75 0.15 85)", "oklch(0.45 0.15 250)"]}
                            animationSpeed={6}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
                        >
                            Solutions We Offer
                        </GradientText>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto"
                    >
                        Comprehensive data quality solutions designed to meet your enterprise needs
                    </motion.p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={solution.id}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.7, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <TiltCard className="h-full">
                                <div className="group relative h-full">
                                    <div
                                        className={`absolute -inset-[1px] rounded-3xl bg-gradient-to-br ${solution.color === "primary" ? "from-primary via-primary/50 to-primary/20" : "from-accent via-accent/50 to-accent/20"} opacity-0 group-hover:opacity-100 blur-sm transition-all duration-700`}
                                        style={{ transform: "translateZ(-10px)" }}
                                    />

                                    <div className="relative h-full p-8 lg:p-10 rounded-3xl bg-card/90 dark:bg-card/70 backdrop-blur-md border border-border/50 overflow-hidden transition-all duration-500 group-hover:border-transparent group-hover:shadow-2xl">
                                        <div
                                            className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${solution.color === "primary" ? "from-primary to-primary/40" : "from-accent to-accent/40"} scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700`}
                                        />

                                        <div
                                            className={`absolute -top-20 -right-20 w-60 h-60 ${solution.color === "primary" ? "bg-primary/10" : "bg-accent/10"} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                                        />

                                        <div className="relative z-10" style={{ transform: "translateZ(40px)" }}>
                                            <div className="flex items-start gap-6 mb-8">
                                                <Magnet padding={60} magnetStrength={3}>
                                                    <div
                                                        className={`relative flex-shrink-0 w-20 h-20 rounded-2xl ${solution.color === "primary" ? "bg-primary/10 group-hover:bg-primary" : "bg-accent/10 group-hover:bg-accent"} flex items-center justify-center transition-all duration-500 group-hover:shadow-lg ${solution.color === "primary" ? "group-hover:shadow-primary/30" : "group-hover:shadow-accent/30"}`}
                                                    >
                                                        <solution.icon
                                                            className={`w-9 h-9 ${solution.color === "primary" ? "text-primary group-hover:text-primary-foreground" : "text-accent group-hover:text-accent-foreground"} transition-colors duration-500`}
                                                        />
                                                        <div
                                                            className={`absolute inset-0 rounded-2xl ${solution.color === "primary" ? "bg-primary" : "bg-accent"} opacity-0 group-hover:opacity-20 animate-ping`}
                                                            style={{ animationDuration: "2s" }}
                                                        />
                                                    </div>
                                                </Magnet>

                                                <div className="flex-1 min-w-0">
                                                    <span
                                                        className={`text-6xl font-black ${solution.color === "primary" ? "text-primary/8 group-hover:text-primary/15" : "text-accent/8 group-hover:text-accent/15"} transition-colors duration-500 select-none`}
                                                    >
                                                        {String(solution.id).padStart(2, '0')}
                                                    </span>
                                                    <h3
                                                        className={`text-xl sm:text-2xl font-bold text-foreground ${solution.color === "primary" ? "group-hover:text-primary" : "group-hover:text-accent"} transition-colors duration-300 -mt-4`}
                                                    >
                                                        {solution.title}
                                                    </h3>
                                                </div>
                                            </div>

                                            <p className="text-muted-foreground leading-relaxed mb-8 text-base">
                                                {solution.description}
                                            </p>

                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {solution.features.map((feature, i) => (
                                                    <motion.span
                                                        key={i}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: 0.3 + i * 0.1 }}
                                                        className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold ${solution.color === "primary" ? "bg-primary/10 text-primary border-primary/20" : "bg-accent/10 text-accent border-accent/20"} border backdrop-blur-sm`}
                                                    >
                                                        {feature}
                                                    </motion.span>
                                                ))}
                                            </div>

                                            <div
                                                className={`flex items-center text-sm font-semibold ${solution.color === "primary" ? "text-primary" : "text-accent"} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                                            >
                                                <span className="relative">
                                                    Learn more
                                                    <span
                                                        className={`absolute -bottom-0.5 left-0 w-0 h-0.5 ${solution.color === "primary" ? "bg-primary" : "bg-accent"} group-hover:w-full transition-all duration-500`}
                                                    />
                                                </span>
                                                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform duration-300" />
                                            </div>
                                        </div>

                                        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                                    </div>
                                </div>
                            </TiltCard>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-20 text-center"
                >
      
                        <div className="flex flex-col sm:flex-row items-center gap-5 px-8 py-6 bg-background">
                            <p className="text-foreground font-semibold text-lg">
                                Ready to transform your data quality?
                            </p>
                            <Magnet padding={80} magnetStrength={2}>
                                <Button size="lg" onClick={() => navigate("/contact")} className="rounded-xl group px-8">
                                    Get Started
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Magnet>
                        </div>
                </motion.div>
            </div>
        </section>
    )
}
