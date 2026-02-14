import { motion } from "motion/react"
import {
    Target,
    Workflow,
    Bot,
    ListChecks,
    LayoutDashboard,
    FileCheck,
    Settings2
} from "lucide-react"
import BlurText from "@/components/BlurText"

type Props = {}

const platformBenefits = [
    {
        icon: Workflow,
        title: "Consistent Execution",
        description: "Structured assessments and monitoring processes that deliver reliable results every time",
        number: "01"
    },
    {
        icon: Bot,
        title: "Smart Automation",
        description: "Repeatable checks and controls automated to reduce manual effort and human error",
        number: "02"
    },
    {
        icon: ListChecks,
        title: "Issue Tracking",
        description: "Structured visibility into data issues with clear ownership and resolution workflows",
        number: "03"
    },
    {
        icon: LayoutDashboard,
        title: "Reliable Dashboards",
        description: "Accurate reporting that stakeholders can trust for decision-making",
        number: "04"
    },
    {
        icon: FileCheck,
        title: "Audit-Ready",
        description: "Complete traceability across the data lifecycle for compliance and governance",
        number: "05"
    }
]

export default function ToolDriven({}: Props) {
    return (
        <section className="relative py-24 lg:py-10 bg-secondary/30 dark:bg-secondary/10 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/8 dark:bg-primary/5 rounded-full blur-[100px] -translate-y-1/2" />
                <div className="absolute top-1/4 right-0 w-80 h-80 bg-accent/8 dark:bg-accent/5 rounded-full blur-[80px]" />
                
                <svg className="absolute inset-0 w-full h-full opacity-[0.02] dark:opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="tool-driven-pattern" width="8" height="8" patternUnits="userSpaceOnUse">
                            <path d="M 0 4 L 8 4 M 4 0 L 4 8" stroke="currentColor" strokeWidth="0.15" className="text-foreground" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#tool-driven-pattern)" />
                </svg>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
                    <div className="lg:sticky lg:top-32">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="inline-flex items-center gap-2 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                                    <Settings2 className="w-5 h-5 text-primary" />
                                </div>
                                <span className="text-sm font-semibold tracking-wider uppercase text-primary">
                                    Our Philosophy
                                </span>
                            </div>

                            <BlurText
                                text="How We Use Platforms"
                                delay={60}
                                animateBy="words"
                                direction="top"
                                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4"
                            />
                            
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="text-xl sm:text-2xl font-medium text-foreground/90 mb-6"
                            >
                                Without Being{" "}
                                <span className="relative inline-block">
                                    <span className="relative z-10 text-primary">Tool-Driven</span>
                                    <span className="absolute bottom-1 left-0 w-full h-2 bg-primary/20 dark:bg-primary/30 -z-10 rounded-sm" />
                                </span>
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8"
                            >
                                We lead with business objectives, risk, and outcomes — not tools. 
                                Platforms are selected and configured to support the delivery framework, 
                                not dictate it.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5 }}
                                className="relative p-6 rounded-2xl bg-card border border-border overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-primary/10 to-transparent rounded-bl-full" />
                                
                                <div className="relative flex items-start gap-4">
                                    <div className="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-primary to-primary/80 flex items-center justify-center">
                                        <Target className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-foreground mb-2">Business-First Approach</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            Every platform decision is driven by your specific business context, 
                                            risk profile, and desired outcomes — ensuring technology serves strategy, 
                                            not the other way around.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    <div className="relative">
                        <div className="space-y-4">
                            {platformBenefits.map((benefit, index) => (
                                <motion.div
                                    key={benefit.title}
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                    className="group"
                                >
                                    <div className="relative flex items-start gap-5 p-6 rounded-2xl bg-card/80 dark:bg-card/60 backdrop-blur-sm border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300">
                                        <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        
                                        <div className="relative shrink-0">
                                            <div className="absolute -top-6 -left-6 text-4xl font-bold text-primary/10 dark:text-primary/15 select-none">
                                                {benefit.number}
                                            </div>
                                            <div className="relative w-14 h-14 rounded-2xl bg-linear-to-br from-primary/15 to-primary/5 dark:from-primary/25 dark:to-primary/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                                <benefit.icon className="w-6 h-6 text-primary" />
                                            </div>
                                        </div>
                                        
                                        <div className="relative flex-1 min-w-0 pt-1">
                                            <h3 className="font-semibold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {benefit.description}
                                            </p>
                                        </div>
                                        
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-primary rounded-r-full group-hover:h-12 transition-all duration-300" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="absolute -top-6 -right-6 w-28 h-28 border-2 border-dashed border-primary/15 rounded-2xl -z-10" />
                        <div className="absolute -bottom-6 -left-6 w-36 h-36 border-2 border-dashed border-accent/10 rounded-2xl -z-10" />
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-20 text-center"
                >
                    <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-card border border-border">
                        <div className="flex -space-x-2">
                            {[Target, Workflow, Bot].map((Icon, i) => (
                                <div 
                                    key={i} 
                                    className="w-10 h-10 rounded-full bg-primary/10 dark:bg-primary/20 border-2 border-card flex items-center justify-center"
                                >
                                    <Icon className="w-4 h-4 text-primary" />
                                </div>
                            ))}
                        </div>
                        <div className="text-left">
                            <p className="text-sm font-medium text-foreground">Platforms as Enablers</p>
                            <p className="text-xs text-muted-foreground">Supporting your framework, not replacing it</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
