import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react'
import { ThemeToggler } from '@/providers/theme-provider'
import { Button } from '@/components/ui/button'
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const solutionItems = [
    {
        title: 'Data Integration',
        description: 'Seamless data connectivity across all your systems',
        href: '/solutions/data-integration',
    },
    {
        title: 'Data Analytics',
        description: 'Transform raw data into actionable insights',
        href: '/solutions/data-analytics',
    },
    {
        title: 'Data Governance',
        description: 'Ensure compliance and data quality standards',
        href: '/solutions/data-governance',
    },
    {
        title: 'Data Migration',
        description: 'Safe and efficient data transfer solutions',
        href: '/solutions/data-migration',
    },
]

const navItems = [
    { name: 'Platform', href: '/platform' },
    { name: 'Industry Sectors', href: '/industry-sectors' },
    { name: 'SAP Data Quality', href: '/dap-data-quality' },
    { name: 'Resources', href: '/resources' },
    { name: 'Partners', href: '/partners' },
    { name: 'About', href: '/about' },
]

function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null)
    const location = useLocation()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        setMobileMenuOpen(false)
    }, [location.pathname])

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
                isScrolled
                    ? 'bg-background/90 backdrop-blur-2xl border-b border-border/30 shadow-[0_4px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.25)]'
                    : 'bg-background/50 backdrop-blur-sm shadow-[0_2px_20px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_20px_rgba(0,0,0,0.15)]'
            )}
        >
            <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between lg:h-20">
                    <motion.div
                        className="flex-shrink-0"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Link to="/" className="flex items-center gap-2">
                            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center overflow-hidden">
                                <span className="text-xl font-bold text-primary-foreground">O</span>
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
                                    animate={{ x: ['-100%', '100%'] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-foreground">
                                Optima
                            </span>
                        </Link>
                    </motion.div>

                    <div className="hidden lg:flex lg:items-center lg:gap-1">
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="bg-transparent hover:bg-accent/50 data-[state=open]:bg-accent/50">
                                        Solutions
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className="grid w-[500px] gap-2 p-4 lg:grid-cols-2">
                                            <Link
                                                to="/solutions"
                                                className="col-span-2 flex items-center gap-3 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 p-4 hover:from-primary/20 hover:to-accent/20 transition-colors group"
                                            >
                                                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
                                                </div>
                                                <div>
                                                    <div className="text-sm font-semibold text-foreground">Solutions Overview</div>
                                                    <div className="text-xs text-muted-foreground">Explore all our data solutions</div>
                                                </div>
                                            </Link>
                                            {solutionItems.map((item) => (
                                                <NavigationMenuLink key={item.title} asChild>
                                                    <Link
                                                        to={item.href}
                                                        className="block rounded-lg p-3  transition-colors group"
                                                    >
                                                        <div className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                                            {item.title}
                                                        </div>
                                                        <div className="text-xs text-muted-foreground mt-1">
                                                            {item.description}
                                                        </div>
                                                    </Link>
                                                </NavigationMenuLink>
                                            ))}
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>

                                {navItems.map((item) => (
                                    <NavigationMenuItem key={item.name}>
                                        <Link
                                            to={item.href}
                                            className={cn(
                                                'group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors',
                                                'hover:bg-accent/50 hover:text-accent-foreground',
                                                'focus:bg-accent focus:text-accent-foreground focus:outline-none',
                                                location.pathname === item.href && 'bg-accent/30 text-accent-foreground'
                                            )}
                                        >
                                            {item.name}
                                        </Link>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>

                    <div className="flex items-center gap-3">
                        <ThemeToggler />


                        <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                            <SheetTrigger asChild className="lg:hidden">
                                <Button variant="ghost" size="icon" className="relative">
                                    <AnimatePresence mode="wait">
                                        {mobileMenuOpen ? (
                                            <motion.div
                                                key="close"
                                                initial={{ rotate: -90, opacity: 0 }}
                                                animate={{ rotate: 0, opacity: 1 }}
                                                exit={{ rotate: 90, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <X className="h-5 w-5" />
                                            </motion.div>
                                        ) : (
                                            <motion.div
                                                key="menu"
                                                initial={{ rotate: 90, opacity: 0 }}
                                                animate={{ rotate: 0, opacity: 1 }}
                                                exit={{ rotate: -90, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <Menu className="h-5 w-5" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-full sm:max-w-md p-0" showCloseButton={false}>
                                <div className="flex flex-col h-full">
                                    <div className="flex items-center justify-between p-4 border-b border-border">
                                        <Link to="/" className="flex items-center gap-2">
                                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                                                <span className="text-lg font-bold text-primary-foreground">O</span>
                                            </div>
                                            <span className="text-lg font-bold text-foreground">Optima</span>
                                        </Link>
                                        <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                                            <X className="h-5 w-5" />
                                        </Button>
                                    </div>

                                    <div className="flex-1 overflow-y-auto py-4">
                                        <div className="px-4 space-y-1">
                                            <div>
                                                <button
                                                    onClick={() => setExpandedMobileItem(expandedMobileItem === 'solutions' ? null : 'solutions')}
                                                    className="flex items-center justify-between w-full py-3 text-base font-medium text-foreground hover:text-primary transition-colors"
                                                >
                                                    Solutions
                                                    <motion.div
                                                        animate={{ rotate: expandedMobileItem === 'solutions' ? 180 : 0 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        <ChevronDown className="h-4 w-4" />
                                                    </motion.div>
                                                </button>
                                                <AnimatePresence>
                                                    {expandedMobileItem === 'solutions' && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.2 }}
                                                            className="overflow-hidden"
                                                        >
                                                            <div className="pl-4 pb-2 space-y-1">
                                                                <Link
                                                                    to="/solutions"
                                                                    className="block py-2 text-sm text-primary font-medium hover:text-primary/80"
                                                                >
                                                                    Solutions Overview
                                                                </Link>
                                                                {solutionItems.map((item) => (
                                                                    <Link
                                                                        key={item.title}
                                                                        to={item.href}
                                                                        className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                                                                    >
                                                                        {item.title}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </div>

                                            {navItems.map((item, index) => (
                                                <motion.div
                                                    key={item.name}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: index * 0.05 }}
                                                >
                                                    <Link
                                                        to={item.href}
                                                        className={cn(
                                                            'block py-3 text-base font-medium transition-colors',
                                                            location.pathname === item.href
                                                                ? 'text-primary'
                                                                : 'text-foreground hover:text-primary'
                                                        )}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </nav>
        </motion.header>
    )
}

export default Header