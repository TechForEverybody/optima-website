import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion, useInView, useScroll, useTransform } from "motion/react"
import {
    BookOpen,
    Download,
    FileText,
    ArrowRight,
    ArrowUpRight,
    Layers,
    Database,
    Factory,
    Landmark,
    Zap,
    GraduationCap,
    Shield,
    MessageSquare,
    ClipboardCheck,
    ChevronRight,
    Info
} from "lucide-react"
import TextType from "@/components/TextType"
import { useTheme } from "@/providers/theme-provider"

type Props = {}

const featuredResources = [
    {
        title: "SAP Data Quality -- Migration & Stabilization Use Cases",
        tags: ["Pre-Migration", "During Migration", "Post-Migration", "Integrated Landscapes"],
        description: "A concise reference outlining common SAP data quality challenges and practical use cases across SAP ECC to S/4HANA migration programs, post-go-live stabilization, and hybrid SAP landscapes.",
        href: "/SAP_Migration_Data_Quality_Use_Cases.pdf",
        accent: "from-blue-500 to-indigo-600",
        iconBg: "bg-blue-500/10 dark:bg-blue-400/12",
        icon: Database
    },
    {
        title: "Data Quality Lifecycle Overview",
        tags: ["Assessment", "Monitoring", "Remediation", "Governance"],
        description: "A high-level overview of how data quality capabilities should be built and sustained through assessment, continuous monitoring, issue remediation, and governance enablement.",
        href: "/Data_Quality_Lifecycle_Overview.pdf",
        accent: "from-violet-500 to-purple-600",
        iconBg: "bg-violet-500/10 dark:bg-violet-400/12",
        icon: Layers
    }
]

const sapResources = [
    {
        title: "SAP Data Quality for ECC & S/4HANA Landscapes",
        description: "A focused overview explaining why SAP data quality requires special attention and how organizations can manage data quality risks before, during, and after SAP transformations.",
        href: "/SAP_Data_Quality_Overview.pdf",
        icon: Shield
    },
    {
        title: "Industry Data Quality Snapshots",
        description: "Short, practical snapshots highlighting common data quality challenges across key industries such as Manufacturing, Banking, Utilities, Government, and Education.",
        href: "/Industry_Data_Quality_Snapshots.pdf",
        icon: Factory
    }
]

const industryIcons = [
    { icon: Factory, label: "Manufacturing" },
    { icon: Landmark, label: "Banking" },
    { icon: Zap, label: "Utilities" },
    { icon: Shield, label: "Government" },
    { icon: GraduationCap, label: "Education" }
]

