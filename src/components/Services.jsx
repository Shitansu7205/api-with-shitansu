// import React from 'react'
// import axios from 'axios'
// import { useState } from 'react'
// import './services.css'
// import swal from 'sweetalert'
// import Image from './Image'



// const Services = () => {
//   const [data, setData] = useState([])
//   const [category, setCategory] = useState("")
//   const [country, setCountry] = useState("")




//   // function to get data from api
//   const getData = () => {
//     axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apikey=11ac2e7c16da4d7b994d32fd8474b2ef`)
//       .then((response) => {
//         console.log(response.data.articles)
//         setData(response.data.articles)
//       })
// // swal("data getting wait a miniutes")
// swal(
// {
//   title:"Alert",
//   text:"Data Featching Wait a second....",
//   icon:"info"

// }
// )
//   }

//   // function to change text
//   const getCategory = (e) => {
//     console.log(e.target.value)
//     setCategory(e.target.value)
//   }
//   const getCountry = (event) => {
//     setCountry(event.target.value)
//   }


//   const getSubmit = (evet) => {
//     evet.preventDefault()
//   }

//   return (
//     <>
//       <div className="nav">
//         <div>NEW APP --WITH SHITANSU</div>

//       </div>


//       <form action="" className="form" onSubmit={getSubmit}>
//         <input type="text" placeholder=' Enter category' onChange={getCategory} />
//         <input type="text" placeholder=' Enter country' onChange={getCountry} />
//         <button onClick={getData}>clicke</button>
//       </form>

//       <div className="con">


//         {
//           data.map((value, index) => {
//             return (
//               <>
//                 <div className="conatiner">
//                   <h2>{value.title}</h2>
//                   <img src={value.urlToImage} alt="" />
//                   <div className="para">
//                     <p><h5>{value.description}</h5></p>
//                     <p>{value.content}</p>

//                   </div>
//                   <button className='btn'><a href={value.url}>Clike here for more</a></button>

//                 </div>
//               </>
//             )
//           })
//         }
//       </div>

//       <div>


//         {/* Placeholder */}
//         <div className="flex items-center justify-center  bg-gray-50  border-dashed border-gray-200 text-black py-32 shitansu"><b>Shitansu</b></div>
//       </div>


//       {/* footer */}
//       <footer className="footer footer-center p-10 bg-black text-base-content rounded">
//         <div className="grid grid-flow-col gap-4">
//           <a className="link link-hover">About us</a>
//           <a className="link link-hover">Contact</a>
//           <a className="link link-hover">Jobs</a>
//           <a className="link link-hover">Press kit</a>
//         </div>
//         <div>
//           <div className="grid grid-flow-col gap-4">
//             <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
//             <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
//             <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
//           </div>
//         </div>
//         <div>
//           <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
//         </div>
//       </footer>

//       <Image/>
//     </>
//   )
// }


// export default Services;



import React from 'react'
import Footer from './Footer'
import './services.css'
function Services() {
  return (
    // <div className='bg-white  services flex items-center justify-around'>

    //   <div className="container bg-red-700">
    //     <div className="sub ">
    //       <h1 className='heading '>What Is API As A Service?</h1>
    //       <p className='para'>API services are a means for an application to interact with a server-side system to retrieve and/or update data. API as a Service, then, is a platform or tool that offers
    //         support for designing and deploying API services.</p>
    //     </div>




    //     <div className="sub-2">
    //       <h2 className='heading-2'>What is open API && public API</h2>
    //       <p className="para-2">An open API, also called public API, is an application programming interface made publicly available to software developers. Open APIs are published on the internet and shared freely, allowing the owner of
    //         a network-accessible service to give a universal access to consumers.</p>
    //     </div>
    //   </div>
    //   <img src="https://cdn-3.backendless.com/wp-content/uploads/2021/11/What-is-API-as-a-Service-feature.png" alt="" />
    // </div>
    <>

      <div className="bg-white services">
        <section class="text-gray-600 body-font pt-12" >
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img class="object-cover object-center rounded" alt="hero" src="https://cdn-3.backendless.com/wp-content/uploads/2021/11/What-is-API-as-a-Service-feature.png" />
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
              <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">What Is API As A Service?
                {/* <br class="hidden lg:inline-block" />readymade gluten */}
              </h1>
              <p class="mb-8 leading-relaxed italic">API services are a means for an application to interact with a server-side system to retrieve and/or update data. API as a Service, then, is a platform or tool that offers
    //         support for designing and deploying API services.</p>
              <div class="flex justify-center">
                <button class=" btn inline-flex text-white  border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"><a href="https://backendless.com/what-is-api-as-a-service/">read more</a></button>
              </div>
            </div>
          </div>
        </section>
      </div>




       {/* footer */}
      <Footer/>
    </>
  )
}

export default Services