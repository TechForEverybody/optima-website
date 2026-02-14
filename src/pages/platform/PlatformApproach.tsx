import { motion } from "motion/react"
import {
    AlertTriangle,
    Users,
    FileCode,
    Eye,
    Scaling,
    Clock,
    ArrowRight,
    Zap,
    Shield,
    RefreshCcw,
    Target,
    Layers,
    CheckCircle2,
    Cpu
} from "lucide-react"
import BlurText from "@/components/BlurText"
import GradientText from "@/components/GradientText"

type Props = {}

const challenges = [
    {
        icon: AlertTriangle,
        title: "Inconsistent Outcomes",
        description: "Manual checks lead to variable results and missed issues"
    },
    {
        icon: Users,
        title: "Individual Dependency",
        description: "High reliance on specific people and custom scripts"
    },
    {
        icon: Eye,
        title: "Limited Visibility",
        description: "Lack of auditability and traceability across processes"
    },
    {
        icon: Scaling,
        title: "Scaling Barriers",
        description: "Inability to scale across systems and business units"
    },
    {
        icon: Clock,
        title: "Reactive Handling",
        description: "Data issues detected after business impact occurs"
    }
]

const capabilities = [
    {
        icon: Zap,
        title: "Automation",
        description: "Eliminate manual effort with automated quality checks and workflows",
        gradient: "from-amber-500 to-orange-500"
    },
    {
        icon: RefreshCcw,
        title: "Consistency",
        description: "Standardized rules and processes ensure repeatable outcomes",
        gradient: "from-blue-500 to-cyan-500"
    },
    {
        icon: Eye,
        title: "Visibility",
        description: "Real-time dashboards and audit trails for complete transparency",
        gradient: "from-violet-500 to-purple-500"
    },
    {
        icon: Scaling,
        title: "Scalability",
        description: "Enterprise-grade platforms that grow with your business needs",
        gradient: "from-emerald-500 to-teal-500"
    }
]

