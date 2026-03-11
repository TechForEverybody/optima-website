import { motion } from "motion/react"
import { Award, Factory, ShieldCheck, Layers, ArrowRightLeft, Target } from "lucide-react"

type Props = {}

const reasons = [
    {
        icon: Award,
        number: "01",
        title: "SAP and Non SAP Experience",
        stat: "25+",
        statSuffix: "yrs",
        description:
            "Over two and a half decades of hands-on SAP delivery across enterprise programs — from core ERP implementations to complex system landscapes.",
    },
    {
        icon: Factory,
        number: "02",
        title: "Manufacturing Domain Knowledge",
        stat: null,
        statSuffix: null,
        description:
            "Deep functional fluency in manufacturing processes — production planning, procurement, inventory, and shop-floor operations — ensuring business-relevant outcomes.",
    },
    {
        icon: ShieldCheck,
        number: "03",
        title: "Specialized in SAP Data Quality",
        stat: null,
        statSuffix: null,
        description:
            "A dedicated, focused practice around SAP data quality — not a generic offering bolted onto a broader portfolio. Every engagement is shaped by this singular expertise.",
    },
    {
        icon: Layers,
        number: "04",
        title: "Tool + Consulting Approach",
        stat: null,
        statSuffix: null,
        description:
            "We combine proven tooling with structured consulting — giving clients both the technology and the methodology needed to sustain data quality beyond the project.",
    },
    {
        icon: ArrowRightLeft,
        number: "05",
        title: "Migration Expertise",
        stat: null,
        statSuffix: null,
        description:
            "Proven experience navigating SAP migrations and system transformations — ensuring data integrity is preserved, risks are mitigated, and go-live confidence is high.",
    },
    {
        icon: Target,
        number: "06",
        title: "Practical Implementation Focus",
        stat: null,
        statSuffix: null,
        description:
            "We build solutions that fit real-world constraints — pragmatic, actionable, and designed to deliver value quickly without compromising long-term quality governance.",
    },
]

export default function Why({ }: Props) {
    return (
        <section className="relative py-12 lg:py-24 bg-background">
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-160 h-160 bg-primary/3 dark:bg-primary/2 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-120 h-120 bg-accent/5 dark:bg-accent/3 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <div className="lg:grid lg:grid-cols-[2fr_3fr] lg:gap-20 xl:gap-28 lg:items-start">

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-12 lg:mb-0 lg:sticky lg:top-28"
                    >
                        <div className="inline-flex items-center gap-2 mb-8">
                            <span className="w-8 h-px bg-primary" />
                            <span className="text-xs font-semibold tracking-widest uppercase text-primary">
                                Why Choose Us
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
                            Why Organizations{" "}
                            <br className="hidden sm:block" />
                            Choose{" "}
                            <span className="relative inline-block whitespace-nowrap">
                                <span className="relative z-10">Value Assure</span>
                                <span className="absolute bottom-0.5 left-0 w-full h-2.5 bg-accent/30 dark:bg-accent/25 z-0 rounded-sm" />
                            </span>{" "}
                            <br className="hidden sm:block" />
                            Consulting
                        </h2>

                        <p className="text-base text-muted-foreground leading-relaxed mb-10">
                            A focused practice built on decades of real-world SAP delivery,
                            manufacturing expertise, and a commitment to measurable outcomes.
                        </p>

                        <div className="flex flex-col gap-5">
                            <div className="flex items-baseline gap-3">
                                <span className="text-4xl font-extrabold text-primary tracking-tight leading-none">25+</span>
                                <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Years SAP Experience</span>
                            </div>
                            <div className="w-full h-px bg-border" />
                            <div className="flex items-baseline gap-3">
                                <span className="text-4xl font-extrabold text-foreground tracking-tight leading-none">6</span>
                                <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Core Differentiators</span>
                            </div>
                            <div className="w-full h-px bg-border" />
                            <div className="flex items-baseline gap-3">
                                <span className="text-lg font-bold text-foreground tracking-tight leading-none">Tool + Advisory</span>
                                <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">Integrated Model</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className="divide-y divide-border">
                        {reasons.map((reason, index) => {
                            const Icon = reason.icon
                            return (
                                <motion.div
                                    key={reason.number}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-40px" }}
                                    transition={{
                                        duration: 0.55,
                                        delay: index * 0.08,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="group grid grid-cols-[auto_1fr] gap-x-6 gap-y-2 py-7 sm:py-8 cursor-default"
                                >
                                    <div className="flex flex-col items-center gap-3 pt-0.5">
                                        <span className="text-xs font-bold tabular-nums tracking-widest text-muted-foreground/50 group-hover:text-primary transition-colors duration-300">
                                            {reason.number}
                                        </span>
                                        <div className="w-px flex-1 bg-border group-hover:bg-primary/30 transition-colors duration-300 min-h-4" />
                                    </div>

                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="w-9 h-9 rounded-lg bg-secondary group-hover:bg-primary/10 dark:group-hover:bg-primary/15 flex items-center justify-center transition-colors duration-300 shrink-0">
                                                <Icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                                            </div>
                                            <h3 className="text-base sm:text-lg font-semibold text-foreground leading-snug group-hover:text-primary transition-colors duration-300">
                                                {reason.title}
                                            </h3>
                                            {reason.stat && (
                                                <span className="ml-auto shrink-0 text-2xl font-extrabold text-primary/70 group-hover:text-primary tracking-tight transition-colors duration-300">
                                                    {reason.stat}
                                                    <span className="text-sm font-semibold text-muted-foreground ml-0.5">{reason.statSuffix}</span>
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
                                            {reason.description}
                                        </p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}
