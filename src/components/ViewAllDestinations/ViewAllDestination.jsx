import React from 'react'
import SrchDestinationCountry from '../SerchDestinationCountry/SrchDestinationCountry'
import SearchDestinationPage from '../SearchDestination/SearchDestinationPage'
import SubNavofViewall from './SubNavofViewall'
import CardSection from './CardSection'
import Discover from './Discover'

function ViewAllDestination() {
  return (
    <div>
       <SrchDestinationCountry/>
<SubNavofViewall/>
<CardSection/>
<Discover/>
    </div>
  )
}

export default ViewAllDestination