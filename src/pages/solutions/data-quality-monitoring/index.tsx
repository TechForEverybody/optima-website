import { motion } from "motion/react"
import { useRef, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { 
    Activity, 
    ArrowRight, 
    Shield,
    TrendingUp,
    MessageSquare,
    Gauge,
    LineChart,
    Zap,
    Database,
    Link,
    Search,
    Settings,
    RefreshCw
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/providers/theme-provider"
import MainWebsiteLayout from "@/layout/MainWebsiteLayout"
import Particles from "@/components/Particles"

const monitoringAreas = [
    {
        icon: Database,
        title: "Critical Data Elements",
        description: "We identify and monitor high-impact master and transactional data elements that drive key business processes such as order processing, finance, procurement, asset management, and reporting. These elements are selected based on business criticality rather than volume alone.",
        highlight: true
    },
    {
        icon: Shield,
        title: "Business Rule Adherence",
        description: "Defined business and regulatory rules are continuously validated to ensure ongoing compliance. This helps detect deviations caused by process changes, configuration updates, or user behavior before they result in operational or compliance issues."
    },
    {
        icon: Link,
        title: "Process & Integration Stability",
        description: "Monitoring extends beyond individual data fields to process flows and system interfaces. Recurring exceptions are analyzed to identify unstable processes, integration failures, or manual touchpoints that introduce quality risks."
    },
    {
        icon: Gauge,
        title: "Thresholds, Tolerances & Exceptions",
        description: "We establish acceptable tolerance levels and thresholds for data quality indicators. Breaches are flagged as exceptions, allowing teams to focus attention on meaningful deviations rather than noise."
    },
    {
        icon: TrendingUp,
        title: "Trends, Patterns & Early Warning Signals",
        description: "Historical trends and patterns are analyzed to identify gradual degradation, recurring anomalies, or emerging risks. This enables early intervention and supports continuous improvement initiatives."
    }
]

const implementationSteps = [
    {
        step: "01",
        icon: Search,
        title: "Business Prioritization & Scoping",
        description: "We work with stakeholders to identify critical data domains, reports, and processes based on business risk, regulatory exposure, and operational impact. Monitoring is intentionally scoped to what matters most."
    },
    {
        step: "02",
        icon: Settings,
        title: "Rule, Threshold & Control Design",
        description: "Monitoring rules, thresholds, and control checks are defined in alignment with business expectations. This ensures that alerts are meaningful and actionable, rather than purely technical."
    },
    {
        step: "03",
        icon: Zap,
        title: "Automated & Repeatable Execution",
        description: "Controls are enabled for scheduled, repeatable execution to ensure consistent coverage across systems and time. Automation reduces dependency on manual checks and improves reliability."
    },
    {
        step: "04",
        icon: Activity,
        title: "Review, Triage & Action",
        description: "Exceptions and trends are reviewed through defined operational cadences. Findings are triaged to determine whether corrective action, root cause analysis, or process improvements are required."
    },
    {
        step: "05",
        icon: RefreshCw,
        title: "Continuous Refinement",
        description: "Monitoring rules and thresholds are periodically refined based on insights gained, process changes, and evolving business priorities, ensuring that the monitoring framework remains relevant over time."
    }
]

type Props = {}

function DataQualityMonitoringPage({}: Props) {
    const navigate = useNavigate()
    const containerRef = useRef<HTMLElement>(null)
    const { theme } = useTheme()

    const particleColors = useMemo(() => {
        const isDark = theme === "dark" || 
            (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
        return isDark 
            ? ["#06b6d4", "#22d3ee", "#67e8f9"]
            : ["#0891b2", "#06b6d4", "#22d3ee"]
    }, [theme])

    return (
        <MainWebsiteLayout>
            <section ref={containerRef} className="relative min-h-[70vh] w-full overflow-hidden bg-background py-36 lg:py-36">
                <div className="absolute inset-0 z-0">
                    <Particles
                        key={theme}
                        particleColors={particleColors}
                        particleCount={150}
                        particleSpread={10}
                        speed={0.2}
                        particleBaseSize={100}
                        moveParticlesOnHover={true}
                        particleHoverFactor={0.3}
                        alphaParticles={true}
                        sizeRandomness={0.6}
                        cameraDistance={25}
                    />
                </div>

                <div className="absolute inset-0 bg-linear-to-b from-background/30 via-background/60 to-background z-1" />

                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-sm px-4 py-2 mb-6"
                            >
                                <Activity className="h-4 w-4 text-cyan-500" />
                                <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">Continuous Monitoring</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6"
                            >
                                Continuous Data{" "}
                                <span className="bg-linear-to-r from-cyan-500 via-cyan-600 to-teal-500 bg-clip-text text-transparent">
                                    Quality Monitoring
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-4 max-w-xl"
                            >
                                Proactively prevent data issues before they impact business operations and decisions.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.35 }}
                                className="text-base text-muted-foreground/80 leading-relaxed mb-8 max-w-xl"
                            >
                                Many organizations assess data quality periodically, but data changes every day. 
                                New transactions, integrations, process changes, and manual interventions continuously 
                                introduce data risks. Move from reactive issue detection to proactive control, ensuring 
                                data quality is sustained over time, not just validated at a single point.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <Button 
                                    size="lg" 
                                    onClick={() => navigate("/contact")}
                                    className="h-14 px-8 text-base font-semibold rounded-2xl bg-cyan-600 hover:bg-cyan-700 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 group"
                                >
                                    Start a Data Quality Assessment
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </Button>
                                <Button 
                                    size="lg" 
                                    variant="outline" 
                                    onClick={() => navigate("/contact")}
                                    className="h-14 px-8 text-base font-semibold rounded-2xl border-2 hover:bg-secondary/80 transition-all duration-300 group"
                                >
                                    <MessageSquare className="mr-2 h-5 w-5" />
                                    Schedule a Discussion
                                </Button>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="relative"
                        >
                            <div className="relative bg-card/50 backdrop-blur-xl border border-border/50 rounded-3xl p-8 shadow-2xl">
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl" />
                                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl" />
                                
                                <div className="relative space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center">
                                                <Activity className="h-6 w-6 text-cyan-500" />
                                            </div>
                                            <div>
                                                <div className="text-sm text-muted-foreground">Monitoring Status</div>
                                                <div className="text-xl font-bold text-foreground">Proactive Control</div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span className="relative flex h-3 w-3">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                                            </span>
                                            <span className="text-sm text-emerald-500 font-medium">Active</span>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-4">
                                        {[
                                            { label: "Critical Data Elements", value: "Monitored", trend: "Business-driven", status: "good" },
                                            { label: "Business Rules", value: "Validated", trend: "Compliant", status: "good" },
                                            { label: "Integration Health", value: "Stable", trend: "No exceptions", status: "good" },
                                            { label: "Threshold Breaches", value: "2", trend: "Under review", status: "warning" }
                                        ].map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.6 + idx * 0.15 }}
                                                className="flex items-center justify-between p-4 rounded-2xl bg-background/50 border border-border/50"
                                            >
                                                <div>
                                                    <div className="text-xs text-muted-foreground">{item.label}</div>
                                                    <div className="text-lg font-semibold text-foreground">{item.value}</div>
                                                </div>
                                                <div className={`text-xs font-medium px-2 py-1 rounded-full ${
                                                    item.status === 'good' 
                                                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' 
                                                        : 'bg-amber-500/10 text-amber-600 dark:text-amber-400'
                                                }`}>
                                                    {item.trend}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <section className="py-16 lg:py-24 bg-background">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm font-medium text-cyan-600 dark:text-cyan-400 mb-4">
                            <Activity className="h-4 w-4" />
                            What We Monitor
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            Risk-Driven Monitoring Framework
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Our monitoring framework focuses on data elements, rules, and patterns that have a direct 
                            and material impact on business operations, reporting, and compliance. Monitoring is designed 
                            to be risk-driven, not exhaustive.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {monitoringAreas.map((area, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`group relative p-8 rounded-3xl border backdrop-blur-sm transition-all duration-300 hover:shadow-lg ${
                                    index === 0 
                                        ? 'bg-cyan-500/5 border-cyan-500/30 hover:border-cyan-500/50 hover:shadow-cyan-500/10 md:col-span-2 lg:col-span-1' 
                                        : 'bg-card/50 border-border/50 hover:border-cyan-500/30 hover:shadow-cyan-500/10'
                                }`}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                                        index === 0 ? 'bg-cyan-500/20' : 'bg-cyan-500/10 group-hover:bg-cyan-500/20'
                                    }`}>
                                        <area.icon className="h-6 w-6 text-cyan-500" />
                                    </div>
                                    <span className="text-sm font-medium text-cyan-500/60">{String(index + 1).padStart(2, '0')}</span>
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-3">{area.title}</h3>
                                <p className="text-muted-foreground leading-relaxed text-sm">{area.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 lg:py-24 bg-muted/30">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm font-medium text-cyan-600 dark:text-cyan-400 mb-4">
                            <LineChart className="h-4 w-4" />
                            How We Implement
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            Pragmatic, Phased Implementation
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            Our implementation approach is pragmatic and phased, ensuring that continuous monitoring 
                            integrates smoothly into existing operations without disruption.
                        </p>
                    </motion.div>

                    <div className="relative">
                        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-cyan-500/50 via-cyan-500/30 to-transparent -translate-x-1/2" />
                        
                        <div className="space-y-8 lg:space-y-12">
                            {implementationSteps.map((step, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.15 }}
                                    className={`flex flex-col lg:flex-row items-center gap-8 ${
                                        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                                    }`}
                                >
                                    <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                                        <div className="inline-flex items-center gap-3 mb-4">
                                            <span className="text-4xl font-bold text-cyan-500/30">{step.step}</span>
                                        </div>
                                        <h3 className="text-2xl font-semibold text-foreground mb-3">{step.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
                                            {step.description}
                                        </p>
                                    </div>
                                    
                                    <div className="relative z-10">
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            className="w-16 h-16 rounded-full bg-background border-4 border-cyan-500/30 flex items-center justify-center shadow-lg"
                                        >
                                            <step.icon className="h-7 w-7 text-cyan-500" />
                                        </motion.div>
                                    </div>
                                    
                                    <div className="flex-1" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 lg:py-24 bg-background">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative rounded-3xl overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-linear-to-br from-cyan-500/20 via-teal-500/10 to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
                        
                        <div className="relative border border-border/50 rounded-3xl p-8 sm:p-12 lg:p-16 backdrop-blur-sm">
                            <div className="max-w-3xl mx-auto text-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 px-4 py-2 text-sm font-medium text-cyan-600 dark:text-cyan-400 mb-6"
                                >
                                    Get Started
                                </motion.div>

                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="text-3xl sm:text-4xl font-bold text-foreground mb-6"
                                >
                                    Move from Reactive Fixes to{" "}
                                    <span className="bg-linear-to-r from-cyan-500 to-teal-500 bg-clip-text text-transparent">
                                        Proactive Control
                                    </span>
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
                                >
                                    Stop discovering data issues after damage is done. Let us help you establish 
                                    continuous monitoring that keeps you ahead of data quality risks and ensures 
                                    sustained quality over time.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="flex flex-col sm:flex-row gap-4 justify-center"
                                >
                                    <Button 
                                        size="lg" 
                                        onClick={() => navigate("/contact")}
                                        className="h-14 px-8 text-base font-semibold rounded-2xl bg-cyan-600 hover:bg-cyan-700 shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/30 transition-all duration-300 group"
                                    >
                                        Start a Data Quality Assessment
                                        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                    </Button>
                                    <Button 
                                        size="lg" 
                                        variant="outline" 
                                        onClick={() => navigate("/contact")}
                                        className="h-14 px-8 text-base font-semibold rounded-2xl border-2 hover:bg-secondary/80 transition-all duration-300 group"
                                    >
                                        <MessageSquare className="mr-2 h-5 w-5" />
                                        Schedule a Discussion
                                    </Button>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </MainWebsiteLayout>
    )
}

export default DataQualityMonitoringPage
