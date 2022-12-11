import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import data from '../../../LocalData/data.json'

export default function Investers() {
  return (
    <div>
    <Navbar />
      Investers
      <Footer foonav={data.foonav}/>
    </div>
  )
}
