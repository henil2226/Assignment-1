import React from 'react';
import Functionchild from './Fuctionchild';

const Functionprops = () => {
    const den ="78"
    return ( 
        <>
        <h1>Functionprops</h1>
        <Functionchild name="denish" den={den}/>
        </>
     );
}
export default Functionprops;