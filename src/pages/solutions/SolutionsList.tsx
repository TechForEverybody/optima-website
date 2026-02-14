import { motion, useMotionValue, useSpring, useTransform } from "motion/react"
import { useRef } from "react"
import { Link } from "react-router-dom"
import { 
    ArrowRight,
    ArrowUpRight,
    TrendingUp,
    CheckCircle2,
    BarChart3,
    Settings
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { solutions, colorClasses, type SolutionStage } from "./solutionsData"

type Props = {}

function SolutionCard({ solution, index }: { solution: SolutionStage, index: number }) {
    const colors = colorClasses[solution.color]
    const cardRef = useRef<HTMLDivElement>(null)
    
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    
    const mouseXSpring = useSpring(x, { stiffness: 200, damping: 20 })
    const mouseYSpring = useSpring(y, { stiffness: 200, damping: 20 })
    
    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["3deg", "-3deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-3deg", "3deg"])

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return
        const rect = cardRef.current.getBoundingClientRect()
        const width = rect.width
        const height = rect.height
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top
        const xPct = mouseX / width - 0.5
        const yPct = mouseY / height - 0.5
        x.set(xPct)
        y.set(yPct)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
            }}
        >
            <Link to={solution.href} className="block group">
                <motion.div
                    ref={cardRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{ 
                        rotateX, 
                        rotateY,
                        transformStyle: "preserve-3d"
                    }}
                    className={`
                        relative h-full p-6 sm:p-8 rounded-3xl border backdrop-blur-sm
                        bg-card/50 ${colors.border}
                        shadow-lg ${colors.glow} group-hover:shadow-2xl
                        transition-all duration-500
                    `}
                >
                    <div className={`absolute inset-0 rounded-3xl bg-linear-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    <div className="absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{ background: `radial-gradient(circle, var(--${solution.color}-500) 0%, transparent 70%)` }} />
                    
                    <div className="relative z-10" style={{ transform: "translateZ(30px)" }}>
                        <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center gap-4">
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                    className={`w-14 h-14 rounded-2xl flex items-center justify-center ${colors.iconBg} ring-1 ${colors.ring} transition-all duration-300`}
                                >
                                    <solution.icon className={`h-7 w-7 ${colors.iconColor}`} />
                                </motion.div>
                                <div>
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border ${colors.badge}`}>
                                        Stage {solution.id}: {solution.stage}
                                    </span>
                                </div>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                whileHover={{ opacity: 1, x: 0 }}
                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            >
                                <ArrowUpRight className={`h-6 w-6 ${colors.iconColor}`} />
                            </motion.div>
                        </div>
                        
                        <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 group-hover:text-foreground transition-colors">
                            {solution.title}
                        </h3>
                        
                        <p className="text-muted-foreground leading-relaxed mb-6">
                            {solution.description}
                        </p>
                        
                        <div className="space-y-4">
                            <div>
                                <div className="flex items-center gap-2 text-sm font-medium text-foreground/80 mb-3">
                                    <Settings className="h-4 w-4" />
                                    Key Capabilities
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    {solution.features.map((feature, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -10 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.3 + idx * 0.1 }}
                                            className="flex items-center gap-2 text-sm text-muted-foreground"
                                        >
                                            <div className={`w-1.5 h-1.5 rounded-full ${colors.dot}`} />
                                            {feature}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                            
                            <div className="pt-4 border-t border-border/50">
                                <div className="flex items-center gap-2 text-sm font-medium text-foreground/80 mb-3">
                                    <TrendingUp className="h-4 w-4" />
                                    Business Outcomes
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {solution.outcomes.map((outcome, idx) => (
                                        <span
                                            key={idx}
                                            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium ${colors.badge}`}
                                        >
                                            <CheckCircle2 className="h-3 w-3" />
                                            {outcome}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        <motion.div 
                            className="mt-6 flex items-center gap-2 font-medium"
                            whileHover={{ x: 5 }}
                            transition={{ type: "spring", stiffness: 400 }}
                        >
                            <span className={colors.text}>Explore Solution</span>
                            <ArrowRight className={`h-4 w-4 ${colors.iconColor} group-hover:translate-x-1 transition-transform duration-300`} />
                        </motion.div>
                    </div>
                </motion.div>
            </Link>
        </motion.div>
    )
}

function SolutionsList({}: Props) {
    return (
        <section className="relative py-16 lg:py-24 bg-background overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-6">
                        
                        Integrated Lifecycle Solutions
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                        Transform Data Quality into{" "}
                        <span className="bg-linear-to-r from-primary via-violet-500 to-accent bg-clip-text text-transparent">
                            Sustained Trust
                        </span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                        Our four integrated solutions work together as a closed-loop lifecycle, 
                        taking you from data uncertainty to sustained trust through a structured, business-led approach.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="hidden lg:flex justify-center items-center gap-3 mb-12"
                >
                    {solutions.map((solution, index) => {
                        const colors = colorClasses[solution.color as keyof typeof colorClasses]
                        return (
                            <div key={solution.id} className="flex items-center gap-3">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15, type: "spring" }}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full border ${colors.badge}`}
                                >
                                    <div className={`w-6 h-6 rounded-lg ${colors.iconBg} flex items-center justify-center`}>
                                        <solution.icon className={`h-3.5 w-3.5 ${colors.iconColor}`} />
                                    </div>
                                    <span className="text-sm font-medium">{solution.stage}</span>
                                </motion.div>
                                {index < solutions.length - 1 && (
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 + 0.2 }}
                                        className="w-8 h-0.5 bg-linear-to-r from-border to-border/50 origin-left"
                                    />
                                )}
                            </div>
                        )
                    })}
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    {solutions.map((solution, index) => (
                        <SolutionCard key={solution.id} solution={solution} index={index} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="mt-16 text-center"
                >
                    <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                            <BarChart3 className="h-5 w-5 text-primary" />
                            <span>Need help choosing your starting point?</span>
                        </div>
                        <Button variant="default" size="sm" className="rounded-xl group">
                            Talk to an Expert
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default SolutionsList