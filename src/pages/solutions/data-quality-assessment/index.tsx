import { motion } from "motion/react"
import { useRef, useMemo } from "react"
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
    Lightbulb,
    MessageSquare,
    Database,
    LineChart,
    PieChart,
    Layers
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/providers/theme-provider"
import MainWebsiteLayout from "@/layout/MainWebsiteLayout"
import Particles from "@/components/Particles"

const whyPoints = [
    {
        icon: AlertTriangle,
        title: "Uncertainty Costs",
        description: "Data quality issues silently erode trust, delay decisions, and create operational inefficiencies across the organization."
    },
    {
        icon: Target,
        title: "Need for Clarity",
        description: "Without a fact-based baseline, organizations struggle to prioritize investments and cannot measure improvement."
    },
    {
        icon: Users,
        title: "Stakeholder Alignment",
        description: "Executive sponsors and business users need quantified evidence to justify data quality initiatives and allocate resources."
    }
]

const whatFeatures = [
    {
        icon: FileSearch,
        title: "Comprehensive Profiling",
        description: "Business-aligned data quality assessment across critical data domains, systems, and processes.",
        highlight: true
    },
    {
        icon: BarChart3,
        title: "Root Cause Analysis",
        description: "Systematic identification of data quality issues, their origins, and propagation patterns."
    },
    {
        icon: LineChart,
        title: "Impact Quantification",
        description: "Business impact analysis connecting data quality issues to operational costs and revenue implications."
    },
    {
        icon: PieChart,
        title: "Executive Dashboards",
        description: "CXO-ready visualizations presenting findings in business terms with clear recommendations."
    }
]

const howSteps = [
    {
        step: "01",
        title: "Scope & Align",
        description: "Define critical data domains and success criteria with business stakeholders to ensure assessment relevance.",
        duration: "Week 1-2"
    },
    {
        step: "02",
        title: "Profile & Measure",
        description: "Execute comprehensive data profiling using industry-standard dimensions tailored to your business context.",
        duration: "Week 2-4"
    },
    {
        step: "03",
        title: "Analyze & Quantify",
        description: "Perform root cause analysis and quantify business impact of identified issues.",
        duration: "Week 4-5"
    },
    {
        step: "04",
        title: "Present & Roadmap",
        description: "Deliver findings with prioritized recommendations and a clear path forward.",
        duration: "Week 5-6"
    }
]

const outcomes = [
    { metric: "Clear Baseline", description: "Fact-based understanding of current data quality state" },
    { metric: "Prioritized Gaps", description: "Issues ranked by business impact for focused remediation" },
    { metric: "Stakeholder Buy-in", description: "Executive alignment through quantified evidence" },
    { metric: "Action Roadmap", description: "Clear next steps with resource and effort estimates" }
]

type Props = {}

function DataQualityAssessmentPage({}: Props) {
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
                                Move from anecdotal concerns to quantified insights. Establish a clear, 
                                fact-based understanding of your data quality risks, root causes, and business impact.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <Button 
                                    size="lg" 
                                    className="h-14 px-8 text-base font-semibold rounded-2xl bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 group"
                                >
                                    Start Assessment
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </Button>
                                <Button 
                                    size="lg" 
                                    variant="outline" 
                                    className="h-14 px-8 text-base font-semibold rounded-2xl border-2 hover:bg-secondary/80 transition-all duration-300"
                                >
                                    View Sample Report
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
                                            <div className="text-sm text-muted-foreground">Assessment Coverage</div>
                                            <div className="text-2xl font-bold text-foreground">360 View</div>
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-2 gap-4">
                                        {[
                                            { label: "Data Domains", value: "Critical" },
                                            { label: "Quality Dimensions", value: "6 Core" },
                                            { label: "Root Causes", value: "Mapped" },
                                            { label: "Business Impact", value: "Quantified" }
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
                            <Lightbulb className="h-4 w-4" />
                            Why Assessment Matters
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            The Foundation of Data Trust
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Without a clear understanding of current state, improvement efforts lack direction and credibility.
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
                            What We Deliver
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            Comprehensive Assessment Capabilities
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            A systematic approach to understanding your data quality landscape.
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
                            How We Work
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            A Structured Assessment Approach
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Typically delivered in 4-6 weeks, tailored to your organization scope.
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
                            Business Outcomes
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            What You Achieve
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Tangible outcomes that enable confident decision-making and investment prioritization.
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
                                    Begin Your Journey to{" "}
                                    <span className="bg-linear-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                                        Data Clarity
                                    </span>
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
                                >
                                    Most organizations start their data quality journey with an assessment. 
                                    Let us help you establish the foundation for sustained data trust.
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
                                        className="h-14 px-8 text-base font-semibold rounded-2xl bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 group"
                                    >
                                        Request Assessment
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

export default DataQualityAssessmentPage
