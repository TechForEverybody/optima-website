import { Search, Activity, Wrench, Shield } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export type SolutionStage = {
    id: number
    stage: string
    shortDescription: string
    briefDescription: string
    title: string
    description: string
    href: string
    icon: LucideIcon
    color: "blue" | "cyan" | "amber" | "emerald"
    features: string[]
    outcomes: string[]
}

export const solutions: SolutionStage[] = [
    {
        id: 1,
        stage: "Assess",
        shortDescription: "Identify gaps",
        briefDescription: "Establishes a clear, fact-based understanding of data quality risks, root causes, and business impact.",
        title: "Data Quality Assessment & Diagnostics",
        description: "Establishes a clear, fact-based understanding of data quality risks, root causes, and business impact. Move from anecdotal concerns to quantified insights.",
        href: "/solutions/data-quality-assessment",
        icon: Search,
        color: "blue",
        features: [
            "Business-aligned quality profiling",
            "Root cause analysis",
            "Impact quantification",
            "Executive dashboards"
        ],
        outcomes: ["Clear baseline", "Prioritized gaps", "Stakeholder alignment"]
    },
    {
        id: 2,
        stage: "Monitor",
        shortDescription: "Track quality",
        briefDescription: "Ensures ongoing visibility and control through proactive monitoring, thresholds, and early warning indicators.",
        title: "Continuous Data Quality Monitoring",
        description: "Ensures ongoing visibility and control through proactive monitoring, thresholds, and early warning indicators. Catch issues before they impact decisions.",
        href: "/solutions/data-quality-monitoring",
        icon: Activity,
        color: "cyan",
        features: [
            "Real-time quality dashboards",
            "Threshold-based alerts",
            "Trend analysis",
            "SLA tracking"
        ],
        outcomes: ["Proactive detection", "Reduced incidents", "Continuous visibility"]
    },
    {
        id: 3,
        stage: "Remediate",
        shortDescription: "Fix issues",
        briefDescription: "Transforms identified issues into structured remediation actions with clear ownership and workflows.",
        title: "Data Issue Remediation & Ownership",
        description: "Transforms identified issues into structured remediation actions with clear ownership, workflows, and accountability. Bridge the gap between finding and fixing.",
        href: "/solutions/data-issue-remediation",
        icon: Wrench,
        color: "amber",
        features: [
            "Issue workflow management",
            "Ownership assignment",
            "Progress tracking",
            "Resolution analytics"
        ],
        outcomes: ["Faster resolution", "Clear accountability", "Systematic fixes"]
    },
    {
        id: 4,
        stage: "Govern",
        shortDescription: "Sustain trust",
        briefDescription: "Provides the operating model, roles, and decision mechanisms to sustain improvements at scale.",
        title: "Data Governance Enablement",
        description: "Provides the operating model, roles, and decision mechanisms to sustain improvements at scale. Build lasting organizational capability for data quality.",
        href: "/solutions/data-governance-enablement",
        icon: Shield,
        color: "emerald",
        features: [
            "Role-based governance model",
            "Policy framework design",
            "Stewardship enablement",
            "Maturity progression"
        ],
        outcomes: ["Sustained trust", "Scalable model", "Organizational capability"]
    }
]

export const colorClasses = {
    blue: {
        bg: "bg-blue-500/10 dark:bg-blue-500/15",
        bgHover: "hover:bg-blue-500/20 dark:hover:bg-blue-500/25",
        border: "border-blue-500/30",
        borderHover: "hover:border-blue-500/60",
        iconBg: "bg-blue-500/15 group-hover:bg-blue-500/25",
        iconBgStatic: "bg-blue-500/20",
        iconColor: "text-blue-500",
        iconColorAlt: "text-blue-600 dark:text-blue-400",
        text: "text-blue-500",
        textAlt: "text-blue-600 dark:text-blue-400",
        badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
        glow: "group-hover:shadow-blue-500/20",
        glowStatic: "shadow-blue-500/20",
        dot: "bg-blue-500",
        ring: "ring-blue-500/20",
        ringAlt: "ring-blue-500/30",
        gradient: "from-blue-500/20 via-blue-500/5 to-transparent",
        cardBg: "bg-blue-500/10 hover:bg-blue-500/15",
        glowBg: "bg-blue-500"
    },
    cyan: {
        bg: "bg-cyan-500/10 dark:bg-cyan-500/15",
        bgHover: "hover:bg-cyan-500/20 dark:hover:bg-cyan-500/25",
        border: "border-cyan-500/30",
        borderHover: "hover:border-cyan-500/60",
        iconBg: "bg-cyan-500/15 group-hover:bg-cyan-500/25",
        iconBgStatic: "bg-cyan-500/20",
        iconColor: "text-cyan-500",
        iconColorAlt: "text-cyan-600 dark:text-cyan-400",
        text: "text-cyan-500",
        textAlt: "text-cyan-600 dark:text-cyan-400",
        badge: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
        glow: "group-hover:shadow-cyan-500/20",
        glowStatic: "shadow-cyan-500/20",
        dot: "bg-cyan-500",
        ring: "ring-cyan-500/20",
        ringAlt: "ring-cyan-500/30",
        gradient: "from-cyan-500/20 via-cyan-500/5 to-transparent",
        cardBg: "bg-cyan-500/10 hover:bg-cyan-500/15",
        glowBg: "bg-cyan-500"
    },
    amber: {
        bg: "bg-amber-500/10 dark:bg-amber-500/15",
        bgHover: "hover:bg-amber-500/20 dark:hover:bg-amber-500/25",
        border: "border-amber-500/30",
        borderHover: "hover:border-amber-500/60",
        iconBg: "bg-amber-500/15 group-hover:bg-amber-500/25",
        iconBgStatic: "bg-amber-500/20",
        iconColor: "text-amber-500",
        iconColorAlt: "text-amber-600 dark:text-amber-400",
        text: "text-amber-500",
        textAlt: "text-amber-600 dark:text-amber-400",
        badge: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
        glow: "group-hover:shadow-amber-500/20",
        glowStatic: "shadow-amber-500/20",
        dot: "bg-amber-500",
        ring: "ring-amber-500/20",
        ringAlt: "ring-amber-500/30",
        gradient: "from-amber-500/20 via-amber-500/5 to-transparent",
        cardBg: "bg-amber-500/10 hover:bg-amber-500/15",
        glowBg: "bg-amber-500"
    },
    emerald: {
        bg: "bg-emerald-500/10 dark:bg-emerald-500/15",
        bgHover: "hover:bg-emerald-500/20 dark:hover:bg-emerald-500/25",
        border: "border-emerald-500/30",
        borderHover: "hover:border-emerald-500/60",
        iconBg: "bg-emerald-500/15 group-hover:bg-emerald-500/25",
        iconBgStatic: "bg-emerald-500/20",
        iconColor: "text-emerald-500",
        iconColorAlt: "text-emerald-600 dark:text-emerald-400",
        text: "text-emerald-500",
        textAlt: "text-emerald-600 dark:text-emerald-400",
        badge: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
        glow: "group-hover:shadow-emerald-500/20",
        glowStatic: "shadow-emerald-500/20",
        dot: "bg-emerald-500",
        ring: "ring-emerald-500/20",
        ringAlt: "ring-emerald-500/30",
        gradient: "from-emerald-500/20 via-emerald-500/5 to-transparent",
        cardBg: "bg-emerald-500/10 hover:bg-emerald-500/15",
        glowBg: "bg-emerald-500"
    }
} as const

export type ColorKey = keyof typeof colorClasses
