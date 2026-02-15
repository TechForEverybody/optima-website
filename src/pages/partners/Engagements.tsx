import { motion, AnimatePresence } from "motion/react"
import { useState, useRef } from "react"
import {
    Gem,
    Blocks,
    Rocket,
    Leaf,
    Compass,
    Server,
    Briefcase,
    Globe,
    MessageSquare,
    Handshake,
    ArrowRight
} from "lucide-react"
import ScrollFloat from "@/components/ScrollFloat"
import ClickSpark from "@/components/ClickSpark"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"

type Props = {}

const clientBenefits = [
    {
        icon: Blocks,
        title: "Enterprise Platforms",
        detail: "Access to enterprise-grade platforms and proven delivery frameworks that accelerate time-to-value",
        accent: "from-blue-500/20 to-cyan-500/20",
        accentDark: "dark:from-blue-500/10 dark:to-cyan-500/10",
        iconBg: "bg-blue-500/15 dark:bg-blue-500/25",
        iconColor: "text-blue-600 dark:text-blue-400",
        borderHover: "hover:border-blue-500/30"
    },
    {
        icon: Compass,
        title: "Clear Role Separation",
        detail: "Distinct boundaries between advisory, implementation, and platform roles eliminate overlap and confusion",
        accent: "from-violet-500/20 to-purple-500/20",
        accentDark: "dark:from-violet-500/10 dark:to-purple-500/10",
        iconBg: "bg-violet-500/15 dark:bg-violet-500/25",
        iconColor: "text-violet-600 dark:text-violet-400",
        borderHover: "hover:border-violet-500/30"
    },
    {
        icon: Rocket,
        title: "Lower Delivery Risk",
        detail: "Structured, repeatable approaches reduce delivery risk and ensure consistent quality across engagements",
        accent: "from-amber-500/20 to-orange-500/20",
        accentDark: "dark:from-amber-500/10 dark:to-orange-500/10",
        iconBg: "bg-amber-500/15 dark:bg-amber-500/25",
        iconColor: "text-amber-600 dark:text-amber-400",
        borderHover: "hover:border-amber-500/30"
    },
    {
        icon: Leaf,
        title: "Flexible Scaling",
        detail: "Scale from focused pilots to enterprise-wide programs without re-platforming or rethinking your approach",
        accent: "from-emerald-500/20 to-green-500/20",
        accentDark: "dark:from-emerald-500/10 dark:to-green-500/10",
        iconBg: "bg-emerald-500/15 dark:bg-emerald-500/25",
        iconColor: "text-emerald-600 dark:text-emerald-400",
        borderHover: "hover:border-emerald-500/30"
    },
    {
        icon: Gem,
        title: "Future-Ready Ecosystem",
        detail: "An evolving partner ecosystem that adapts to changing needs, technologies, and regulatory landscapes",
        accent: "from-rose-500/20 to-pink-500/20",
        accentDark: "dark:from-rose-500/10 dark:to-pink-500/10",
        iconBg: "bg-rose-500/15 dark:bg-rose-500/25",
        iconColor: "text-rose-600 dark:text-rose-400",
        borderHover: "hover:border-rose-500/30"
    }
]

const engagementModes = [
    {
        icon: Server,
        mode: "Platform Provider",
        description: "Enabling structured data quality execution through enterprise-grade platform capabilities. We provide the technology foundation that partners build upon.",
        tag: "Technology",
        color: "from-blue-600 to-cyan-500",
        lightBg: "bg-blue-50 dark:bg-blue-950/30"
    },
    {
        icon: Briefcase,
        mode: "Delivery Partner",
        description: "Working within larger transformation programs as a consulting and delivery collaborator. We bring deep domain expertise to complement partner capabilities.",
        tag: "Consulting",
        color: "from-violet-600 to-purple-500",
        lightBg: "bg-violet-50 dark:bg-violet-950/30"
    },
    {
        icon: Globe,
        mode: "Strategic Collaborator",
        description: "Co-creating solutions for industry-specific or regional data quality initiatives. Together, we design approaches that address unique market challenges.",
        tag: "Strategy",
        color: "from-amber-600 to-orange-500",
        lightBg: "bg-amber-50 dark:bg-amber-950/30"
    }
]

