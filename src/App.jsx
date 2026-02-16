import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Skills from './sections/Skills'
import Projects from './sections/Projects'
import Chat from './sections/Chat'
import Contact from './sections/Contact'

function App() {
  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Chat />
        <Contact />
      </main>
    </>
  )
}

export default App
