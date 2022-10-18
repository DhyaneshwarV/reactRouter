// import React from "react"
// import { useParams } from "react-router-dom"

// export default function Profile() {
//     let {username}=useParams()
//     return (
//         <div>
//              <h1>PROFILE {username}</h1>
//         </div>
   
//     )
// }
// import React,{useContext} from "react"
import React from "react"
// import { Appcontext } from "./App"
export default function Profile() {
    // const {setname}=useContext(Appcontext)
    // const{name}=useContext(Appcontext)
    return (
        <div>
            {/* <input value={name} onChange={e=>setname(e.target.value)}/> */}
            {/* <h1>PROFILE :{name}</h1> */}
            <h1>PROFILE:</h1>
        </div>
   
    )
}