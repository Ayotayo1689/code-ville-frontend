import React from 'react'
import Loader from "../images/loader.svg"

const LoadingModal = () => {
  return (
    <div style={{width:'100%', height:"100%", position:"absolute", display:"flex", justifyContent:"center", alignItems:"center", background:"#42424221",  minHeight:"500px"}}>
        <img src={Loader} alt="" width={200} />
    </div>
  )
}

export default LoadingModal