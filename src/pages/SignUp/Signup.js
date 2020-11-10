import React from 'react'
import { homeObjThree } from './Data';
import { InfoSection } from '../../components';
// import Pricing from '../../components/Pricing/Pricing'; //avoid this, input above

const Home = () => {
    return (
        <>
         <InfoSection {...homeObjThree}/>  
        </>
    )
}

export default Home
