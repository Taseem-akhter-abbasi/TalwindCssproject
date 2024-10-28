import Buttongradient from './assets/svg/ButtonGradient';
// import Button from './components/Button';
import Header from './components/Header';
import Hero from './components/Hero';
import Benifits from './components/Benefits';
import Collaboration from './components/Collaboration';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

function App() {
  

  return (
    <>
    <div className='pt-[4,75rem] lg:[5.25rem] overflow-hidden'>
      {/* <Button className="mt-10 ml-10">
        something
      </Button> */}
      <Header/>
      <Hero/>
      <Benifits/>
      <Collaboration/>
      <Services/>
      <Pricing/>
      <Roadmap/>
      <Footer/>
     
    </div>
      <Buttongradient/>
      {/* this give the gradient effect to the button */}
         
    </>
  )
}

export default App
