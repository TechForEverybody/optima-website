import { motion } from "motion/react"
import { Database, Search, Activity, UserCheck, ShieldCheck, ChevronRight, Layers, Zap } from "lucide-react"

type Props = {}

const frameworkSteps = [
    {
        number: "01",
        icon: Database,
        title: "Data Sources",
        shortTitle: "Sources",
        description: "Enterprise data originating from SAP, non-SAP, legacy, and external systems—where issues are often introduced due to process gaps or system constraints.",
        color: "primary"
    },
    {
        number: "02",
        icon: Search,
        title: "Assess & Validate",
        shortTitle: "Assess",
        description: "Structured profiling and business rule validations to identify data risks, inconsistencies, and patterns—providing clear visibility into the current state.",
        color: "accent"
    },
    {
        number: "03",
        icon: Activity,
        title: "Monitor & Control",
        shortTitle: "Monitor",
        description: "Automated and repeatable controls to continuously monitor quality, detect anomalies early, and trigger alerts before issues propagate downstream.",
        color: "primary"
    },
    {
        number: "04",
        icon: UserCheck,
        title: "Remediate & Own",
        shortTitle: "Remediate",
        description: "Clear business or functional ownership through defined workflows—ensuring accountability, root-cause analysis, and closure.",
        color: "accent"
    },
    {
        number: "05",
        icon: ShieldCheck,
        title: "Trusted Insights",
        shortTitle: "Insights",
        description: "Quality KPIs, trends, and governance mechanisms that support audits, compliance, and executive decision-making.",
        color: "primary"
    }
]

