import axios from 'axios'
import React from 'react'
import { useState } from 'react'

function Dishes() {


const [text,setText] = useState("")
const [image, setImage] = useState()

const getImage = () => {
//   axios.get(`https://api.unsplash.com/search/photos?page=1&query=${text}&client_id=TC8m21DG0Z5_ESFdAvK9BAVORwSYuVNJqqAnsL3Fm-I`)
axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${text}`)
    .then((response) => {
      // console.log(response.data.results)
      setImage(response.data.results)
    })

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
    </div>
  )
}

export default Dishes






  



   

     