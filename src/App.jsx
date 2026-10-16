import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './layouts/Layout'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import Works from './pages/Works'
import About from './pages/About'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <AnimatePresence mode="sync">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/works" element={<PageTransition><Works /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <Layout>
      <AnimatedRoutes />
    </Layout>
  )
}
