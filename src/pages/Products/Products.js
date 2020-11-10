import React from 'react'
import {homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSection, Pricing } from '../../components';
// import Pricing from '../../components/Pricing/Pricing'; //avoid this, input above

const Home = () => {
    return (
        <>
         <InfoSection {...homeObjTwo}/>
         <InfoSection {...homeObjThree}/>
         <Pricing />
         <InfoSection {...homeObjFour}/>  
        </>
    )
}

export default Home
