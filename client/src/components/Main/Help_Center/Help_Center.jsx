import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import data from '../../../LocalData/data.json'

export default function Help_Center() {
  return (
    <div>
    <Navbar/>
      HELP
       <Footer foonav={data.foonav} />
    </div>
  )
}
