import React from "react"
import {useNavigate } from "react-router-dom"
export default function Contact() {
    let location=useNavigate()
    return(
        <div>
        <h1>Contact me</h1>
        <button onClick={()=>location("/home")}>Home</button>
        </div>
    )

}