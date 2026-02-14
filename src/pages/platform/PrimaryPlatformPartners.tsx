import { motion } from "motion/react"
import {
    Search,
    CheckSquare,
    Activity,
    AlertCircle,
    BarChart3,
    ExternalLink,
    Star,
    Zap,
    Shield
} from "lucide-react"
import BlurText from "@/components/BlurText"

type Props = {}

const datagapsFeatures = [
    {
        icon: Search,
        title: "Automated Profiling",
        description: "Deep data profiling and validation across enterprise systems"
    },
    {
        icon: CheckSquare,
        title: "Rule-Based Checks",
        description: "Repeatable data quality checks with configurable business rules"
    },
    {
        icon: Activity,
        title: "Continuous Monitoring",
        description: "Real-time monitoring and trend analysis for proactive detection"
    },
    {
        icon: AlertCircle,
        title: "Exception Management",
        description: "Structured issue tracking with clear ownership and workflows"
    },
    {
        icon: BarChart3,
        title: "Visibility Dashboards",
        description: "Operational and management dashboards for complete transparency"
    }
]

export default function PrimaryPlatformPartners({ }: Props) {
    return (
        <section className="relative py-24 lg:py-32 bg-background overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/3 right-1/4 w-125 h-125 bg-primary/5 dark:bg-primary/3 rounded-full blur-[150px]" />
                <div className="absolute bottom-1/4 left-1/3 w-100 h-100 bg-accent/5 dark:bg-accent/3 rounded-full blur-[120px]" />

                <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.03]">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }} />
                </div>
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
                            <span className="text-sm font-semibold tracking-wider uppercase text-primary flex items-center gap-2">
                                <Star className="w-4 h-4" />
                                Strategic Partnership
                            </span>
                            <span className="w-12 h-px bg-linear-to-r from-transparent via-primary to-transparent" />
                        </div>
                    </motion.div>

                    <BlurText
                        text="Our Primary Platform Partner"
                        delay={50}
                        animateBy="words"
                        direction="top"
                        className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 justify-center"
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                    >
                        Enterprise-grade enablement with{" "}
                        <span className="font-semibold text-foreground">Datagaps</span>.
                    </motion.p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-16"
                >

                    <div className="p-8 sm:p-12 rounded-3xl bg-card relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--primary)/0.08,transparent_60%)]" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,var(--accent)/0.05,transparent_50%)]" />

                        <div className="relative grid lg:grid-cols-5 gap-8 items-center">
                            <div className="lg:col-span-2 text-center lg:text-left">
                                <div className="inline-flex items-center justify-center lg:justify-start gap-4 mb-6">
                                    <div className="relative">
                                        <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-primary via-primary/90 to-primary/70 flex items-center justify-center shadow-lg shadow-primary/20">
                                            <span className="text-3xl font-bold text-white">D</span>
                                        </div>
                                        <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-accent flex items-center justify-center">
                                            <Zap className="w-3 h-3 text-accent-foreground" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Datagaps</h3>
                                        <p className="text-sm text-muted-foreground">Data Quality Platform</p>
                                    </div>
                                </div>

                                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                                    We leverage Datagaps as a core platform to support our data quality delivery
                                    framework across assessment, monitoring, remediation, and governance.
                                </p>

                                <motion.a
                                    href="https://datagaps.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                                >
                                    Learn More
                                    <ExternalLink className="w-4 h-4" />
                                </motion.a>
                            </div>

                            <div className="lg:col-span-3">
                                <div className="grid sm:grid-cols-2 gap-4">
                                    {datagapsFeatures.slice(0, 4).map((feature, index) => (
                                        <motion.div
                                            key={feature.title}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: index * 0.1 }}
                                            className="group p-5 rounded-2xl bg-background/60 dark:bg-background/40 border border-border hover:border-primary/30 transition-all duration-300"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                    <feature.icon className="w-5 h-5 text-primary" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                                                        {feature.title}
                                                    </h4>
                                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                                        {feature.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.4 }}
                                    className="mt-4"
                                >
                                    <div className="group p-5 rounded-2xl bg-background/60 dark:bg-background/40 border border-border hover:border-primary/30 transition-all duration-300">
                                        <div className="flex items-start gap-4">
                                            <div className="shrink-0 w-11 h-11 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <BarChart3 className="w-5 h-5 text-primary" />
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                                                    {datagapsFeatures[4].title}
                                                </h4>
                                                <p className="text-sm text-muted-foreground leading-relaxed">
                                                    {datagapsFeatures[4].description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="grid sm:grid-cols-3 gap-6"
                >
                    {[
                        { icon: Shield, label: "Enterprise Security", desc: "SOC 2 compliant infrastructure" },
                        { icon: Zap, label: "Fast Implementation", desc: "Rapid deployment and configuration" },
                        { icon: Activity, label: "Proven Scale", desc: "Handles billions of records" }
                    ].map((item, index) => (
                        <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                            className="group flex items-center gap-4 p-5 rounded-2xl bg-secondary/50 dark:bg-secondary/30 border border-border hover:border-primary/20 transition-all duration-300"
                        >
                            <div className="shrink-0 w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary/15 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                <item.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-foreground">{item.label}</h4>
                                <p className="text-sm text-muted-foreground">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
