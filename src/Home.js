import React,{useContext} from "react"
import { Appcontext } from "./App"
export default function Home() {
    const {name}=useContext(Appcontext)
    return <h1>HOME:{name}</h1>

}