import { Outlet } from "react-router-dom";
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import './App.css'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';


function App() {

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
       <div className="ia-banner">
        📸 Certaines images présentes sur ce site ont été générées par intelligence artificielle à des fins d’illustration. Elles seront remplacées prochainement par des photos réelles.
      </div>
    </>
  )
}

export default App