export default function OurApproach({ }: Props) {
    return (
        <section className="relative py-5 lg:py-10 bg-background overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/3 dark:bg-primary/2 rounded-full blur-3xl" />
                <svg className="absolute inset-0 w-full h-full opacity-[0.02]" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="approach-lines" width="5" height="5" patternUnits="userSpaceOnUse">
                            <path d="M 5 0 L 0 5" stroke="currentColor" strokeWidth="0.1" className="text-foreground" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#approach-lines)" />
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
                        <div className="inline-flex items-center gap-2">
                            <span className="w-12 h-px bg-primary" />
                            <span className="text-sm font-semibold tracking-wider uppercase text-primary">
                                Our Methodology
                            </span>
                            <span className="w-12 h-px bg-primary" />
                        </div>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6"
                    >
                        Our Approach
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                    >
                        We follow a practical, business-led data quality framework that addresses the entire data 
                        lifecycle—from source systems to executive reporting.
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="text-base text-muted-foreground/80 max-w-2xl mx-auto mt-4"
                    >
                        Our approach focuses not only on identifying data issues, but on preventing recurrence, 
                        assigning ownership, and enabling sustained governance.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-16"
                >
                    <div className="relative p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-card via-card/80 to-secondary/20 border border-border overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--primary)/0.05,transparent_50%)]" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,var(--accent)/0.05,transparent_50%)]" />
                        
                        <div className="relative">
                            <div className="flex items-center justify-center gap-3 mb-10">
                                <Layers className="w-6 h-6 text-primary" />
                                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                                    Trusted Data Delivery Framework
                                </h3>
                            </div>

                            <div className="relative">
                                <div className="hidden md:flex items-center justify-between gap-2 lg:gap-4">
                                    {frameworkSteps.map((step, index) => (
                                        <div key={step.number} className="flex items-center flex-1 last:flex-none">
                                            <motion.div
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                                                className="group flex flex-col items-center text-center flex-1"
                                            >
                                                <div className={`relative w-16 h-16 lg:w-20 lg:h-20 rounded-2xl bg-gradient-to-br ${step.color === 'primary' ? 'from-primary/20 to-primary/5 border-primary/30' : 'from-accent/20 to-accent/5 border-accent/30'} border-2 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                                                    <step.icon className={`w-7 h-7 lg:w-8 lg:h-8 ${step.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                                                    <div className={`absolute -top-2 -right-2 w-6 h-6 rounded-lg ${step.color === 'primary' ? 'bg-primary' : 'bg-accent'} flex items-center justify-center shadow-lg`}>
                                                        <span className="text-[10px] font-bold text-primary-foreground">{step.number}</span>
                                                    </div>
                                                </div>
                                                <span className="text-xs lg:text-sm font-semibold text-foreground">
                                                    {step.shortTitle}
                                                </span>
                                            </motion.div>
                                            
                                            {index < frameworkSteps.length - 1 && (
                                                <motion.div
                                                    initial={{ scaleX: 0 }}
                                                    whileInView={{ scaleX: 1 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                                                    className="flex-shrink-0 flex items-center mx-1 lg:mx-2 origin-left"
                                                >
                                                    <div className="w-6 lg:w-10 h-0.5 bg-gradient-to-r from-primary/60 to-accent/60 rounded-full" />
                                                    <ChevronRight className="w-4 h-4 text-primary/60 -ml-1" />
                                                </motion.div>
                                            )}
                                        </div>
                                    ))}
                                </div>

                                <div className="md:hidden space-y-3">
                                    {frameworkSteps.map((step, index) => (
                                        <motion.div
                                            key={step.number}
                                            initial={{ opacity: 0, x: -20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            className="relative"
                                        >
                                            <div className="flex items-center gap-4 p-3 rounded-xl bg-background/50 border border-border">
                                                <div className={`flex-shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br ${step.color === 'primary' ? 'from-primary/20 to-primary/5' : 'from-accent/20 to-accent/5'} flex items-center justify-center`}>
                                                    <step.icon className={`w-5 h-5 ${step.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                                                </div>
                                                <span className="flex-1 text-sm font-medium text-foreground">{step.title}</span>
                                                <span className={`text-xs font-bold ${step.color === 'primary' ? 'text-primary' : 'text-accent'}`}>
                                                    {step.number}
                                                </span>
                                            </div>
                                            {index < frameworkSteps.length - 1 && (
                                                <div className="absolute left-[26px] top-full w-0.5 h-3 bg-gradient-to-b from-primary/40 to-accent/40" />
                                            )}
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                    {frameworkSteps.map((step, index) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className={`group relative ${index === 4 ? 'md:col-span-2 lg:col-span-1' : ''}`}
                        >
                            <div className="relative h-full p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-300 overflow-hidden">
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${step.color === 'primary' ? 'from-primary/10' : 'from-accent/10'} to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                                
                                <div className="relative z-10">
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color === 'primary' ? 'from-primary/15 to-primary/5' : 'from-accent/15 to-accent/5'} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                            <step.icon className={`w-6 h-6 ${step.color === 'primary' ? 'text-primary' : 'text-accent'}`} />
                                        </div>
                                        <span className={`text-4xl font-bold ${step.color === 'primary' ? 'text-primary/15' : 'text-accent/15'} group-hover:${step.color === 'primary' ? 'text-primary/25' : 'text-accent/25'} transition-colors duration-300`}>
                                            {step.number}
                                        </span>
                                    </div>
                                    
                                    <h4 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                                        {step.title}
                                    </h4>
                                    
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>

                                <div className={`absolute bottom-0 left-0 w-0 h-1 ${step.color === 'primary' ? 'bg-primary' : 'bg-accent'} group-hover:w-full transition-all duration-500 rounded-b-2xl`} />
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="relative"
                >
                    <div className="relative p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border border-primary/20 overflow-hidden">
                        <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_25%,var(--primary)/0.03_25%,var(--primary)/0.03_50%,transparent_50%,transparent_75%,var(--primary)/0.03_75%)] bg-size-[20px_20px]" />
                        
                        <div className="relative flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
                            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                                <Zap className="w-7 h-7 text-primary" />
                            </div>
                            
                            <div>
                                <p className="text-foreground font-medium leading-relaxed">
                                    <span className="text-primary font-semibold">Tool-assisted delivery</span> enabled by enterprise-grade platforms such as 
                                    <span className="text-accent font-semibold"> Datagaps</span>, ensuring scalability and automation while keeping 
                                    business outcomes at the center.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
