# Optima Website - AI Agent Instructions

## Code Style Rules
- NO comments in code
- NO emojis anywhere in code or text
- Write clean, self-documenting code

## Project Overview
React + TypeScript marketing website for Optima with visual effects and animations. Built with Vite, Tailwind CSS v4, and shadcn/ui (new-york style). Uses ReactBits components from `https://reactbits.dev/r/`.

## Dependencies (package.json)

### Production Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.2.0 | Core framework |
| react-dom | ^19.2.0 | React DOM renderer |
| react-router-dom | ^6.30.3 | Client-side routing |
| tailwindcss | ^4.1.18 | Utility-first CSS |
| @tailwindcss/vite | ^4.1.18 | Vite plugin for Tailwind |
| framer-motion | ^12.34.0 | Animation library |
| motion | ^12.34.0 | Motion primitives |
| gsap | ^3.14.2 | Advanced animations |
| @gsap/react | ^2.1.2 | GSAP React hooks |
| @react-spring/web | ^10.0.3 | Physics-based animations |
| lenis | ^1.3.17 | Smooth scrolling |
| locomotive-scroll | ^5.0.1 | Scroll animations |
| react-scroll-parallax | ^3.5.0 | Parallax effects |
| three | ^0.167.1 | 3D graphics |
| @react-three/fiber | ^9.5.0 | React Three.js renderer |
| @react-three/drei | ^10.7.7 | Three.js helpers |
| ogl | ^1.0.11 | Lightweight WebGL |
| postprocessing | ^6.38.2 | Post-processing effects |
| lucide-react | ^0.542.0 | Primary icons |
| react-icons | ^5.5.0 | Additional icons |
| @mui/icons-material | ^7.3.7 | Material icons |
| @mui/material | ^7.3.7 | Material UI components |
| @chakra-ui/react | ^3.32.0 | Chakra UI |
| @emotion/react | ^11.14.0 | CSS-in-JS |
| @emotion/styled | ^11.14.1 | Styled components |
| radix-ui | ^1.4.3 | Headless UI primitives |
| @base-ui/react | ^1.1.0 | Base UI components |
| class-variance-authority | ^0.7.1 | Variant styling |
| clsx | ^2.1.1 | Class name utility |
| tailwind-merge | ^3.4.0 | Tailwind class merging |
| lottie-react | ^2.4.1 | Lottie animations |
| gl-matrix | ^3.4.4 | Matrix math |
| maath | ^0.10.8 | Math utilities |
| mathjs | ^14.9.1 | Math library |
| matter-js | ^0.20.0 | 2D physics engine |
| @use-gesture/react | ^10.3.1 | Gesture handling |
| @fontsource/roboto | ^5.2.9 | Roboto font |
| react-hook-form | ^7.71.1 | Form handling |
| @hookform/resolvers | ^5.2.2 | Form validation resolvers |
| zod | ^4.3.6 | Schema validation |
| date-fns | ^4.1.0 | Date utilities |
| react-day-picker | ^9.13.2 | Date picker |
| cmdk | ^1.1.1 | Command menu |
| input-otp | ^1.4.2 | OTP input |
| embla-carousel-react | ^8.6.0 | Carousel |
| react-resizable-panels | ^4.6.2 | Resizable panels |
| recharts | ^2.15.4 | Charts |
| sonner | ^2.0.7 | Toast notifications |
| vaul | ^1.1.2 | Drawer component |
| next-themes | ^0.4.6 | Theme management |

### Dev Dependencies
| Package | Version | Purpose |
|---------|---------|---------|
| vite | ^7.3.1 | Build tool |
| typescript | ~5.9.3 | Type checking |
| @vitejs/plugin-react | ^5.1.1 | React plugin |
| eslint | ^9.39.1 | Linting |
| shadcn | ^3.8.4 | UI component CLI |
| tw-animate-css | ^1.4.0 | Animation utilities |

## Architecture

### Directory Structure
```
src/
├── components/        # ReactBits visual effects (JSX) + ui/ subfolder (shadcn)
│   └── ui/           # shadcn/ui components (57 components)
├── pages/            # Page components (home/, about/, platform/, solutions/, etc.)
├── router/           # React Router config (routes.ts, Router.tsx)
├── providers/        # Context providers (theme-provider.tsx)
├── layout/           # Layout components (Header.tsx, Footer.tsx)
├── hooks/            # Custom hooks (use-mobile.ts)
├── lib/              # Utilities (utils.ts with cn() function)
├── assets/           # Static assets
```

