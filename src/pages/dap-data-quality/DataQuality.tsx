import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"
import { motion, useScroll, useTransform, AnimatePresence } from "motion/react"
import {
  ArrowRight,
  Database,
  BarChart3,
  RefreshCcw,
  FileWarning,
  ShieldCheck,
  Search,
  Activity,
  Users,
  Layers,
  CheckCircle2,
  ChevronRight,
  Zap,
  Target,
  Settings,
  TrendingUp,
  Workflow,
  Sparkles
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import GradientText from "@/components/GradientText"

type Props = {}

const painPoints = [
  { icon: Database, text: "Master data inconsistencies surfacing during migration" },
  { icon: BarChart3, text: "Reconciliation issues between finance and operations" },
  { icon: Users, text: "Business partner and reference data challenges" },
  { icon: FileWarning, text: "Reporting mismatches post go-live" },
  { icon: RefreshCcw, text: "Increased dependency on manual corrections" },
]

const lifecyclePhases = [
  {
    id: "pre",
    phase: "Pre-Migration",
    label: "ECC Readiness",
    color: "from-blue-500 to-cyan-500",
    icon: Search,
    items: [
      "Readiness assessment of master and transactional data",
      "Identification of high-risk data objects",
      "Early detection of inconsistencies and gaps",
      "Prioritization of data remediation efforts",
    ],
  },
  {
    id: "during",
    phase: "During Migration",
    label: "Transformation",
    color: "from-amber-500 to-orange-500",
    icon: Activity,
    items: [
      "Validation of data consistency during transformation",
      "Monitoring of migrated data quality",
      "Identification of conversion-related anomalies",
      "Support for controlled issue resolution",
    ],
  },
  {
    id: "post",
    phase: "Post-Migration",
    label: "S/4HANA Stabilization",
    color: "from-emerald-500 to-teal-500",
    icon: ShieldCheck,
    items: [
      "Monitoring data quality in live S/4HANA operations",
      "Preventing recurrence of pre-existing issues",
      "Ensuring reporting and reconciliation confidence",
      "Establishing ownership and accountability",
    ],
  },
]

const fourSolutions = [
  {
    icon: Search,
    title: "Data Quality Assessment & Diagnostics",
    description: "Establishes a clear view of SAP data risks, root causes, and business impact.",
    gradient: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/40",
    iconColor: "text-blue-500",
  },
  {
    icon: Activity,
    title: "Continuous Data Quality Monitoring",
    description: "Provides ongoing visibility into data quality across ECC, S/4HANA, and integrated systems.",
    gradient: "from-violet-500/20 to-purple-500/20",
    border: "group-hover:border-violet-500/40",
    iconColor: "text-violet-500",
  },
  {
    icon: Workflow,
    title: "Data Issue Remediation & Ownership",
    description: "Ensures SAP data issues are resolved with accountability, traceability, and prevention.",
    gradient: "from-amber-500/20 to-orange-500/20",
    border: "group-hover:border-amber-500/40",
    iconColor: "text-amber-500",
  },
  {
    icon: ShieldCheck,
    title: "Data Governance Enablement",
    description: "Defines ownership, standards, and decision models to sustain data quality across SAP landscapes.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    border: "group-hover:border-emerald-500/40",
    iconColor: "text-emerald-500",
  },
]

const differentiators = [
  { icon: Target, text: "Business-led, not tool- or transaction-driven" },
  { icon: RefreshCcw, text: "Designed for transformation and steady-state environments" },
  { icon: TrendingUp, text: "Focused on sustained outcomes, not one-time fixes" },
  { icon: Settings, text: "Aligned with real SAP operating models" },
  { icon: Layers, text: "Scalable across integrated enterprise landscapes" },
]

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 mb-6">
      <span className="w-12 h-px bg-primary" />
      <span className="text-sm font-semibold tracking-wider uppercase text-primary">{children}</span>
      <span className="w-12 h-px bg-primary" />
    </div>
  )
}

function FloatingOrb({ className, delay = 0 }: { className: string; delay?: number }) {
  return (
    <motion.div
      animate={{ y: [0, -25, 0], scale: [1, 1.08, 1] }}
      transition={{ duration: 12 + delay, repeat: Infinity, ease: "easeInOut", delay }}
      className={className}
    />
  )
}

