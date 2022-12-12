import React from 'react'
import swal from 'sweetalert'
import Footer from './Footer'

function Contact() {
  const sendData = () => {
    swal({
      icon: "success",
      text: "Data Send Successfully....",
      title: "Thanks"
    })

  }
  return (
    <div className='bg-white'>
      {/* <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="text" placeholder="password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div> */}


      {/* MAMBA UI */}
      {/* <section className="p-6 dark:bg-gray-800 dark:text-gray-100">
        <div className="container grid gap-6 mx-auto text-center lg:grid-cols-2 xl:grid-cols-5">
          <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
            <span className="block mb-2 dark:text-violet-400">Mamba design system</span>
            <h1 className="text-5xl font-extrabold dark:text-gray-50">Build it with Mamba</h1>
            <p className="my-8">
              <span className="font-medium dark:text-gray-50">Modular and versatile.</span>Fugit vero facilis dolor sit neque cupiditate minus esse accusamus cumque at.
            </p>
            <form novalidate="" action="" className="self-stretch space-y-3 ng-untouched ng-pristine ng-valid">
              <div>
                <label for="name" className="text-sm sr-only">Your name</label>
                <input id="name" type="text" placeholder="Your name" className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700" />
              </div>
              <div>
                <label for="lastname" className="text-sm sr-only">Email address</label>
                <input id="lastname" type="text" placeholder="Email address" className="w-full rounded-md focus:ring focus:ring-violet-400 dark:border-gray-700" />
              </div>
              <button type="button" className="w-full py-2 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Join the waitlist</button>
            </form>
          </div>
          <img src="https://source.unsplash.com/random/480x360" alt="" className="object-cover w-full rounded-md xl:col-span-3 dark:bg-gray-500" />
        </div>
      </section> */}


      <section>
        <div className="dark:bg-violet-400">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl dark:text-gray-900">Who Invented the API?</h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">The question of who invented the API is a little like asking who discovered Antarctica – the answers are as varied as the parties that submit them, and there’s little agreement as to a hard and fast date. The question becomes even more complex due to the nature of an API (which we will discuss shortly) – that being said, we can at least start with some of the earliest conceptual formations towards the idea of an API with the work of Wilkes, Wheeler, and Gill.</p>
            <div className="flex flex-wrap justify-center">
              {/* <button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50">Get started</button> */}
              <button type="button" className=" hover:bg-slate-600    hover:text-white px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900 bg-slate-400">Learn more</button>
            </div>
          </div>
        </div>
        {/* <img src="https://source.unsplash.com/random/480x320" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" /> */}
        <img src="https://nordicapis.com/wp-content/uploads/Who-Invented-The-API-.jpg" alt="" className="w-5/6 mx-auto mb-12 -mt-20 rounded-lg shadow-md lg:-mt-40 dark:bg-gray-500" />

      </section>




<form  action="https://formspree.io/f/xvoyedgp"
  method="POST">
      <section class="text-white body-font relative ">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12 mt-">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">Name</label>
                  <input type="text" id="name" autoComplete='off'  required name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
                  <input  required type="email" autoComplete='off' id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
                  <textarea  required  autoComplete='off'   id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-green-500 focus:bg-white focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button class="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg" onClick={sendData}>Send</button>
              </div>
              <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a class="text-black hover:text-blue-500">shitansukumargochhayat@email.com</a>
                <p class="leading-normal my-5">49 Smith St.
                  <br />Saint Cloud, MN 56301
                </p>
                <span class="inline-flex">
                  <a class="text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a class="ml-4 text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a class="ml-4 text-gray-500">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                    </svg>
                  </a>
                  <a class="ml-4 text-gray-500">
                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      </form>
      {/* footer */}
     <Footer/>

    </div>
  )
}

export default Contact