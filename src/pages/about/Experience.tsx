import { useRef, useState } from "react"
import { motion, useInView } from "motion/react"
import {
    Award,
    Building2,
    Factory,
    Landmark,
    HeartPulse,
    GraduationCap,
    Zap,
    Lightbulb,
    ArrowRight,
    Compass,
    Cpu,
    Handshake,
    Gem,
    Eye as EyeIcon,
    Scale,
    Leaf,
    MessageSquare,
    ClipboardCheck,
    RefreshCw,
    Server,
    ArrowUpRight
} from "lucide-react"
import { ScrollVelocity } from "@/components/ScrollVelocity"
import { useTheme } from "@/providers/theme-provider"

type Props = {}

const industries = [
    { icon: Factory, label: "Manufacturing" },
    { icon: Building2, label: "Infrastructure" },
    { icon: Landmark, label: "Banking" },
    { icon: Zap, label: "Utilities" },
    { icon: Lightbulb, label: "Public Sector" },
    { icon: HeartPulse, label: "Healthcare" },
    { icon: GraduationCap, label: "Education" }
]

const values = [
    {
        icon: EyeIcon,
        title: "Clarity",
        description: "Making data risks and priorities visible and understandable",
        color: "from-sky-500 to-blue-600",
        bg: "bg-sky-500/8 dark:bg-sky-400/10",
        ring: "ring-sky-500/20 dark:ring-sky-400/20"
    },
    {
        icon: Scale,
        title: "Accountability",
        description: "Ensuring clear ownership and responsibility across every data domain",
        color: "from-violet-500 to-purple-600",
        bg: "bg-violet-500/8 dark:bg-violet-400/10",
        ring: "ring-violet-500/20 dark:ring-violet-400/20"
    },
    {
        icon: Compass,
        title: "Practicality",
        description: "Focusing on solutions that work in real environments and real constraints",
        color: "from-amber-500 to-orange-600",
        bg: "bg-amber-500/8 dark:bg-amber-400/10",
        ring: "ring-amber-500/20 dark:ring-amber-400/20"
    },
    {
        icon: Leaf,
        title: "Sustainability",
        description: "Building capabilities that endure beyond projects and deliver lasting impact",
        color: "from-emerald-500 to-teal-600",
        bg: "bg-emerald-500/8 dark:bg-emerald-400/10",
        ring: "ring-emerald-500/20 dark:ring-emerald-400/20"
    }
]

