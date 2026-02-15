import { motion } from "motion/react"
import { AlertTriangle, RefreshCcw, FileWarning, Database, BarChart3 } from "lucide-react"

type Props = {}

const challenges = [
    {
        icon: Database,
        title: "Inconsistent Data",
        description: "Inconsistent master and transactional data across systems"
    },
    {
        icon: RefreshCcw,
        title: "Manual Corrections",
        description: "Repeated reconciliation efforts and manual corrections"
    },
    {
        icon: FileWarning,
        title: "Reporting Issues",
        description: "Reporting discrepancies and audit observations"
    },
    {
        icon: AlertTriangle,
        title: "Migration Risks",
        description: "Migration risks during SAP or system transformations"
    },
    {
        icon: BarChart3,
        title: "Lost Confidence",
        description: "Business users losing confidence in dashboards and analytics"
    }
]

export default function BusinessChallenges({ }: Props) {
    return (
        <section className="relative py-5 lg:py-5 bg-gradient-to-b from-background via-secondary/20 to-background overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <svg className="absolute top-0 left-0 w-full h-full opacity-[0.03] dark:opacity-[0.02]" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="challenge-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <circle cx="1" cy="1" r="0.5" fill="currentColor" className="text-foreground" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#challenge-grid)" />
                </svg>
                
                <motion.div
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-20 -right-20 w-96 h-96 bg-destructive/10 dark:bg-destructive/5 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-primary/8 dark:bg-primary/4 rounded-full blur-3xl"
                />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                    <div>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <div className="inline-flex items-center gap-2 mb-6">
                                <span className="w-12 h-px bg-destructive" />
                                <span className="text-sm font-semibold tracking-wider uppercase text-destructive">
                                    The Problem
                                </span>
                            </div>

                            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-8 leading-[1.1]">
                                The Business
                                <br />
                                <span className="relative">
                                    <span className="relative z-10">Challenge</span>
                                    <span className="absolute bottom-2 left-0 w-full h-3 bg-destructive/20 dark:bg-destructive/30 -z-0" />
                                </span>
                            </h2>

                            <p className="text-xl sm:text-2xl font-medium text-foreground/90 mb-6 leading-snug">
                                Data quality problems are rarely isolated — 
                                <span className="text-destructive"> they are systemic.</span>
                            </p>

                            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                                Most data issues are not caused by a single error or system failure. 
                                They emerge gradually across business processes, system integrations, 
                                manual interventions, and organizational silos.
                            </p>

                            <div className="p-6 rounded-2xl bg-destructive/5 dark:bg-destructive/10 border border-destructive/20 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-destructive/10 rounded-full blur-2xl" />
                                <div className="relative flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-destructive/20 flex items-center justify-center">
                                        <AlertTriangle className="w-5 h-5 text-destructive" />
                                    </div>
                                    <p className="text-foreground font-medium leading-relaxed">
                                        Without a structured approach, organizations often detect data issues 
                                        <span className="text-destructive font-semibold"> too late</span> — after 
                                        business impact has already occurred.
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-destructive/5 via-transparent to-primary/5 rounded-3xl" />
                        
                        <div className="relative space-y-4">
                            {challenges.map((challenge, index) => (
                                <motion.div
                                    key={challenge.title}
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                                    className="group"
                                >
                                    <div className="relative flex items-center gap-5 p-5 rounded-2xl bg-card/60 dark:bg-card/40 backdrop-blur-sm border border-border hover:border-destructive/40 hover:bg-card/90 transition-all duration-300 cursor-default">
                                        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-destructive/0 via-destructive/5 to-destructive/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        
                                        <div className="relative flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-destructive/15 to-destructive/5 dark:from-destructive/20 dark:to-destructive/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                                            <challenge.icon className="w-6 h-6 text-destructive" />
                                        </div>
                                        
                                        <div className="relative flex-1 min-w-0">
                                            <h3 className="font-semibold text-foreground mb-1 group-hover:text-destructive transition-colors duration-300">
                                                {challenge.title}
                                            </h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {challenge.description}
                                            </p>
                                        </div>
                                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-destructive rounded-r-full group-hover:h-8 transition-all duration-300" />
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-dashed border-destructive/20 rounded-2xl -z-10" />
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-dashed border-primary/15 rounded-2xl -z-10" />
                    </div>
                </div>
            </div>
        </section>
    )
}
