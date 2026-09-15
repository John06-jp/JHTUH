import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Modals from './Modals'
import Toasts from './Toasts'
import ScrollTop from './ScrollTop'
import useScrollToHash from '../hooks/useScrollToHash'

export default function Layout() {
  useScrollToHash()
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <Modals />
      <Toasts />
      <ScrollTop />
    </>
  )
}