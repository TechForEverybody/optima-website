import { motion, useScroll, useTransform, useMotionValue, useSpring } from "motion/react"
import { ArrowRight, Mail, ShieldCheck, Activity, Layers, Gauge, Database, CheckCircle2, BarChart3, Link2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRef, useMemo, useCallback } from "react"
import { useTheme } from "@/providers/theme-provider"
import Aurora from "@/components/Aurora"
import RotatingText from "@/components/RotatingText"
import SplashCursor from "@/components/SplashCursor"
import { ScrollVelocity } from "@/components/ScrollVelocity"
import ClickSpark from "@/components/ClickSpark"
import ShinyText from "@/components/ShinyText"
import GradientText from "@/components/GradientText"

type Props = {}

function MagneticWrapper({ children, strength = 0.15 }: { children: React.ReactNode; strength?: number }) {
    const ref = useRef<HTMLDivElement>(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const springX = useSpring(x, { stiffness: 200, damping: 20 })
    const springY = useSpring(y, { stiffness: 200, damping: 20 })

    const handleMouseMove = useCallback((e: React.MouseEvent) => {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        x.set((e.clientX - rect.left - rect.width / 2) * strength)
        y.set((e.clientY - rect.top - rect.height / 2) * strength)
    }, [x, y, strength])

    const handleMouseLeave = useCallback(() => {
        x.set(0)
        y.set(0)
    }, [x, y])

    return (
        <motion.div
            ref={ref}
            style={{ x: springX, y: springY }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </motion.div>
    )
}

export default function HomeHero({ }: Props) {
    const containerRef = useRef<HTMLElement>(null)
    const { theme } = useTheme()

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    })

    const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
    const heroOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0])
    const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.92])

    const isDark = useMemo(() => {
        return theme === "dark" ||
            (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)
    }, [theme])

    const auroraColors = useMemo((): [string, string, string] => {
        return isDark
            ? ["#1a3a6b", "#27D4FF", "#b7791f"]
            : ["#4361ee", "#3a86ff", "#f77f00"]
    }, [isDark])

    return (
        <ClickSpark sparkColor={isDark ? "#8EBDFF" : "#3182ce"} sparkSize={12} sparkRadius={20} sparkCount={10} duration={500}>
        <section ref={containerRef} className="relative w-full overflow-hidden">
            <SplashCursor
                SIM_RESOLUTION={128}
                DYE_RESOLUTION={1024}
                DENSITY_DISSIPATION={3}
                VELOCITY_DISSIPATION={2}
                PRESSURE={0.1}
                CURL={3}
                SPLAT_RADIUS={0.15}
                SPLAT_FORCE={4000}
                SHADING={true}
                COLOR_UPDATE_SPEED={8}
                BACK_COLOR={{ r: 0, g: 0, b: 0 }}
                TRANSPARENT={true}
            />

            <div className="relative ">
                <div className="absolute inset-0 z-0">
                    <Aurora
                        key={theme}
                        colorStops={auroraColors}
                        amplitude={1.4}
                        blend={0.6}
                        speed={0.4}
                    />
                </div>

                <div className="absolute inset-0 z-1 hidden dark:block bg-background/70" />

                {!isDark && (
                    <div className="absolute inset-0 z-1" style={{
                        background: `
                            linear-gradient(135deg, 
                                #dbeafe 0%, 
                                #e0e7ff 15%, 
                                #f0e6ff 30%, 
                                #fce7f3 45%, 
                                #fff1e6 55%, 
                                #fef3c7 65%, 
                                #ecfdf5 80%, 
                                #dbeafe 100%
                            )
                        `
                    }} />
                )}

                <div className="absolute inset-0 z-2 pointer-events-none hidden lg:block overflow-hidden">

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 1.8 }}
                        className="absolute top-[12%] right-[4%] flex flex-col gap-3 w-[220px]"
                    >
                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                            className="rounded-xl border border-border/50 dark:border-border/30 bg-white/70 dark:bg-card/50 backdrop-blur-lg p-3 shadow-md dark:shadow-sm"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-5 h-5 rounded-md bg-emerald-500/20 dark:bg-emerald-500/15 flex items-center justify-center">
                                    <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-500" />
                                </div>
                                <span className="text-[10px] font-semibold text-foreground/80 dark:text-foreground/70 uppercase tracking-wider">Validated</span>
                            </div>
                            <div className="space-y-1.5">
                                {["customer_id", "order_date", "revenue"].map((field, i) => (
                                    <div key={field} className="flex items-center justify-between">
                                        <span className="text-[10px] font-mono text-muted-foreground/80 dark:text-muted-foreground/60">{field}</span>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            animate={{ width: [85, 95, 85][i] + "%" }}
                                            transition={{ duration: 1.5, delay: 2.2 + i * 0.2 }}
                                            className="h-1 rounded-full bg-emerald-500/40 dark:bg-emerald-500/30 max-w-[50px]"
                                        />
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="rounded-xl border border-border/50 dark:border-border/30 bg-white/70 dark:bg-card/50 backdrop-blur-lg p-3 shadow-md dark:shadow-sm"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-5 h-5 rounded-md bg-primary/20 dark:bg-primary/15 flex items-center justify-center">
                                    <BarChart3 className="w-3 h-3 text-primary" />
                                </div>
                                <span className="text-[10px] font-semibold text-foreground/80 dark:text-foreground/70 uppercase tracking-wider">Quality Score</span>
                            </div>
                            <div className="flex items-end gap-[3px] h-8">
                                {[40, 65, 55, 80, 70, 90, 85, 95, 88, 92].map((h, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ height: 0 }}
                                        animate={{ height: `${h}%` }}
                                        transition={{ duration: 0.8, delay: 2.5 + i * 0.08, ease: "easeOut" }}
                                        className="flex-1 rounded-sm bg-primary/35 dark:bg-primary/25"
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1.2, delay: 2.2 }}
                        className="absolute bottom-[15%] left-[3%] flex flex-col gap-3 w-[250px]"
                    >
                        <motion.div
                            animate={{ y: [0, -5, 0] }}
                            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            className="rounded-xl border border-border/50 dark:border-border/30 bg-white/70 dark:bg-card/50 backdrop-blur-lg p-3 shadow-md dark:shadow-sm"
                        >
                            <div className="flex items-center gap-2 mb-2.5">
                                <div className="w-5 h-5 rounded-md bg-primary/20 dark:bg-primary/15 flex items-center justify-center">
                                    <Database className="w-3 h-3 text-primary" />
                                </div>
                                <span className="text-[10px] font-semibold text-foreground/80 dark:text-foreground/70 uppercase tracking-wider">Data Pipeline</span>
                            </div>
                            <div className="flex items-center gap-1">
                                {["Extract", "Transform", "Validate", "Load"].map((step, i) => (
                                    <div key={step} className="flex items-center gap-1">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 2.8 + i * 0.3 }}
                                            className={`px-1.5 py-0.5 rounded text-[8px] font-semibold ${i === 2 ? "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400" : "bg-muted/60 text-muted-foreground/70"}`}
                                        >
                                            {step}
                                        </motion.div>
                                        {i < 3 && (
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: [0.3, 0.8, 0.3] }}
                                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
                                                className="text-muted-foreground/30 text-[8px]"
                                            >
                                                &rarr;
                                            </motion.div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, -7, 0] }}
                            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                            className="rounded-xl border border-border/50 dark:border-border/30 bg-white/70 dark:bg-card/50 backdrop-blur-lg p-3 shadow-md dark:shadow-sm"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <div className="w-5 h-5 rounded-md bg-amber-500/20 dark:bg-amber-500/15 flex items-center justify-center">
                                    <Link2 className="w-3 h-3 text-amber-600 dark:text-amber-400" />
                                </div>
                                <span className="text-[10px] font-semibold text-foreground/80 dark:text-foreground/70 uppercase tracking-wider">Data Chain</span>
                            </div>
                            <div className="flex items-center gap-1">
                                {[0, 1, 2, 3, 4].map((i) => (
                                    <div key={i} className="flex items-center gap-1">
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: 3.2 + i * 0.15 }}
                                            className="w-6 h-5 rounded border border-border/50 dark:border-border/40 bg-muted/50 dark:bg-muted/40 flex items-center justify-center"
                                        >
                                            <span className="text-[7px] font-mono text-muted-foreground/80 dark:text-muted-foreground/60">
                                                {["0xA3", "0xF7", "0x2B", "0xE1", "0x9C"][i]}
                                            </span>
                                        </motion.div>
                                        {i < 4 && (
                                            <motion.div
                                                animate={{ opacity: [0.2, 0.7, 0.2] }}
                                                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
                                                className="w-2 h-[1px] bg-amber-500/50 dark:bg-amber-500/40"
                                            />
                                        )}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 3, duration: 1 }}
                        className="absolute top-[55%] right-[6%]"
                    >
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                            className="rounded-xl border border-border/50 dark:border-border/30 bg-white/70 dark:bg-card/50 backdrop-blur-lg p-3 shadow-md dark:shadow-sm w-[180px]"
                        >
                            <div className="text-[9px] font-mono text-muted-foreground/70 dark:text-muted-foreground/50 mb-1.5">schema.validate()</div>
                            <div className="space-y-1">
                                {[
                                    { field: "email", type: "string", ok: true },
                                    { field: "age", type: "int", ok: true },
                                    { field: "region", type: "enum", ok: false },
                                ].map((row, i) => (
                                    <motion.div
                                        key={row.field}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 3.4 + i * 0.2 }}
                                        className="flex items-center justify-between"
                                    >
                                        <span className="text-[9px] font-mono text-muted-foreground/80 dark:text-muted-foreground/60">{row.field}</span>
                                        <div className="flex items-center gap-1.5">
                                            <span className="text-[8px] font-mono text-muted-foreground/60 dark:text-muted-foreground/40">{row.type}</span>
                                            <div className={`w-1.5 h-1.5 rounded-full ${row.ok ? "bg-emerald-500/70 dark:bg-emerald-500/60" : "bg-amber-500/70 dark:bg-amber-500/60"}`} />
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                </div>

                <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden opacity-[0.04] dark:opacity-[0.04]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)`,
                        backgroundSize: "32px 32px"
                    }}
                />

                <motion.div
                    style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
                    className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 flex flex-col items-center justify-center min-h-screen"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="mb-8"
                    >
                        <div className="inline-flex items-center gap-2.5 rounded-full border border-primary/30 dark:border-primary/20 bg-primary/8 dark:bg-primary/5 backdrop-blur-sm px-4 py-1.5 shadow-sm">
                            <div className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
                            </div>
                            <ShinyText
                                text="Enterprise Data Quality"
                                speed={4}
                                className="text-xs font-semibold tracking-widest uppercase"
                                color={isDark ? "#8EBDFF" : "#3182ce"}
                                shineColor={isDark ? "#ffffff" : "#63b3ed"}
                            />
                        </div>
                    </motion.div>

                    <div className="text-center max-w-5xl">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
                            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] font-extrabold tracking-tighter text-foreground leading-[0.95] mb-2"
                        >
                            <GradientText
                                colors={isDark ? ["#e2e8f0", "#8EBDFF", "#e2e8f0", "#d4a843", "#e2e8f0"] : ["#0f172a", "#1e5faa", "#0f172a", "#b8860b", "#0f172a"]}
                                animationSpeed={6}
                                className="inline"
                            >
                                Data You Can
                            </GradientText>
                        </motion.h1>

                        <div className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[6.5rem] font-extrabold tracking-tighter leading-[0.95] mb-10 h-[1.1em] overflow-hidden flex items-center justify-center">
                            <span className="text-primary">
                                <RotatingText
                                    texts={["Trust.", "Govern.", "Certify.", "Validate.", "Rely On."]}
                                    rotationInterval={2500}
                                    splitBy="words"
                                    staggerDuration={0}
                                    staggerFrom="first"
                                    mainClassName="inline-flex"
                                    splitLevelClassName="inline-flex overflow-hidden"
                                    transition={{ type: "spring", damping: 30, stiffness: 200 }}
                                />
                            </span>
                        </div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="text-lg md:text-xl lg:text-2xl text-muted-foreground font-normal leading-relaxed mx-auto max-w-2xl mb-12"
                        >
                            Monitor, validate, and govern data quality across
                            SAP and enterprise landscapes{" "}
                            <span className="text-foreground font-medium">continuously</span>.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <MagneticWrapper strength={0.12}>
                                    <Button
                                        size="lg"
                                        className="h-14 px-8 text-sm font-semibold rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group"
                                    >
                                        Start Assessment
                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </Button>
                            </MagneticWrapper>
                            <MagneticWrapper strength={0.12}>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="h-14 px-8 text-sm font-semibold rounded-full border-border/60 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 group"
                                >
                                    <Mail className="mr-2 h-4 w-4" />
                                    Contact Now
                                </Button>
                            </MagneticWrapper>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
                    >
                        {[
                            { icon: ShieldCheck, label: "Data Validation", desc: "Automated quality checks" },
                            { icon: Activity, label: "Live Monitoring", desc: "Real-time dashboards" },
                            { icon: Layers, label: "SAP Integration", desc: "Native connectors" },
                            { icon: Gauge, label: "Quality Scoring", desc: "Actionable metrics" },
                        ].map((item, i) => (
                            <motion.div
                                key={item.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 1.3 + i * 0.1 }}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                                className="group relative rounded-2xl border border-border/50 dark:border-border/40 bg-white/50 dark:bg-card/40 backdrop-blur-md p-4 text-center cursor-default hover:border-primary/40 dark:hover:border-primary/30 hover:bg-white/70 dark:hover:bg-card/60 transition-colors duration-300 shadow-sm dark:shadow-none"
                            >
                                <div className="mx-auto mb-2 w-9 h-9 rounded-xl bg-primary/15 dark:bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 dark:group-hover:bg-primary/15 transition-colors">
                                    <item.icon className="w-4 h-4 text-primary" />
                                </div>
                                <div className="text-sm font-semibold text-foreground">{item.label}</div>
                                <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2.5, duration: 1 }}
                        className="absolute bottom-10 left-1/2 -translate-x-1/2"
                    >
                        <motion.div
                            animate={{ y: [0, 6, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-5 h-8 rounded-full border-2 border-muted-foreground/25 flex justify-center pt-1.5"
                        >
                            <motion.div
                                animate={{ y: [0, 8, 0], opacity: [0.6, 0, 0.6] }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                                className="w-0.5 h-1.5 rounded-full bg-muted-foreground/50"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            <div className="relative z-10 border-y border-border/50 dark:border-border/40 bg-white/80 dark:bg-background/80 backdrop-blur-sm overflow-hidden py-4">
                <ScrollVelocity
                    texts={["Data Quality", "Data Governance", "SAP Integration", "Enterprise Analytics", "Continuous Monitoring"]}
                    velocity={40}
                    className="text-sm md:text-base font-semibold tracking-wider uppercase text-muted-foreground/50 dark:text-muted-foreground/40 mx-8"
                    numCopies={20}
                />
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-24 bg-linear-to-t from-background to-transparent z-5 pointer-events-none" />
        </section>
        </ClickSpark>
    )
}
