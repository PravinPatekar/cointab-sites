import React from 'react'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import data from '../../../LocalData/data.json'

export default function Contacts() {
  return (
    <div>
    <Navbar/>
    Contacts
    <Footer  foonav={data.foonav}/>
    </div>
  )
}
