import Header from './Header'
import Footer from './Footer'
import Modals from './Modals'
import Toasts from './Toasts'
import ScrollTop from './ScrollTop'
import useScrollToHash from '../hooks/useScrollToHash'

/**
 * Persistent Inertia layout: the header, footer, modals and toasts stay mounted
 * between page visits, exactly like the old react-router <Outlet /> shell.
 */
export default function Layout({ children }) {
  useScrollToHash()

  return (
    <>
      <Header />
      {children}
      <Footer />
      <Modals />
      <Toasts />
      <ScrollTop />
    </>
  )
}
