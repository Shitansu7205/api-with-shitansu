import React, { useState } from 'react'
import './textutils.css'
import Footer from './Footer'

import {   HiVolumeUp} from 'react-icons/hi'

import { useSpeechSynthesis } from 'react-speech-kit'
function TextUtils() {

    const [text, setText] = useState("")

    const { speak } = useSpeechSynthesis();

    const evntChange = (e) => {
        setText(e.target.value)
    }


    const getupData = () => {
        let newText = text.toUpperCase()
        setText(newText)
    }


    const getlowData = () => {
        let newText = text.toLowerCase()
        setText(newText)
    }

    const getClear = () => {
        setText(" ")
    }

    const getSpeech = () => {
        if(text ==" "){
        speak({ text: " please type something" })

        }else{

   
        speak({ text: text })
    }
    }
    return (
        <div className='bg-white guddu'>
            <h1 className='top'><b>Enter The Text To Analyze Below </b></h1>
            <div className="sub-div ">
                <textarea name="" id="" cols="30" rows="10" className='area shadow-2xl rounded-lg p-5 text-red-300' value={text} onChange={evntChange} ></textarea>
                <div className="natia m-auto flex justify-evenly">
                    <button className='btn btn-outline btn-primary' onClick={getupData}>to Uppercase</button>
                    <button className='btn btn-outline' onClick={getlowData}>to Lowercase</button>
                    <button className='btn btn-outline btn-secondary' onClick={getClear}>Clear Text</button>
                    <button className='btn btn-outline  text-white' onClick={getSpeech}>Listen Text  <HiVolumeUp/></button>


                </div>

                <div className="summery  text-center pb-5">
                    <h2>Your Text Summery</h2>
                    <p>{text.split(" ").length} words and {text.length} charecters</p>
                </div>
            </div>
   <Footer/>
        </div>
    )
}

export default TextUtils