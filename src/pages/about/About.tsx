import { useRef, useState } from "react"
import { motion, useScroll, useTransform, useInView } from "motion/react"
import {
    Search,
    Activity,
    Wrench,
    ShieldCheck,
    Target,
    Layers,
    Settings,
    ChevronDown,
    Eye,
    Fingerprint,
    Plus
} from "lucide-react"
import Aurora from "@/components/Aurora"
import ScrollReveal from "@/components/ScrollReveal"
import ScrollFloat from "@/components/ScrollFloat"
import CountUp from "@/components/CountUp"
import TrueFocus from "@/components/TrueFocus"
import MagnetLines from "@/components/MagnetLines"
import { useTheme } from "@/providers/theme-provider"

type Props = {}

const lifecycleStages = [
    {
        icon: Search,
        title: "Diagnostics",
        description: "Assessing data quality across critical business domains and enterprise systems",
        gradient: "from-blue-500 to-indigo-600",
        glow: "shadow-blue-500/20"
    },
    {
        icon: Activity,
        title: "Monitoring",
        description: "Continuous oversight through structured, repeatable quality controls",
        gradient: "from-violet-500 to-purple-600",
        glow: "shadow-violet-500/20"
    },
    {
        icon: Wrench,
        title: "Remediation",
        description: "Targeted correction driven by root-cause analysis and systematic resolution",
        gradient: "from-amber-500 to-orange-600",
        glow: "shadow-amber-500/20"
    },
    {
        icon: ShieldCheck,
        title: "Governance",
        description: "Embedding sustainable quality practices into everyday operations",
        gradient: "from-emerald-500 to-teal-600",
        glow: "shadow-emerald-500/20"
    }
]

const principles = [
    {
        icon: Target,
        title: "Business-led, not tool-driven",
        description: "We prioritize business outcomes over technology preferences, ensuring solutions serve real organizational needs rather than vendor agendas."
    },
    {
        icon: Eye,
        title: "Focused on root causes, not symptoms",
        description: "We dig deeper to address fundamental issues at their source, delivering lasting improvements instead of temporary fixes."
    },
    {
        icon: Layers,
        title: "Structured, phased, and scalable",
        description: "Our approach builds progressively, allowing organizations to scale quality initiatives without disruption to ongoing operations."
    },
    {
        icon: Settings,
        title: "Designed for real operating models",
        description: "We work within your existing organizational structures, adapting to real constraints and dynamics rather than imposing theoretical frameworks."
    }
]

