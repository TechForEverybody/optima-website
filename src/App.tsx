import { useEffect } from 'react'
import Lenis from 'lenis'
import { TooltipProvider } from './components/ui/tooltip'
import { ThemeProvider } from './providers/theme-provider'
import Router from './router/Router'
import Header from './layout/Header'

function App() {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <>
      <ThemeProvider>
        <TooltipProvider>

          <main className="pt-16 lg:pt-20">
            <Router />
          </main>
        </TooltipProvider>
      </ThemeProvider>
    </>
  )
}

export default App
