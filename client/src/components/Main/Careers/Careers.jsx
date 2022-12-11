import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import data from '../../../LocalData/data.json'

export default function Careers() {
  return (
    <div>
    <Navbar/>
    Careers
    <Footer  foonav={data.foonav}/>
    </div>
  )
}
