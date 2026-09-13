import { Routes, Route } from 'react-router-dom'
import { UIProvider } from './context/UIContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import ProgramPage from './pages/ProgramPage'
import CseCourses from './pages/CseCourses'
import SkillsoftCatalogPage from './pages/SkillsoftCatalog'

export default function App() {
  return (
    <UIProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/program" element={<ProgramPage />} />
          <Route path="/cse-courses" element={<CseCourses />} />
          <Route path="/skillsoft-catalog" element={<SkillsoftCatalogPage />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </UIProvider>
  )
}