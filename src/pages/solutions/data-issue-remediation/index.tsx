import { motion } from "motion/react"
import { useRef, useMemo } from "react"
import { 
    Wrench, 
    ArrowRight, 
    CheckCircle2, 
    Users,
    GitBranch,
    ClipboardList,
    UserCheck,
    TrendingUp,
    Clock,
    Lightbulb,
    MessageSquare,
    Workflow,
    BarChart3,
    Target,
    RefreshCw
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/providers/theme-provider"
import MainWebsiteLayout from "@/layout/MainWebsiteLayout"
import Particles from "@/components/Particles"

const whyPoints = [
    {
        icon: GitBranch,
        title: "Finding vs. Fixing Gap",
        description: "Many organizations excel at identifying data issues but struggle to translate findings into systematic remediation actions."
    },
    {
        icon: UserCheck,
        title: "Accountability Vacuum",
        description: "Without clear ownership, issues persist indefinitely. Remediation stalls when nobody is responsible for resolution."
    },
    {
        icon: Clock,
        title: "Resolution Delays",
        description: "Ad-hoc approaches lead to inconsistent follow-through, missed deadlines, and recurring problems."
    }
]

const whatFeatures = [
    {
        icon: Workflow,
        title: "Issue Workflow Management",
        description: "Structured workflows that guide issues from identification through resolution with status tracking at every stage.",
        highlight: true
    },
    {
        icon: Users,
        title: "Ownership Assignment",
        description: "Clear assignment of data owners and stewards to each issue with escalation paths when needed."
    },
    {
        icon: BarChart3,
        title: "Progress Tracking",
        description: "Real-time visibility into remediation progress with aging reports and resolution metrics."
    },
    {
        icon: Target,
        title: "Resolution Analytics",
        description: "Pattern analysis identifying recurring issues, root cause trends, and improvement opportunities."
    }
]

const howSteps = [
    {
        step: "01",
        title: "Define Workflows",
        description: "Design remediation workflows aligned with your organization structure, approval processes, and escalation needs.",
        duration: "Week 1-2"
    },
    {
        step: "02",
        title: "Assign Ownership",
        description: "Map data owners and stewards to domains, establish RACI matrices, and define escalation triggers.",
        duration: "Week 2-3"
    },
    {
        step: "03",
        title: "Configure Tracking",
        description: "Set up issue logging, progress tracking, SLA management, and reporting dashboards.",
        duration: "Week 3-4"
    },
    {
        step: "04",
        title: "Enable & Train",
        description: "Roll out to teams, conduct training, establish review cadences, and integrate with existing processes.",
        duration: "Week 4-5"
    }
]

const outcomes = [
    { metric: "Faster Resolution", description: "Structured workflows accelerate issue closure" },
    { metric: "Clear Accountability", description: "Every issue has a designated owner" },
    { metric: "Systematic Fixes", description: "Consistent approach prevents recurrence" },
    { metric: "Visibility", description: "Full transparency into remediation status" }
]

type Props = {}

function DataIssueRemediationPage({}: Props) {
    const containerRef = useRef<HTMLElement>(null)
    const { theme } = useTheme()

    const particleColors = useMemo(() => {
        const isDark = theme === "dark" || 
            (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
        return isDark 
            ? ["#f59e0b", "#fbbf24", "#fcd34d"]
            : ["#d97706", "#f59e0b", "#fbbf24"]
    }, [theme])

    return (
        <MainWebsiteLayout>
            <section ref={containerRef} className="relative min-h-[70vh] w-full overflow-hidden bg-background py-16 lg:py-24">
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
                                className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 backdrop-blur-sm px-4 py-2 mb-6"
                            >
                                <Wrench className="h-4 w-4 text-amber-500" />
                                <span className="text-sm font-medium text-amber-600 dark:text-amber-400">Stage 3: Remediate</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6"
                            >
                                Data Issue{" "}
                                <span className="bg-linear-to-r from-amber-500 via-amber-600 to-orange-500 bg-clip-text text-transparent">
                                    Remediation
                                </span>
                                <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2 text-foreground/80">& Ownership</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl"
                            >
                                Bridge the gap between finding and fixing. Transform identified issues into structured 
                                remediation actions with clear ownership, workflows, and accountability.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <Button 
                                    size="lg" 
                                    className="h-14 px-8 text-base font-semibold rounded-2xl bg-amber-600 hover:bg-amber-700 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 group"
                                >
                                    Start Remediation
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </Button>
                                <Button 
                                    size="lg" 
                                    variant="outline" 
                                    className="h-14 px-8 text-base font-semibold rounded-2xl border-2 hover:bg-secondary/80 transition-all duration-300"
                                >
                                    View Workflow Demo
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
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-500/20 rounded-full blur-2xl" />
                                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl" />
                                
                                <div className="relative space-y-6">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center">
                                            <ClipboardList className="h-6 w-6 text-amber-500" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-muted-foreground">Remediation Pipeline</div>
                                            <div className="text-xl font-bold text-foreground">Active Tracking</div>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-3">
                                        {[
                                            { status: "Open", count: 12, color: "bg-red-500" },
                                            { status: "In Progress", count: 8, color: "bg-amber-500" },
                                            { status: "Under Review", count: 5, color: "bg-blue-500" },
                                            { status: "Resolved", count: 47, color: "bg-emerald-500" }
                                        ].map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.6 + idx * 0.1 }}
                                                className="flex items-center gap-4"
                                            >
                                                <div className={`w-2 h-8 rounded-full ${item.color}`} />
                                                <div className="flex-1 flex items-center justify-between p-3 rounded-xl bg-background/50 border border-border/50">
                                                    <span className="text-sm text-muted-foreground">{item.status}</span>
                                                    <span className="text-lg font-semibold text-foreground">{item.count}</span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                    
                                    <div className="pt-4 border-t border-border/50 flex items-center justify-between">
                                        <span className="text-sm text-muted-foreground">Avg. Resolution Time</span>
                                        <span className="text-lg font-semibold text-amber-500">4.2 days</span>
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
                        <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-2 text-sm font-medium text-amber-600 dark:text-amber-400 mb-4">
                            <Lightbulb className="h-4 w-4" />
                            Why Structured Remediation
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            Close the Gap Between Finding and Fixing
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Assessment and monitoring are valuable only when they drive actual improvement.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {whyPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="group relative p-8 rounded-3xl bg-card/50 border border-border/50 hover:border-amber-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-amber-500/10 flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors">
                                    <point.icon className="h-7 w-7 text-amber-500" />
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-3">{point.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{point.description}</p>
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
                        <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-2 text-sm font-medium text-amber-600 dark:text-amber-400 mb-4">
                            <RefreshCw className="h-4 w-4" />
                            What We Deliver
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            Remediation Capabilities
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Systematic approach to issue resolution with complete visibility.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {whatFeatures.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`group relative p-8 rounded-3xl border backdrop-blur-sm transition-all duration-300 hover:shadow-lg ${
                                    feature.highlight 
                                        ? 'bg-amber-500/5 border-amber-500/30 hover:border-amber-500/50 hover:shadow-amber-500/10' 
                                        : 'bg-card/50 border-border/50 hover:border-amber-500/30 hover:shadow-amber-500/10'
                                }`}
                            >
                                <div className="flex items-start gap-5">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                                        feature.highlight ? 'bg-amber-500/20' : 'bg-amber-500/10 group-hover:bg-amber-500/20'
                                    }`}>
                                        <feature.icon className="h-7 w-7 text-amber-500" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
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
                        <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-2 text-sm font-medium text-amber-600 dark:text-amber-400 mb-4">
                            <Workflow className="h-4 w-4" />
                            How We Work
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            Implementation Approach
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Typically deployed in 4-5 weeks, integrating with your existing processes.
                        </p>
                    </motion.div>

                    <div className="relative">
                        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-amber-500/50 via-amber-500/30 to-transparent -translate-x-1/2" />
                        
                        <div className="space-y-8 lg:space-y-12">
                            {howSteps.map((step, index) => (
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
                                            <span className="text-4xl font-bold text-amber-500/30">{step.step}</span>
                                            <div className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 text-sm font-medium">
                                                {step.duration}
                                            </div>
                                        </div>
                                        <h3 className="text-2xl font-semibold text-foreground mb-3">{step.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
                                            {step.description}
                                        </p>
                                    </div>
                                    
                                    <div className="relative z-10">
                                        <motion.div
                                            whileHover={{ scale: 1.1 }}
                                            className="w-16 h-16 rounded-full bg-background border-4 border-amber-500/30 flex items-center justify-center shadow-lg"
                                        >
                                            <CheckCircle2 className="h-8 w-8 text-amber-500" />
                                        </motion.div>
                                    </div>
                                    
                                    <div className="flex-1" />
                                </motion.div>
                            ))}
                        </div>
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
                        <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-2 text-sm font-medium text-amber-600 dark:text-amber-400 mb-4">
                            <TrendingUp className="h-4 w-4" />
                            Business Outcomes
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            What You Achieve
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Turn issue identification into systematic, accountable resolution.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {outcomes.map((outcome, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative p-6 rounded-3xl bg-card/50 border border-border/50 hover:border-amber-500/30 transition-all duration-300 text-center"
                            >
                                <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500/20 transition-colors">
                                    <CheckCircle2 className="h-6 w-6 text-amber-500" />
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">{outcome.metric}</h3>
                                <p className="text-sm text-muted-foreground">{outcome.description}</p>
                            </motion.div>
                        ))}
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
                        <div className="absolute inset-0 bg-linear-to-br from-amber-500/20 via-orange-500/10 to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />
                        
                        <div className="relative border border-border/50 rounded-3xl p-8 sm:p-12 lg:p-16 backdrop-blur-sm">
                            <div className="max-w-3xl mx-auto text-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-2 text-sm font-medium text-amber-600 dark:text-amber-400 mb-6"
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
                                    Start{" "}
                                    <span className="bg-linear-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                                        Fixing What Matters
                                    </span>
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
                                >
                                    Stop letting known issues persist. Let us help you establish systematic 
                                    remediation with clear ownership and accountability.
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
                                        className="h-14 px-8 text-base font-semibold rounded-2xl bg-amber-600 hover:bg-amber-700 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 group"
                                    >
                                        Enable Remediation
                                        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                    </Button>
                                    <Button 
                                        size="lg" 
                                        variant="outline" 
                                        className="h-14 px-8 text-base font-semibold rounded-2xl border-2 hover:bg-secondary/80 transition-all duration-300 group"
                                    >
                                        <MessageSquare className="mr-2 h-5 w-5" />
                                        Schedule Discussion
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

export default DataIssueRemediationPage
