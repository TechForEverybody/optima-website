import { motion } from "motion/react"
import {
    Target,
    Lightbulb,
    TrendingUp,
    Scaling,
    RefreshCcw,
    ShieldCheck,
    Lock,
    FileCheck,
    Building2,
    Rocket,
    ArrowRight,
    CheckCircle2,
    MessageSquare,
    Search
} from "lucide-react"
import BlurText from "@/components/BlurText"
import GradientText from "@/components/GradientText"
import { Button } from "@/components/ui/button"

type Props = {}

const differentiators = [
    {
        icon: Target,
        title: "Business-Led Framework",
        description: "Delivery framework independent of any single tool"
    },
    {
        icon: Lightbulb,
        title: "Discipline Over Automation",
        description: "Platforms enable discipline, not replace judgment"
    },
    {
        icon: TrendingUp,
        title: "Outcome-Focused",
        description: "Strong focus on outcomes, accountability, and sustainability"
    },
    {
        icon: Scaling,
        title: "Scalable Approach",
        description: "Scale from focused pilots to enterprise programs"
    },
    {
        icon: RefreshCcw,
        title: "Future-Ready",
        description: "Accommodate additional platforms as needs evolve"
    }
]

const securityFeatures = [
    {
        icon: Lock,
        title: "Role-Based Access",
        description: "Segregation of duties and controlled permissions"
    },
    {
        icon: FileCheck,
        title: "Full Traceability",
        description: "Controlled execution with complete audit trails"
    },
    {
        icon: ShieldCheck,
        title: "Audit-Friendly",
        description: "Comprehensive reporting and evidence generation"
    },
    {
        icon: Building2,
        title: "Enterprise Alignment",
        description: "Meets IT and governance standards"
    }
]

const journeySteps = [
    { label: "Assessment", description: "Critical domains" },
    { label: "Monitoring", description: "Continuous checks" },
    { label: "Remediation", description: "Structured fixes" },
    { label: "Governance", description: "Enablement" }
]

