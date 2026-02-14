import { useRef, useState } from "react"
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "motion/react"
import {
    Landmark,
    GraduationCap,
    Plane,
    HardHat,
    Building,
    HeartPulse,
    Factory,
    Radio,
    AlertTriangle,
    CheckCircle2,
    ArrowRight,
    ArrowUpRight,
    ChevronRight,
    MessageSquare,
    ClipboardCheck,
    Globe,
    ChevronLeft
} from "lucide-react"

type Props = {}

interface Industry {
    id: string
    title: string
    tagline: string
    description: string
    icon: React.ComponentType<{ className?: string }>
    challenges: string[]
    howWeHelp: string[]
    accentFrom: string
    accentTo: string
}

const industries: Industry[] = [
    {
        id: "banking",
        title: "Banking & Financial Services",
        tagline: "Enabling regulatory confidence and data-driven decision-making.",
        description: "Banks and financial institutions operate under intense regulatory scrutiny, where data accuracy, consistency, and traceability are non-negotiable.",
        icon: Landmark,
        challenges: [
            "Inconsistent customer and account data",
            "Regulatory reporting inaccuracies",
            "Data lineage and traceability gaps",
            "Repeated reconciliation efforts across systems"
        ],
        howWeHelp: [
            "Assess data quality risks across regulatory and reporting data",
            "Continuously monitor data against business and regulatory rules",
            "Establish structured remediation and ownership",
            "Enable governance frameworks supporting compliance and audits"
        ],
        accentFrom: "from-blue-500",
        accentTo: "to-cyan-400"
    },
    {
        id: "education",
        title: "Education & Universities",
        tagline: "Improving reporting, compliance, and institutional confidence through trusted data.",
        description: "Educational institutions manage diverse data across students, faculty, finance, grants, assets, and compliance.",
        icon: GraduationCap,
        challenges: [
            "Inconsistent student, faculty, and program data",
            "Reporting inaccuracies for funding or accreditation",
            "Manual data reconciliation across systems",
            "Lack of ownership and governance structures"
        ],
        howWeHelp: [
            "Assess data quality across academic and administrative domains",
            "Implement continuous monitoring for critical data elements",
            "Enable structured remediation and accountability",
            "Establish practical governance models for sustainability"
        ],
        accentFrom: "from-emerald-500",
        accentTo: "to-teal-400"
    },
    {
        id: "airports",
        title: "Airports & Transportation",
        tagline: "Supporting safety, compliance, and operational efficiency with reliable data.",
        description: "Airports and transportation organizations operate in highly regulated, asset-intensive environments. Data quality issues can impact safety reporting, asset management, billing, passenger services, and regulatory compliance.",
        icon: Plane,
        challenges: [
            "Inconsistent asset and maintenance data",
            "Revenue leakage due to billing or contract data issues",
            "Fragmented data across operational and enterprise systems",
            "Audit and regulatory reporting challenges"
        ],
        howWeHelp: [
            "Assess data quality across critical operational domains",
            "Implement continuous monitoring and early-warning controls",
            "Ensure accountability for data corrections",
            "Enable governance aligned with regulatory requirements"
        ],
        accentFrom: "from-sky-500",
        accentTo: "to-blue-400"
    },
    {
        id: "construction",
        title: "Construction & Infrastructure",
        tagline: "Improving control, transparency, and accountability through trusted data.",
        description: "Construction and infrastructure projects generate large volumes of data across procurement, contracts, billing, assets, and reporting. Data issues often surface as cost overruns, delayed invoicing, reconciliation issues, or audit observations.",
        icon: HardHat,
        challenges: [
            "Inconsistent project, vendor, and contract data",
            "Billing, cost, and revenue mismatches",
            "Limited visibility across project lifecycles",
            "Weak ownership of data across project teams"
        ],
        howWeHelp: [
            "Identify high-risk data areas impacting project outcomes",
            "Monitor data quality across project and financial processes",
            "Establish structured remediation and accountability",
            "Enable governance that scales across projects and regions"
        ],
        accentFrom: "from-amber-500",
        accentTo: "to-orange-400"
    },
    {
        id: "government",
        title: "Government & Public Sector",
        tagline: "Building trust, transparency, and accountability through data.",
        description: "Government and public sector organizations manage large, complex datasets across citizen services, finance, assets, and programs.",
        icon: Building,
        challenges: [
            "Fragmented data across departments and systems",
            "Inconsistent master and reference data",
            "Limited accountability for data quality",
            "Challenges in reporting, audits, and compliance"
        ],
        howWeHelp: [
            "Establish visibility into data quality risks",
            "Monitor and control data across key programs",
            "Enable ownership and remediation frameworks",
            "Support governance aligned with public accountability"
        ],
        accentFrom: "from-indigo-500",
        accentTo: "to-violet-400"
    },
    {
        id: "healthcare",
        title: "Healthcare & Life Sciences",
        tagline: "Ensuring patient safety, compliance, and operational efficiency through trusted data.",
        description: "Healthcare and life sciences organizations depend on accurate, timely, and consistent data across clinical, operational, financial, and regulatory processes. Data quality issues can directly impact patient safety, regulatory compliance, reimbursement accuracy, and strategic decision-making.",
        icon: HeartPulse,
        challenges: [
            "Inconsistent patient, provider, and reference master data",
            "Data quality issues affecting clinical, billing, and claims processes",
            "Regulatory and compliance reporting challenges",
            "Fragmented data across clinical and enterprise systems"
        ],
        howWeHelp: [
            "Assess data quality across critical clinical and administrative domains",
            "Implement continuous monitoring for high-risk data elements",
            "Enable structured remediation and accountability",
            "Support governance aligned with regulatory and patient-safety requirements"
        ],
        accentFrom: "from-rose-500",
        accentTo: "to-pink-400"
    },
    {
        id: "manufacturing",
        title: "Manufacturing & Engineering",
        tagline: "Trusted data for operational excellence and decision confidence.",
        description: "Manufacturing and engineering organizations rely heavily on accurate master and transactional data to drive production planning, procurement, quality, finance, and reporting. Even small data inconsistencies can lead to operational inefficiencies, excess inventory, delayed deliveries, or financial misstatements.",
        icon: Factory,
        challenges: [
            "Inconsistent material, BOM, and vendor master data",
            "Production and inventory mismatches",
            "Manual reconciliations between operations and finance",
            "Data issues resurfacing after system changes or migrations"
        ],
        howWeHelp: [
            "Assess and stabilize critical master and transactional data",
            "Continuously monitor data quality across core processes",
            "Establish ownership and remediation for recurring issues",
            "Enable governance aligned with manufacturing operations"
        ],
        accentFrom: "from-violet-500",
        accentTo: "to-purple-400"
    },
    {
        id: "telecom",
        title: "Telecom & Communications",
        tagline: "Supporting revenue assurance, customer experience, and operational scale with trusted data.",
        description: "Telecommunications organizations operate at massive scale with high transaction volumes across customers, networks, billing, and partners. Data quality issues can directly impact revenue assurance, customer experience, and regulatory compliance.",
        icon: Radio,
        challenges: [
            "Inconsistent customer, product, and pricing data",
            "Billing inaccuracies and revenue leakage",
            "Data quality issues across OSS/BSS and enterprise systems",
            "Limited visibility into recurring and systemic data issues"
        ],
        howWeHelp: [
            "Assess data quality across customer, product, and billing domains",
            "Implement continuous monitoring for high-volume, high-risk data",
            "Enable structured remediation and accountability",
            "Support governance models that scale with growth and complexity"
        ],
        accentFrom: "from-fuchsia-500",
        accentTo: "to-pink-400"
    }
]

