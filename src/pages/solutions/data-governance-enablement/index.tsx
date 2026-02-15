import { motion } from "motion/react"
import { useRef, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { 
    Shield, 
    ArrowRight, 
    CheckCircle2, 
    Users,
    FileText,
    TrendingUp,
    Network,
    Lightbulb,
    MessageSquare,
    Scale,
    Layers,
    Target,
    RotateCcw,
    AlertCircle,
    BookOpen
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/providers/theme-provider"
import MainWebsiteLayout from "@/layout/MainWebsiteLayout"
import Particles from "@/components/Particles"

const whyPoints = [
    {
        icon: Users,
        title: "Unclear Ownership",
        description: "Data domains and objects lack defined owners, creating confusion about who is responsible for quality and decision-making."
    },
    {
        icon: FileText,
        title: "Inconsistent Definitions",
        description: "Critical data elements are defined differently across teams, leading to conflicting reports and eroded trust."
    },
    {
        icon: RotateCcw,
        title: "Recurring Quality Issues",
        description: "The same data quality problems resurface despite repeated remediation, signaling a lack of root-cause governance."
    },
    {
        icon: Scale,
        title: "Limited Accountability",
        description: "No clear accountability across business functions means data issues persist without resolution or escalation."
    },
    {
        icon: AlertCircle,
        title: "Paper-Only Governance",
        description: "Governance frameworks exist in documentation but are never operationalized, leaving a gap between intent and action."
    }
]

const whatFeatures = [
    {
        icon: Shield,
        title: "Data Ownership & Stewardship Models",
        description: "Clear definition of owners, stewards, and custodians with practical responsibilities aligned to organizational structure.",
        highlight: true
    },
    {
        icon: BookOpen,
        title: "Policies, Standards & Definitions",
        description: "Common data definitions, quality standards, and policies for critical data elements that drive consistency across the enterprise."
    },
    {
        icon: Network,
        title: "Governance Operating Model",
        description: "Forums, review cadences, escalation paths, and decision workflows that keep governance active and responsive."
    },
    {
        icon: Target,
        title: "Metrics & Accountability",
        description: "Data quality KPIs, thresholds, and accountability mechanisms that make governance measurable and enforceable."
    },
    {
        icon: Layers,
        title: "Integration with Operations",
        description: "Embedding governance into monitoring, remediation, and business processes so it becomes part of daily work."
    }
]

const howSteps = [
    {
        step: "01",
        title: "Governance Scope & Prioritization",
        description: "Identify critical domains and governance priorities based on business risk and impact.",
        duration: "Phase 1"
    },
    {
        step: "02",
        title: "Role & Responsibility Definition",
        description: "Define ownership and accountability aligned to organizational structures and business functions.",
        duration: "Phase 2"
    },
    {
        step: "03",
        title: "Policy & Framework Design",
        description: "Develop usable policies, standards, and decision frameworks that teams can adopt in practice.",
        duration: "Phase 3"
    },
    {
        step: "04",
        title: "Integration with Monitoring & Remediation",
        description: "Align governance with continuous monitoring and remediation workflows for operational continuity.",
        duration: "Phase 4"
    },
    {
        step: "05",
        title: "Adoption & Maturity Building",
        description: "Support adoption through training, communication, and iterative refinement toward governance maturity.",
        duration: "Phase 5"
    }
]

const outcomes = [
    { metric: "Initiation", description: "Following assessment, monitoring, or remediation" },
    { metric: "Scope", description: "Phased by domain or business priority" },
    { metric: "Cadence", description: "Regular governance cycles" },
    { metric: "Outcome", description: "Sustained data quality, clearer ownership, stronger trust" }
]

const deliverables = [
    { text: "Clear data ownership and stewardship models" },
    { text: "Defined decision rights and escalation paths" },
    { text: "Alignment of governance with business processes" },
    { text: "Integration of governance into daily operations" },
    { text: "Support for audit, compliance, and regulatory needs" }
]

type Props = {}

function DataGovernanceEnablementPage({}: Props) {
    const navigate = useNavigate()
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
                                Establish practical governance structures that sustain data quality and business trust.
                                Define, operationalize, and sustain governance models that are pragmatic, scalable, 
                                and aligned with business processes.
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
                                    className="h-14 px-8 text-base font-semibold rounded-2xl bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 group"
                                >
                                    Enable Governance
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
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-500/20 rounded-full blur-2xl" />
                                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-teal-500/20 rounded-full blur-2xl" />
                                
                                <div className="relative space-y-6">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center">
                                            <Shield className="h-6 w-6 text-emerald-500" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-muted-foreground">Key Deliverables</div>
                                            <div className="text-xl font-bold text-foreground">What We Deliver</div>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-3">
                                        {deliverables.map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.6 + idx * 0.1 }}
                                                className="flex items-center gap-3"
                                            >
                                                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center shrink-0">
                                                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                                                </div>
                                                <span className="text-sm font-medium text-foreground">{item.text}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                    
                                    <div className="pt-4 border-t border-border/50">
                                        <div className="flex items-center gap-2">
                                            <Lightbulb className="h-4 w-4 text-emerald-500" />
                                            <span className="text-sm text-muted-foreground">Pragmatic, scalable, and business-aligned</span>
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
                            <AlertCircle className="h-4 w-4" />
                            The Challenge
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            Why Data Governance Is Essential
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Many organizations struggle to make governance work in practice. These challenges signal the need for a structured approach.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                            Capabilities
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            What We Enable
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Comprehensive governance capabilities that bridge the gap between intent and action.
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
                            Our Approach
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            How We Enable Data Governance
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            A phased approach from scoping through adoption, building sustainable governance capability.
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
                            Engagement Model
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            How We Engage
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            A structured engagement model aligned to your organization's governance journey.
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
                                    
                                    Take Action
                                </motion.div>

                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.3 }}
                                    className="text-3xl sm:text-4xl font-bold text-foreground mb-6"
                                >
                                    Governance{" "}
                                    <span className="bg-linear-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                                        In Action
                                    </span>
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
                                >
                                    Move from governance intent to governance in action. Let us help you build 
                                    practical, sustainable governance that drives lasting data quality.
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
                                        className="h-14 px-8 text-base font-semibold rounded-2xl bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 group"
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
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </MainWebsiteLayout>
    )
}

export default DataGovernanceEnablementPage
