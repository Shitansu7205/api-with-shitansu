import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Weather from './components/Weather';
import Fnavbar from './Fnavbar';
import Head from './components/Head';
import News from './components/News'
import Image from './components/Image';
import TextUtils from './components/TextUtils';
import Dishes from './components/Dishes';


function App() {
  return (

    <>

      <BrowserRouter>
        {/* <Navbar/> */}
        {/* <Fnavbar/> */}
        <Head />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/weather' element={<Weather />} />
          <Route path='/news' element={<News />} />
          <Route path='/images' element={<Image />} />
          <Route path='/textutils' element={<TextUtils />} />
          <Route path='/dishes' element={<Dishes />} />





        </Routes>
      </BrowserRouter>


      {/* <BrowserRouter>
    <Routes>
      <Route path='/' element={<h1>hiiiiiii</h1>} />
      <Route path ='/about' element={<h1>hello about</h1>}/>
    </Routes>
    </BrowserRouter>
        */}
    </>
  );
}

export default App;
