import React from 'react'
import Head from './Head'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import data from '../../../LocalData/data.json'

export default function About() {
  return (
    <div>
    <Navbar/>
      <Head/>
      <Footer  foonav={data.foonav}/>
    </div>
  )
}
