import { motion } from "motion/react"
import {
    Database, Search, Activity, UserCheck, ShieldCheck,
    Server, Globe, HardDrive, Cloud, ArrowRight, ArrowDown,
    BarChart3, CheckCircle2, Workflow
} from "lucide-react"

type Props = {}

const dataSources = [
    { id: "sap", label: "SAP Systems", desc: "ERP, S/4HANA, BW", icon: Server },
    { id: "nonsap", label: "Non-SAP", desc: "CRM, HRMS, SCM", icon: Database },
    { id: "legacy", label: "Legacy Systems", desc: "Mainframes, flat files", icon: HardDrive },
    { id: "external", label: "External Data", desc: "APIs, third-party feeds", icon: Globe }
]

const coreSteps = [
    {
        id: "assess",
        number: "01",
        title: "Assess & Validate",
        subtitle: "Structured profiling and business rule validation to identify data risks and inconsistencies",
        icon: Search,
        highlights: ["Data Profiling", "Rule Validation", "Risk Scoring"]
    },
    {
        id: "monitor",
        number: "02",
        title: "Monitor & Control",
        subtitle: "Automated and repeatable controls to continuously monitor quality and detect anomalies early",
        icon: Activity,
        highlights: ["Automated Checks", "Threshold Alerts", "Trend Analysis"]
    },
    {
        id: "remediate",
        number: "03",
        title: "Remediate & Own",
        subtitle: "Clear business ownership through defined workflows ensuring accountability and resolution",
        icon: UserCheck,
        highlights: ["Issue Ownership", "Root Cause Fix", "Workflow Closure"]
    }
]

const outcomes = [
    { id: "dashboards", label: "Executive Dashboards", desc: "Real-time visibility into data health", icon: BarChart3 },
    { id: "kpis", label: "Quality KPIs", desc: "Measurable quality metrics and trends", icon: ShieldCheck },
    { id: "audit", label: "Audit Readiness", desc: "Compliance-ready documentation", icon: Cloud },
    { id: "governance", label: "Data Governance", desc: "Stewardship and accountability models", icon: CheckCircle2 }
]

