import { motion } from "motion/react"
import { 
    Search, 
    Activity, 
    Wrench, 
    Shield,
    ArrowRight,
    CheckCircle2,
    MessageSquare
} from "lucide-react"
import { Button } from "@/components/ui/button"

const stages = [
    {
        id: 1,
        label: "Assess",
        title: "Data Quality Assessment & Diagnostics",
        description: "Establishes a clear, fact-based understanding of data quality risks, root causes, and business impact.",
        icon: Search,
        color: "blue",
        position: "top-left"
    },
    {
        id: 2,
        label: "Monitor",
        title: "Continuous Data Quality Monitoring",
        description: "Ensures ongoing visibility and control through proactive monitoring, thresholds, and early warning indicators.",
        icon: Activity,
        color: "cyan",
        position: "top-right"
    },
    {
        id: 3,
        label: "Remediate",
        title: "Data Issue Remediation & Ownership",
        description: "Transforms identified issues into structured remediation actions with clear ownership and workflows.",
        icon: Wrench,
        color: "amber",
        position: "bottom-right"
    },
    {
        id: 4,
        label: "Govern",
        title: "Data Governance Enablement",
        description: "Provides the operating model, roles, and decision mechanisms to sustain improvements at scale.",
        icon: Shield,
        color: "emerald",
        position: "bottom-left"
    }
]

const colorClasses = {
    blue: {
        bg: "bg-blue-500/10 dark:bg-blue-500/15",
        bgHover: "hover:bg-blue-500/20 dark:hover:bg-blue-500/25",
        border: "border-blue-500/30",
        borderHover: "hover:border-blue-500/50",
        iconBg: "bg-blue-500/20",
        iconColor: "text-blue-600 dark:text-blue-400",
        text: "text-blue-600 dark:text-blue-400",
        glow: "shadow-blue-500/20",
        ring: "ring-blue-500/30"
    },
    cyan: {
        bg: "bg-cyan-500/10 dark:bg-cyan-500/15",
        bgHover: "hover:bg-cyan-500/20 dark:hover:bg-cyan-500/25",
        border: "border-cyan-500/30",
        borderHover: "hover:border-cyan-500/50",
        iconBg: "bg-cyan-500/20",
        iconColor: "text-cyan-600 dark:text-cyan-400",
        text: "text-cyan-600 dark:text-cyan-400",
        glow: "shadow-cyan-500/20",
        ring: "ring-cyan-500/30"
    },
    amber: {
        bg: "bg-amber-500/10 dark:bg-amber-500/15",
        bgHover: "hover:bg-amber-500/20 dark:hover:bg-amber-500/25",
        border: "border-amber-500/30",
        borderHover: "hover:border-amber-500/50",
        iconBg: "bg-amber-500/20",
        iconColor: "text-amber-600 dark:text-amber-400",
        text: "text-amber-600 dark:text-amber-400",
        glow: "shadow-amber-500/20",
        ring: "ring-amber-500/30"
    },
    emerald: {
        bg: "bg-emerald-500/10 dark:bg-emerald-500/15",
        bgHover: "hover:bg-emerald-500/20 dark:hover:bg-emerald-500/25",
        border: "border-emerald-500/30",
        borderHover: "hover:border-emerald-500/50",
        iconBg: "bg-emerald-500/20",
        iconColor: "text-emerald-600 dark:text-emerald-400",
        text: "text-emerald-600 dark:text-emerald-400",
        glow: "shadow-emerald-500/20",
        ring: "ring-emerald-500/30"
    }
}

