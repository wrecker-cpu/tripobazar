import React from 'react'
import BreadCrumbsLink from '../../../utils/BreadCrumbsLink'
import SubNavCountry from './SubNavCountry'
import CountryPakages from './CountryPakages'
import StealDealPakage from './StealDealPakage.jsx'
import PopulerActivity from './PopulerActivity.jsx'

function CountryDestination() {
  return (
<div className="w-full h-full">
  <div className="w-[90%] mx-auto py-2">
    <BreadCrumbsLink />
  </div>


  <SubNavCountry />
  <CountryPakages />
  <StealDealPakage/>
  <PopulerActivity/>
</div>

  )
}

export default CountryDestination