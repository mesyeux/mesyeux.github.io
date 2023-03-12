import React from 'react'
import ModelNavbar from '../ModelNavbar'
import { DIGITALS } from '../images'
import Cards from '../Cards'

function Digitals() {
  return (
    <>
        <ModelNavbar/>
        <Cards images={DIGITALS}/>   
    </>
  )
}

export default Digitals
