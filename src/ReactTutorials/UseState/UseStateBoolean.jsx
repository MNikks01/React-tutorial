import React, { useState } from 'react'

function UseStateBoolean() {

    const [boolValue, setboolValue] = useState(false)

    function changeBoolValue() {
        setboolValue(!boolValue)
    }

    return (
        <div>
            {/* <h1>{boolValue ? 'True' : 'False'}</h1> */}
            <h1>{`${boolValue}`}</h1>
            <input type={boolValue ? 'text' : 'password'} name="" id="" />
            <button onClick={changeBoolValue}>Change Boolean</button>
        </div>
    )
}

export default UseStateBoolean