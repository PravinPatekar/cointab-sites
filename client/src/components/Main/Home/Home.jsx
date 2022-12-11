import React from 'react'
import Head from './Head'
import BodyFirst from './BodyFirst'
import BodySecond from './BodySecond'
import BodyThird from './BodyThird'
import BodyForth from './BodyForth'
import data from '../../../LocalData/data.json'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import datas from '../../../LocalData/data.json'

export default function Home() {
  return (
    <div>
    <Navbar/>
      <Head/>
      <BodyFirst/>
      <BodySecond second={data.SecondBody}/>
      <BodyThird/>
      <BodyForth/>
      <Footer foonav={datas.foonav}/>
    </div>
  )
}