function HeroSection() {
  const navigate = useNavigate()
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={containerRef} className="relative min-h-[85vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-background to-accent/5 dark:from-primary/10 dark:via-background dark:to-accent/8" />

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <FloatingOrb className="absolute top-20 right-[15%] w-72 h-72 bg-primary/8 dark:bg-primary/5 rounded-full blur-[100px]" />
        <FloatingOrb className="absolute bottom-20 left-[10%] w-96 h-96 bg-accent/8 dark:bg-accent/4 rounded-full blur-[120px]" delay={4} />
        <FloatingOrb className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-primary/4 dark:bg-primary/2 rounded-full blur-[150px]" delay={2} />

        <svg className="absolute inset-0 w-full h-full opacity-[0.03] dark:opacity-[0.02]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="hero-dots" width="5" height="5" patternUnits="userSpaceOnUse">
              <circle cx="0.8" cy="0.8" r="0.4" fill="currentColor" className="text-foreground" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#hero-dots)" />
        </svg>

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
          className="absolute -top-24 -right-24 w-125 h-125"
        >
          <div className="absolute inset-0 rounded-full border border-dashed border-primary/10 dark:border-primary/6" />
          <div className="absolute inset-12 rounded-full border border-primary/8 dark:border-primary/4" />
          <div className="absolute inset-24 rounded-full border border-dotted border-accent/12 dark:border-accent/6" />
        </motion.div>

        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -left-32 w-100 h-100"
        >
          <div className="absolute inset-0 rounded-full border border-accent/10 dark:border-accent/6" />
          <div className="absolute inset-8 rounded-full border border-dashed border-primary/8 dark:border-primary/4" />
        </motion.div>

        {[
          { top: "top-24 right-20", size: "w-14 h-14", rotate: "rotate-12", delay: 0 },
          { top: "top-48 right-48", size: "w-9 h-9", rotate: "-rotate-6", delay: 1 },
          { top: "bottom-40 right-28", size: "w-11 h-11", rotate: "rotate-0", delay: 2 },
          { top: "top-56 left-20", size: "w-8 h-8", rotate: "rotate-45", delay: 1.5 },
          { top: "bottom-48 left-28", size: "w-12 h-12", rotate: "-rotate-12", delay: 3 },
        ].map((item, i) => (
          <motion.div
            key={i}
            animate={{ y: [-12, 12, -12] }}
            transition={{ duration: 7 + i, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
            className={`absolute ${item.top} ${item.size} rounded-2xl border border-primary/12 dark:border-primary/8 bg-linear-to-br from-primary/5 to-transparent backdrop-blur-sm ${item.rotate}`}
          />
        ))}
      </div>

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 w-full">
        <div className="flex flex-col items-center justify-center py-24 lg:py-36">
          <div className="max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mb-8 flex justify-center"
            >
              <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card/80 backdrop-blur-md px-5 py-2.5 shadow-lg">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                </span>
                <span className="text-sm font-medium text-foreground/80">SAP Data Quality Solutions</span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08] mb-8"
            >
              SAP Data Quality for
              <br />
              <span className="text-primary">ECC & S/4HANA</span> Landscapes
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl sm:text-2xl text-foreground/70 font-normal leading-relaxed mb-6 mx-auto max-w-2xl"
            >
              Ensuring trusted data before, during, and after SAP transformations.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-12 mx-auto max-w-3xl"
            >
              SAP landscapes are undergoing significant change. Organizations are preparing for, executing, or stabilizing their transition from ECC to S/4HANA—often while operating complex, integrated environments.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Button
                size="lg"
                onClick={() => navigate("/contact")}
                className="h-14 px-8 text-base font-semibold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 group"
              >
                Start a Data Quality Assessment
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/contact")}
                className="h-14 px-8 text-base font-semibold rounded-xl border-2 hover:bg-secondary transition-all duration-300 backdrop-blur-sm"
              >
                Schedule a Discussion
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-border z-10" />
    </section>
  )
}

