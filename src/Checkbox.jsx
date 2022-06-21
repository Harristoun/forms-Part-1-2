import React from 'react';
import { useState } from 'react';



const Checkbox = () => {
    const [check, setCheck] = useState(false)
    const handleCheck = () =>{
      if(check === true) {
        setCheck(false)
      }
      else 
      setCheck(true)
    }

    return (
        <div>
            <input type='checkbox' checked = {check} onChange={handleCheck}/>
        </div>
    );
};

export default Checkbox;