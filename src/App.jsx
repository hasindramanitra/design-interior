
import './App.css'
import Banner from './components/Banner'
import Banner2 from './components/Banner2'
import Brands from './components/Brands'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Newsletter from './components/Newsletter'
import Service from './components/Service'
import Testimonial from './components/Testimonial'

function App() {

  return (
    <main className='overflow-x-hidden'>
      <Navbar/>
      <Hero/>
      <Brands/>
      <Service/>
      <Banner/>
      <Banner2/>
      <Testimonial/>
      <Newsletter/>
      <Footer/>
    </main>
  )
}

export default App
