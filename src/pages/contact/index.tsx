import { motion, AnimatePresence } from "motion/react"
import { useState, useMemo } from "react"
import {
    Send,
    Mail,
    Phone,
    MapPin,
    Clock,
    CheckCircle2,
    ArrowRight,
    Building2,
    MessageSquare,
    Calendar,
    FileSearch,
    Wrench,
    Shield,
    BarChart3,
    Handshake,
    Loader2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useTheme } from "@/providers/theme-provider"
import MainWebsiteLayout from "@/layout/MainWebsiteLayout"
import Particles from "@/components/Particles"

const contactReasons = [
    { value: "assessment", label: "Data Quality Assessment", icon: FileSearch },
    { value: "monitoring", label: "Continuous Monitoring", icon: BarChart3 },
    { value: "remediation", label: "Data Remediation", icon: Wrench },
    { value: "governance", label: "Data Governance Enablement", icon: Shield },
    { value: "partnership", label: "Partnership Inquiry", icon: Handshake },
    { value: "general", label: "General Inquiry", icon: MessageSquare },
]

const industries = [
    "Banking & Financial Services",
    "Insurance",
    "Healthcare & Life Sciences",
    "Retail & Consumer Goods",
    "Manufacturing",
    "Telecommunications",
    "Energy & Utilities",
    "Government & Public Sector",
    "Technology",
    "Other",
]

const companySizes = [
    "1 - 50 employees",
    "51 - 200 employees",
    "201 - 1,000 employees",
    "1,001 - 5,000 employees",
    "5,001 - 10,000 employees",
    "10,000+ employees",
]

const contactInfo = [
    {
        icon: Mail,
        label: "Email Us",
        value: "contact@valueassure.com",
        href: "mailto:contact@valueassure.com",
    },
    {
        icon: Phone,
        label: "Call Us",
        value: "+91 98765 43210",
        href: "tel:+919876543210",
    },
    {
        icon: MapPin,
        label: "Visit Us",
        value: "Navi Mumbai, Maharashtra, India",
        href: "#",
    },
    {
        icon: Clock,
        label: "Business Hours",
        value: "Mon - Fri, 9AM - 6PM IST",
        href: "#",
    },
]

type Props = {}

