import React from 'react';
import Mycompo from './Mycompo';
import Mycompotwo from './Mycompotwo';

const Customhook = () => {
    return ( 
       <>
        <h1>
            Customhook

        </h1>
        <Mycompo/>
        <Mycompotwo/>
       </>

     );
}
 
export default Customhook;