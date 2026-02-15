import { motion } from "motion/react"
import { useRef, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { 
    Search, 
    ArrowRight, 
    CheckCircle2, 
    Target,
    BarChart3,
    FileSearch,
    AlertTriangle,
    TrendingUp,
    Users,
    MessageSquare,
    Database,
    LineChart,
    Layers,
    Shield,
    Settings,
    Clock
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/providers/theme-provider"
import MainWebsiteLayout from "@/layout/MainWebsiteLayout"
import Particles from "@/components/Particles"

const whyPoints = [
    {
        icon: Database,
        title: "ERP Transformation & Migration",
        description: "SAP S/4HANA or ERP transformation and migration initiatives require a baseline understanding of data quality to mitigate transition risks."
    },
    {
        icon: BarChart3,
        title: "Reporting Inconsistencies",
        description: "Recurring reporting mismatches or reconciliation challenges that undermine confidence in business-critical information."
    },
    {
        icon: Shield,
        title: "Audit & Compliance Gaps",
        description: "Audit findings, compliance gaps, or regulatory scrutiny that demand systematic identification and resolution of data issues."
    },
    {
        icon: Settings,
        title: "Manual Data Workarounds",
        description: "High dependency on manual data corrections and workarounds that increase operational costs and introduce additional risk."
    },
    {
        icon: LineChart,
        title: "Eroding Business Confidence",
        description: "Declining trust in dashboards, analytics, and KPIs that are essential for strategic and operational decisions."
    }
]

const whatFeatures = [
    {
        icon: FileSearch,
        title: "Data Accuracy, Completeness & Consistency",
        description: "Evaluate whether critical data elements are accurate, complete, and consistent across systems, identifying missing values, invalid entries, duplicates, and misaligned master and transactional data.",
        highlight: true
    },
    {
        icon: Shield,
        title: "Business Rule & Regulatory Compliance",
        description: "Validate data against defined business rules, organizational policies, and regulatory requirements to ensure alignment with how the business expects information to be structured and used."
    },
    {
        icon: Layers,
        title: "Process & Integration Touchpoints",
        description: "Analyze key business processes, system interfaces, and integration points where data is created, modified, or transferred to identify where quality issues are introduced."
    },
    {
        icon: Users,
        title: "Data Ownership, Controls & Accountability",
        description: "Assess how data ownership is defined and exercised across functions, including evaluation of preventive and detective controls and issue resolution mechanisms."
    },
    {
        icon: Target,
        title: "Risk, Impact & Materiality",
        description: "Assess identified data issues for business impact, operational risk, compliance exposure, and decision-making implications to enable prioritization."
    }
]

const howSteps = [
    {
        step: "01",
        title: "Scope & Prioritization",
        description: "Work with stakeholders to identify critical data objects, reports, and processes aligned to business priorities.",
        duration: "Phase 1"
    },
    {
        step: "02",
        title: "Profiling & Validation",
        description: "Profile and validate data to uncover quality patterns, anomalies, and areas of concern.",
        duration: "Phase 2"
    },
    {
        step: "03",
        title: "Root Cause Analysis",
        description: "Analyze findings to distinguish symptoms from underlying causes across data and processes.",
        duration: "Phase 3"
    },
    {
        step: "04",
        title: "Risk & Impact Assessment",
        description: "Map issues to business impact, compliance exposure, and operational risk to support prioritization.",
        duration: "Phase 4"
    }
]

const outcomes = [
    { metric: "Executive Scorecards", description: "Data quality scorecards and summaries for leadership visibility" },
    { metric: "Prioritized Issues", description: "Detailed list of data issues and root causes ranked by impact" },
    { metric: "Impact Assessment", description: "Business and compliance impact analysis for each finding" },
    { metric: "Remediation Plan", description: "Actionable recommendations for remediation and controls" },
    { metric: "Governance Roadmap", description: "Roadmap for continuous monitoring and governance enablement" }
]

type Props = {}

function DataQualityAssessmentPage({}: Props) {
    const navigate = useNavigate()
    const containerRef = useRef<HTMLElement>(null)
    const { theme } = useTheme()

    const particleColors = useMemo(() => {
        const isDark = theme === "dark" || 
            (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
        return isDark 
            ? ["#3b82f6", "#60a5fa", "#93c5fd"]
            : ["#2563eb", "#3b82f6", "#60a5fa"]
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
                                className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-sm px-4 py-2 mb-6"
                            >
                                <Search className="h-4 w-4 text-blue-500" />
                                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Stage 1: Assess</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6"
                            >
                                Data Quality{" "}
                                <span className="bg-linear-to-r from-blue-500 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                                    Assessment
                                </span>
                                <span className="block text-3xl sm:text-4xl lg:text-5xl mt-2 text-foreground/80">& Diagnostics</span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl"
                            >
                                Establish a clear, objective, and fact-based understanding of data quality 
                                risks across your enterprise. Move from assumptions and isolated fixes to 
                                a prioritized understanding of where data issues originate, why they occur, 
                                and how they impact business outcomes.
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
                                    className="h-14 px-8 text-base font-semibold rounded-2xl bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 group"
                                >
                                    Start Assessment
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
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl" />
                                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl" />
                                
                                <div className="relative space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-2xl bg-blue-500/20 flex items-center justify-center">
                                            <Database className="h-6 w-6 text-blue-500" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-muted-foreground">Assessment Scope</div>
                                            <div className="text-2xl font-bold text-foreground">Enterprise-wide</div>
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { label: "Duration", value: "2-4 Weeks" },
                                            { label: "Coverage", value: "5 Dimensions" },
                                            { label: "Root Causes", value: "Analyzed" },
                                            { label: "Delivery", value: "Structured" }
                                        ].map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.6 + idx * 0.1 }}
                                                className="p-4 rounded-2xl bg-background/50 border border-border/50"
                                            >
                                                <div className="text-xs text-muted-foreground mb-1">{item.label}</div>
                                                <div className="text-lg font-semibold text-foreground">{item.value}</div>
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
                        <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">
                            <AlertTriangle className="h-4 w-4" />
                            When to Consider
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            When This Solution Is Needed
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            This solution is particularly valuable when data quality concerns are acknowledged but not clearly understood, and symptoms remain unresolved despite corrective efforts.
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
                                className="group relative p-8 rounded-3xl bg-card/50 border border-border/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                                    <point.icon className="h-7 w-7 text-blue-500" />
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-3">{point.title}</h3>
                                <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-center text-muted-foreground leading-relaxed mt-12 max-w-3xl mx-auto text-base"
                    >
                        In many cases, organizations attempt corrective actions without a holistic assessment. Without understanding systemic root causes, data issues tend to resurface repeatedly.
                    </motion.p>
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
                        <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">
                            <Layers className="h-4 w-4" />
                            What We Assess
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            What We Assess
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Our assessment covers data, processes, and ownership holistically, ensuring that findings are actionable and business-relevant.
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
                                        ? 'bg-blue-500/5 border-blue-500/30 hover:border-blue-500/50 hover:shadow-blue-500/10' 
                                        : 'bg-card/50 border-border/50 hover:border-blue-500/30 hover:shadow-blue-500/10'
                                }`}
                            >
                                <div className="flex items-start gap-5">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                                        feature.highlight ? 'bg-blue-500/20' : 'bg-blue-500/10 group-hover:bg-blue-500/20'
                                    }`}>
                                        <feature.icon className="h-7 w-7 text-blue-500" />
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
                        <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">
                            <Target className="h-4 w-4" />
                            How We Deliver
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            How We Deliver
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            The assessment is executed using a structured, time-bound methodology, typically delivered in 2-4 weeks.
                        </p>
                    </motion.div>

                    <div className="relative">
                        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500/50 via-blue-500/30 to-transparent -translate-x-1/2" />
                        
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
                                            <span className="text-4xl font-bold text-blue-500/30">{step.step}</span>
                                            <div className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-sm font-medium">
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
                                            className="w-16 h-16 rounded-full bg-background border-4 border-blue-500/30 flex items-center justify-center shadow-lg"
                                        >
                                            <CheckCircle2 className="h-8 w-8 text-blue-500" />
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
                        <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">
                            <TrendingUp className="h-4 w-4" />
                            Deliverables
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            Key Deliverables
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Comprehensive documentation and analysis delivered at the conclusion of the assessment.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {outcomes.map((outcome, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative p-6 rounded-3xl bg-card/50 border border-border/50 hover:border-blue-500/30 transition-all duration-300 text-center"
                            >
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-500/20 transition-colors">
                                    <CheckCircle2 className="h-6 w-6 text-blue-500" />
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
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <span className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 mb-4">
                            <Clock className="h-4 w-4" />
                            Engagement Model
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            How We Engage
                        </h2>
                    </motion.div>

                    <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {[
                            { icon: Clock, label: "Duration", value: "2-4 Weeks", detail: "Depending on scope and complexity" },
                            { icon: Users, label: "Delivery Model", value: "Structured Assessment", detail: "With periodic stakeholder reviews" },
                            { icon: Target, label: "Outcome", value: "Clear Visibility", detail: "Into data quality risks with improvement roadmap" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center p-8 rounded-3xl bg-card/50 border border-border/50 hover:border-blue-500/30 transition-all duration-300"
                            >
                                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                                    <item.icon className="h-6 w-6 text-blue-500" />
                                </div>
                                <div className="text-sm text-muted-foreground mb-1">{item.label}</div>
                                <div className="text-xl font-semibold text-foreground mb-2">{item.value}</div>
                                <p className="text-sm text-muted-foreground">{item.detail}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-16 lg:py-24 bg-muted/30">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative rounded-3xl overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 via-cyan-500/10 to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent" />
                        
                        <div className="relative border border-border/50 rounded-3xl p-8 sm:p-12 lg:p-16 backdrop-blur-sm">
                            <div className="max-w-3xl mx-auto text-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400 mb-6"
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
                                    Begin with{" "}
                                    <span className="bg-linear-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                                        Clarity
                                    </span>
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
                                >
                                    If data quality issues are increasing risk, slowing decisions, or creating 
                                    operational inefficiencies, a structured assessment provides the most effective starting point.
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
                                        className="h-14 px-8 text-base font-semibold rounded-2xl bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 group"
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

export default DataQualityAssessmentPage