function IntroSection() {
  return (
    <section className="relative py-10 lg:py-5 bg-linear-to-b from-background via-secondary/15 to-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <FloatingOrb className="absolute top-1/4 right-[8%] w-80 h-80 bg-primary/5 dark:bg-primary/3 rounded-full blur-[100px]" delay={3} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionLabel>The Challenge</SectionLabel>

            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-8 leading-[1.1]">
              Why SAP Data Quality
              <br />
              <span className="relative">
                <span className="relative z-10">Requires Special Attention</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-primary/15 dark:bg-primary/25 z-0" />
              </span>
            </h2>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
              Data quality plays a critical role at every stage of this journey. Without a structured approach, data issues surface during migration, intensify after go-live, and multiply across integrated systems—impacting operations, reporting, and business confidence.
            </p>

            <div className="p-6 rounded-2xl bg-primary/5 dark:bg-primary/10 border border-primary/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="relative flex items-start gap-4">
                <div className="shrink-0 w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <p className="text-foreground font-medium leading-relaxed">
                  Our SAP-focused data quality approach helps organizations identify, control, and sustain trusted data across ECC, S/4HANA, and integrated SAP landscapes.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="relative space-y-4">
            {painPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <div className="relative flex items-center gap-5 p-5 rounded-2xl bg-card/60 dark:bg-card/40 backdrop-blur-sm border border-border hover:border-primary/40 hover:bg-card/90 transition-all duration-300 cursor-default">
                  <div className="absolute inset-0 rounded-2xl bg-linear-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative shrink-0 w-14 h-14 rounded-2xl bg-linear-to-br from-primary/15 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <point.icon className="w-6 h-6 text-primary" />
                  </div>

                  <p className="relative flex-1 text-sm sm:text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                    {point.text}
                  </p>

                  <div className="relative shrink-0 w-8 h-8 rounded-full border border-border group-hover:border-primary/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-2 group-hover:translate-x-0">
                    <ArrowRight className="w-4 h-4 text-primary" />
                  </div>

                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-primary rounded-r-full group-hover:h-8 transition-all duration-300" />
                </div>
              </motion.div>
            ))}

            <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-dashed border-primary/15 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border-2 border-dashed border-accent/10 rounded-2xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}

