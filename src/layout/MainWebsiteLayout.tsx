import Footer from '@/layout/Footer'
import Header from '@/layout/Header'

type Props = {
    children: React.ReactNode
}

function MainWebsiteLayout({ children }: Props) {
  return (
    <div>
      <Header />
        {children}

      <Footer />
    </div>
  )
}

export default MainWebsiteLayout