export default function DifferentApproach({}: Props) {
    return (
        <section className="relative py-24 lg:py-15 bg-background overflow-hidden">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 dark:bg-primary/3 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/5 dark:bg-accent/3 rounded-full blur-[100px]" />
                
                <svg className="absolute inset-0 w-full h-full opacity-[0.02] dark:opacity-[0.03]" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="different-hex" width="16" height="14" patternUnits="userSpaceOnUse">
                            <polygon points="8,0 16,4 16,10 8,14 0,10 0,4" fill="none" stroke="currentColor" strokeWidth="0.15" className="text-foreground" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#different-hex)" />
                </svg>
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
                            <span className="text-sm font-semibold tracking-wider uppercase text-primary">
                                Our Differentiators
                            </span>
                            <span className="w-12 h-px bg-linear-to-r from-transparent via-primary to-transparent" />
                        </div>
                    </motion.div>

                    <BlurText
                        text="What Makes Our Approach Different"
                        delay={40}
                        animateBy="words"
                        direction="top"
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6 justify-center"
                    />
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-20">
                    {differentiators.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                            className="group"
                        >
                            <div className="h-full p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 relative overflow-hidden">
                                <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                
                                <div className="relative">
                                    <div className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <item.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    
                                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="mb-20"
                >
                    <div className="p-8 sm:p-12 rounded-3xl bg-linear-to-br from-card via-card to-secondary/30 border border-border relative overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,var(--primary)/0.05,transparent_60%)]" />
                        
                        <div className="relative">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-emerald-500 to-teal-500 flex items-center justify-center">
                                    <ShieldCheck className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                                        Security, Control & Enterprise Readiness
                                    </h3>
                                </div>
                            </div>
                            
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {securityFeatures.map((feature, index) => (
                                    <motion.div
                                        key={feature.title}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="group flex items-start gap-4 p-5 rounded-2xl bg-background/60 dark:bg-background/40 border border-border hover:border-emerald-500/30 transition-all duration-300"
                                    >
                                        <div className="shrink-0 w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <feature.icon className="w-5 h-5 text-emerald-500" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-foreground mb-1 group-hover:text-emerald-500 transition-colors">
                                                {feature.title}
                                            </h4>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                    className="mb-20"
                >
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                                    <Rocket className="w-5 h-5 text-accent-foreground dark:text-accent" />
                                </div>
                                <span className="text-sm font-semibold tracking-wider uppercase text-muted-foreground">
                                    Getting Started
                                </span>
                            </div>
                            
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
                                How Clients Typically Start
                            </h3>
                            
                            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                                Most organizations begin with a focused{" "}
                                <span className="font-semibold text-foreground">Data Quality Assessment</span>{" "}
                                on critical domains. They then expand into continuous monitoring, 
                                structured remediation, and governance enablement — building capabilities 
                                incrementally without rework.
                            </p>

                            <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/5 dark:bg-primary/10 border border-primary/20">
                                <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                                <p className="text-sm text-foreground">
                                    <span className="font-medium">No big-bang implementations</span> — grow capabilities as you prove value
                                </p>
                            </div>
                        </div>
                        
                        <div className="relative">
                            <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-center gap-3">
                                {journeySteps.map((step, index) => (
                                    <motion.div
                                        key={step.label}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.15 }}
                                        className="flex-1 w-full sm:w-auto lg:w-full xl:w-auto"
                                    >
                                        <div className="relative group">
                                            <div className={`p-5 rounded-2xl border transition-all duration-300 ${
                                                index === 0 
                                                    ? 'bg-primary/10 dark:bg-primary/20 border-primary/30' 
                                                    : 'bg-card border-border hover:border-primary/20'
                                            }`}>
                                                <div className="text-center">
                                                    <div className={`inline-flex items-center justify-center w-8 h-8 rounded-full mb-2 text-sm font-bold ${
                                                        index === 0 
                                                            ? 'bg-primary text-primary-foreground' 
                                                            : 'bg-muted text-muted-foreground'
                                                    }`}>
                                                        {index + 1}
                                                    </div>
                                                    <h5 className={`font-semibold mb-1 ${index === 0 ? 'text-primary' : 'text-foreground'}`}>
                                                        {step.label}
                                                    </h5>
                                                    <p className="text-xs text-muted-foreground">{step.description}</p>
                                                </div>
                                            </div>
                                            
                                            {index < journeySteps.length - 1 && (
                                                <div className="hidden sm:flex lg:hidden xl:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                                                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="relative p-8 sm:p-12 lg:p-16 rounded-3xl bg-linear-to-br from-primary/10 via-primary/5 to-accent/10 border border-primary/20 overflow-hidden">
                        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent/20 rounded-full blur-[80px] translate-x-1/4 translate-y-1/4" />
                        
                        <div className="relative text-center max-w-3xl mx-auto">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-primary to-primary/80 mb-6 shadow-lg shadow-primary/25"
                            >
                                <Target className="w-8 h-8 text-white" />
                            </motion.div>
                            
                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                                Enable Data Quality at Scale
                            </h3>
                            
                            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
                                Without losing{" "}
                                <GradientText 
                                    colors={["#5227FF", "#FF9FFC", "#B19EEF"]} 
                                    animationSpeed={6}
                                    className="font-semibold"
                                >
                                    business focus
                                </GradientText>
                            </p>
                            
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button 
                                    size="lg" 
                                    className="w-full sm:w-auto gap-2 text-base px-8 py-6 rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all"
                                >
                                    <Search className="w-5 h-5" />
                                    Start a Data Quality Assessment
                                </Button>
                                
                                <Button 
                                    variant="outline" 
                                    size="lg" 
                                    className="w-full sm:w-auto gap-2 text-base px-8 py-6 rounded-xl border-2 hover:bg-primary/5 transition-all"
                                >
                                    <MessageSquare className="w-5 h-5" />
                                    Schedule a Discussion
                                </Button>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
