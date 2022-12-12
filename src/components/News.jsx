import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
// import './services.css'
import './news.css'
import swal from 'sweetalert'
import Image from './Image'
import Footer from './Footer'



const Services = () => {
  const [data, setData] = useState([])
  const [category, setCategory] = useState("")
  const [country, setCountry] = useState("")



// useEffect(()=>{
//   swal({
//     icon:"info"
//     ,
//     title:"Alert",
//     text:"The Only  avalable category is mentions in the page"
//   })
// })
  // function to get data from api
  const getData = () => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apikey=11ac2e7c16da4d7b994d32fd8474b2ef`)
      .then((response) => {
        console.log(response.data.articles)
        setData(response.data.articles)
      })
    // swal("data getting wait a miniutes")
    // swal(
    //   {
    //     title: "Alert",
    //     text: "Data Featching Wait a second....",
    //     icon: "info"

    //   }
    // )
  }

  // function to change text
  const getCategory = (e) => {
    console.log(e.target.value)
    setCategory(e.target.value)
  }
  const getCountry = (event) => {
    setCountry(event.target.value)
  }


  const getSubmit = (evet) => {
    evet.preventDefault()
  }

  return (
    <>
      <div className="nav">
        <div>NEW APP --WITH SHITANSU</div>

      </div>


      <form action="" className="form" onSubmit={getSubmit}>
        <input className='input' type="text" placeholder=' Enter category' onChange={getCategory} />
        <input className='input' type="text" placeholder=' Enter country' onChange={getCountry} />
        <button onClick={getData} className="btn-1">Click me</button>
      </form>

      <div className="con">


        {
          data.map((value, index) => {
            return (
              <>
                <div className="conatiner">
                  <h2 className='title'>{value.title}</h2>
                  <img src={value.urlToImage} alt="" className='m-auto' />
                  <div className="para">
                    <p><h5>{value.description}</h5></p>
                    <p>{value.content}</p>

                  </div>
                  <button className='btn'><a href={value.url}>Clike here for more</a></button>

                </div>
              </>
            )
          })
        }
      </div>

      <div>


        <div className="flex items-center justify-center flex-col bg-white  border-dashed border-gray-200 text-black py-32 shitansu"><b>Search The Top Popular News.</b>
        <div>
        <label for="cars">Choose Category:</label>
  <select name="cars" id="cars" className='bg-blue-300 border border-red-600'>
    <option value="volvo">Sports</option>
    <option value="saab">Science</option>
    <option value="opel">Techonology</option>
    <option value="audi">business</option>
    <option value="">entertainment</option>
    <option value="Health">Health</option>
    <option value="">General</option>
  </select>



  <label htmlFor="">Choose Country:</label>
  <select name="" id="" className='bg-blue-300 border border-red-600'>
    <option value="">in</option>
    <option value="">us</option><option value="">jp</option>
  </select>
        </div>
        </div>

        
      </div>


      {/* footer */}
     <Footer/>

      {/* <Image/> */}
    </>
  )
}


export default Services;