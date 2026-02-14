import { motion } from "motion/react"
import { useState } from "react"
import {
    Search,
    Activity,
    Users,
    Shield,
    ArrowRight,
    ChevronRight,
} from "lucide-react"
import BlurText from "@/components/BlurText"

type Props = {}

const solutions = [
    {
        id: 1,
        icon: Search,
        title: "Data Quality Assessment & Diagnostics",
        shortTitle: "Assessment",
        description: "Structured profiling and validation to identify risks and patterns, producing objective and repeatable results.",
        color: "from-blue-500 to-cyan-500",
        bgColor: "bg-blue-500/10 dark:bg-blue-500/20",
        borderColor: "border-blue-500/30",
        textColor: "text-blue-500"
    },
    {
        id: 2,
        icon: Activity,
        title: "Continuous Data Quality Monitoring",
        shortTitle: "Monitoring",
        description: "Automated execution of checks and thresholds to enable early detection of anomalies.",
        color: "from-emerald-500 to-teal-500",
        bgColor: "bg-emerald-500/10 dark:bg-emerald-500/20",
        borderColor: "border-emerald-500/30",
        textColor: "text-emerald-500"
    },
    {
        id: 3,
        icon: Users,
        title: "Data Issue Remediation & Ownership",
        shortTitle: "Remediation",
        description: "Centralized visibility of issues, ownership, and closure tracking.",
        color: "from-violet-500 to-purple-500",
        bgColor: "bg-violet-500/10 dark:bg-violet-500/20",
        borderColor: "border-violet-500/30",
        textColor: "text-violet-500"
    },
    {
        id: 4,
        icon: Shield,
        title: "Data Governance Enablement",
        shortTitle: "Governance",
        description: "Measurement of governance KPIs and evidence for audits and governance forums.",
        color: "from-amber-500 to-orange-500",
        bgColor: "bg-amber-500/10 dark:bg-amber-500/20",
        borderColor: "border-amber-500/30",
        textColor: "text-amber-500"
    }
]

function SolutionCard({ solution, index, isActive, onClick }: { 
    solution: typeof solutions[0], 
    index: number, 
    isActive: boolean,
    onClick: () => void 
}) {
    const Icon = solution.icon
    
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            onClick={onClick}
            className={`group relative cursor-pointer`}
        >
            <div className={`relative p-6 sm:p-8 rounded-3xl border transition-all duration-500 overflow-hidden
                ${isActive 
                    ? `${solution.bgColor} ${solution.borderColor} shadow-lg` 
                    : 'bg-card/50 border-border hover:border-primary/20'
                }`}
            >
                <div className={`absolute inset-0 bg-linear-to-br ${solution.color} opacity-0 transition-opacity duration-500 ${isActive ? 'opacity-5' : 'group-hover:opacity-[0.02]'}`} />
                
                <div className="absolute top-4 right-4 text-6xl font-bold opacity-[0.03] dark:opacity-[0.05] select-none">
                    0{solution.id}
                </div>

                <div className="relative">
                    <div className="flex items-start gap-4 mb-4">
                        <div className={`shrink-0 w-12 h-12 rounded-2xl bg-linear-to-br ${solution.color} flex items-center justify-center shadow-lg transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-105'}`}>
                            <Icon className="w-6 h-6 text-white" />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                                <span className={`text-xs font-semibold uppercase tracking-wider ${solution.textColor}`}>
                                    Solution {solution.id}
                                </span>
                            </div>
                            <h3 className={`font-bold text-lg sm:text-xl text-foreground leading-tight transition-colors duration-300 ${isActive ? solution.textColor : ''}`}>
                                {solution.shortTitle}
                            </h3>
                        </div>
                    </div>
                    
                    <motion.div
                        initial={false}
                        animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                    >
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                            {solution.description}
                        </p>
                        <div className={`inline-flex items-center gap-2 text-sm font-medium ${solution.textColor}`}>
                            <span>Platform enabled</span>
                        </div>
                    </motion.div>

                    {!isActive && (
                        <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                            <span>View details</span>
                            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                    )}
                </div>

                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-linear-to-r ${solution.color} transform origin-left transition-transform duration-500 ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'}`} />
            </div>
        </motion.div>
    )
}

export default function PlatformSupports({}: Props) {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <section className="relative py-24 lg:py-20 bg-secondary/30 dark:bg-secondary/10 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 dark:bg-primary/3 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 dark:bg-accent/3 rounded-full blur-[80px]" />
                
                <svg className="absolute inset-0 w-full h-full opacity-[0.015] dark:opacity-[0.025]" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="platform-supports-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.2" className="text-foreground" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#platform-supports-grid)" />
                </svg>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-6"
                    >
                        <div className="inline-flex items-center gap-3">
                            <span className="w-12 h-px bg-linear-to-r from-transparent via-primary to-transparent" />
                            <span className="text-sm font-semibold tracking-wider uppercase text-primary">
                                Platform Integration
                            </span>
                            <span className="w-12 h-px bg-linear-to-r from-transparent via-primary to-transparent" />
                        </div>
                    </motion.div>

                    <BlurText
                        text="How the Platform Supports Our Solutions"
                        delay={40}
                        animateBy="words"
                        direction="top"
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 justify-center"
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                    >
                        Each solution in our framework is enabled and enhanced by platform capabilities
                    </motion.p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
                    {solutions.map((solution, index) => (
                        <SolutionCard 
                            key={solution.id}
                            solution={solution}
                            index={index}
                            isActive={activeIndex === index}
                            onClick={() => setActiveIndex(index)}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="relative"
                >
                    <div className="p-6 sm:p-8 rounded-3xl bg-card border border-border relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--primary)/0.03,transparent_70%)]" />
                        
                        <div className="relative flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
                            <div className="flex-1 text-center lg:text-left">
                                <h4 className="text-xl sm:text-2xl font-bold text-foreground mb-3">
                                    Unified Platform Experience
                                </h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    All four solutions work together seamlessly within the platform, 
                                    providing a cohesive experience from assessment through governance.
                                </p>
                            </div>
                            
                            <div className="shrink-0">
                                <div className="flex items-center gap-3">
                                    {solutions.map((solution, index) => (
                                        <motion.div
                                            key={solution.id}
                                            whileHover={{ scale: 1.1, y: -4 }}
                                            className={`w-12 h-12 rounded-xl bg-linear-to-br ${solution.color} flex items-center justify-center shadow-lg cursor-pointer transition-all duration-300 ${activeIndex === index ? 'ring-2 ring-offset-2 ring-offset-card ring-white/50' : ''}`}
                                            onClick={() => setActiveIndex(index)}
                                        >
                                            <solution.icon className="w-5 h-5 text-white" />
                                        </motion.div>
                                    ))}
                                    
                                    <div className="hidden sm:flex items-center gap-2 ml-4 pl-4 border-l border-border">
                                        <ArrowRight className="w-5 h-5 text-primary" />
                                        <span className="text-sm font-medium text-foreground">Integrated Flow</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
