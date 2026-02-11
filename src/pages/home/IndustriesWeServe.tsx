import { useState } from "react"
import { motion } from "motion/react"
import { Factory, Building2, Plane, Server, ArrowRight, Check, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import BlurText from "@/components/BlurText"
import RotatingText from "@/components/RotatingText"
import ShinyText from "@/components/ShinyText"

type Props = {}

const industries = [
    {
        icon: Factory,
        title: "Manufacturing & Engineering",
        description: "Production data & supply chain"
    },
    {
        icon: Building2,
        title: "Construction & Infrastructure",
        description: "Project data & compliance"
    },
    {
        icon: Plane,
        title: "Airports & Transportation",
        description: "Operations & regulatory reporting"
    },
    {
        icon: Server,
        title: "SAP-centric Enterprises",
        description: "Master data & migrations"
    }
]

const reasons = [
    "Deep understanding of SAP and enterprise business processes",
    "Strong focus on business outcomes, not just tools",
    "Structured yet pragmatic delivery framework",
    "Emphasis on accountability and continuous improvement",
    "Proven approach that scales from pilots to enterprise-wide adoption"
]

export default function IndustriesWeServe({ }: Props) {
    const [activeIndustry, setActiveIndustry] = useState(0)

    return (
        <section className="relative overflow-hidden">
            <div className="relative bg-primary dark:bg-primary/95">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-full">
                        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                            <defs>
                                <pattern id="diagonal-lines" patternUnits="userSpaceOnUse" width="40" height="40" patternTransform="rotate(45)">
                                    <line x1="0" y1="0" x2="0" y2="40" stroke="currentColor" strokeWidth="1" className="text-primary-foreground/5" />
                                </pattern>
                            </defs>
                            <rect width="100%" height="100%" fill="url(#diagonal-lines)" />
                        </svg>
                    </div>
                    <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] bg-accent/20 rounded-full blur-[150px]" />
                    <div className="absolute -bottom-1/2 -left-1/4 w-[600px] h-[600px] bg-primary-foreground/5 rounded-full blur-[120px]" />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12 py-24 lg:py-32">
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                            >
                                <span className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-widest uppercase bg-accent text-accent-foreground rounded-sm">
                                    Industry Agnostic
                                </span>

                                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary-foreground mb-6 leading-[1.1]">
                                    Industries{" "}
                                    <span className="relative inline-block">
                                        <span className="relative z-10">We Serve</span>
                                        <span className="absolute -bottom-2 left-0 w-full h-4 bg-accent/40 -skew-x-6" />
                                    </span>
                                </h2>

                                <p className="text-lg text-primary-foreground/70 mb-10 max-w-lg">
                                    Our framework adapts to your sector. Each engagement is tailored to industry-specific processes, risks, and regulatory expectations.
                                </p>
                            </motion.div>

                            <div className="space-y-3">
                                {industries.map((industry, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        onClick={() => setActiveIndustry(index)}
                                        className={`group relative flex items-center gap-4 p-4 cursor-pointer transition-all duration-300 ${activeIndustry === index ? "bg-primary-foreground/10" : "hover:bg-primary-foreground/5"}`}
                                    >
                                        <div className={`absolute left-0 top-0 bottom-0 w-1 transition-all duration-300 ${activeIndustry === index ? "bg-accent" : "bg-transparent group-hover:bg-accent/50"}`} />
                                        
                                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300 ${activeIndustry === index ? "bg-accent text-accent-foreground" : "bg-primary-foreground/10 text-primary-foreground/60 group-hover:bg-primary-foreground/20"}`}>
                                            <industry.icon className="w-6 h-6" />
                                        </div>

                                        <div className="flex-1">
                                            <h3 className={`font-bold transition-colors duration-300 ${activeIndustry === index ? "text-primary-foreground" : "text-primary-foreground/70"}`}>
                                                {industry.title}
                                            </h3>
                                        </div>

                                        <span className={`text-xs font-medium transition-all duration-300 ${activeIndustry === index ? "text-primary-foreground/80" : "text-primary-foreground/40"}`}>
                                            {industry.description}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="relative aspect-square max-w-md mx-auto">
                                <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-foreground/20 animate-[spin_30s_linear_infinite]" />
                                <div className="absolute inset-8 rounded-full border border-primary-foreground/10" />
                                <div className="absolute inset-16 rounded-full border border-accent/30" />
                                
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-center px-8">
                                        <div className="text-2xl lg:text-3xl font-black text-accent mb-3">
                                            Industry Agnostic
                                        </div>
                                        <div className="text-primary-foreground/60 font-medium text-sm leading-relaxed">
                                            Tailored to your sector
                                        </div>
                                    </div>
                                </div>

                                {industries.map((industry, index) => {
                                    const angle = (index * 90 - 45) * (Math.PI / 180)
                                    const radius = 45
                                    const x = 50 + radius * Math.cos(angle)
                                    const y = 50 + radius * Math.sin(angle)
                                    
                                    return (
                                        <motion.div
                                            key={index}
                                            className={`absolute w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500 ${activeIndustry === index ? "bg-accent text-accent-foreground scale-110" : "bg-primary-foreground/10 text-primary-foreground/60"}`}
                                            style={{
                                                left: `${x}%`,
                                                top: `${y}%`,
                                                transform: "translate(-50%, -50%)"
                                            }}
                                            whileHover={{ scale: 1.15 }}
                                            onClick={() => setActiveIndustry(index)}
                                        >
                                            <industry.icon className="w-7 h-7" />
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="relative bg-background py-24 lg:py-32">
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-primary to-transparent" />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
                    <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground mb-6 leading-tight">
                                    Why Organizations{" "}
                                    <span className="text-primary">Work With Us</span>
                                </h2>
                                <p className="text-muted-foreground text-lg mb-8">
                                    We combine deep technical expertise with a pragmatic approach that delivers real business value.
                                </p>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <Zap className="w-4 h-4 text-accent" />
                                    <span>Trusted by enterprise leaders</span>
                                </div>
                            </motion.div>
                        </div>

                        <div className="lg:col-span-3 space-y-4">
                            {reasons.map((reason, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.08 }}
                                    className="group flex items-start gap-4 p-5 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors duration-300"
                                >
                                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                                        <Check className="w-4 h-4 text-primary group-hover:text-primary-foreground" />
                                    </div>
                                    <p className="text-foreground font-medium pt-1">
                                        {reason}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative bg-secondary/30">
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
                </div>

                <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-8 lg:px-12 py-24 lg:py-32">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="text-center"
                    >
                        <div className="mb-8">
                            <BlurText
                                text="Begin with clarity. Scale with confidence."
                                className="text-3xl sm:text-4xl lg:text-5xl font-black text-foreground"
                                delay={100}
                                animateBy="words"
                            />
                        </div>

                        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
                            Whether you are preparing for a{" "}
                            <span className="inline-flex align-middle">
                                <RotatingText
                                    texts={["transformation", "migration", "optimization", "governance initiative"]}
                                    mainClassName="text-primary font-bold"
                                    rotationInterval={2500}
                                />
                            </span>
                            , we help you take the first step.
                        </p>

                        <div className="mb-12">
                            <ShinyText
                                text="Start with a structured Data Quality Assessment or Pilot engagement"
                                className="text-sm text-muted-foreground/80"
                                speed={3}
                                color="oklch(0.45 0.15 250)"
                                shineColor="oklch(0.75 0.15 85)"
                            />
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        >
                            <Button size="lg" className="h-14 px-10 text-base font-bold rounded-full group">
                                Start Assessment
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                className="h-14 px-10 text-base font-bold rounded-full border-2 border-primary/30 hover:border-primary hover:bg-primary/5"
                            >
                                Request a Pilot
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