function ConnectorArrow({ delay = 0, direction = "down" }: { delay?: number; direction?: "down" | "right" }) {
    if (direction === "right") {
        return (
            <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay }}
                className="hidden lg:flex items-center gap-1 origin-left px-2"
            >
                <div className="w-12 h-px bg-linear-to-r from-sky-400/40 to-sky-300" />
                <ArrowRight className="w-4 h-4 text-sky-300" />
            </motion.div>
        )
    }
    return (
        <motion.div
            initial={{ opacity: 0, scaleY: 0 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="flex flex-col items-center gap-1 my-8 origin-top"
        >
            <div className="w-px h-10 bg-linear-to-b from-sky-400/30 to-sky-300/80" />
            <div className="w-7 h-7 rounded-full bg-sky-400/20 border border-sky-400/30 flex items-center justify-center">
                <ArrowDown className="w-3.5 h-3.5 text-sky-300" />
            </div>
        </motion.div>
    )
}

export default function HomeDiagram({ }: Props) {
    return (
        <section className="relative py-20 lg:py-28 bg-[#0B1D35] overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.04]">
                    <svg width="100%" height="100%">
                        <defs>
                            <pattern id="diagram-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#diagram-grid)" />
                    </svg>
                </div>
                <div className="absolute -top-40 -right-40 w-125 h-125 bg-sky-500/8 rounded-full blur-3xl" />
                <div className="absolute -bottom-40 -left-40 w-125 h-125 bg-blue-600/8 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-sky-400/5 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 mb-5">
                        <span className="w-10 h-px bg-sky-400" />
                        <span className="text-sm font-semibold tracking-wider uppercase text-sky-400">
                            Framework
                        </span>
                        <span className="w-10 h-px bg-sky-400" />
                    </div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                        Trusted Data Delivery Framework
                    </h3>
                    <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                        A structured, end-to-end approach that transforms raw enterprise data
                        into trusted, actionable insights through continuous quality controls
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center gap-2 mb-5">
                        <div className="w-2 h-2 rounded-full bg-sky-400" />
                        <span className="text-xs font-semibold text-sky-400 uppercase tracking-widest">
                            Data Sources
                        </span>
                        <div className="flex-1 h-px bg-linear-to-r from-sky-400/30 to-transparent" />
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {dataSources.map((source, index) => (
                            <motion.div
                                key={source.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="relative p-5 rounded-xl bg-white/4 border border-white/8 hover:border-sky-400/30 hover:bg-white/7 transition-all duration-300">
                                    <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-sky-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="flex items-center gap-3">
                                        <div className="w-11 h-11 rounded-lg bg-sky-400/10 border border-sky-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <source.icon className="w-5 h-5 text-sky-400" />
                                        </div>
                                        <div>
                                            <span className="text-sm font-semibold text-white block">{source.label}</span>
                                            <span className="text-xs text-slate-500">{source.desc}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <ConnectorArrow delay={0.4} />

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <div className="flex items-center gap-2 mb-5">
                        <div className="w-2 h-2 rounded-full bg-sky-400" />
                        <span className="text-xs font-semibold text-sky-400 uppercase tracking-widest">
                            Core Process
                        </span>
                        <div className="flex-1 h-px bg-linear-to-r from-sky-400/30 to-transparent" />
                    </div>

                    <div className="relative p-6 sm:p-8 rounded-2xl bg-white/3 border border-white/8 overflow-hidden">
                        <div className="absolute inset-0 bg-linear-to-br from-sky-500/4 via-transparent to-blue-600/4" />

                        <div className="relative grid lg:grid-cols-[1fr_auto_1fr_auto_1fr] gap-6 lg:gap-0 items-stretch">
                            {coreSteps.map((step, index) => (
                                <div key={step.id} className="contents">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.6 + index * 0.15 }}
                                        className="group"
                                    >
                                        <div className="relative h-full p-5 rounded-xl bg-white/4 border border-white/8 hover:border-sky-400/30 hover:bg-white/6 transition-all duration-300">
                                            <div className="absolute -top-px left-4 right-4 h-px bg-linear-to-r from-transparent via-sky-400/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="relative">
                                                    <div className="w-12 h-12 rounded-xl bg-sky-400/10 border border-sky-400/20 flex items-center justify-center group-hover:scale-105 transition-transform">
                                                        <step.icon className="w-6 h-6 text-sky-400" />
                                                    </div>
                                                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-md bg-sky-400 flex items-center justify-center">
                                                        <span className="text-[10px] font-bold text-[#0B1D35]">{step.number}</span>
                                                    </div>
                                                </div>
                                                <h4 className="text-base font-semibold text-white">{step.title}</h4>
                                            </div>

                                            <p className="text-sm text-slate-400 leading-relaxed mb-4">{step.subtitle}</p>

                                            <div className="flex flex-wrap gap-2">
                                                {step.highlights.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-sky-400/10 text-sky-300 border border-sky-400/15"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                    {index < coreSteps.length - 1 && (
                                        <>
                                            <ConnectorArrow delay={0.7 + index * 0.15} direction="right" />
                                            <div className="lg:hidden">
                                                <ConnectorArrow delay={0.7 + index * 0.15} />
                                            </div>
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                <ConnectorArrow delay={1} />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.1 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="relative p-6 sm:p-8 rounded-2xl border-2 border-sky-400/25 bg-linear-to-r from-sky-500/8 via-blue-500/6 to-sky-500/8 overflow-hidden">
                        <div className="absolute inset-0">
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08)_0%,transparent_70%)]" />
                        </div>
                        <div className="relative flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                            <div className="w-14 h-14 rounded-2xl bg-sky-400/15 border border-sky-400/25 flex items-center justify-center shrink-0">
                                <ShieldCheck className="w-7 h-7 text-sky-400" />
                            </div>
                            <div>
                                <div className="inline-flex items-center gap-2 mb-1">
                                    <Workflow className="w-4 h-4 text-sky-400" />
                                    <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                                        Trusted Insights & Governance
                                    </span>
                                </div>
                                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                                    Continuous quality assurance across the entire data lifecycle, 
                                    ensuring every decision is backed by reliable, validated data
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <ConnectorArrow delay={1.2} />

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                >
                    <div className="flex items-center gap-2 mb-5">
                        <div className="w-2 h-2 rounded-full bg-amber-400" />
                        <span className="text-xs font-semibold text-amber-400 uppercase tracking-widest">
                            Business Outcomes
                        </span>
                        <div className="flex-1 h-px bg-linear-to-r from-amber-400/30 to-transparent" />
                    </div>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {outcomes.map((output, index) => (
                            <motion.div
                                key={output.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 1.4 + index * 0.1 }}
                                className="group"
                            >
                                <div className="relative p-5 rounded-xl bg-white/4 border border-white/8 hover:border-amber-400/30 hover:bg-white/7 transition-all duration-300">
                                    <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-amber-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    <div className="flex flex-col items-center text-center gap-3">
                                        <div className="w-11 h-11 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <output.icon className="w-5 h-5 text-amber-400" />
                                        </div>
                                        <div>
                                            <span className="text-sm font-semibold text-white block mb-0.5">{output.label}</span>
                                            <span className="text-xs text-slate-500 leading-relaxed">{output.desc}</span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.8 }}
                    className="mt-14 pt-8 border-t border-white/6"
                >
                    <p className="text-center text-sm text-slate-500">
                        Tool-assisted delivery enabled by enterprise-grade platforms such as{" "}
                        <span className="text-sky-400 font-semibold">Datagaps</span>.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