export default function About({}: Props) {
    const { theme } = useTheme()
    const isDark = theme === "dark" ||
        (theme === "system" && typeof window !== "undefined" &&
            window.matchMedia("(prefers-color-scheme: dark)").matches)

    const heroRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress: heroScroll } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    })
    const heroOpacity = useTransform(heroScroll, [0, 0.7], [1, 0])
    const heroScale = useTransform(heroScroll, [0, 0.7], [1, 0.9])

    return (
        <section className="relative bg-background">

            <motion.div
                ref={heroRef}
                style={{ opacity: heroOpacity, scale: heroScale }}
                className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
            >
                <div className="absolute inset-0">
                    <Aurora
                        colorStops={isDark
                            ? ["#1a0e3e", "#2d1b69", "#0f172a"]
                            : ["#dbeafe", "#c7d2fe", "#e0e7ff"]
                        }
                        amplitude={1.2}
                        blend={0.6}
                        speed={0.3}
                    />
                    <div className="absolute inset-0 bg-background/30 dark:bg-background/40" />
                </div>

                <div className="relative z-10 text-center px-6 sm:px-8 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
                        className="w-20 h-px bg-primary mx-auto mb-8 origin-center"
                    />

                    <motion.span
                        initial={{ opacity: 0, letterSpacing: "0.6em" }}
                        animate={{ opacity: 1, letterSpacing: "0.3em" }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-xs sm:text-sm font-semibold uppercase text-primary tracking-[0.3em] block mb-8"
                    >
                        About Value Assure Consultancy
                    </motion.span>

                    <div className="overflow-hidden mb-2">
                        <motion.h1
                            initial={{ y: "110%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1.1, delay: 0.4, ease: [0.76, 0, 0.24, 1] }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground leading-[1.05] tracking-tight"
                        >
                            Building Trusted
                        </motion.h1>
                    </div>

                    <div className="overflow-hidden mb-10">
                        <motion.h1
                            initial={{ y: "110%" }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1.1, delay: 0.55, ease: [0.76, 0, 0.24, 1] }}
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-primary leading-[1.05] tracking-tight"
                        >
                            Data Foundations
                        </motion.h1>
                    </div>

                    <motion.p
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
                        className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                    >
                        Through clarity, discipline, and sustained ownership.
                    </motion.p>

                    <motion.div
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1.2, delay: 1.2, ease: [0.76, 0, 0.24, 1] }}
                        className="w-20 h-px bg-primary mx-auto mt-10 origin-center"
                    />
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8, duration: 0.6 }}
                    className="absolute bottom-12 left-1/2 -translate-x-1/2"
                >
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
                    >
                        <ChevronDown className="w-5 h-5 text-muted-foreground/60" />
                    </motion.div>
                </motion.div>
            </motion.div>


            <div className="relative py-28 lg:py-40 overflow-hidden">
                <div
                    className="absolute inset-0 opacity-[0.012] dark:opacity-[0.025]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='4' height='4' viewBox='0 0 4 4' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 3h1v1H1V3zm2-2h1v1H3V1z' fill='%23888' fill-opacity='1'/%3E%3C/svg%3E")`
                    }}
                />

                <div className="relative mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
                    <div className="max-w-4xl">
                        <ScrollReveal
                            enableBlur={true}
                            baseOpacity={0.06}
                            baseRotation={2}
                            blurStrength={6}
                            containerClassName="mb-14"
                            textClassName="text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-foreground leading-snug tracking-tight"
                        >
                            Organizations today operate in increasingly complex data environments driven by digital transformation, SAP modernization, regulatory expectations, and growing integration across systems.
                        </ScrollReveal>

                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                            className="relative pl-8 sm:pl-10 ml-2 sm:ml-8 lg:ml-16"
                        >
                            <div className="absolute left-0 top-0 bottom-0 w-px bg-linear-to-b from-primary via-primary/40 to-transparent" />
                            <div className="absolute left-0 top-0 w-2 h-2 rounded-full bg-primary -translate-x-[3.5px]" />

                            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl">
                                In this context, data quality is no longer a technical concern alone — it is a{" "}
                                <span className="text-foreground font-semibold">business-critical capability</span>{" "}
                                that demands structured attention and sustained ownership.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>


            <div className="relative py-28 lg:py-36">
                <div className="absolute inset-0 bg-linear-to-b from-secondary/50 via-transparent to-secondary/30 dark:from-secondary/25 dark:via-transparent dark:to-secondary/15" />

                <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                    <div className="mb-16 lg:mb-20">
                        <ScrollFloat
                            containerClassName="mb-4"
                            textClassName="text-3xl lg:text-4xl font-bold text-foreground tracking-tight"
                        >
                            Our Philosophy
                        </ScrollFloat>

                        <motion.div
                            initial={{ scaleX: 0 }}
                            whileInView={{ scaleX: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
                            className="w-24 h-0.5 bg-linear-to-r from-primary to-primary/20 origin-left"
                        />
                    </div>

                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
                        <div className="lg:col-span-7 space-y-8">
                            <motion.p
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="text-xl sm:text-2xl text-foreground leading-relaxed font-medium"
                            >
                                We believe that trusted data is not achieved through one-time fixes or isolated initiatives.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.8, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                                className="text-lg text-muted-foreground leading-relaxed"
                            >
                                It requires a structured, business-led approach that combines clear accountability,
                                repeatable controls, and practical governance.
                            </motion.p>

                            <motion.p
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-60px" }}
                                transition={{ duration: 0.8, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
                                className="text-lg text-muted-foreground leading-relaxed"
                            >
                                Our focus is on helping organizations move from reactive data correction to proactive
                                data confidence — where data quality is embedded into daily operations and decision-making.
                            </motion.p>
                        </div>

                        <div className="lg:col-span-5 flex items-center justify-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
                                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 80, damping: 15 }}
                                className="w-full max-w-xs sm:max-w-sm aspect-square rounded-3xl overflow-hidden border border-border/50 bg-card/30 backdrop-blur-sm"
                            >
                                <MagnetLines
                                    rows={7}
                                    columns={7}
                                    containerSize="100%"
                                    lineColor={isDark ? "rgba(129, 140, 248, 0.6)" : "rgba(67, 56, 202, 0.5)"}
                                    lineWidth="2px"
                                    lineHeight="20px"
                                    baseAngle={0}
                                />
                            </motion.div>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-6 mt-20 lg:mt-28">
                        {[
                            { title: "Clarity", desc: "Clear accountability and well-defined quality standards across every layer", accent: "from-blue-500/20 to-indigo-500/5" },
                            { title: "Discipline", desc: "Repeatable controls embedded seamlessly into daily operations and workflows", accent: "from-violet-500/20 to-purple-500/5" },
                            { title: "Ownership", desc: "Sustained governance with measurable outcomes and long-term commitment", accent: "from-emerald-500/20 to-teal-500/5" }
                        ].map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 50, rotateX: 15 }}
                                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{
                                    duration: 0.7,
                                    delay: i * 0.15,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                whileHover={{
                                    y: -10,
                                    transition: { type: "spring", stiffness: 400, damping: 15 }
                                }}
                                className="group relative p-8 sm:p-10 rounded-3xl bg-card/80 backdrop-blur-sm border border-border hover:border-primary/25 transition-colors duration-500 cursor-default overflow-hidden"
                                style={{ perspective: "800px" }}
                            >
                                <div className={`absolute inset-0 bg-linear-to-br ${item.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                                <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative">
                                    <motion.div
                                        className="w-14 h-14 rounded-2xl bg-primary/8 dark:bg-primary/12 flex items-center justify-center mb-6 group-hover:bg-primary/15 dark:group-hover:bg-primary/20 transition-colors duration-500"
                                        whileHover={{ rotate: [0, -5, 5, 0], transition: { duration: 0.5 } }}
                                    >
                                        <span className="text-2xl font-black text-primary/60">{item.title.charAt(0)}</span>
                                    </motion.div>

                                    <h4 className="text-2xl font-bold text-foreground mb-3">
                                        {item.title}
                                    </h4>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>


            <div className="relative py-28 lg:py-36">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-16 lg:mb-24">
                        <ScrollFloat
                            containerClassName="mb-6 flex justify-center"
                            textClassName="text-4xl sm:text-5xl lg:text-5xl font-bold text-foreground tracking-tight"
                        >
                            What We Do
                        </ScrollFloat>

                        <motion.p
                            initial={{ opacity: 0, y: 16 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
                        >
                            We help organizations assess, control, and sustain data quality across SAP and
                            enterprise landscapes. Our work spans the full data quality lifecycle.
                        </motion.p>
                    </div>

                    <div className="hidden lg:block relative mb-28">
                        <div className="grid grid-cols-3 grid-rows-3 gap-8 max-w-5xl mx-auto" style={{ gridTemplateRows: "auto 1fr auto" }}>

                            <div className="col-start-2 row-start-1 flex justify-center">
                                <LifecycleCard stage={lifecycleStages[0]} index={0} />
                            </div>

                            <div className="col-start-1 row-start-2 flex items-center justify-end">
                                <LifecycleCard stage={lifecycleStages[3]} index={3} />
                            </div>

                            <div className="col-start-2 row-start-2 flex items-center justify-center">
                                <div className="relative">
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.9, type: "spring", stiffness: 80, damping: 12 }}
                                        className="relative z-10"
                                    >
                                        <div className="w-36 h-36 rounded-full bg-linear-to-br from-primary via-primary/90 to-primary/70 flex items-center justify-center shadow-2xl shadow-primary/30 ring-4 ring-primary/10 dark:ring-primary/15">
                                            <div className="text-center">
                                                <Fingerprint className="w-8 h-8 text-primary-foreground mx-auto mb-1.5" />
                                                <span className="text-[11px] font-bold text-primary-foreground/80 uppercase tracking-[0.15em]">
                                                    Quality
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>

                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                                        className="absolute -inset-8 rounded-full border border-dashed border-primary/15 dark:border-primary/25"
                                    />
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1.4, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                                        className="absolute -inset-16 rounded-full border border-dotted border-primary/8 dark:border-primary/15"
                                    />

                                    {[0, 90, 180, 270].map((angle, i) => (
                                        <motion.div
                                            key={angle}
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                                            className="absolute top-1/2 left-1/2 w-24 h-px origin-left"
                                            style={{ transform: `rotate(${angle}deg)` }}
                                        >
                                            <div className="w-full h-px bg-linear-to-r from-primary/25 to-transparent" />
                                        </motion.div>
                                    ))}
                                </div>
                            </div>

                            <div className="col-start-3 row-start-2 flex items-center justify-start">
                                <LifecycleCard stage={lifecycleStages[1]} index={1} />
                            </div>

                            <div className="col-start-2 row-start-3 flex justify-center">
                                <LifecycleCard stage={lifecycleStages[2]} index={2} />
                            </div>
                        </div>
                    </div>

                    <div className="lg:hidden space-y-4 mb-16">
                        {lifecycleStages.map((stage, i) => (
                            <motion.div
                                key={stage.title}
                                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, rotate: i % 2 === 0 ? -2 : 2 }}
                                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                                viewport={{ once: true, margin: "-30px" }}
                                transition={{
                                    duration: 0.7,
                                    delay: i * 0.1,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                className="relative flex items-start gap-5 p-6 rounded-2xl bg-card border border-border"
                            >
                                <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${stage.gradient} flex items-center justify-center shadow-lg shrink-0`}>
                                    <stage.icon className="w-6 h-6 text-white" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-foreground mb-1.5">{stage.title}</h4>
                                    <p className="text-sm text-muted-foreground leading-relaxed">{stage.description}</p>
                                </div>

                                {i < lifecycleStages.length - 1 && (
                                    <div className="absolute -bottom-4 left-11 w-px h-4 bg-linear-to-b from-border to-transparent" />
                                )}
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="relative rounded-3xl border border-border bg-card/60 backdrop-blur-sm overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-linear-to-r from-primary/3 via-transparent to-primary/3" />

                        <div className="relative grid grid-cols-2 lg:grid-cols-4 divide-x divide-border">
                            {[
                                { value: 100, suffix: "%", label: "Data Quality Focus" },
                                { value: 4, suffix: " Stages", label: "Full Lifecycle" },
                                { value: 360, suffix: "\u00B0", label: "Complete Coverage" },
                                { value: 24, suffix: "/7", label: "Monitoring Ready" }
                            ].map((stat, i) => (
                                <div key={stat.label} className="p-8 sm:p-10 lg:p-12 text-center">
                                    <div className="flex items-baseline justify-center gap-0.5 mb-3">
                                        <CountUp
                                            to={stat.value}
                                            from={0}
                                            duration={2.5}
                                            delay={i * 0.15}
                                            className="text-3xl lg:text-4xl lg:text-5xl font-black text-primary tabular-nums"
                                        />
                                        <span className="text-lg sm:text-xl lg:text-2xl font-bold text-primary/70">
                                            {stat.suffix}
                                        </span>
                                    </div>
                                    <span className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">
                                        {stat.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>


            <div className="relative py-28 lg:py-36">
                <div className="absolute inset-0 bg-linear-to-t from-secondary/40 via-transparent to-secondary/20 dark:from-secondary/20 dark:via-transparent dark:to-secondary/10" />

                <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                    <div className="mb-14 lg:mb-20">
                        <ScrollFloat
                            containerClassName="mb-8"
                            textClassName="text-4xl sm:text-5xl lg:text-5xl font-bold text-foreground tracking-tight"
                        >
                            How We Work
                        </ScrollFloat>

                        <div className="max-w-xl">
                            <TrueFocus
                                sentence="Pragmatic and outcome-focused"
                                blurAmount={4}
                                borderColor={isDark ? "#818cf8" : "#4338ca"}
                                glowColor={isDark ? "rgba(129, 140, 248, 0.35)" : "rgba(67, 56, 202, 0.25)"}
                                animationDuration={0.4}
                                pauseBetweenAnimations={1.5}
                            />
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute left-6.75 sm:left-7.75 top-4 bottom-4 w-px bg-linear-to-b from-primary/20 via-border to-transparent hidden sm:block" />

                        <div className="space-y-4">
                            {principles.map((principle, i) => (
                                <PrincipleAccordion
                                    key={principle.title}
                                    principle={principle}
                                    index={i}
                                    isDark={isDark}
                                />
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="mt-20 lg:mt-28 relative"
                    >
                        <div className="max-w-3xl mx-auto text-center">
                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
                                className="w-16 h-px bg-primary/40 mx-auto mb-8 origin-center"
                            />

                            <ScrollReveal
                                enableBlur={true}
                                baseOpacity={0.1}
                                baseRotation={1}
                                blurStrength={3}
                                containerClassName=""
                                textClassName="text-lg sm:text-xl text-muted-foreground leading-relaxed"
                            >
                                We partner closely with business and IT stakeholders to ensure clarity of roles, accountability, and alignment with organizational priorities.
                            </ScrollReveal>

                            <motion.div
                                initial={{ scaleX: 0 }}
                                whileInView={{ scaleX: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
                                className="w-16 h-px bg-primary/40 mx-auto mt-8 origin-center"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

function PrincipleAccordion({
    principle,
    index,
    isDark
}: {
    principle: typeof principles[number]
    index: number
    isDark: boolean
}) {
    const [isOpen, setIsOpen] = useState(false)
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-40px" })

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{
                duration: 0.7,
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1]
            }}
        >
            <motion.div
                onClick={() => setIsOpen(!isOpen)}
                className="group relative sm:pl-16 cursor-pointer"
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
                <div className="absolute left-5.25 sm:left-5.25 top-7 w-3.25 h-3.25 rounded-full border-2 border-primary/30 bg-background z-10 hidden sm:flex items-center justify-center group-hover:border-primary transition-colors duration-300">
                    <motion.div
                        animate={{ scale: isOpen ? 1 : 0.4, backgroundColor: isOpen ? (isDark ? "#818cf8" : "#4338ca") : "transparent" }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="w-1.25 h-1.25 rounded-full"
                    />
                </div>

                <div className={`relative p-6 sm:p-8 rounded-2xl border transition-all duration-500 overflow-hidden ${isOpen ? "bg-card border-primary/25 shadow-lg shadow-primary/5" : "bg-card/60 border-border hover:border-primary/15"}`}>
                    <div className="flex items-center gap-5">
                        <motion.div
                            animate={{
                                backgroundColor: isOpen
                                    ? (isDark ? "rgba(129,140,248,0.2)" : "rgba(67,56,202,0.12)")
                                    : (isDark ? "rgba(129,140,248,0.08)" : "rgba(67,56,202,0.06)")
                            }}
                            transition={{ duration: 0.4 }}
                            className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center shrink-0"
                        >
                            <principle.icon className="w-6 h-6 text-primary" />
                        </motion.div>

                        <h4 className="flex-1 text-lg sm:text-xl font-bold text-foreground min-w-0">
                            {principle.title}
                        </h4>

                        <motion.div
                            animate={{ rotate: isOpen ? 45 : 0 }}
                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            className="w-9 h-9 rounded-full bg-secondary/80 flex items-center justify-center shrink-0"
                        >
                            <Plus className="w-4 h-4 text-muted-foreground" />
                        </motion.div>
                    </div>

                    <motion.div
                        initial={false}
                        animate={{
                            height: isOpen ? "auto" : 0,
                            opacity: isOpen ? 1 : 0,
                            marginTop: isOpen ? 16 : 0
                        }}
                        transition={{ type: "spring", stiffness: 250, damping: 28 }}
                        className="overflow-hidden"
                    >
                        <div className="pl-0 sm:pl-18">
                            <p className="text-muted-foreground leading-relaxed text-[15px] sm:text-base">
                                {principle.description}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </motion.div>
    )
}

function LifecycleCard({
    stage,
    index
}: {
    stage: typeof lifecycleStages[number]
    index: number
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: index === 0 ? 40 : index === 2 ? -40 : 0, x: index === 3 ? 40 : index === 1 ? -40 : 0 }}
            whileInView={{ opacity: 1, y: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.8,
                delay: 0.4 + index * 0.12,
                type: "spring",
                stiffness: 100,
                damping: 15
            }}
            whileHover={{
                y: -6,
                transition: { type: "spring", stiffness: 400, damping: 15 }
            }}
            className="group w-64 cursor-default"
        >
            <div className={`relative p-7 rounded-2xl bg-card border border-border group-hover:border-primary/30 transition-all duration-500 group-hover:shadow-xl ${stage.glow}`}>
                <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                    <div className={`w-12 h-12 rounded-xl bg-linear-to-br ${stage.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:shadow-xl transition-shadow duration-500`}>
                        <stage.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{stage.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{stage.description}</p>
                </div>

                <div className="absolute -bottom-px left-6 right-6 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
        </motion.div>
    )
}