function BentoGrid() {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 lg:gap-5">
            {clientBenefits.map((benefit, index) => {
                const isLarge = index === 0 || index === 3
                return (
                    <motion.div
                        key={benefit.title}
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                            duration: 0.6,
                            delay: index * 0.08,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        className={`group relative ${
                            isLarge ? "lg:col-span-3" : "lg:col-span-3"
                        }`}
                    >
                        <div className={`relative h-full p-7 sm:p-8 rounded-2xl border border-border ${benefit.borderHover} bg-card transition-all duration-500 overflow-hidden`}>
                            <div className={`absolute inset-0 bg-linear-to-br ${benefit.accent} ${benefit.accentDark} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                            <motion.div
                                className="absolute -right-8 -bottom-8 w-32 h-32 rounded-full bg-linear-to-br from-muted/50 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-700"
                                whileHover={{ scale: 1.3, rotate: 45 }}
                            />

                            <div className="relative flex flex-col h-full">
                                <div className={`w-11 h-11 rounded-xl ${benefit.iconBg} flex items-center justify-center mb-5`}>
                                    <benefit.icon className={`w-5.5 h-5.5 ${benefit.iconColor}`} />
                                </div>

                                <h4 className="text-lg font-bold text-foreground mb-2.5">
                                    {benefit.title}
                                </h4>

                                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                                    {benefit.detail}
                                </p>

                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "2rem" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.4 + index * 0.08 }}
                                    className={`h-0.5 rounded-full mt-5 bg-linear-to-r ${benefit.accent}`}
                                />
                            </div>
                        </div>
                    </motion.div>
                )
            })}
        </div>
    )
}

function EngagementPanel() {
    const [active, setActive] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)

    return (
        <div ref={containerRef} className="relative">
            <div className="grid lg:grid-cols-12 gap-0 rounded-3xl border border-border bg-card overflow-hidden">
                <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r border-border">
                    {engagementModes.map((item, index) => (
                        <motion.button
                            key={item.mode}
                            onClick={() => setActive(index)}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                            className={`w-full text-left p-6 lg:p-8 flex items-center gap-5 transition-all duration-400 relative ${
                                index !== engagementModes.length - 1 ? "border-b border-border" : ""
                            } ${
                                active === index
                                    ? `${item.lightBg}`
                                    : "hover:bg-muted/50"
                            }`}
                        >
                            {active === index && (
                                <motion.div
                                    layoutId="engagement-active-bar"
                                    className={`absolute left-0 top-0 bottom-0 w-1 bg-linear-to-b ${item.color}`}
                                    transition={{ type: "spring", stiffness: 400, damping: 35 }}
                                />
                            )}

                            <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                                active === index
                                    ? `bg-linear-to-br ${item.color} shadow-lg`
                                    : "bg-muted"
                            }`}>
                                <item.icon className={`w-5.5 h-5.5 transition-colors duration-300 ${
                                    active === index ? "text-white" : "text-muted-foreground"
                                }`} />
                            </div>

                            <div className="min-w-0">
                                <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors duration-300 ${
                                    active === index ? "text-primary" : "text-muted-foreground/60"
                                }`}>
                                    {item.tag}
                                </span>
                                <h4 className={`text-base font-bold transition-colors duration-300 ${
                                    active === index ? "text-foreground" : "text-muted-foreground"
                                }`}>
                                    {item.mode}
                                </h4>
                            </div>

                            <ArrowRight className={`w-4 h-4 ml-auto shrink-0 transition-all duration-300 ${
                                active === index
                                    ? "text-primary opacity-100 translate-x-0"
                                    : "text-muted-foreground opacity-0 -translate-x-2"
                            }`} />
                        </motion.button>
                    ))}
                </div>

                <div className="lg:col-span-6 relative min-h-52 lg:min-h-72">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
                            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                            exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
                            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute inset-0 flex flex-col justify-center p-8 lg:p-12"
                        >
                            <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-linear-to-r ${engagementModes[active].color} w-fit mb-6`}>
                                {(() => {
                                    const Icon = engagementModes[active].icon
                                    return <Icon className="w-3.5 h-3.5 text-white" />
                                })()}
                                <span className="text-xs font-bold text-white uppercase tracking-wider">
                                    {engagementModes[active].tag}
                                </span>
                            </div>

                            <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                                {engagementModes[active].mode}
                            </h3>

                            <p className="text-muted-foreground leading-relaxed text-base lg:text-lg max-w-lg">
                                {engagementModes[active].description}
                            </p>

                            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground/60">
                                {engagementModes.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActive(i)}
                                        className={`h-1.5 rounded-full transition-all duration-400 ${
                                            i === active
                                                ? "w-8 bg-primary"
                                                : "w-1.5 bg-muted-foreground/20 hover:bg-muted-foreground/40"
                                        }`}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}

export default function Engagements({}: Props) {
    const navigate = useNavigate()

    return (
        <section className="relative bg-background overflow-hidden">
            <div className="relative py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                    <div className="flex flex-col items-center mb-16">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-xs font-bold uppercase tracking-widest text-primary mb-6"
                        >
                            Client Impact
                        </motion.span>

                        <ScrollFloat
                            containerClassName="!mb-0"
                            textClassName="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground tracking-tight"
                            animationDuration={0.8}
                            ease="back.out(1.5)"
                            scrollStart="center bottom+=30%"
                            scrollEnd="bottom bottom-=10%"
                            stagger={0.02}
                        >
                            What This Means for Our Clients
                        </ScrollFloat>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-muted-foreground text-center max-w-2xl mt-5 text-base lg:text-lg leading-relaxed"
                        >
                            Our partner ecosystem is designed to create tangible value 
                            at every stage of your data quality journey
                        </motion.p>
                    </div>

                    <BentoGrid />
                </div>
            </div>

            <div className="relative py-24 lg:py-10">
                <div className="absolute inset-0 bg-linear-to-b from-transparent via-muted/30 to-transparent dark:via-muted/10" />

                <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                    <div className="flex flex-col items-center mb-10">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-xs font-bold uppercase tracking-widest text-primary mb-6"
                        >
                            Engagement Models
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground text-center tracking-tight"
                        >
                            How Partners{" "}
                            <span className="text-primary">Engage</span> With Us
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-muted-foreground text-center max-w-xl mt-5 text-base lg:text-lg leading-relaxed"
                        >
                            Our focus remains on delivering measurable, sustainable outcomes for clients
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <EngagementPanel />
                    </motion.div>
                </div>
            </div>

            <div className="relative py-24 lg:py-15">
                <div className="mx-auto max-w-3xl px-6 sm:px-8 lg:px-12">
                    <ClickSpark sparkColor="oklch(0.55 0.2 250)" sparkSize={12} sparkRadius={25} sparkCount={10}>
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="text-center"
                        >
                            <motion.div
                                animate={{ rotate: [0, 360] }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                className="w-20 h-20 mx-auto mb-8 rounded-full border-2 border-dashed border-primary/20 flex items-center justify-center"
                            >
                                <div className="w-12 h-12 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                                    <Handshake className="w-6 h-6 text-primary" />
                                </div>
                            </motion.div>

                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4 leading-tight">
                                Aligned with business-led,{" "}
                                <span className="text-primary">sustainable data quality?</span>
                            </h3>

                            <p className="text-muted-foreground text-base lg:text-lg mb-10 max-w-lg mx-auto leading-relaxed">
                                If you are a technology provider or consulting organization aligned 
                                with our philosophy, we welcome a discussion.
                            </p>

                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Button
                                    size="lg"
                                    onClick={() => navigate("/contact")}
                                    className="gap-2 text-base px-8 py-6 rounded-xl shadow-lg shadow-primary/15 hover:shadow-xl hover:shadow-primary/25 transition-shadow"
                                >
                                    <Handshake className="w-5 h-5" />
                                    Partner With Us
                                </Button>

                                <Button
                                    variant="outline"
                                    size="lg"
                                    onClick={() => navigate("/contact")}
                                    className="gap-2 text-base px-8 py-6 rounded-xl border-2 hover:bg-primary/5 transition-all"
                                >
                                    <MessageSquare className="w-5 h-5" />
                                    Schedule a Discussion
                                </Button>
                            </div>
                        </motion.div>
                    </ClickSpark>
                </div>
            </div>
        </section>
    )
}
