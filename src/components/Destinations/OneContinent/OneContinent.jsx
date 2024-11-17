import React from 'react'

import SrchDestinationCountry from '../../SerchDestinationCountry/SrchDestinationCountry';
import CrousalSection from './CrousalSection';
import StealDealPakage from '../../Countrydestination/StealDealPakage';
import LastPart from './LastPart';
import PopulerPackages from './PopulerPackages';


function OneContinent() {
 

  return (
    <div>
<SrchDestinationCountry/>
<CrousalSection/>
{/* <PopulerPackages/> */}
<StealDealPakage/>
<LastPart/>
        </div>
  )
}

export default OneContinent