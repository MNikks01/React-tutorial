import React, { useState } from 'react'

function UseStateNumbers() {

    const [age, setage] = useState('Nikhil')

    function changeAge() {
        setage(prevState => prevState + 'Something')
    }

    return (
        <div>
            <h1>{age}</h1>
            <button onClick={changeAge}>Change Age</button>
        </div>
    )
}

export default UseStateNumbers