function ContactPage({}: Props) {
    const { theme } = useTheme()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [selectedReason, setSelectedReason] = useState("")
    const [preferredContact, setPreferredContact] = useState("email")
    const [agreedToPrivacy, setAgreedToPrivacy] = useState(false)

    const particleColors = useMemo(() => {
        const isDark =
            theme === "dark" ||
            (theme === "system" &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        return isDark
            ? ["#3b82f6", "#60a5fa", "#93c5fd"]
            : ["#1d4ed8", "#2563eb", "#3b82f6"]
    }, [theme])

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setTimeout(() => {
            setIsSubmitting(false)
            setIsSubmitted(true)
        }, 2000)
    }

    const resetForm = () => {
        setIsSubmitted(false)
        setSelectedReason("")
        setPreferredContact("email")
        setAgreedToPrivacy(false)
    }

    return (
        <MainWebsiteLayout>
            <section className="relative min-h-[50vh] w-full overflow-hidden bg-background py-36 lg:py-36">
                <div className="absolute inset-0 z-0">
                    <Particles
                        key={theme}
                        particleColors={particleColors}
                        particleCount={120}
                        particleSpread={10}
                        speed={0.15}
                        particleBaseSize={100}
                        moveParticlesOnHover={true}
                        particleHoverFactor={0.3}
                        alphaParticles={true}
                        sizeRandomness={0.6}
                        cameraDistance={25}
                    />
                </div>

                <div className="absolute inset-0 bg-linear-to-b from-background/30 via-background/60 to-background z-1" />

                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-3xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm px-4 py-2 mb-6"
                        >
                            <MessageSquare className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium text-primary">
                                Get In Touch
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6"
                        >
                            Let's Start a{" "}
                            <span className="bg-linear-to-r from-primary via-primary to-primary/70 bg-clip-text text-transparent">
                                Conversation
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto"
                        >
                            Whether you're exploring data quality solutions or ready to
                            transform your data landscape, we're here to help. Tell us
                            about your needs and we'll get back to you promptly.
                        </motion.p>
                    </div>
                </div>
            </section>

            <section className="py-12 lg:py-16 bg-muted/30">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {contactInfo.map((item, index) => (
                            <motion.a
                                key={index}
                                href={item.href}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.1 * index,
                                }}
                                className="group flex items-center gap-4 p-5 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                            >
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                    <item.icon className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                                        {item.label}
                                    </div>
                                    <div className="text-sm font-medium text-foreground">
                                        {item.value}
                                    </div>
                                </div>
                            </motion.a>
                        ))}
                    </div>

                    <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-3"
                        >
                            <AnimatePresence mode="wait">
                                {isSubmitted ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.4 }}
                                        className="flex flex-col items-center justify-center text-center p-12 rounded-3xl bg-card/50 border border-border/50 min-h-125"
                                    >
                                        <div className="w-20 h-20 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
                                            <CheckCircle2 className="h-10 w-10 text-emerald-500" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-foreground mb-3">
                                            Message Sent Successfully
                                        </h3>
                                        <p className="text-muted-foreground max-w-md mb-8">
                                            Thank you for reaching out. Our team will review your
                                            inquiry and get back to you within 1-2 business days.
                                        </p>
                                        <Button
                                            onClick={resetForm}
                                            variant="outline"
                                            className="rounded-xl"
                                        >
                                            Send Another Message
                                        </Button>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 p-6 sm:p-8 lg:p-10 shadow-xl"
                                    >
                                        <div className="mb-8">
                                            <h2 className="text-2xl font-bold text-foreground mb-2">
                                                Send Us a Message
                                            </h2>
                                            <p className="text-muted-foreground">
                                                Fill out the form below and we'll respond as soon
                                                as possible.
                                            </p>
                                        </div>

                                        <form
                                            onSubmit={handleSubmit}
                                            className="space-y-8"
                                        >
                                            <div>
                                                <Label className="text-sm font-semibold text-foreground mb-3">
                                                    What can we help you with?
                                                </Label>
                                                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
                                                    {contactReasons.map(
                                                        (reason) => (
                                                            <button
                                                                key={
                                                                    reason.value
                                                                }
                                                                type="button"
                                                                onClick={() =>
                                                                    setSelectedReason(
                                                                        reason.value
                                                                    )
                                                                }
                                                                className={`group relative flex items-center gap-3 p-4 rounded-xl border text-left transition-all duration-200 cursor-pointer ${
                                                                    selectedReason ===
                                                                    reason.value
                                                                        ? "border-primary bg-primary/10 shadow-sm shadow-primary/10"
                                                                        : "border-border/50 bg-background/50 hover:border-primary/30 hover:bg-primary/5"
                                                                }`}
                                                            >
                                                                <reason.icon
                                                                    className={`h-5 w-5 shrink-0 transition-colors ${
                                                                        selectedReason ===
                                                                        reason.value
                                                                            ? "text-primary"
                                                                            : "text-muted-foreground group-hover:text-primary"
                                                                    }`}
                                                                />
                                                                <span
                                                                    className={`text-sm font-medium transition-colors ${
                                                                        selectedReason ===
                                                                        reason.value
                                                                            ? "text-foreground"
                                                                            : "text-muted-foreground group-hover:text-foreground"
                                                                    }`}
                                                                >
                                                                    {
                                                                        reason.label
                                                                    }
                                                                </span>
                                                                {selectedReason ===
                                                                    reason.value && (
                                                                    <motion.div
                                                                        layoutId="reason-check"
                                                                        className="absolute top-2 right-2"
                                                                    >
                                                                        <CheckCircle2 className="h-4 w-4 text-primary" />
                                                                    </motion.div>
                                                                )}
                                                            </button>
                                                        )
                                                    )}
                                                </div>
                                            </div>

                                            <div className="h-px bg-border/50" />

                                            <div className="grid sm:grid-cols-2 gap-5">
                                                <div className="space-y-2">
                                                    <Label htmlFor="firstName">
                                                        First Name
                                                    </Label>
                                                    <Input
                                                        id="firstName"
                                                        placeholder="John"
                                                        required
                                                        className="h-11 rounded-xl bg-background/50"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="lastName">
                                                        Last Name
                                                    </Label>
                                                    <Input
                                                        id="lastName"
                                                        placeholder="Doe"
                                                        required
                                                        className="h-11 rounded-xl bg-background/50"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid sm:grid-cols-2 gap-5">
                                                <div className="space-y-2">
                                                    <Label htmlFor="email">
                                                        Work Email
                                                    </Label>
                                                    <Input
                                                        id="email"
                                                        type="email"
                                                        placeholder="john@company.com"
                                                        required
                                                        className="h-11 rounded-xl bg-background/50"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="phone">
                                                        Phone Number
                                                    </Label>
                                                    <Input
                                                        id="phone"
                                                        type="tel"
                                                        placeholder="+91 98765 43210"
                                                        className="h-11 rounded-xl bg-background/50"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid sm:grid-cols-2 gap-5">
                                                <div className="space-y-2">
                                                    <Label htmlFor="company">
                                                        Company Name
                                                    </Label>
                                                    <Input
                                                        id="company"
                                                        placeholder="Acme Inc."
                                                        required
                                                        className="h-11 rounded-xl bg-background/50"
                                                    />
                                                </div>
                                                <div className="space-y-2">
                                                    <Label htmlFor="jobTitle">
                                                        Job Title
                                                    </Label>
                                                    <Input
                                                        id="jobTitle"
                                                        placeholder="Chief Data Officer"
                                                        className="h-11 rounded-xl bg-background/50"
                                                    />
                                                </div>
                                            </div>

                                            <div className="grid sm:grid-cols-2 gap-5">
                                                <div className="space-y-2">
                                                    <Label>Industry</Label>
                                                    <Select>
                                                        <SelectTrigger className="h-11 w-full rounded-xl bg-background/50">
                                                            <SelectValue placeholder="Select industry" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {industries.map(
                                                                (industry) => (
                                                                    <SelectItem
                                                                        key={
                                                                            industry
                                                                        }
                                                                        value={industry.toLowerCase().replace(
                                                                            /\s+/g,
                                                                            "-"
                                                                        )}
                                                                    >
                                                                        {
                                                                            industry
                                                                        }
                                                                    </SelectItem>
                                                                )
                                                            )}
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                                <div className="space-y-2">
                                                    <Label>Company Size</Label>
                                                    <Select>
                                                        <SelectTrigger className="h-11 w-full rounded-xl bg-background/50">
                                                            <SelectValue placeholder="Select size" />
                                                        </SelectTrigger>
                                                        <SelectContent>
                                                            {companySizes.map(
                                                                (size) => (
                                                                    <SelectItem
                                                                        key={
                                                                            size
                                                                        }
                                                                        value={size.toLowerCase().replace(
                                                                            /\s+/g,
                                                                            "-"
                                                                        )}
                                                                    >
                                                                        {size}
                                                                    </SelectItem>
                                                                )
                                                            )}
                                                        </SelectContent>
                                                    </Select>
                                                </div>
                                            </div>

                                            <div className="h-px bg-border/50" />

                                            <div className="space-y-2">
                                                <Label htmlFor="message">
                                                    Tell us about your data
                                                    challenges
                                                </Label>
                                                <Textarea
                                                    id="message"
                                                    placeholder="Describe your current data quality challenges, what you've tried, and what outcomes you're looking for..."
                                                    required
                                                    className="min-h-35 rounded-xl bg-background/50 resize-none"
                                                />
                                            </div>

                                            <div className="space-y-4">
                                                <Label className="text-sm font-semibold text-foreground">
                                                    Preferred Contact Method
                                                </Label>
                                                <RadioGroup
                                                    value={preferredContact}
                                                    onValueChange={
                                                        setPreferredContact
                                                    }
                                                    className="flex flex-wrap gap-6"
                                                >
                                                    <div className="flex items-center gap-2">
                                                        <RadioGroupItem
                                                            value="email"
                                                            id="contact-email"
                                                        />
                                                        <Label
                                                            htmlFor="contact-email"
                                                            className="font-normal cursor-pointer"
                                                        >
                                                            Email
                                                        </Label>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <RadioGroupItem
                                                            value="phone"
                                                            id="contact-phone"
                                                        />
                                                        <Label
                                                            htmlFor="contact-phone"
                                                            className="font-normal cursor-pointer"
                                                        >
                                                            Phone
                                                        </Label>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <RadioGroupItem
                                                            value="video"
                                                            id="contact-video"
                                                        />
                                                        <Label
                                                            htmlFor="contact-video"
                                                            className="font-normal cursor-pointer"
                                                        >
                                                            Video Call
                                                        </Label>
                                                    </div>
                                                </RadioGroup>
                                            </div>

                                            <div className="h-px bg-border/50" />

                                            <div className="flex items-start gap-3">
                                                <Checkbox
                                                    id="privacy"
                                                    checked={agreedToPrivacy}
                                                    onCheckedChange={(
                                                        checked
                                                    ) =>
                                                        setAgreedToPrivacy(
                                                            checked === true
                                                        )
                                                    }
                                                    className="mt-0.5"
                                                />
                                                <Label
                                                    htmlFor="privacy"
                                                    className="text-sm font-normal text-muted-foreground leading-relaxed cursor-pointer"
                                                >
                                                    I agree to the processing
                                                    of my personal data in
                                                    accordance with the Privacy
                                                    Policy. You can unsubscribe
                                                    at any time.
                                                </Label>
                                            </div>

                                            <Button
                                                type="submit"
                                                size="lg"
                                                disabled={
                                                    !agreedToPrivacy ||
                                                    isSubmitting
                                                }
                                                className="w-full h-13 text-base font-semibold rounded-2xl bg-primary hover:bg-primary/90 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 group disabled:opacity-50"
                                            >
                                                {isSubmitting ? (
                                                    <>
                                                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                                        Sending...
                                                    </>
                                                ) : (
                                                    <>
                                                        Send Message
                                                        <Send className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                                    </>
                                                )}
                                            </Button>
                                        </form>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-2 space-y-8"
                        >
                            <div className="rounded-3xl bg-card/50 backdrop-blur-sm border border-border/50 p-6 sm:p-8 shadow-xl">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                        <Building2 className="h-5 w-5 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-foreground">
                                        Why Value Assure?
                                    </h3>
                                </div>
                                <div className="space-y-4">
                                    {[
                                        "End-to-end data quality lifecycle expertise",
                                        "Proven frameworks across financial services, healthcare, and more",
                                        "Pragmatic, business-aligned approach",
                                        "Scalable solutions from assessment to governance",
                                        "Dedicated team of data quality specialists",
                                    ].map((point, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-start gap-3"
                                        >
                                            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                            <span className="text-sm text-muted-foreground leading-relaxed">
                                                {point}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                                        <MessageSquare className="h-5 w-5 text-primary" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-foreground">
                                        Quick Response
                                    </h3>
                                </div>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    We typically respond to all inquiries within
                                    1-2 business days. For urgent matters, please
                                    call us directly during business hours.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </MainWebsiteLayout>
    )
}

export default ContactPage