function LifecycleSection() {
  const [activePhase, setActivePhase] = useState(0)

  return (
    <section className="relative py-10 lg:py-5 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary/3 dark:bg-primary/2 rounded-full blur-[150px]" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="lifecycle-lines" width="5" height="5" patternUnits="userSpaceOnUse">
              <path d="M 5 0 L 0 5" stroke="currentColor" strokeWidth="0.1" className="text-foreground" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#lifecycle-lines)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionLabel>Transformation Lifecycle</SectionLabel>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6"
          >
            SAP Data Quality Across the
            <br className="hidden sm:block" />{" "}
            <GradientText
              colors={["oklch(0.45 0.15 250)", "oklch(0.75 0.15 85)", "oklch(0.45 0.15 250)"]}
              animationSpeed={6}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight"
            >
              Transformation Lifecycle
            </GradientText>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Before migration, data quality directly influences project timelines, risk, and outcomes.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="lg:w-80 shrink-0">
            <div className="lg:sticky lg:top-32 space-y-3">
              {lifecyclePhases.map((phase, index) => (
                <motion.button
                  key={phase.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => setActivePhase(index)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 group relative overflow-hidden ${
                    activePhase === index
                      ? "bg-card border-primary/30 shadow-lg shadow-primary/5"
                      : "bg-card/40 border-border hover:border-primary/20 hover:bg-card/70"
                  }`}
                >
                  {activePhase === index && (
                    <motion.div
                      layoutId="activePhaseIndicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-primary rounded-r-full"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center bg-linear-to-br ${phase.color} ${
                        activePhase === index ? "opacity-100 shadow-lg" : "opacity-60"
                      } transition-all duration-300`}
                    >
                      <phase.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {phase.label}
                      </span>
                      <h3 className="font-bold text-foreground">{phase.phase}</h3>
                    </div>
                  </div>
                </motion.button>
              ))}

              <div className="hidden lg:flex flex-col items-center py-4">
                <div className="w-px h-full bg-linear-to-b from-primary/20 via-primary/5 to-transparent min-h-15" />
              </div>
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={activePhase}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="p-8 sm:p-10 rounded-3xl bg-card/80 dark:bg-card/50 backdrop-blur-sm border border-border relative overflow-hidden">
                  <div className={`absolute top-0 right-0 w-64 h-64 bg-linear-to-bl ${lifecyclePhases[activePhase].color} opacity-5 rounded-full blur-3xl`} />

                  <div className="relative space-y-6">
                    <div className="flex items-center gap-4 mb-8">
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center bg-linear-to-br ${lifecyclePhases[activePhase].color} shadow-lg`}>
                        {(() => {
                          const Icon = lifecyclePhases[activePhase].icon
                          return <Icon className="w-7 h-7 text-white" />
                        })()}
                      </div>
                      <div>
                        <Badge variant="secondary" className="mb-1">
                          {lifecyclePhases[activePhase].label}
                        </Badge>
                        <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                          {lifecyclePhases[activePhase].phase}
                        </h3>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      {lifecyclePhases[activePhase].items.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.4, delay: i * 0.1 }}
                          className="group flex items-start gap-4 p-4 rounded-xl bg-background/60 dark:bg-background/30 border border-border/50 hover:border-primary/30 hover:bg-background/80 transition-all duration-300"
                        >
                          <div className={`shrink-0 w-8 h-8 rounded-lg bg-linear-to-br ${lifecyclePhases[activePhase].color} flex items-center justify-center mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity duration-300`}>
                            <CheckCircle2 className="w-4 h-4 text-white" />
                          </div>
                          <p className="text-sm sm:text-base text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                            {item}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

function IntegratedLandscapesSection() {
  return (
    <section className="relative py-10 lg:py-5 bg-linear-to-b from-background via-secondary/20 to-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <FloatingOrb className="absolute bottom-1/4 left-[5%] w-96 h-96 bg-accent/6 dark:bg-accent/3 rounded-full blur-[120px]" delay={5} />
        <FloatingOrb className="absolute top-1/4 right-[10%] w-72 h-72 bg-primary/6 dark:bg-primary/3 rounded-full blur-[100px]" delay={2} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative max-w-4xl mx-auto"
        >
          <div className="relative p-8 sm:p-12 lg:p-16 rounded-3xl bg-card/60 dark:bg-card/30 backdrop-blur-md border border-border overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-accent/5" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/8 rounded-full blur-[80px]" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/8 rounded-full blur-[80px]" />

            <div className="relative">
              <SectionLabel>Integration</SectionLabel>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-8 leading-[1.1]">
                Data Quality in Integrated
                <br />
                <span className="text-primary">SAP Landscapes</span>
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                Modern SAP environments rarely operate in isolation. Data flows across ECC, S/4HANA, analytics platforms, cloud applications, and non-SAP systems.
              </p>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl">
                Data quality issues commonly arise at integration points, during data transformations, and when ownership spans multiple teams. Our approach ensures end-to-end visibility and control across integrated landscapes.
              </p>

              <div className="flex flex-wrap gap-3">
                {["ECC", "S/4HANA", "Analytics Platforms", "Cloud Applications", "Non-SAP Systems"].map((system, i) => (
                  <motion.div
                    key={system}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                  >
                    <Badge
                      variant="outline"
                      className="px-4 py-2 text-sm font-medium border-primary/20 bg-primary/5 text-foreground hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 cursor-default"
                    >
                      <Layers className="w-3.5 h-3.5 mr-2 text-primary" />
                      {system}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -top-3 -right-3 w-20 h-20 border-2 border-dashed border-primary/15 rounded-2xl -z-10" />
          <div className="absolute -bottom-3 -left-3 w-28 h-28 border-2 border-dashed border-accent/10 rounded-2xl -z-10" />
        </motion.div>
      </div>
    </section>
  )
}

function FourSolutionsSection() {
  return (
    <section className="relative py-10 lg:py-32 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/6 dark:bg-primary/3 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-accent/8 dark:bg-accent/4 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <SectionLabel>Our Solutions</SectionLabel>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6"
          >
            How Our Four Solutions Apply to
            <br className="hidden sm:block" />{" "}
            <span className="text-primary">SAP Environments</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {fourSolutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group"
            >
              <div className={`relative h-full p-8 rounded-3xl bg-card/70 dark:bg-card/40 backdrop-blur-sm border border-border ${solution.border} transition-all duration-500 hover:shadow-xl hover:shadow-primary/5 overflow-hidden`}>
                <div className={`absolute inset-0 bg-linear-to-br ${solution.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />

                <div className="relative">
                  <div className={`w-14 h-14 rounded-2xl bg-linear-to-br ${solution.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className={`w-6 h-6 ${solution.iconColor}`} />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {solution.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </div>

                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full border border-border group-hover:border-primary/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  <ArrowRight className="w-4 h-4 text-primary" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function DifferentSection() {
  return (
    <section className="relative py-10 lg:py-5 bg-linear-to-b from-background via-secondary/15 to-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <FloatingOrb className="absolute top-1/3 right-[5%] w-80 h-80 bg-accent/6 dark:bg-accent/3 rounded-full blur-[100px]" delay={4} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <SectionLabel>Our Difference</SectionLabel>

              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-8 leading-[1.1]">
                What Makes Our
                <br />
                <span className="text-primary">SAP Approach</span>
                <br />
                Different
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Built on real-world SAP transformation experience, our approach delivers sustainable data quality outcomes that align with how organizations actually operate.
              </p>
            </motion.div>
          </div>

          <div className="lg:col-span-3 space-y-4">
            {differentiators.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group"
              >
                <div className="flex items-center gap-5 p-6 rounded-2xl bg-card/50 dark:bg-card/30 backdrop-blur-sm border border-border hover:border-accent/40 hover:bg-card/80 transition-all duration-300">
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 dark:bg-accent/15 flex items-center justify-center group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-accent" />
                  </div>

                  <p className="text-base sm:text-lg font-medium text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                    {item.text}
                  </p>

                  <div className="shrink-0 ml-auto opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function GettingStartedSection() {
  return (
    <section className="relative py-10 lg:py-5 bg-background overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-primary/4 dark:bg-primary/2 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <SectionLabel>Getting Started</SectionLabel>

          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
            How Organizations
            <br />
            <span className="text-primary">Typically Start</span>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-12 max-w-2xl mx-auto">
            Most SAP organizations begin with a focused SAP Data Quality Assessment on critical domains, then expand into continuous monitoring, remediation, and governance enablement.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
            {["Assessment", "Monitoring", "Remediation", "Governance"].map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="flex items-center gap-2 px-5 py-3 rounded-xl bg-card/80 border border-border hover:border-primary/30 hover:bg-card transition-all duration-300">
                  <span className="w-6 h-6 rounded-full bg-primary/15 text-primary text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                  <span className="text-sm font-semibold text-foreground">{step}</span>
                </div>
                {i < 3 && (
                  <ChevronRight className="w-4 h-4 text-muted-foreground hidden sm:block" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function CTASection() {
  const navigate = useNavigate()

  return (
    <section className="relative py-10 lg:py-5 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-primary/8 via-background to-accent/8 dark:from-primary/15 dark:via-background dark:to-accent/12" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FloatingOrb className="absolute top-1/4 left-[10%] w-80 h-80 bg-primary/8 dark:bg-primary/5 rounded-full blur-[100px]" />
        <FloatingOrb className="absolute bottom-1/4 right-[10%] w-72 h-72 bg-accent/10 dark:bg-accent/5 rounded-full blur-[80px]" delay={3} />

        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150"
        >
          <div className="absolute inset-0 rounded-full border border-dashed border-primary/8" />
          <div className="absolute inset-16 rounded-full border border-accent/8" />
          <div className="absolute inset-32 rounded-full border border-dotted border-primary/6" />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 sm:px-8 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-primary/10 border border-primary/20"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Take the Next Step</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-8 leading-[1.1]">
            Strengthen Data Quality
            <br />
            Across Your{" "}
            <span className="text-primary">SAP Landscape</span>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              size="lg"
              onClick={() => navigate("/contact")}
              className="h-14 px-8 text-base font-semibold rounded-xl shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 group"
            >
              Start a Data Quality Assessment
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/contact")}
              className="h-14 px-8 text-base font-semibold rounded-xl border-2 hover:bg-secondary transition-all duration-300 backdrop-blur-sm"
            >
              Schedule a Discussion
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

function DataQuality({ }: Props) {
  return (
    <div className="relative">
      <HeroSection />
      <IntroSection />
      <LifecycleSection />
      <IntegratedLandscapesSection />
      <FourSolutionsSection />
      <DifferentSection />
      <GettingStartedSection />
      <CTASection />
    </div>
  )
}

export default DataQuality