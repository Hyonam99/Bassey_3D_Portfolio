import {BrowserRouter} from 'react-router-dom';
import {Navbar, About, Contact, Experience, Projects, Tech, Hero, StarsCanvas} from './components';

const App = () => {

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <Navbar />
        <Hero/>
        <About />
        <Experience />
        <Tech />
        <Projects />
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