export default function Experience({}: Props) {
    const { theme } = useTheme()
    const isDark = theme === "dark" ||
        (theme === "system" && typeof window !== "undefined" &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)

    const sectionRef = useRef<HTMLDivElement>(null)

    return (
        <section ref={sectionRef} className="relative bg-background">

            <div className="relative py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-b from-secondary/30 via-transparent to-transparent dark:from-secondary/15" />

                <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/15 flex items-center justify-center">
                                        <Award className="w-5 h-5 text-primary" />
                                    </div>
                                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                        Experience & Credibility
                                    </span>
                                </div>

                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-8">
                                    Deep expertise across{" "}
                                    <span className="text-primary">SAP & enterprise</span>{" "}
                                    landscapes
                                </h2>
                            </motion.div>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="text-lg text-muted-foreground leading-relaxed mb-6"
                            >
                                Our experience spans SAP-centric and enterprise environments across industries
                                including manufacturing, infrastructure, banking, utilities, public sector,
                                healthcare, and education.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                                className="text-lg text-muted-foreground leading-relaxed"
                            >
                                We bring together deep understanding of business processes, SAP landscapes, and
                                data quality disciplines — particularly in the context of transformation programs
                                such as SAP ECC to S/4HANA migrations and post-go-live stabilization.
                            </motion.p>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                            className="relative"
                        >
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3">
                                {industries.map((industry, i) => (
                                    <motion.div
                                        key={industry.label}
                                        initial={{ opacity: 0, scale: 0.8, y: 20 }}
                                        whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.3 + i * 0.06,
                                            type: "spring",
                                            stiffness: 200,
                                            damping: 18
                                        }}
                                        whileHover={{
                                            y: -4,
                                            transition: { type: "spring", stiffness: 500, damping: 20 }
                                        }}
                                        className="group relative p-5 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors duration-400 cursor-default text-center"
                                    >
                                        <div className="w-11 h-11 rounded-xl bg-primary/6 dark:bg-primary/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/12 dark:group-hover:bg-primary/18 transition-colors duration-400">
                                            <industry.icon className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors duration-400" />
                                        </div>
                                        <span className="text-sm font-medium text-foreground">{industry.label}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8 }}
                                className="mt-4 p-4 rounded-xl bg-primary/4 dark:bg-primary/8 border border-primary/10 dark:border-primary/15"
                            >
                                <div className="flex items-center gap-3">
                                    <RefreshCw className="w-4 h-4 text-primary shrink-0" />
                                    <span className="text-sm text-muted-foreground">
                                        <span className="font-semibold text-foreground">SAP ECC to S/4HANA</span>{" "}
                                        migrations & post-go-live stabilization
                                    </span>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>


            <div className="relative overflow-hidden py-3">
                <div className="opacity-[0.06] dark:opacity-[0.09]">
                    <ScrollVelocity
                        texts={["Data Quality", "SAP Transformation", "Enterprise Governance", "S/4HANA Migration"]}
                        velocity={40}
                        className="text-5xl sm:text-6xl lg:text-7xl font-black text-foreground tracking-tight select-none"
                    />
                </div>
            </div>


            <div className="relative py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="lg:col-span-5 lg:sticky lg:top-32 self-start"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/15 flex items-center justify-center">
                                    <Cpu className="w-5 h-5 text-primary" />
                                </div>
                                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                    Our Approach
                                </span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight leading-[1.1] mb-6">
                                Platform-Enabled,{" "}
                                <span className="text-primary">Advisor-Led</span>
                            </h2>

                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                                className="w-16 h-0.5 bg-linear-to-r from-primary to-primary/20 origin-left mb-8"
                            />

                            <p className="text-lg text-muted-foreground leading-relaxed">
                                We leverage enterprise-grade platforms to enable scale, consistency, and
                                visibility. At the same time, we remain firmly advisor-led — ensuring that
                                technology supports outcomes rather than driving them.
                            </p>
                        </motion.div>

                        <div className="lg:col-span-7">
                            <div className="space-y-6">
                                {[
                                    {
                                        icon: Server,
                                        title: "Enterprise-Grade Platforms",
                                        description: "Scale, consistency, and visibility through proven technology platforms that handle the complexity of real enterprise data environments.",
                                        tag: "Scale"
                                    },
                                    {
                                        icon: Handshake,
                                        title: "Advisor-Led Execution",
                                        description: "Technology supports outcomes rather than driving them. Our advisors ensure that every initiative stays aligned with business priorities.",
                                        tag: "Guidance"
                                    },
                                    {
                                        icon: Gem,
                                        title: "Balanced Delivery",
                                        description: "Structured execution without compromising flexibility or independence. This balance allows us to adapt to your organization while maintaining rigor.",
                                        tag: "Balance"
                                    }
                                ].map((item, i) => (
                                    <PlatformCard key={item.title} item={item} index={i} isDark={isDark} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="relative py-24 lg:py-32">
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-secondary/30 to-transparent dark:via-secondary/15" />

                <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-16 lg:mb-20"
                    >
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/15 flex items-center justify-center">
                                <Gem className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                What Guides Us
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight">
                            Our Values
                        </h2>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                        {values.map((value, i) => (
                            <ValueCard key={value.title} value={value} index={i} />
                        ))}
                    </div>
                </div>
            </div>


            <div className="relative py-24 lg:py-32">
                <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative overflow-hidden rounded-3xl"
                    >
                        <div className="absolute inset-0 bg-linear-to-br from-primary via-primary/95 to-primary/80" />

                        <div className="absolute inset-0 opacity-10">
                            <svg className="w-full h-full" viewBox="0 0 800 400">
                                {[...Array(12)].map((_, i) => (
                                    <motion.line
                                        key={i}
                                        x1={i * 70}
                                        y1="0"
                                        x2={i * 70 + 200}
                                        y2="400"
                                        stroke="currentColor"
                                        strokeWidth="1"
                                        className="text-primary-foreground"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        whileInView={{ pathLength: 1, opacity: 0.3 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.5, delay: i * 0.08 }}
                                    />
                                ))}
                            </svg>
                        </div>

                        <div className="relative px-8 sm:px-12 lg:px-20 py-16 sm:py-20 lg:py-24">
                            <div className="max-w-2xl mx-auto text-center">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
                                    className="w-14 h-14 rounded-2xl bg-primary-foreground/15 flex items-center justify-center mx-auto mb-8 ring-1 ring-primary-foreground/20"
                                >
                                    <MessageSquare className="w-7 h-7 text-primary-foreground" />
                                </motion.div>

                                <motion.h2
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.1 }}
                                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground mb-6 leading-tight"
                                >
                                    Ready to build trust in your data?
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.2 }}
                                    className="text-primary-foreground/75 text-lg leading-relaxed mb-10"
                                >
                                    Whether across SAP transformations, integrated landscapes, or ongoing
                                    operations — we welcome a conversation about your data quality journey.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.35 }}
                                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.03, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                        className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-primary-foreground text-primary font-semibold text-[15px] shadow-lg shadow-black/10 hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                                    >
                                        <MessageSquare className="w-4 h-4" />
                                        Schedule a Discussion
                                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </motion.button>

                                    <motion.button
                                        whileHover={{ scale: 1.03, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                        className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-primary-foreground/10 text-primary-foreground font-semibold text-[15px] ring-1 ring-primary-foreground/25 hover:bg-primary-foreground/15 hover:ring-primary-foreground/40 transition-all duration-300 cursor-pointer"
                                    >
                                        <ClipboardCheck className="w-4 h-4" />
                                        Start a Data Quality Assessment
                                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </motion.button>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

function PlatformCard({
    item,
    index,
    isDark
}: {
    item: { icon: React.ComponentType<{ className?: string }>; title: string; description: string; tag: string }
    index: number
    isDark: boolean
}) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40, rotateY: -8 }}
            animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
            transition={{
                duration: 0.7,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1]
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{ perspective: "1000px" }}
        >
            <motion.div
                animate={{
                    y: isHovered ? -4 : 0,
                    boxShadow: isHovered
                        ? (isDark ? "0 20px 40px rgba(0,0,0,0.3)" : "0 20px 40px rgba(0,0,0,0.08)")
                        : "0 0px 0px rgba(0,0,0,0)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="relative p-7 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/20 transition-colors duration-400 overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-primary via-primary/50 to-transparent scale-y-0 origin-top group-hover:scale-y-100 transition-transform duration-500" />

                <motion.div
                    animate={{ scale: isHovered ? 1 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="absolute top-6 right-6 px-2.5 py-1 rounded-md bg-primary/8 dark:bg-primary/15"
                >
                    <span className="text-[11px] font-semibold text-primary uppercase tracking-wider">{item.tag}</span>
                </motion.div>

                <div className="flex items-start gap-5">
                    <motion.div
                        animate={{
                            backgroundColor: isHovered
                                ? (isDark ? "rgba(129,140,248,0.18)" : "rgba(67,56,202,0.1)")
                                : (isDark ? "rgba(129,140,248,0.08)" : "rgba(67,56,202,0.05)")
                        }}
                        transition={{ duration: 0.3 }}
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    >
                        <item.icon className="w-6 h-6 text-primary" />
                    </motion.div>

                    <div className="min-w-0">
                        <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                        <p className="text-[15px] text-muted-foreground leading-relaxed">{item.description}</p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}

function ValueCard({
    value,
    index
}: {
    value: typeof values[number]
    index: number
}) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-40px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
            }}
            whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 400, damping: 15 }
            }}
            className="group relative cursor-default"
        >
            <div className="relative h-full p-7 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/15 transition-all duration-500 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                    <div className={`w-13 h-13 rounded-2xl ${value.bg} ring-1 ${value.ring} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                        <div className={`w-7 h-7 rounded-lg bg-linear-to-br ${value.color} flex items-center justify-center`}>
                            <value.icon className="w-4 h-4 text-white" />
                        </div>
                    </div>

                    <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>

                    <div className="w-8 h-px bg-primary/20 group-hover:w-12 group-hover:bg-primary/40 transition-all duration-500 mb-4" />

                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
            </div>
        </motion.div>
    )
}