export default function Industries({}: Props) {
    const [activeIndex, setActiveIndex] = useState(0)
    const tabsRef = useRef<HTMLDivElement>(null)

    const heroRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    })
    const heroY = useTransform(scrollYProgress, [0, 1], [0, 80])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

    const scrollActiveTabIntoView = (index: number) => {
        if (!tabsRef.current) return
        const buttons = tabsRef.current.querySelectorAll("button")
        const btn = buttons[index]
        if (btn) {
            btn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" })
        }
    }

    return (
        <section className="relative bg-background">

            <motion.div
                ref={heroRef}
                style={{ opacity: heroOpacity }}
                className="relative min-h-[80vh] lg:min-h-[85vh] flex items-center overflow-hidden"
            >
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/3 dark:from-primary/8 dark:via-transparent dark:to-accent/5" />
                    <motion.div
                        animate={{
                            x: [0, 40, -30, 0],
                            y: [0, -50, 30, 0],
                            scale: [1, 1.2, 0.9, 1]
                        }}
                        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-primary/6 dark:bg-primary/10 blur-3xl pointer-events-none"
                    />
                    <motion.div
                        animate={{
                            x: [0, -35, 25, 0],
                            y: [0, 25, -40, 0],
                            scale: [1, 0.85, 1.15, 1]
                        }}
                        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute bottom-20 -left-20 w-80 h-80 rounded-full bg-accent/5 dark:bg-accent/8 blur-3xl pointer-events-none"
                    />
                </div>

                <motion.div
                    style={{ y: heroY }}
                    className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-28 lg:py-36 w-full"
                >
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className="flex items-center gap-3 mb-8"
                        >
                            <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/15 flex items-center justify-center">
                                <Globe className="w-5 h-5 text-primary" />
                            </div>
                            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                                Industries
                            </span>
                        </motion.div>

                        <div className="overflow-hidden mb-3">
                            <motion.h1
                                initial={{ y: "110%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1, delay: 0.1, ease: [0.76, 0, 0.24, 1] }}
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.05]"
                            >
                                Deep expertise across
                            </motion.h1>
                        </div>
                        <div className="overflow-hidden mb-10">
                            <motion.h1
                                initial={{ y: "110%" }}
                                animate={{ y: 0 }}
                                transition={{ duration: 1, delay: 0.2, ease: [0.76, 0, 0.24, 1] }}
                                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary tracking-tight leading-[1.05]"
                            >
                                critical industries.
                            </motion.h1>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                            className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mb-10"
                        >
                            Every industry faces distinct data quality challenges shaped by its regulations, operations,
                            and scale. We bring structured, advisor-led approaches tailored to each sector's reality.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.65 }}
                            className="flex flex-wrap gap-3"
                        >
                            {industries.map((ind, i) => (
                                <motion.span
                                    key={ind.id}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.4, delay: 0.7 + i * 0.05 }}
                                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary/60 dark:bg-secondary/35 border border-border/60 text-xs font-medium text-muted-foreground"
                                >
                                    <ind.icon className="w-3 h-3 text-primary/60" />
                                    {ind.title.split(" & ")[0]}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>
                </motion.div>

                <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent" />
            </motion.div>


            <div className="relative py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                    <IndustryExplorer
                        industries={industries}
                        activeIndex={activeIndex}
                        setActiveIndex={(i) => {
                            setActiveIndex(i)
                            scrollActiveTabIntoView(i)
                        }}
                        tabsRef={tabsRef}
                    />
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

                        <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]"
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2L12 22M2 12L22 12' stroke='%23888' stroke-width='0.5' opacity='0.3'/%3E%3C/svg%3E")`
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
                                    Your industry, your challenges
                                </motion.p>

                                <motion.h2
                                    initial={{ opacity: 0, y: 16 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.1 }}
                                    className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-5 leading-tight"
                                >
                                    Ready to address your data quality challenges?
                                </motion.h2>

                                <motion.p
                                    initial={{ opacity: 0, y: 12 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7, delay: 0.2 }}
                                    className="text-muted-foreground text-lg leading-relaxed mb-10"
                                >
                                    Whether you're navigating regulatory demands, scaling operations, or
                                    planning a transformation -- we can help you start with clarity.
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


function IndustryExplorer({
    industries,
    activeIndex,
    setActiveIndex,
    tabsRef
}: {
    industries: Industry[]
    activeIndex: number
    setActiveIndex: (i: number) => void
    tabsRef: React.RefObject<HTMLDivElement | null>
}) {
    const sectionRef = useRef<HTMLDivElement>(null)
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" })
    const active = industries[activeIndex]

    return (
        <motion.div
            ref={sectionRef}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
            <div
                ref={tabsRef}
                className="flex gap-2 overflow-x-auto pb-4 mb-10 snap-x snap-mandatory"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
                {industries.map((ind, i) => {
                    const isActive = i === activeIndex
                    return (
                        <motion.button
                            key={ind.id}
                            onClick={() => setActiveIndex(i)}
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ type: "spring", stiffness: 400, damping: 20 }}
                            className={`
                                relative flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap snap-start shrink-0 cursor-pointer transition-colors duration-300
                                ${isActive
                                    ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                                    : "bg-secondary/50 dark:bg-secondary/30 text-muted-foreground hover:bg-secondary/80 dark:hover:bg-secondary/50 border border-border/50"
                                }
                            `}
                        >
                            <ind.icon className={`w-4 h-4 ${isActive ? "text-primary-foreground" : "text-primary/60"}`} />
                            <span className="hidden sm:inline">{ind.title.split(" & ")[0]}</span>
                            <span className="sm:hidden">{ind.title.split(" & ")[0].split(" ").slice(0, 1).join("")}</span>
                        </motion.button>
                    )
                })}
            </div>

            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2 text-xs text-muted-foreground/60">
                    <span className="font-medium">{activeIndex + 1}</span>
                    <span>/</span>
                    <span>{industries.length}</span>
                </div>
                <div className="flex items-center gap-1.5">
                    <button
                        onClick={() => setActiveIndex(activeIndex > 0 ? activeIndex - 1 : industries.length - 1)}
                        className="w-8 h-8 rounded-lg bg-secondary/50 dark:bg-secondary/30 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-200 cursor-pointer"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => setActiveIndex(activeIndex < industries.length - 1 ? activeIndex + 1 : 0)}
                        className="w-8 h-8 rounded-lg bg-secondary/50 dark:bg-secondary/30 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors duration-200 cursor-pointer"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>

            <AnimatePresence mode="wait">
                <motion.div
                    key={active.id}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                    <div className="relative rounded-2xl border border-border bg-card overflow-hidden">
                        <div className={`absolute top-0 left-0 right-0 h-1 bg-linear-to-r ${active.accentFrom} ${active.accentTo}`} />

                        <div className="p-6 sm:p-8 lg:p-10">
                            <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
                                <div className="lg:col-span-5">
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.1 }}
                                        className="flex items-start gap-4 mb-6"
                                    >
                                        <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${active.accentFrom} ${active.accentTo} flex items-center justify-center shrink-0 shadow-lg`}>
                                            <active.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl sm:text-2xl font-bold text-foreground leading-tight mb-1">
                                                {active.title}
                                            </h3>
                                            <p className="text-sm text-primary font-medium">
                                                {active.tagline}
                                            </p>
                                        </div>
                                    </motion.div>

                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        className="text-[15px] text-muted-foreground leading-relaxed"
                                    >
                                        {active.description}
                                    </motion.p>

                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.5, delay: 0.35 }}
                                        className="mt-8 hidden lg:block"
                                    >
                                        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/4 dark:bg-primary/8 border border-primary/10">
                                            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                                            <span className="text-xs text-muted-foreground">
                                                Use the tabs above or arrows to explore all <span className="text-foreground font-semibold">8 industries</span>
                                            </span>
                                        </div>
                                    </motion.div>
                                </div>

                                <div className="lg:col-span-7">
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.15 }}
                                            className="p-5 sm:p-6 rounded-xl bg-secondary/30 dark:bg-secondary/15 border border-border/50"
                                        >
                                            <div className="flex items-center gap-2.5 mb-5">
                                                <div className="w-8 h-8 rounded-lg bg-amber-500/10 dark:bg-amber-400/12 flex items-center justify-center">
                                                    <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                                                </div>
                                                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">
                                                    Challenges
                                                </h4>
                                            </div>

                                            <ul className="space-y-3">
                                                {active.challenges.map((challenge, i) => (
                                                    <motion.li
                                                        key={challenge}
                                                        initial={{ opacity: 0, x: -8 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.35, delay: 0.2 + i * 0.06 }}
                                                        className="flex items-start gap-2.5"
                                                    >
                                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500/60 dark:bg-amber-400/50 mt-2 shrink-0" />
                                                        <span className="text-sm text-muted-foreground leading-relaxed">{challenge}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </motion.div>

                                        <motion.div
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: 0.25 }}
                                            className="p-5 sm:p-6 rounded-xl bg-primary/3 dark:bg-primary/6 border border-primary/8"
                                        >
                                            <div className="flex items-center gap-2.5 mb-5">
                                                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 dark:bg-emerald-400/12 flex items-center justify-center">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                                                </div>
                                                <h4 className="text-sm font-bold text-foreground uppercase tracking-wider">
                                                    How We Help
                                                </h4>
                                            </div>

                                            <ul className="space-y-3">
                                                {active.howWeHelp.map((item, i) => (
                                                    <motion.li
                                                        key={item}
                                                        initial={{ opacity: 0, x: -8 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ duration: 0.35, delay: 0.3 + i * 0.06 }}
                                                        className="flex items-start gap-2.5"
                                                    >
                                                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/60 dark:bg-emerald-400/50 mt-2 shrink-0" />
                                                        <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                                                    </motion.li>
                                                ))}
                                            </ul>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    )
}