export default function SolutionDiagram() {
    return (
        <section className="relative py-16 lg:py-24 bg-background overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-primary/3 via-transparent to-transparent" />
            
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12 lg:mb-16"
                >
                    <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-4">
                        <CheckCircle2 className="h-4 w-4" />
                        End-to-End Lifecycle
                    </span>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Our Data Quality Solutions
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Four integrated solutions working together as a closed-loop lifecycle
                    </p>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    <svg 
                        className="absolute inset-0 w-full h-full pointer-events-none z-0 hidden lg:block"
                        viewBox="0 0 800 600"
                        fill="none"
                    >
                        <motion.path
                            d="M 200 150 Q 400 80 600 150 Q 720 300 600 450 Q 400 520 200 450 Q 80 300 200 150"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeDasharray="8 8"
                            className="text-border"
                            fill="none"
                            initial={{ pathLength: 0, opacity: 0 }}
                            whileInView={{ pathLength: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                    </svg>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative z-10">
                        {stages.map((stage, index) => {
                            const colors = colorClasses[stage.color as keyof typeof colorClasses]
                            return (
                                <motion.div
                                    key={stage.id}
                                    initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ 
                                        duration: 0.5, 
                                        delay: index * 0.15,
                                        ease: [0.22, 1, 0.36, 1]
                                    }}
                                    className={`relative ${index === 1 || index === 2 ? 'lg:mt-12' : ''}`}
                                >
                                    <motion.div
                                        whileHover={{ y: -4, scale: 1.02 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                                        className={`
                                            group relative p-6 lg:p-8 rounded-3xl border backdrop-blur-sm
                                            ${colors.bg} ${colors.bgHover} ${colors.border} ${colors.borderHover}
                                            shadow-lg ${colors.glow} hover:shadow-xl
                                            transition-all duration-300 cursor-pointer
                                        `}
                                    >
                                        <div className="absolute -top-3 -left-3 z-20">
                                            <div className={`
                                                w-12 h-12 rounded-2xl flex items-center justify-center
                                                bg-background border-2 ${colors.border} shadow-md
                                                font-bold text-lg ${colors.text}
                                            `}>
                                                0{stage.id}
                                            </div>
                                        </div>

                                        <div className="flex items-start gap-4 pt-4">
                                            <div className={`
                                                w-14 h-14 rounded-2xl flex items-center justify-center shrink-0
                                                ${colors.iconBg} ring-1 ${colors.ring}
                                                group-hover:scale-110 transition-transform duration-300
                                            `}>
                                                <stage.icon className={`h-7 w-7 ${colors.iconColor}`} />
                                            </div>
                                            
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className={`text-sm font-bold uppercase tracking-wider ${colors.text}`}>
                                                        {stage.label}
                                                    </span>
                                                </div>
                                                <h3 className="text-lg font-semibold text-foreground mb-2 leading-tight">
                                                    {stage.title}
                                                </h3>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    {stage.description}
                                                </p>
                                            </div>
                                        </div>

                                        {index < 3 && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 1 + index * 0.2 }}
                                                className={`
                                                    absolute z-30 hidden lg:flex
                                                    ${index === 0 ? 'top-1/2 -right-4 translate-x-1/2 -translate-y-1/2' : ''}
                                                    ${index === 1 ? 'bottom-0 left-1/2 translate-y-full -translate-x-1/2 mt-2' : ''}
                                                    ${index === 2 ? 'top-1/2 -left-4 -translate-x-1/2 -translate-y-1/2' : ''}
                                                `}
                                            >
                                                <motion.div
                                                    animate={{ 
                                                        x: index === 0 ? [0, 4, 0] : index === 2 ? [0, -4, 0] : 0,
                                                        y: index === 1 ? [0, 4, 0] : 0
                                                    }}
                                                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                                    className="w-8 h-8 rounded-full bg-background border border-border shadow-md flex items-center justify-center"
                                                >
                                                    <ArrowRight className={`h-4 w-4 text-muted-foreground ${
                                                        index === 0 ? '' : index === 1 ? 'rotate-90' : 'rotate-180'
                                                    }`} />
                                                </motion.div>
                                            </motion.div>
                                        )}
                                    </motion.div>
                                </motion.div>
                            )
                        })}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="hidden lg:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
                    >
                        <motion.div
                            animate={{ 
                                boxShadow: [
                                    '0 0 30px rgba(59, 130, 246, 0.15), 0 0 60px rgba(6, 182, 212, 0.1)',
                                    '0 0 40px rgba(16, 185, 129, 0.15), 0 0 80px rgba(245, 158, 11, 0.1)',
                                    '0 0 30px rgba(59, 130, 246, 0.15), 0 0 60px rgba(6, 182, 212, 0.1)'
                                ]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="relative w-48 h-48 rounded-full bg-background border border-border/50 flex items-center justify-center"
                        >
                            <div className="absolute inset-2 rounded-full border border-dashed border-primary/20 animate-spin" style={{ animationDuration: '20s' }} />
                            <div className="absolute inset-4 rounded-full border border-dotted border-accent/15 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
                            
                            <div className="relative text-center px-4">
                                <div className="text-2xl font-bold text-foreground mb-1">Sustained</div>
                                <div className="text-lg font-semibold bg-linear-to-r from-primary via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                                    Trust
                                </div>
                                <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                                    in Enterprise Data
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="lg:hidden mt-8 text-center"
                    >
                        <div className="inline-flex flex-col items-center p-6 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-sm">
                            <div className="text-xl font-bold text-foreground">Sustained Trust</div>
                            <div className="text-sm text-muted-foreground">in Enterprise Data</div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="mt-12 lg:mt-16 text-center"
                >
                    <div className="inline-flex items-center gap-6 flex-wrap justify-center">
                        {stages.map((stage, index) => {
                            const colors = colorClasses[stage.color as keyof typeof colorClasses]
                            return (
                                <div key={stage.id} className="flex items-center gap-2">
                                    <div className={`w-3 h-3 rounded-full ${colors.iconBg} ring-2 ${colors.ring}`} />
                                    <span className="text-sm font-medium text-muted-foreground">{stage.label}</span>
                                    {index < 3 && (
                                        <ArrowRight className="h-3 w-3 text-muted-foreground/40 ml-2" />
                                    )}
                                </div>
                            )
                        })}
                    </div>
                    <p className="text-sm text-muted-foreground mt-4 max-w-xl mx-auto">
                        Each stage flows into the next, creating a continuous improvement cycle
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-16 lg:mt-24"
                >
                    <div className="relative rounded-3xl overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-br from-primary/10 via-cyan-500/5 to-emerald-500/10" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
                        
                        <div className="relative border border-border/50 rounded-3xl p-8 sm:p-10 lg:p-14 backdrop-blur-sm">
                            <div className="max-w-3xl mx-auto text-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6"
                                >
                                    Get Started
                                </motion.div>

                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4"
                                >
                                    Begin with clarity and build toward{' '}
                                    <span className="bg-linear-to-r from-primary via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                                        sustained trust
                                    </span>
                                </motion.h3>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
                                >
                                    Organizations typically start with a Data Quality Assessment and expand into 
                                    monitoring, remediation, and governance based on business priorities.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                    className="flex flex-col sm:flex-row gap-4 justify-center"
                                >
                                    <Button 
                                        size="lg" 
                                        className="h-14 px-8 text-base font-semibold rounded-2xl shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group"
                                    >
                                        Start a Data Quality Assessment
                                        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                    </Button>
                                    <Button 
                                        size="lg" 
                                        variant="outline" 
                                        className="h-14 px-8 text-base font-semibold rounded-2xl border-2 hover:bg-secondary/80 transition-all duration-300 group"
                                    >
                                        <MessageSquare className="mr-2 h-5 w-5" />
                                        Schedule a Discussion
                                    </Button>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}