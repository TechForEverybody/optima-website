import { motion } from "motion/react"
import { useRef, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { 
    Wrench, 
    ArrowRight, 
    Users,
    ClipboardList,
    UserCheck,
    MessageSquare,
    Workflow,
    Target,
    RefreshCw,
    AlertTriangle,
    Search,
    CheckSquare,
    Eye,
    BarChart3,
    Calendar,
    ShieldCheck
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "@/providers/theme-provider"
import MainWebsiteLayout from "@/layout/MainWebsiteLayout"
import Particles from "@/components/Particles"

const challenges = [
    "Data issues identified repeatedly across cycles",
    "Lack of clarity on who owns specific data issues",
    "Business teams unsure how or where to correct problems",
    "IT teams fixing symptoms without addressing root causes",
    "No formal closure or verification of resolved issues"
]

const enablements = [
    "Assign clear accountability for data issues",
    "Track issues from identification through closure",
    "Ensure corrective actions address root causes",
    "Prevent recurrence through process or control changes",
    "Build confidence that reported improvements are real"
]

const remediationAreas = [
    {
        icon: AlertTriangle,
        title: "High-Impact Data Issues",
        description: "Issues that affect critical reports, operational processes, compliance, or decision-making.",
        highlight: true
    },
    {
        icon: RefreshCw,
        title: "Recurring and Systemic Issues",
        description: "Problems that reappear across cycles, indicating underlying process or control gaps."
    },
    {
        icon: Users,
        title: "Cross-Functional Data Issues",
        description: "Issues spanning multiple teams or systems, requiring coordinated resolution."
    },
    {
        icon: ShieldCheck,
        title: "Control Failures and Process Gaps",
        description: "Data issues resulting from missing, ineffective, or bypassed controls."
    },
    {
        icon: Search,
        title: "Root Cause Categories",
        description: "Classification of issues by cause -- process, system, integration, manual intervention, or ownership gaps."
    }
]

const implementationSteps = [
    {
        step: "01",
        icon: UserCheck,
        title: "Ownership Model Definition",
        description: "Define and agree on data ownership at domain, object, and issue levels, aligned with business roles."
    },
    {
        step: "02",
        icon: ClipboardList,
        title: "Issue Classification & Prioritization",
        description: "Categorize issues based on impact, urgency, recurrence, and risk."
    },
    {
        step: "03",
        icon: Workflow,
        title: "Remediation Workflow Design",
        description: "Establish workflows for issue assignment, analysis, correction, verification, and closure."
    },
    {
        step: "04",
        icon: Search,
        title: "Root Cause Analysis & Corrective Action",
        description: "Ensure remediation addresses underlying causes through process or control improvements."
    },
    {
        step: "05",
        icon: CheckSquare,
        title: "Verification & Closure",
        description: "Validate resolution effectiveness and formally close issues with traceability."
    }
]

const visibilityItems = [
    { icon: BarChart3, label: "Status tracking of open, in-progress, and closed issues" },
    { icon: Eye, label: "Clear ownership and accountability visibility" },
    { icon: RefreshCw, label: "Aging and recurrence analysis" },
    { icon: Target, label: "Insights into systemic problem areas" },
    { icon: ShieldCheck, label: "Inputs for audit, compliance, and governance reviews" }
]

const engagementModel = [
    { label: "Initiation", value: "Following assessment or continuous monitoring" },
    { label: "Scope", value: "Focused on high-impact and recurring issues" },
    { label: "Cadence", value: "Regular remediation and review cycles" },
    { label: "Outcome", value: "Reduced recurrence, clearer ownership, and sustained improvement" }
]

type Props = {}

function DataIssueRemediationPage({}: Props) {
    const navigate = useNavigate()
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
                                className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 backdrop-blur-sm px-4 py-2 mb-6"
                            >
                                <Wrench className="h-4 w-4 text-amber-500" />
                                <span className="text-sm font-medium text-amber-600 dark:text-amber-400">Remediation & Ownership</span>
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
                                className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-4 max-w-xl"
                            >
                                Ensure data issues are resolved with accountability -- not repeatedly rediscovered.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.35 }}
                                className="text-base text-muted-foreground/80 leading-relaxed mb-8 max-w-xl"
                            >
                                Many organizations can identify data quality issues, but far fewer can ensure they are 
                                systematically resolved, owned, and prevented from recurring. Without clear ownership and 
                                structured remediation, data issues tend to resurface -- creating operational inefficiencies, 
                                audit observations, and loss of confidence.
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
                                    className="h-14 px-8 text-base font-semibold rounded-2xl bg-amber-600 hover:bg-amber-700 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 group"
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
                                <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-500/20 rounded-full blur-2xl" />
                                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-500/20 rounded-full blur-2xl" />
                                
                                <div className="relative space-y-6">
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-12 h-12 rounded-2xl bg-amber-500/20 flex items-center justify-center">
                                            <ClipboardList className="h-6 w-6 text-amber-500" />
                                        </div>
                                        <div>
                                            <div className="text-sm text-muted-foreground">Remediation Lifecycle</div>
                                            <div className="text-xl font-bold text-foreground">Structured Resolution</div>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-3">
                                        {[
                                            { label: "Identify & Classify", icon: Search, color: "text-red-500", bg: "bg-red-500/10" },
                                            { label: "Assign Ownership", icon: UserCheck, color: "text-amber-500", bg: "bg-amber-500/10" },
                                            { label: "Root Cause Analysis", icon: Target, color: "text-blue-500", bg: "bg-blue-500/10" },
                                            { label: "Correct & Verify", icon: CheckSquare, color: "text-emerald-500", bg: "bg-emerald-500/10" }
                                        ].map((item, idx) => (
                                            <motion.div
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.6 + idx * 0.1 }}
                                                className="flex items-center gap-4"
                                            >
                                                <div className={`w-8 h-8 rounded-lg ${item.bg} flex items-center justify-center shrink-0`}>
                                                    <item.icon className={`h-4 w-4 ${item.color}`} />
                                                </div>
                                                <div className="flex-1 p-3 rounded-xl bg-background/50 border border-border/50">
                                                    <span className="text-sm font-medium text-foreground">{item.label}</span>
                                                </div>
                                                {idx < 3 && (
                                                    <ArrowRight className="h-4 w-4 text-muted-foreground/40 rotate-90 lg:hidden" />
                                                )}
                                            </motion.div>
                                        ))}
                                    </div>
                                    
                                    <div className="pt-4 border-t border-border/50 flex items-center gap-3">
                                        <RefreshCw className="h-4 w-4 text-amber-500" />
                                        <span className="text-sm text-muted-foreground">Continuous refinement to prevent recurrence</span>
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
                            <AlertTriangle className="h-4 w-4" />
                            Why It Matters
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            Why Remediation and Ownership Matter
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Detection without ownership leads to repetition. Common challenges include:
                        </p>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-4"
                        >
                            <h3 className="text-xl font-semibold text-foreground mb-6">Common Challenges</h3>
                            {challenges.map((challenge, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex items-start gap-4 p-4 rounded-2xl bg-red-500/5 border border-red-500/10"
                                >
                                    <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <AlertTriangle className="h-3.5 w-3.5 text-red-500" />
                                    </div>
                                    <p className="text-muted-foreground">{challenge}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="space-y-4"
                        >
                            <h3 className="text-xl font-semibold text-foreground mb-6">What This Solution Enables</h3>
                            {enablements.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                    className="flex items-start gap-4 p-4 rounded-2xl bg-amber-500/5 border border-amber-500/10"
                                >
                                    <div className="w-6 h-6 rounded-full bg-amber-500/10 flex items-center justify-center shrink-0 mt-0.5">
                                        <CheckSquare className="h-3.5 w-3.5 text-amber-500" />
                                    </div>
                                    <p className="text-muted-foreground">{item}</p>
                                </motion.div>
                            ))}
                        </motion.div>
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
                            <Target className="h-4 w-4" />
                            What We Remediate
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            What We Remediate and Govern
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                            Focused remediation on the issues that matter most to your organization.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {remediationAreas.map((area, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`group relative p-8 rounded-3xl border backdrop-blur-sm transition-all duration-300 hover:shadow-lg ${
                                    index === 0 
                                        ? 'bg-amber-500/5 border-amber-500/30 hover:border-amber-500/50 hover:shadow-amber-500/10 md:col-span-2 lg:col-span-1' 
                                        : 'bg-card/50 border-border/50 hover:border-amber-500/30 hover:shadow-amber-500/10'
                                }`}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-colors ${
                                        index === 0 ? 'bg-amber-500/20' : 'bg-amber-500/10 group-hover:bg-amber-500/20'
                                    }`}>
                                        <area.icon className="h-6 w-6 text-amber-500" />
                                    </div>
                                    <span className="text-sm font-medium text-amber-500/60">{String(index + 1).padStart(2, '0')}</span>
                                </div>
                                <h3 className="text-xl font-semibold text-foreground mb-3">{area.title}</h3>
                                <p className="text-muted-foreground leading-relaxed text-sm">{area.description}</p>
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
                            How We Implement
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                            Remediation & Ownership Implementation
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                            A structured approach to establishing clear accountability, workflows, and sustainable 
                            resolution mechanisms.
                        </p>
                    </motion.div>

                    <div className="relative">
                        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-amber-500/50 via-amber-500/30 to-transparent -translate-x-1/2" />
                        
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
                                            <span className="text-4xl font-bold text-amber-500/30">{step.step}</span>
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
                                            <step.icon className="h-7 w-7 text-amber-500" />
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
                    <div className="grid lg:grid-cols-2 gap-12">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-2 text-sm font-medium text-amber-600 dark:text-amber-400 mb-6">
                                <Eye className="h-4 w-4" />
                                Visibility & Control
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
                                Full Transparency Into Remediation
                            </h2>
                            <div className="space-y-4">
                                {visibilityItems.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="flex items-center gap-4 p-4 rounded-2xl bg-card/50 border border-border/50 hover:border-amber-500/20 transition-colors"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center shrink-0">
                                            <item.icon className="h-5 w-5 text-amber-500" />
                                        </div>
                                        <p className="text-muted-foreground">{item.label}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/5 px-4 py-2 text-sm font-medium text-amber-600 dark:text-amber-400 mb-6">
                                <Calendar className="h-4 w-4" />
                                Engagement Model
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
                                How We Engage
                            </h2>
                            <div className="space-y-4">
                                {engagementModel.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="p-5 rounded-2xl bg-card/50 border border-border/50 hover:border-amber-500/20 transition-colors"
                                    >
                                        <div className="text-sm font-medium text-amber-600 dark:text-amber-400 mb-1">{item.label}</div>
                                        <p className="text-muted-foreground">{item.value}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
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
                                    Move from Recurring Issues to{" "}
                                    <span className="bg-linear-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
                                        Sustainable Resolution
                                    </span>
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 }}
                                    className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
                                >
                                    Establish clear accountability, structured workflows, and sustainable resolution 
                                    mechanisms -- ensuring that data quality improvements are real and lasting.
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
                                        className="h-14 px-8 text-base font-semibold rounded-2xl bg-amber-600 hover:bg-amber-700 shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/30 transition-all duration-300 group"
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

export default DataIssueRemediationPage
