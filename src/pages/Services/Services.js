import React from 'react'
import { homeObjFour } from './Data';
import { InfoSection, Pricing } from '../../components';
// import Pricing from '../../components/Pricing/Pricing'; //avoid this, input above

const Home = () => {
    return (
        <>
         <Pricing />
         <InfoSection {...homeObjFour}/>  
        </>
    )
}

export default Home
