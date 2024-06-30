import React, { useState } from 'react'

function UseStateString() {

    console.log('component rendered');

    const [age, setage] = useState(10)

    function changeAge() {
        setage(age + 10)
    }

    return (
        <div>
            <h1>{age}</h1>
            <button onClick={changeAge}>Change Age</button>
        </div>
    )
}

export default UseStateString