export default function PlatformApproach({}: Props) {
    return (
        <section className="relative py-10 lg:py-10 bg-background overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-150 h-150 bg-primary/5 dark:bg-primary/3 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-125 h-125 bg-accent/5 dark:bg-accent/3 rounded-full blur-[100px]" />
                
                <svg className="absolute inset-0 w-full h-full opacity-[0.015] dark:opacity-[0.02]" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="platform-grid" width="4" height="4" patternUnits="userSpaceOnUse">
                            <circle cx="0.5" cy="0.5" r="0.3" fill="currentColor" className="text-foreground" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#platform-grid)" />
                </svg>
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
                        <div className="inline-flex items-center gap-3">
                            <span className="w-12 h-px bg-linear-to-r from-transparent via-primary to-transparent" />
                            <span className="text-sm font-semibold tracking-wider uppercase text-primary flex items-center gap-2">
                                <Cpu className="w-4 h-4" />
                                Platform-Enabled
                            </span>
                            <span className="w-12 h-px bg-linear-to-r from-transparent via-primary to-transparent" />
                        </div>
                    </motion.div>

                    <BlurText
                        text="Our Platform-Enabled Approach"
                        delay={50}
                        animateBy="words"
                        direction="top"
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-8 justify-center"
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="text-lg sm:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
                    >
                        Delivering scalable, repeatable data quality outcomes through{" "}
                        <GradientText 
                            colors={["#5227FF", "#FF9FFC", "#B19EEF"]} 
                            animationSpeed={6}
                            className="font-semibold"
                        >
                            enterprise-grade platforms
                        </GradientText>
                        {" "}— guided by business expertise.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="relative mb-24"
                >
                    <div className="p-8 sm:p-12 rounded-3xl bg-linear-to-br from-card via-card/80 to-secondary/20 border border-border relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--primary)/0.05,transparent_50%)]" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--accent)/0.05,transparent_50%)]" />
                        
                        <div className="relative grid lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                                        <Target className="w-6 h-6 text-primary" />
                                    </div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                                        The Foundation
                                    </h3>
                                </div>
                                
                                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                                    Reliable data quality at scale cannot be achieved through manual checks or ad-hoc efforts alone. 
                                    It requires <span className="text-foreground font-medium">automation</span>, <span className="text-foreground font-medium">consistency</span>, and <span className="text-foreground font-medium">visibility</span>, 
                                    supported by the right platforms and tools.
                                </p>
                                
                                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                                    Our approach combines deep business and SAP expertise with enterprise-grade data quality platforms, 
                                    enabling organizations to operationalize data quality in a structured, scalable, and sustainable manner.
                                </p>
                            </div>
                            
                            <div className="relative">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {capabilities.map((capability, index) => (
                                        <motion.div
                                            key={capability.title}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: index * 0.1 }}
                                            className="group relative p-5 rounded-2xl bg-background/60 dark:bg-background/40 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300"
                                        >
                                            <div className={`w-10 h-10 rounded-xl bg-linear-to-br ${capability.gradient} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                                <capability.icon className="w-5 h-5 text-white" />
                                            </div>
                                            <h4 className="font-semibold text-foreground mb-1">{capability.title}</h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">{capability.description}</p>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="text-center mb-12"
                    >
                        <div className="inline-flex items-center gap-2 mb-4">
                            <span className="w-8 h-px bg-destructive/50" />
                            <span className="text-sm font-semibold tracking-wider uppercase text-destructive">
                                The Challenge
                            </span>
                            <span className="w-8 h-px bg-destructive/50" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                            Why a Platform-Enabled Approach Matters
                        </h3>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Traditional manual approaches create systemic risks that compound over time
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
                        {challenges.map((challenge, index) => (
                            <motion.div
                                key={challenge.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                                className="group relative"
                            >
                                <div className="h-full p-6 rounded-2xl bg-linear-to-b from-destructive/5 to-transparent border border-destructive/20 hover:border-destructive/40 transition-all duration-300 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-linear-to-b from-destructive/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                    
                                    <div className="relative">
                                        <div className="w-12 h-12 rounded-2xl bg-destructive/10 dark:bg-destructive/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <challenge.icon className="w-6 h-6 text-destructive" />
                                        </div>
                                        
                                        <h4 className="font-semibold text-foreground mb-2 group-hover:text-destructive transition-colors duration-300">
                                            {challenge.title}
                                        </h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {challenge.description}
                                        </p>
                                    </div>
                                    
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-destructive/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="relative"
                >
                    <div className="p-8 sm:p-12 rounded-3xl bg-linear-to-br from-primary/5 via-background to-accent/5 border border-primary/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                        <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
                        
                        <div className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                            <div className="flex-1 text-center lg:text-left">
                                <div className="inline-flex items-center gap-2 mb-4">
                                    <Shield className="w-5 h-5 text-primary" />
                                    <span className="text-sm font-semibold tracking-wider uppercase text-primary">
                                        The Transformation
                                    </span>
                                </div>
                                
                                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                                    From Manual Effort to{" "}
                                    <span className="text-primary">Enterprise Capability</span>
                                </h3>
                                
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    A platform-enabled approach transforms data quality from a manual effort 
                                    into a repeatable enterprise capability that delivers consistent, 
                                    auditable, and scalable outcomes.
                                </p>
                            </div>
                            
                            <div className="shrink-0">
                                <div className="flex items-center gap-4 sm:gap-6">
                                    <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-background/60 dark:bg-background/40 border border-border">
                                        <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center">
                                            <FileCode className="w-8 h-8 text-muted-foreground" />
                                        </div>
                                        <span className="text-sm font-medium text-muted-foreground">Manual</span>
                                    </div>
                                    
                                    <div className="flex flex-col items-center gap-2">
                                        <motion.div
                                            animate={{ x: [0, 8, 0] }}
                                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                        >
                                            <ArrowRight className="w-8 h-8 text-primary" />
                                        </motion.div>
                                        <span className="text-xs text-muted-foreground">Transform</span>
                                    </div>
                                    
                                    <div className="flex flex-col items-center gap-3 p-6 rounded-2xl bg-primary/10 dark:bg-primary/20 border border-primary/30">
                                        <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-primary to-primary/80 flex items-center justify-center">
                                            <Layers className="w-8 h-8 text-white" />
                                        </div>
                                        <span className="text-sm font-medium text-primary">Platform</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="relative mt-10 pt-10 border-t border-border/50">
                            <div className="grid sm:grid-cols-3 gap-6">
                                {[
                                    { icon: CheckCircle2, label: "Automated Quality Checks", color: "text-emerald-500" },
                                    { icon: CheckCircle2, label: "Full Audit Traceability", color: "text-emerald-500" },
                                    { icon: CheckCircle2, label: "Enterprise Scalability", color: "text-emerald-500" }
                                ].map((item, index) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                        className="flex items-center gap-3"
                                    >
                                        <item.icon className={`w-5 h-5 ${item.color}`} />
                                        <span className="text-foreground font-medium">{item.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