### shadcn/ui Components (src/components/ui/)
57 pre-built UI components: accordion, alert, alert-dialog, aspect-ratio, avatar, badge, breadcrumb, button, button-group, calendar, card, carousel, chart, checkbox, collapsible, combobox, command, context-menu, dialog, direction, drawer, dropdown-menu, empty, field, form, hover-card, input, input-group, input-otp, item, kbd, label, menubar, native-select, navigation-menu, pagination, popover, progress, radio-group, resizable, scroll-area, select, separator, sheet, sidebar, skeleton, slider, sonner, spinner, switch, table, tabs, textarea, toggle, toggle-group, tooltip

### Available ReactBits Components (src/components/)
Visual effect components sourced from ReactBits. All are JSX files with paired CSS:

**Text Effects**: BlurText, CountUp, Counter, FallingText, GradientText, RotatingText, ScrollReveal, ShinyText, TextPressure, TextType, TrueFocus, VariableProximity

**Backgrounds/Visuals**: Aurora, ColorBends, Cubes, DarkVeil, GridDistortion, Hyperspeed, LightRays, LiquidEther, MetallicPaint, Particles, ShapeBlur

**Galleries/Cards**: BounceCards, CardSwap, Carousel, CircularGallery, DomeGallery, FlyingPosters, Masonry, Stack, TiltedCard, ReflectiveCard

**Navigation**: Dock, FlowingMenu, GooeyNav, InfiniteMenu, PillNav

**Interactive**: ClickSpark, ElasticSlider, Folder, GlassSurface, ImageTrail, Magnet, MagnetLines, Stepper

**Cursors**: GhostCursor, SplashCursor, TargetCursor

**Borders/Decorations**: ElectricBorder, StarBorder, LaserFlow, Prism

**Scroll Effects**: CurvedLoop, GradualBlur, ScrollFloat, ScrollStack, ScrollVelocity

**3D**: Antigravity, CircularText, FluidGlass, MagicBento, ModelViewer, PixelBlast

### Custom Hooks (src/hooks/)
- `useIsMobile()` - Returns boolean for mobile viewport detection (breakpoint: 768px)

### Layout Components (src/layout/)
- `Header.tsx` - Site header component
- `Footer.tsx` - Site footer component

### Component Usage Pattern
```tsx
import BlurText from "@/components/BlurText"
import { Button } from "@/components/ui/button"

<BlurText text="Hello" delay={200} animateBy="words" />
<Button variant="default">Click me</Button>
```

### Page Components (`src/pages/`)
Folders: home, about, platform, solutions, partners, resources, industry-sector, dap-data-quality
- Use TypeScript (.tsx files)
- Export default function with `type Props = {}` pattern
- Located in feature folders with `index.tsx` entry point

### Import Aliases
Use `@/` prefix for all src imports:
```typescript
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"
import HomePage from "@/pages/home"
```

## Styling Conventions

### Tailwind CSS v4 Setup
- Config in `src/index.css` using `@theme inline` blocks
- Uses oklch color format for theme colors
- CSS variables in `:root` and `.dark` selectors
- Use `cn()` from `@/lib/utils` for class merging

### Theme System
- Dark/light mode via `ThemeProvider` with localStorage (`optima-theme` key)
- Animated theme transitions with circular reveal effect
- Access: `const { theme, setTheme } = useTheme()`

## Developer Workflow

### Commands
```bash
npm run dev      # Start dev server
npm run build    # TypeScript check + Vite build
npm run lint     # ESLint
npm run preview  # Preview production build
```

### Adding Routes
1. Create page in `src/pages/{feature}/index.tsx`
2. Add to `src/router/routes.ts`:
```typescript
import NewPage from '@/pages/feature'
{ path: '/feature', name: 'Feature', component: NewPage }
```

### Adding shadcn/ui Components
```bash
npx shadcn@latest add {component-name}
```

### Adding Visual Effects
```bash
npx shadcn@latest add "https://reactbits.dev/r/{component-name}.json"
```

## Animation Libraries Usage
- **Framer Motion**: Import from `motion/react` (not `framer-motion`)
- **GSAP**: Use via `@gsap/react` hooks
- **React Spring**: Physics-based animations
- **Lenis**: Smooth scroll (initialized in App.tsx)
- **Locomotive Scroll**: Advanced scroll animations
- **React Scroll Parallax**: Parallax effects

## 3D Components
Components using Three.js/OGL are self-contained with their own render loops using refs for WebGL context management.

## Form Handling
- Use `react-hook-form` with `zod` for validation
- Form components from `@/components/ui/form`
- Date handling with `date-fns` and `react-day-picker`
- **GSAP**: Use via `@gsap/react` hooks
- **React Spring**: Physics-based animations
- **Lenis**: Smooth scroll wrapper

## 3D Components
Components using Three.js/OGL are self-contained with their own render loops using refs for WebGL context management.
