import React from 'react'
import axios from 'axios'
import './image.css'
import { useState } from 'react'
import Footer from './Footer'
import swal from 'sweetalert'
function Image() {

const [text,setText] = useState("")
  const [image, setImage] = useState([])

  const getImage = () => {
    if(text==" "){
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }else{

    
    axios.get(`https://api.unsplash.com/search/photos?page=1&query=${text}&client_id=TC8m21DG0Z5_ESFdAvK9BAVORwSYuVNJqqAnsL3Fm-I`)
      .then((response) => {
        // console.log(response.data.results)
        setImage(response.data.results)
      })

  }
  }
const chageText = (e)=>{
  setText(e.target.value);
}
  const getSubmit = (event)=>{
    event.preventDefault();
  }
  return (
    <div>


      <form action="" onSubmit={getSubmit} className="fm">
       
        <input type="text" placeholder='search here' onChange={chageText} className='search-bar' />
      <button className="bottom mt-10" onClick={getImage}>click me</button>

      </form>



      <div className='men'> 
        {
          image.map((value, index) => {
            return (
              <>
                <img src={value.urls.small} alt='image'  className='img'/>
              </>
            )
          })
        }
      </div>
      <div className='mid flex items-center justify-center bg-white'>
     <h1 className='head'>Search Image Using Name</h1>
     <p>It is a image search app Create by me by using the Unsplash Api.</p>

     <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 m-6 px-4 border border-blue-700 rounded">
<a href="http://localhost:3000/"> Go Back</a>
</button>
      </div>





     {/* footer */}
    <Footer/>

    </div>
  )
}

export default Image