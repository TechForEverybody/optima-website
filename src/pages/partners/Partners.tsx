import { motion, useScroll, useTransform } from "motion/react"
import { useRef } from "react"
import {
    Handshake,
    Quote,
    Cpu,
    Database,
    Activity,
    Shield,
    FileSearch,
    BarChart3,
    Users,
    Briefcase,
    Globe,
    ExternalLink,
    Puzzle,
    Focus,
    Heart
} from "lucide-react"
import RotatingText from "@/components/RotatingText"
import ElectricBorder from "@/components/ElectricBorder"
import ShinyText from "@/components/ShinyText"

type Props = {}

const datagapsCapabilities = [
    { icon: FileSearch, label: "Assessment" },
    { icon: Activity, label: "Monitoring" },
    { icon: Users, label: "Remediation" },
    { icon: Shield, label: "Governance" }
]

const deliveryStrengths = [
    {
        title: "SAP Transformations",
        description: "Integrating data quality into large-scale SAP migration and modernization programs"
    },
    {
        title: "Data Modernization",
        description: "Supporting cloud migration and platform consolidation with quality-first approach"
    },
    {
        title: "Enterprise Governance",
        description: "Embedding quality controls within broader data governance and compliance initiatives"
    }
]

export default function Partners({}: Props) {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    })
    
    const parallaxY = useTransform(scrollYProgress, [0, 1], [60, -60])
    const scaleProgress = useTransform(scrollYProgress, [0, 0.5], [0.95, 1])

    return (
        <section ref={containerRef} className="relative bg-background overflow-hidden">

            <div className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center overflow-hidden">
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-linear-to-b from-primary/8 via-primary/3 to-background dark:from-primary/12 dark:via-primary/5 dark:to-background" />
                    
                    <motion.div 
                        style={{ y: parallaxY }}
                        className="absolute inset-0"
                    >
                        {[...Array(20)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-px bg-primary/10 dark:bg-primary/15"
                                style={{
                                    left: `${5 + i * 5}%`,
                                    height: `${30 + Math.random() * 40}%`,
                                    top: `${Math.random() * 30}%`
                                }}
                                initial={{ scaleY: 0, opacity: 0 }}
                                animate={{ scaleY: 1, opacity: 1 }}
                                transition={{ duration: 1.5, delay: i * 0.05, ease: "easeOut" }}
                            />
                        ))}
                    </motion.div>
                    
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-linear-to-t from-background to-transparent" />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-36">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            >
                                <div className="inline-flex items-center gap-3 mb-8 px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20">
                                    <Handshake className="w-4 h-4 text-primary" />
                                    <span className="text-sm font-medium text-primary">Strategic Partnerships</span>
                                </div>
                            </motion.div>

                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                                className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight text-foreground mb-6 leading-[0.95]"
                            >
                                Our{" "}
                                <span className="relative inline-block">
                                    <RotatingText
                                        texts={["Partners", "Ecosystem", "Alliance"]}
                                        rotationInterval={3000}
                                        mainClassName="text-primary"
                                        staggerDuration={0.03}
                                        splitBy="characters"
                                        transition={{ type: "spring", damping: 20, stiffness: 200 }}
                                    />
                                </span>
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                                className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed"
                            >
                                Collaborating with trusted partners to deliver sustainable data quality outcomes.
                            </motion.p>
                        </div>

                        <div className="lg:col-span-5">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                                animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                className="relative"
                            >
                                <div className="relative w-64 h-64 sm:w-72 sm:h-72 mx-auto">
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 rounded-full border border-dashed border-primary/20"
                                    />
                                    <motion.div
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-4 rounded-full border border-dashed border-accent/20"
                                    />
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-8 rounded-full border border-dashed border-primary/10"
                                    />
                                    
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-primary to-primary/80 flex items-center justify-center shadow-2xl shadow-primary/30">
                                            <Handshake className="w-10 h-10 text-white" />
                                        </div>
                                    </div>
                                    
                                    {[
                                        { Icon: Cpu, angle: 0 },
                                        { Icon: Database, angle: 72 },
                                        { Icon: Shield, angle: 144 },
                                        { Icon: BarChart3, angle: 216 },
                                        { Icon: Users, angle: 288 }
                                    ].map(({ Icon, angle }, i) => {
                                        const radius = 120
                                        const x = Math.cos((angle * Math.PI) / 180) * radius
                                        const y = Math.sin((angle * Math.PI) / 180) * radius
                                        return (
                                            <motion.div
                                                key={i}
                                                initial={{ opacity: 0, scale: 0 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
                                                className="absolute w-10 h-10 rounded-xl bg-card border border-border shadow-lg flex items-center justify-center"
                                                style={{
                                                    left: `calc(50% + ${x}px - 20px)`,
                                                    top: `calc(50% + ${y}px - 20px)`
                                                }}
                                            >
                                                <Icon className="w-5 h-5 text-primary" />
                                            </motion.div>
                                        )
                                    })}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative py-12 lg:py-28">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                    <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="lg:col-span-5 lg:sticky lg:top-32"
                        >
                            <div className="relative">
                                <Quote className="w-16 h-16 text-primary/10 dark:text-primary/15 mb-4" />
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                                    Our Partnership{" "}
                                    <span className="text-primary">Philosophy</span>
                                </h2>
                                
                                <div className="w-24 h-1 bg-linear-to-r from-primary to-primary/40 rounded-full mb-8" />
                            </div>
                        </motion.div>

                        <div className="lg:col-span-7">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: 0.1 }}
                                className="relative pl-8 border-l-2 border-primary/20 mb-12"
                            >
                                <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-primary -translate-x-[7px]" />
                                
                                <p className="text-2xl sm:text-3xl font-semibold text-foreground mb-6 leading-snug">
                                    We partner to strengthen outcomes — not to increase complexity.
                                </p>
                                
                                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                    We believe strong partnerships are essential to delivering scalable, 
                                    enterprise-grade data quality solutions. Our partnerships are selective 
                                    and purpose-driven — focused on enhancing delivery quality, accelerating 
                                    outcomes, and ensuring long-term value for our clients.
                                </p>
                                
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Our ecosystem is designed to complement our advisory-led approach, 
                                    combining deep business expertise with proven platforms and delivery 
                                    capabilities. Each partnership is evaluated based on how it helps 
                                    clients achieve clarity, control, and confidence in their data.
                                </p>
                                
                                <div className="absolute left-0 bottom-0 w-3 h-3 rounded-full bg-primary/30 -translate-x-[7px]" />
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                className="grid grid-cols-3 gap-4"
                            >
                                {[
                                    { icon: Focus, label: "Selective" },
                                    { icon: Puzzle, label: "Purpose-Driven" },
                                    { icon: Heart, label: "Value-Focused" }
                                ].map((item) => (
                                    <motion.div
                                        key={item.label}
                                        whileHover={{ y: -4, scale: 1.02 }}
                                        className="text-center p-4 rounded-2xl bg-card border border-border"
                                    >
                                        <item.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                                        <span className="text-sm font-medium text-foreground">{item.label}</span>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative py-20 lg:py-28">
                <div className="absolute inset-0 bg-linear-to-b from-secondary/40 via-secondary/20 to-background dark:from-secondary/20 dark:via-secondary/10 dark:to-background" />
                
                <div className="relative mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-4 mb-4"
                    >
                        <div className="w-10 h-10 rounded-xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center">
                            <Cpu className="w-5 h-5 text-primary" />
                        </div>
                        <span className="text-sm font-semibold tracking-wider uppercase text-primary">
                            Technology Partners
                        </span>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg text-muted-foreground max-w-3xl mb-12"
                    >
                        Our technology partnerships enable automation, consistency, and scalability across data quality initiatives.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        style={{ scale: scaleProgress }}
                    >
                        <ElectricBorder 
                            color="#5227FF" 
                            speed={1.5} 
                            chaos={0.15} 
                            borderRadius={24}
                        >
                            <div className="p-8 sm:p-10 lg:p-14 bg-card rounded-3xl">
                                <div className="grid lg:grid-cols-12 gap-10 items-center">
                                    <div className="lg:col-span-5">
                                        <div className="flex items-center gap-5 mb-6">
                                            <motion.div
                                                whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                                                transition={{ duration: 0.5 }}
                                                className="relative"
                                            >
                                                <div className="w-20 h-20 rounded-3xl bg-linear-to-br from-primary via-primary/90 to-primary/70 flex items-center justify-center shadow-2xl shadow-primary/30">
                                                    <span className="text-4xl font-black text-white">D</span>
                                                </div>
                                            </motion.div>
                                            <div>
                                                <h3 className="text-3xl font-bold text-foreground">Datagaps</h3>
                                                <ShinyText
                                                    text="Enterprise Data Quality Platform"
                                                    speed={3}
                                                    className="text-sm font-medium"
                                                />
                                            </div>
                                        </div>
                                        
                                        <p className="text-muted-foreground leading-relaxed mb-6">
                                            An enterprise-grade data quality platform supporting assessment, 
                                            monitoring, remediation, and governance.
                                        </p>
                                        
                                        <p className="text-muted-foreground leading-relaxed mb-8">
                                            Our partnership with Datagaps enables structured, repeatable, and 
                                            auditable data quality execution across SAP and enterprise landscapes 
                                            -- without making solutions tool-dependent.
                                        </p>

                                        <motion.a
                                            href="https://datagaps.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ gap: "12px" }}
                                            className="inline-flex items-center gap-2 text-primary font-semibold group"
                                        >
                                            <span>Visit Datagaps</span>
                                            <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                                        </motion.a>
                                    </div>

                                    <div className="lg:col-span-7">
                                        <div className="grid grid-cols-2 gap-3">
                                            {datagapsCapabilities.map((cap, index) => (
                                                <motion.div
                                                    key={cap.label}
                                                    initial={{ opacity: 0, rotateY: -15, x: 30 }}
                                                    whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.6, delay: index * 0.12 }}
                                                    whileHover={{ 
                                                        y: -6, 
                                                        boxShadow: "0 20px 40px -15px rgba(82, 39, 255, 0.15)" 
                                                    }}
                                                    className="relative p-6 rounded-2xl bg-background border border-border overflow-hidden group cursor-default"
                                                >
                                                    <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                                    
                                                    <div className="absolute top-3 right-3 text-5xl font-black text-primary/[0.04] dark:text-primary/[0.06] select-none">
                                                        0{index + 1}
                                                    </div>
                                                    
                                                    <div className="relative">
                                                        <motion.div
                                                            whileHover={{ rotate: 360 }}
                                                            transition={{ duration: 0.6 }}
                                                            className="w-12 h-12 rounded-2xl bg-primary/10 dark:bg-primary/20 flex items-center justify-center mb-4"
                                                        >
                                                            <cap.icon className="w-6 h-6 text-primary" />
                                                        </motion.div>
                                                        <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">
                                                            {cap.label}
                                                        </h4>
                                                    </div>
                                                    
                                                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-primary via-primary/60 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ElectricBorder>
                    </motion.div>
                </div>
            </div>

            <div className="relative py-20 lg:py-28">
                <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.7 }}
                            className="lg:col-span-5"
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center">
                                    <Briefcase className="w-5 h-5 text-accent-foreground dark:text-accent" />
                                </div>
                                <span className="text-sm font-semibold tracking-wider uppercase text-muted-foreground">
                                    Delivery & Consulting Partners
                                </span>
                            </div>

                            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6 leading-tight">
                                Extending Reach Through{" "}
                                <span className="text-primary">Collaboration</span>
                            </h3>

                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                We collaborate with consulting and delivery partners to support complex 
                                transformation and operating environments.
                            </p>

                            <p className="text-muted-foreground leading-relaxed">
                                These partnerships allow us to integrate seamlessly into broader programs 
                                -- while maintaining clarity of roles and accountability.
                            </p>
                        </motion.div>

                        <div className="lg:col-span-7">
                            <div className="relative">
                                <div className="absolute left-6 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-border to-transparent hidden sm:block" />
                                
                                <div className="space-y-6">
                                    {deliveryStrengths.map((item, index) => (
                                        <motion.div
                                            key={item.title}
                                            initial={{ opacity: 0, x: 40, rotateZ: 2 }}
                                            whileInView={{ opacity: 1, x: 0, rotateZ: 0 }}
                                            viewport={{ once: true, margin: "-50px" }}
                                            transition={{ duration: 0.6, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                                            whileHover={{ x: 8 }}
                                            className="relative sm:pl-16 group cursor-default"
                                        >
                                            <div className="absolute left-4 top-6 w-5 h-5 rounded-full border-2 border-primary bg-background z-10 hidden sm:flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary group-hover:bg-white transition-colors duration-300" />
                                            </div>
                                            
                                            <div className="p-6 rounded-2xl bg-card border border-border group-hover:border-primary/30 group-hover:shadow-xl group-hover:shadow-primary/5 transition-all duration-500">
                                                <div className="flex items-start gap-4">
                                                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-linear-to-br from-primary/15 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                        <Globe className="w-6 h-6 text-primary" />
                                                    </div>
                                                    <div>
                                                        <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                                                            {item.title}
                                                        </h4>
                                                        <p className="text-muted-foreground leading-relaxed">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
