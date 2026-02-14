import { motion } from "motion/react"
import { useRef, useMemo } from "react"
import { 
    Shield, 
    ArrowRight, 
    CheckCircle2, 
    Building2,
    Users,
    FileText,
    Award,
    TrendingUp,
    Network,
    Lightbulb,
    MessageSquare,
    Scale,
    Layers,
    GraduationCap,
    Target
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/providers/theme-provider"
import MainWebsiteLayout from "@/layout/MainWebsiteLayout"
import Particles from "@/components/Particles"

const whyPoints = [
    {
        icon: Network,
        title: "Sustainability Gap",
        description: "Point solutions and one-time fixes cannot sustain improvement. Organizations need an operating model that embeds quality into daily work."
    },
    {
        icon: Scale,
        title: "Scalability Challenge",
        description: "As data volumes and sources grow, ad-hoc approaches break down. Governance provides the framework to scale quality management."
    },
    {
        icon: Building2,
        title: "Organizational Capability",
        description: "True data quality requires cultural change and capability building, not just tools and processes."
    }
]

const whatFeatures = [
    {
        icon: Users,
        title: "Role-Based Governance Model",
        description: "Clear definition of data owners, stewards, and custodians with responsibilities mapped to organizational structure.",
        highlight: true
    },
    {
        icon: FileText,
        title: "Policy Framework Design",
        description: "Business-aligned data quality policies, standards, and procedures that are practical and enforceable."
    },
    {
        icon: GraduationCap,
        title: "Stewardship Enablement",
        description: "Training, tools, and support structures that empower stewards to fulfill their responsibilities effectively."
    },
    {
        icon: Award,
        title: "Maturity Progression",
        description: "Roadmap for advancing governance maturity with clear milestones and success metrics."
    }
]

const howSteps = [
    {
        step: "01",
        title: "Assess Current State",
        description: "Evaluate existing governance structures, identify gaps, and understand organizational readiness for change.",
        duration: "Week 1-2"
    },
    {
        step: "02",
        title: "Design Target Model",
        description: "Define the governance operating model including roles, policies, processes, and decision rights.",
        duration: "Week 2-4"
    },
    {
        step: "03",
        title: "Enable Stewardship",
        description: "Establish stewardship network, provide training, and deploy supporting tools and processes.",
        duration: "Week 4-6"
    },
    {
        step: "04",
        title: "Operationalize",
        description: "Launch governance councils, establish review cadences, and integrate with business operations.",
        duration: "Week 6-8"
    }
]

const outcomes = [
    { metric: "Sustained Trust", description: "Long-term data quality improvement embedded in operations" },
    { metric: "Scalable Model", description: "Framework that grows with your organization" },
    { metric: "Clear Accountability", description: "Defined ownership across all data domains" },
    { metric: "Organizational Capability", description: "Embedded competency for data quality management" }
]

const maturityLevels = [
    { level: 1, name: "Initial", description: "Ad-hoc, reactive" },
    { level: 2, name: "Managed", description: "Defined processes" },
    { level: 3, name: "Defined", description: "Standardized approach" },
    { level: 4, name: "Measured", description: "Quantitative management" },
    { level: 5, name: "Optimizing", description: "Continuous improvement" }
]

type Props = {}

function DataGovernanceEnablementPage({}: Props) {
    const containerRef = useRef<HTMLElement>(null)
    const { theme } = useTheme()

    const particleColors = useMemo(() => {
        const isDark = theme === "dark" || 
            (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
        return isDark 
            ? ["#10b981", "#34d399", "#6ee7b7"]
            : ["#059669", "#10b981", "#34d399"]
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
                                className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 backdrop-blur-sm px-4 py-2 mb-6"
                            >
                                <Shield className="h-4 w-4 text-emerald-500" />
                                <span className="text-sm font-medium text-emerald-600 dark:text-emerald-400">Stage 4: Govern</span>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6"
                            >
                                Data Governance{" "}
                                <span className="bg-linear-to-r from-emerald-500 via-emerald-600 to-teal-500 bg-clip-text text-transparent">
                                    Enablement
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl"
                            >
                                Build lasting organizational capability for data quality. Establish the operating model, 
                                roles, and decision mechanisms to sustain improvements at scale.
                            </motion.p>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                                className="flex flex-col sm:flex-row gap-4"
                            >
                                <Button 
                                    size="lg" 
                                    className="h-14 px-8 text-base font-semibold rounded-2xl bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 group"
                                >
                                    Enable Governance
                                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </Button>
                                <Button 
                                    size="lg" 
                                    variant="outline" 
                                    className="h-14 px-8 text-base font-semibold rounded-2xl border-2 hover:bg-secondary/80 transition-all duration-300"
                                >
                                    View Framework
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
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl" />
                                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl" />
                                
                                <div className="relative space-y-6">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                                            <Layers className="h-6 w-6 text-emerald-500" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-muted-foreground">Governance Maturity</div>
                                            <div className="text-xl font-bold text-foreground">Progressive Journey</div>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-3">
                                        {maturityLevels.map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.6 + idx * 0.1 }}
                                                className="flex items-center gap-4"
                                            >
                                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold ${
                                                    idx <= 2 
                                                        ? 'bg-emerald-500/20 text-emerald-500' 
                                                        : 'bg-muted text-muted-foreground'
                                                }`}>
                                                    {item.level}
                                                </div>
                                                <div className="flex-1">
                                                    <div className="text-sm font-medium text-foreground">{item.name}</div>
                                                    <div className="text-xs text-muted-foreground">{item.description}</div>
                                                </div>
                                                {idx <= 2 && (
                                                    <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                                                )}
                                            </motion.div>
                                        ))}
                                    </div>
                                    
                                    <div className="pt-4 border-t border-border/50">
                                        <div className="flex items-center justify-between">
                                            <span className="text-sm text-muted-foreground">Current Maturity</span>
                                            <span className="text-lg font-semibold text-emerald-500">Level 3</span>
                                        </div>
                                        <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                animate={{ width: "60%" }}
                                                transition={{ delay: 1, duration: 1, ease: "easeOut" }}
                                                className="h-full bg-linear-to-r from-emerald-500 to-teal-500 rounded-full"
                                            />
                                        </div>
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
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-4">
                            <Lightbulb className="h-4 w-4" />
                            Why Governance Enablement
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            Sustain Improvements at Scale
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Without governance, quality improvements are temporary. Build the foundation for lasting change.
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
                                className="group relative p-8 rounded-3xl bg-card/50 border border-border/50 hover:border-emerald-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10"
                            >
                                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                                    <point.icon className="h-7 w-7 text-emerald-500" />
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
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-4">
                            <Target className="h-4 w-4" />
                            What We Deliver
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            Governance Capabilities
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Comprehensive framework for sustainable data quality management.
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
                                        ? 'bg-emerald-500/5 border-emerald-500/30 hover:border-emerald-500/50 hover:shadow-emerald-500/10' 
                                        : 'bg-card/50 border-border/50 hover:border-emerald-500/30 hover:shadow-emerald-500/10'
                                }`}
                            >
                                <div className="flex items-start gap-5">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                                        feature.highlight ? 'bg-emerald-500/20' : 'bg-emerald-500/10 group-hover:bg-emerald-500/20'
                                    }`}>
                                        <feature.icon className="h-7 w-7 text-emerald-500" />
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
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-4">
                            <Scale className="h-4 w-4" />
                            How We Work
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            Implementation Approach
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Typically deployed in 6-8 weeks, building sustainable governance capability.
                        </p>
                    </motion.div>

                    <div className="relative">
                        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-emerald-500/50 via-emerald-500/30 to-transparent -translate-x-1/2" />
                        
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
                                            <span className="text-4xl font-bold text-emerald-500/30">{step.step}</span>
                                            <div className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-sm font-medium">
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
                                            className="w-16 h-16 rounded-full bg-background border-4 border-emerald-500/30 flex items-center justify-center shadow-lg"
                                        >
                                            <CheckCircle2 className="h-8 w-8 text-emerald-500" />
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
                        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-4">
                            <TrendingUp className="h-4 w-4" />
                            Business Outcomes
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            What You Achieve
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Build sustainable capability for long-term data quality excellence.
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
                                className="group relative p-6 rounded-3xl bg-card/50 border border-border/50 hover:border-emerald-500/30 transition-all duration-300 text-center"
                            >
                                <div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-500/20 transition-colors">
                                    <CheckCircle2 className="h-6 w-6 text-emerald-500" />
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
                        <div className="absolute inset-0 bg-linear-to-br from-emerald-500/20 via-teal-500/10 to-transparent" />
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent" />
                        
                        <div className="relative border border-border/50 rounded-3xl p-8 sm:p-12 lg:p-16 backdrop-blur-sm">
                            <div className="max-w-3xl mx-auto text-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-6"
                                >
                                    
                                    Complete the Lifecycle
                                </motion.div>

                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="text-3xl sm:text-4xl font-bold text-foreground mb-6"
                                >
                                    Build{" "}
                                    <span className="bg-linear-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                                        Sustained Trust
                                    </span>
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
                                >
                                    Governance is the capstone of the data quality lifecycle. Let us help you 
                                    build the sustainable operating model that ensures long-term success.
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
                                        className="h-14 px-8 text-base font-semibold rounded-2xl bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 group"
                                    >
                                        Enable Governance
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

export default DataGovernanceEnablementPage