export default function Resources({ }: Props) {
    const navigate = useNavigate()
    const { theme } = useTheme()
    const isDark = theme === "dark" ||
        (theme === "system" && typeof window !== "undefined" &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)

    const heroRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    })
    const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

    return (
        <section className="relative bg-background">

            <motion.div
                ref={heroRef}
                style={{ opacity: heroOpacity }}
                className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center overflow-hidden"
            >
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-linear-to-br from-primary/6 via-transparent to-accent/4 dark:from-primary/10 dark:via-transparent dark:to-accent/6" />

                    <motion.div
                        animate={{
                            x: [0, 30, -20, 0],
                            y: [0, -40, 20, 0],
                            scale: [1, 1.15, 0.95, 1]
                        }}
                        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/8 dark:bg-primary/12 blur-3xl pointer-events-none"
                    />
                    <motion.div
                        animate={{
                            x: [0, -25, 35, 0],
                            y: [0, 30, -15, 0],
                            scale: [1, 0.9, 1.1, 1]
                        }}
                        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-1/3 -right-10 w-72 h-72 rounded-full bg-accent/6 dark:bg-accent/10 blur-3xl pointer-events-none"
                    />
                    <motion.div
                        animate={{
                            x: [0, 20, -30, 0],
                            y: [0, -20, 25, 0],
                            scale: [1, 1.1, 0.9, 1]
                        }}
                        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-20 left-1/4 w-64 h-64 rounded-full bg-primary/5 dark:bg-primary/8 blur-3xl pointer-events-none"
                    />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-36 lg:py-36 w-full">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/15 flex items-center justify-center">
                                <BookOpen className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                Resources
                            </span>
                        </motion.div>

                        <div className="overflow-hidden mb-3">
                            <motion.h1
                                initial={{ y: "110%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1, delay: 0.15, ease: [0.76, 0, 0.24, 1] }}
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.05]"
                            >
                                Practical insights
                            </motion.h1>
                        </div>
                        <div className="overflow-hidden mb-10">
                            <motion.h1
                                initial={{ y: "110%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1, delay: 0.25, ease: [0.76, 0, 0.24, 1] }}
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary tracking-tight leading-[1.05]"
                            >
                                for real decisions.
                            </motion.h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                            className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10"
                        >
                            Data quality initiatives often fail not due to lack of intent, but due to lack
                            of clarity and structure. Our curated resources help organizations understand
                            risks, approaches, and practical paths forward.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.7 }}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-secondary/80 dark:bg-secondary/50 border border-border text-sm text-muted-foreground"
                        >
                            <span className="font-medium">Especially for</span>
                            <TextType
                                text={["SAP Landscapes", "Enterprise Data", "S/4HANA Migrations", "Data Governance"]}
                                typingSpeed={60}
                                deletingSpeed={35}
                                pauseDuration={2500}
                                className="text-foreground font-semibold inline"
                                showCursor={true}
                                cursorCharacter="|"
                                cursorClassName="text-primary"
                            />
                        </motion.div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent" />
            </motion.div>


            <div className="relative py-20 lg:py-28">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3 mb-12"
                    >
                        <div className="w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/15 flex items-center justify-center">
                            <FileText className="w-4 h-4 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold text-foreground">Featured Resources</h2>
                    </motion.div>

                    <div className="grid lg:grid-cols-2 gap-6">
                        {featuredResources.map((resource, i) => (
                            <FeaturedCard key={resource.title} resource={resource} index={i} isDark={isDark} />
                        ))}
                    </div>
                </div>
            </div>


            <div className="relative py-20 lg:py-28">
                <div className="absolute inset-0 bg-linear-to-b from-secondary/30 via-secondary/15 to-transparent dark:from-secondary/15 dark:via-secondary/8" />

                <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3 mb-4"
                    >
                        <div className="w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/15 flex items-center justify-center">
                            <Database className="w-4 h-4 text-primary" />
                        </div>
                        <h2 className="text-2xl font-bold text-foreground">SAP-Focused Resources</h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-muted-foreground mb-12 max-w-2xl"
                    >
                        Targeted materials for SAP-centric data quality challenges and industry-specific snapshots.
                    </motion.p>

                    <div className="grid md:grid-cols-2 gap-6">
                        {sapResources.map((resource, i) => (
                            <SapResourceCard key={resource.title} resource={resource} index={i} isDark={isDark} />
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                        className="mt-10"
                    >
                        <div className="relative p-6 sm:p-8 rounded-2xl border border-border bg-card/50 backdrop-blur-sm overflow-hidden">
                            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/20 to-transparent" />

                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-sm font-semibold text-foreground">Industry Coverage</span>
                                <div className="flex-1 h-px bg-border" />
                            </div>

                            <div className="flex flex-wrap gap-3">
                                {industryIcons.map((item, i) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                                        className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-secondary/60 dark:bg-secondary/40 border border-border"
                                    >
                                        <item.icon className="w-4 h-4 text-primary/70" />
                                        <span className="text-sm font-medium text-foreground">{item.label}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>


            <div className="relative py-20 lg:py-28">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                    <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                            className="lg:col-span-5"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-8 h-8 rounded-lg bg-primary/10 dark:bg-primary/15 flex items-center justify-center">
                                    <Info className="w-4 h-4 text-primary" />
                                </div>
                                <h2 className="text-2xl font-bold text-foreground">How to Use These Resources</h2>
                            </div>

                            <p className="text-muted-foreground leading-relaxed mb-6">
                                These resources are intended to support internal discussions, SAP transformation
                                planning, and alignment between business and IT stakeholders.
                            </p>

                            <p className="text-muted-foreground leading-relaxed">
                                They are <span className="text-foreground font-semibold">decision-support materials</span>,
                                not technical documentation.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="lg:col-span-7"
                        >
                            <div className="grid sm:grid-cols-3 gap-4">
                                {[
                                    { label: "Internal Discussions", desc: "Facilitate conversations across business units with clear data quality context", icon: MessageSquare },
                                    { label: "SAP Planning", desc: "Align migration strategies with data quality requirements from day one", icon: Database },
                                    { label: "IT-Business Alignment", desc: "Bridge the gap between technical data teams and business stakeholders", icon: Layers }
                                ].map((item, i) => (
                                    <motion.div
                                        key={item.label}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.2 + i * 0.1,
                                            ease: [0.16, 1, 0.3, 1]
                                        }}
                                        whileHover={{ y: -4, transition: { type: "spring", stiffness: 400, damping: 18 } }}
                                        className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/15 transition-colors duration-400 cursor-default"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-primary/6 dark:bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/12 dark:group-hover:bg-primary/18 transition-colors duration-400">
                                            <item.icon className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors duration-400" />
                                        </div>
                                        <h4 className="text-sm font-bold text-foreground mb-2">{item.label}</h4>
                                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>


            <div className="relative py-20 lg:py-28">
                <div className="mx-auto max-w-5xl px-6 sm:px-8 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-60px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative overflow-hidden rounded-3xl border border-primary/15 dark:border-primary/20"
                    >
                        <div className="absolute inset-0 bg-linear-to-br from-primary/4 via-primary/2 to-accent/3 dark:from-primary/8 dark:via-primary/4 dark:to-accent/5" />

                        <div className="absolute inset-0 opacity-[0.015] dark:opacity-[0.03]"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='1' fill='%23888'/%3E%3C/svg%3E")`
                            }}
                        />

                        <div className="relative px-8 sm:px-12 lg:px-16 py-14 sm:py-16 lg:py-20">
                            <div className="max-w-2xl mx-auto text-center">
                                <motion.p
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6 }}
                                    className="text-sm font-semibold text-primary uppercase tracking-[0.2em] mb-4"
                                >
                                    Start with clarity
                                </motion.p>

                                <motion.h2
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.1 }}
                                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-5 leading-tight"
                                >
                                    If these topics resonate with your current challenges
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.2 }}
                                    className="text-muted-foreground text-lg leading-relaxed mb-10"
                                >
                                    A structured data quality assessment is the most effective starting point
                                    for your organization.
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
                                        onClick={() => navigate("/contact")}
                                        className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-primary text-primary-foreground font-semibold text-[15px] shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 transition-shadow duration-300 cursor-pointer"
                                    >
                                        <ClipboardCheck className="w-4 h-4" />
                                        Start a Data Quality Assessment
                                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </motion.button>

                                    <motion.button
                                        whileHover={{ scale: 1.03, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                        onClick={() => navigate("/contact")}
                                        className="group inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-secondary/80 dark:bg-secondary/50 text-foreground font-semibold text-[15px] border border-border hover:border-primary/20 transition-all duration-300 cursor-pointer"
                                    >
                                        <MessageSquare className="w-4 h-4" />
                                        Schedule a Discussion
                                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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

function FeaturedCard({
    resource,
    index,
    isDark
}: {
    resource: typeof featuredResources[number]
    index: number
    isDark: boolean
}) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-50px" })
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.16, 1, 0.3, 1]
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                animate={{
                    y: isHovered ? -6 : 0,
                    boxShadow: isHovered
                        ? (isDark ? "0 24px 48px rgba(0,0,0,0.3), 0 0 0 1px rgba(129,140,248,0.15)" : "0 24px 48px rgba(0,0,0,0.06), 0 0 0 1px rgba(67,56,202,0.12)")
                        : (isDark ? "0 0 0 1px rgba(255,255,255,0.06)" : "0 0 0 1px rgba(0,0,0,0.06)")
                }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="relative h-full rounded-2xl bg-card overflow-hidden"
            >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${resource.accent}`} />

                <div className="relative p-7 sm:p-8 lg:p-10">
                    <div className="flex items-start justify-between gap-4 mb-6">
                        <div className={`w-14 h-14 rounded-2xl ${resource.iconBg} flex items-center justify-center shrink-0`}>
                            <resource.icon className="w-7 h-7 text-primary" />
                        </div>

                        <motion.div
                            animate={{ scale: isHovered ? 1 : 0.8, opacity: isHovered ? 1 : 0.5 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <FileText className="w-5 h-5 text-muted-foreground/50" />
                        </motion.div>
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-4 leading-snug">
                        {resource.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-5">
                        {resource.tags.map(tag => (
                            <span
                                key={tag}
                                className="px-2.5 py-1 rounded-md bg-secondary/60 dark:bg-secondary/40 text-xs font-medium text-muted-foreground border border-border/50"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">
                        {resource.description}
                    </p>

                    <motion.a
                        href={resource.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ x: 4 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="group/btn inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-primary/6 dark:bg-primary/10 hover:bg-primary/12 dark:hover:bg-primary/18 transition-colors duration-300"
                    >
                        <Download className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">Download PDF</span>
                        <ChevronRight className="w-3.5 h-3.5 text-primary/60 group-hover/btn:text-primary transition-colors duration-300" />
                    </motion.a>
                </div>
            </motion.div>
        </motion.div>
    )
}

function SapResourceCard({
    resource,
    index,
    isDark
}: {
    resource: typeof sapResources[number]
    index: number
    isDark: boolean
}) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-40px" })
    const [isHovered, setIsHovered] = useState(false)

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.16, 1, 0.3, 1]
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                animate={{
                    y: isHovered ? -4 : 0,
                    boxShadow: isHovered
                        ? (isDark ? "0 16px 32px rgba(0,0,0,0.25)" : "0 16px 32px rgba(0,0,0,0.05)")
                        : "0 0 0 rgba(0,0,0,0)"
                }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
                className="relative h-full p-7 sm:p-8 rounded-2xl bg-card border border-border hover:border-primary/15 transition-colors duration-400 overflow-hidden"
            >
                <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-primary/15 to-transparent" />

                <div className="flex items-start gap-5 mb-5">
                    <motion.div
                        animate={{
                            backgroundColor: isHovered
                                ? (isDark ? "rgba(129,140,248,0.16)" : "rgba(67,56,202,0.08)")
                                : (isDark ? "rgba(129,140,248,0.06)" : "rgba(67,56,202,0.04)")
                        }}
                        transition={{ duration: 0.3 }}
                        className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    >
                        <resource.icon className="w-6 h-6 text-primary" />
                    </motion.div>

                    <div className="min-w-0">
                        <h3 className="text-lg font-bold text-foreground mb-2 leading-snug">{resource.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{resource.description}</p>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-border/50">
                    <span className="text-xs text-muted-foreground/60 font-medium uppercase tracking-wider">PDF Document</span>

                    <motion.a
                        href={resource.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/6 dark:bg-primary/10 hover:bg-primary/12 dark:hover:bg-primary/18 transition-colors duration-300"
                    >
                        <Download className="w-3.5 h-3.5 text-primary" />
                        <span className="text-xs font-semibold text-primary">Download</span>
                    </motion.a>
                </div>
            </motion.div>
        </motion.div>
    )
}