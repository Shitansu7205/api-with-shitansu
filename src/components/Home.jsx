import React from 'react'
import Footer from './Footer'
import Head from './Head'
// import Fnavbar from '../Fnavbar'
import { FaAmazonPay,FaLinkedinIn,FaGithub,HiSpeakerWave } from 'react-icons/fa';
import{HiVolumeUp} from 'react-icons/hi'
import './home.css'
function Home() {
  return (
    <div className='home'>


      <div className="carousel w-full h-96 mt-0">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://media.istockphoto.com/id/537331500/photo/programming-code-abstract-technology-background-of-software-deve.jpg?b=1&s=170667a&w=0&k=20&c=iQE4in2blXsYoRYjoX7F8e4AFF6kOaE-TZiVNMPQ5kI=
" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://media.istockphoto.com/id/1332378618/photo/close-up-of-a-smart-young-woman-coding.jpg?b=1&s=170667a&w=0&k=20&c=5vAWLufWcLP1a6CDjUUqCSBAzMHUBnq-ONJjXhIen2M=" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJK5u2BZ0mFSIJNhn-XvSLFHMPFSUXU1A9-A&usqp=CAU" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a>
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>


      {/* cards */}
      {/* <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80
"/>
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                <p class="mt-1">$16.00</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/7488102/2019/8/22/8002a744-0dad-4dbb-9481-cf0090134c3b1566454086786-Dennis-Lingo-Men-Pink-Slim-Fit-Solid-Casual-Shirt-9891566454-1.jpg" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                <p class="mt-1">$21.15</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/422x262" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                <p class="mt-1">$12.00</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/423x263" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                <p class="mt-1">$18.40</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/424x264" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">The Catalyzer</h2>
                <p class="mt-1">$16.00</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/425x265" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">Shooting Stars</h2>
                <p class="mt-1">$21.15</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/427x267" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">Neptune</h2>
                <p class="mt-1">$12.00</p>
              </div>
            </div>
            <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a class="block relative h-48 rounded overflow-hidden">
                <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/428x268" />
              </a>
              <div class="mt-4">
                <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                <h2 class="text-gray-900 title-font text-lg font-medium">The 400 Blows</h2>
                <p class="mt-1">$18.40</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}




      {/* TAILKIT UI */}

      {/* Product List Section: Categories Grid */}
      {/* <div className="bg-white">
        <div className="container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <a href="#" className="sm:col-span-2 md:col-span-1 block group relative transition ease-out active:opacity-75 overflow-hidden">
              <img src="https://cdn.tailkit.com/media/placeholders/photo-PDX_a_82obo-700x700.jpg" alt="Product Image" className="transform transition ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-600">
                  Electronics
                </div>
              </div>
            </a>
            <a href="#" className="block group relative transition ease-out active:opacity-75 overflow-hidden">
              <img src="https://cdn.tailkit.com/media/placeholders/photo-1SAnrIxw5OY-700x700.jpg" alt="Product Image" className="transform transition ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-600">
                  Computers
                </div>
              </div>
            </a>
            <a href="#" className="block group relative transition ease-out active:opacity-75 overflow-hidden">
              <img src="https://cdn.tailkit.com/media/placeholders/photo-gUPiTDBdRe4-700x700.jpg" alt="Product Image" className="transform transition ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-600">
                  Clothes
                </div>
              </div>
            </a>
            <a href="#" className="sm:col-span-2 md:col-span-1 block group relative transition ease-out active:opacity-75 overflow-hidden">
              <img src="https://cdn.tailkit.com/media/placeholders/photo-ALpEkP29Eys-700x700.jpg" alt="Product Image" className="transform transition ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-600">
                  Smart Home
                </div>
              </div>
            </a>
            <a href="#" className="block group relative transition ease-out active:opacity-75 overflow-hidden">
              <img src="https://cdn.tailkit.com/media/placeholders/photo-164_6wVEHfI-700x700.jpg" alt="Product Image" className="transform transition ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-600">
                  Shoes
                </div>
              </div>
            </a>
            <a href="#" className="block group relative transition ease-out active:opacity-75 overflow-hidden">
              <img src="https://cdn.tailkit.com/media/placeholders/photo-wW7XbWYoqK8-700x700.jpg" alt="Product Image" className="transform transition ease-out group-hover:scale-110" />
              <div className="absolute inset-0 bg-black bg-opacity-25 transition ease-out group-hover:bg-opacity-0" />
              <div className="p-4 flex items-center justify-center absolute inset-0">
                <div className="py-3 px-4 bg-white bg-opacity-95 rounded-3xl text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:text-white group-hover:bg-blue-600">
                  Wearables
                </div>
              </div>
            </a>
          </div>
        </div>
      </div> */}
      {/* END Product List Section: Categories Grid */}


      {/* TAILWIND-ELEMENTS */}
      <div className=" main ">
        {/* <div className="left bg-red-400">
          <h1>shitansu kumar gochhayat</h1>
        </div>
        <div className="right">
          <img src="https://cdn3.photostockeditor.com/t/0511/pc-man-in-blue-dress-shirt-using-computer-laptop-laptop-image.jpg" alt="" className='image' />

        </div> */}
        <section class="text-gray-600 body-font">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Hey, There
                <br class="hidden lg:inline-block" />I am Shitansu Kumar Gochhayat 
              </h1>
              <p class="mb-8 leading-relaxed">Hello guys , I am shitansu kumar gochhayat a <i><b>fullstack web developers</b></i> &
              to know more about me please go through the link in below.. </p>

              {/* buttons */}
              <div class="flex justify-center">
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2  mx-5 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href="https://www.linkedin.com/feed/"><FaLinkedinIn/></a></button>
                <button class="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href="https://www.linkedin.com/feed/"><FaGithub/></a></button>
           
              </div>
            </div>


            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img class="object-cover object-center rounded" alt="hero" src="https://cdn3.photostockeditor.com/t/0511/pc-man-in-blue-dress-shirt-using-computer-laptop-laptop-image.jpg" />
            </div>
          </div>
        </section>
      </div>

      {/* footer */}
      <Footer />

      {/* <Head/> */}

    </div>
  )
}

export default Home

