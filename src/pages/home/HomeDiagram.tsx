import { motion } from "motion/react"
import { Database, Search, Activity, UserCheck, ShieldCheck, Server, Globe, HardDrive, Cloud, ArrowDown, ArrowRight } from "lucide-react"

type Props = {}

const dataSources = [
    { id: "sap", label: "SAP", icon: Server },
    { id: "nonsap", label: "Non-SAP", icon: Database },
    { id: "legacy", label: "Legacy", icon: HardDrive },
    { id: "external", label: "External", icon: Globe }
]

const coreSteps = [
    {
        id: "assess",
        title: "Assess & Validate",
        subtitle: "Profiling, business rules, risk identification",
        icon: Search
    },
    {
        id: "monitor",
        title: "Monitor & Control",
        subtitle: "Automated checks, alerts, thresholds",
        icon: Activity
    },
    {
        id: "remediate",
        title: "Remediate & Own",
        subtitle: "Issue ownership, workflow, closure",
        icon: UserCheck
    }
]

const outputs = [
    { id: "dashboards", label: "Dashboards", icon: Activity },
    { id: "kpis", label: "Quality KPIs", icon: ShieldCheck },
    { id: "audit", label: "Audit Ready", icon: Cloud }
]

export default function HomeDiagram({ }: Props) {
    return (
        <section className="relative py-20 lg:py-28 bg-gradient-to-b from-background via-secondary/10 to-background overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 dark:bg-primary/3 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16"
                >
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                        Trusted Data Delivery Framework
                    </h3>
                </motion.div>

                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-8"
                    >
                        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 text-center">
                            Data Sources
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-2xl mx-auto">
                            {dataSources.map((source, index) => (
                                <motion.div
                                    key={source.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="group"
                                >
                                    <div className="p-4 rounded-xl bg-card/80 dark:bg-card/60 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                                        <div className="flex flex-col items-center gap-2 text-center">
                                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <source.icon className="w-5 h-5 text-primary" />
                                            </div>
                                            <span className="text-sm font-medium text-foreground">{source.label}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        whileInView={{ opacity: 1, scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="flex flex-col items-center gap-1 my-6 origin-top"
                    >
                        <div className="w-px h-8 bg-gradient-to-b from-primary/30 to-primary" />
                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                            <ArrowDown className="w-3 h-3 text-primary" />
                        </div>
                    </motion.div>

                    <div className="relative max-w-3xl mx-auto mb-6">
                        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/60 to-primary -translate-x-1/2" />
                        
                        <div className="space-y-6 lg:space-y-0">
                            {coreSteps.map((step, index) => (
                                <motion.div
                                    key={step.id}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
                                    className={`relative lg:w-[45%] ${index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'} ${index > 0 ? 'lg:mt-6' : ''}`}
                                >
                                    <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 w-8 h-px bg-primary/60" style={{ [index % 2 === 0 ? 'right' : 'left']: '-32px' }} />
                                    
                                    <div className="hidden lg:flex absolute top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-primary items-center justify-center z-10 shadow-lg shadow-primary/30" style={{ [index % 2 === 0 ? 'right' : 'left']: '-52px' }}>
                                        <span className="text-sm font-bold text-primary-foreground">{index + 1}</span>
                                    </div>

                                    <div className="group relative p-5 rounded-2xl bg-gradient-to-br from-card via-card to-secondary/20 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                                        <div className="flex items-start gap-4">
                                            <div className="relative flex-shrink-0">
                                                <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                    <step.icon className="w-6 h-6 text-primary" />
                                                </div>
                                                <div className="lg:hidden absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                                                    <span className="text-[10px] font-bold text-primary-foreground">{index + 1}</span>
                                                </div>
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <h4 className="text-base font-semibold text-foreground mb-1">{step.title}</h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">{step.subtitle}</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        whileInView={{ opacity: 1, scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1 }}
                        className="flex flex-col items-center gap-1 my-6 origin-top"
                    >
                        <div className="w-px h-8 bg-gradient-to-b from-primary to-accent" />
                        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                            <ArrowDown className="w-3 h-3 text-accent" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1.1 }}
                        className="mb-8 max-w-2xl mx-auto"
                    >
                        <div className="relative p-6 rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/20">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-xs font-semibold text-primary-foreground whitespace-nowrap">
                                Trusted Insights & Governance
                            </div>
                            <div className="pt-3 flex items-center justify-center gap-3">
                                <ShieldCheck className="w-6 h-6 text-primary flex-shrink-0" />
                                <span className="text-sm sm:text-base text-muted-foreground text-center">
                                    Continuous quality assurance across the data lifecycle
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        whileInView={{ opacity: 1, scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1.2 }}
                        className="flex flex-col items-center gap-1 my-6 origin-top"
                    >
                        <div className="w-px h-8 bg-gradient-to-b from-accent/60 to-accent" />
                        <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
                            <ArrowDown className="w-3 h-3 text-accent" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 1.3 }}
                    >
                        <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 text-center">
                            Outputs
                        </div>
                        <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto">
                            {outputs.map((output, index) => (
                                <motion.div
                                    key={output.id}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                                    className="group"
                                >
                                    <div className="p-4 rounded-xl bg-accent/10 dark:bg-accent/15 border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
                                        <div className="flex flex-col items-center gap-2 text-center">
                                            <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                                <output.icon className="w-5 h-5 text-accent" />
                                            </div>
                                            <span className="text-xs sm:text-sm font-medium text-foreground">{output.label}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.6 }}
                    className="text-center text-xs sm:text-sm text-muted-foreground mt-12"
                >
                    Tool-assisted delivery enabled by enterprise-grade platforms such as <span className="text-primary font-medium">Datagaps</span>.
                </motion.p>
            </div>
        </section>
    )
}
