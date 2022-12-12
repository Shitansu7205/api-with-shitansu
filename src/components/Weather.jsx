import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import swal from 'sweetalert'
import Footer from './Footer'
import './weather.css'
function Weather() {
    const [text, setText] = useState("")
    const [data, setData] = useState([
        {
            discription: "",
            temp: 0,
            temp_max: 0,
            temp_min: 0,
            humidity: 0,
            sunrise: 0,
            sunset: 0,
            country: ""
        }
    ])


    //   useEffect(()=>{
    //     return(
    //         <>
    //         <h1>hello</h1>
    //         </>
    //     )
    //   })
    const getdata = () => {
        if (text == "") {
        //    alert("Please Enter someting to search....")
        swal({
            title:"",
            text:"Please write something....",
            icon:"warning"
        })
        } else {
            swal({
                icon:"success",
                title:"Cool",
                text:"Data Featched Sucessfully...."
            })
            axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=f5a3cdfd21df128b747ae8cd02326ee1
        `)
                .then((response) => {
                    console.log(response.data)
                    setData({
                        discription: response.data.weather[0],
                        temp: response.data.main.temp,
                        temp_max: response.data.main.temp_max,
                        temp_min: response.data.main.temp_min,
                        humidity: response.data.main.humidity,
                        sunrise: response.data.sys.sunrise,
                        sunset: response.data.sys.sunset,
                        country: response.data.sys.country
                    })
                })
        }
    }

    const chageText = (e) => {
        setText(e.target.value)
    }
    const getSubmit = (event) => {
        event.preventDEfault()
    }
    return (
        <>
            <div className='input-data'>

                <form action="" onSubmit={getSubmit}>
                    <input type="text" placeholder='search here' onChange={chageText} className='search-bar' />
                </form>
                <button className="btn btn-outline btn-info" onClick={getdata}>click me</button>
            </div>
            <div className="weather bg-white p-2">
                <div className="data   grid grid-cols-2 gap-4 mt-5 ml-5 mr-5   ">
                    {/* <p>{data.temp}</p>
                <h2>{data.country}</h2> */}
                    <h2><span>TEMPRATURE :</span>{data.temp}</h2>

                    <h2><span>COUNTRY :</span>{data.country}</h2>
                    <h2><span>MAX-TEMP :</span>{data.temp_max}</h2>
                    <h2><span>MIN-TEMP :</span>{data.temp_min}</h2>
                    <h2><span>SUNRISE :</span>{data.sunrise}</h2>
                    <h2><span>SUNSET :</span>{data.sunset}</h2>
                    <h2><span>HUMIDITY :</span>{data.humidity}</h2>
                </div>
            </div>
            {/* footer */}
          <Footer/>
        </>
    )
}

export default Weather