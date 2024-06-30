import React from 'react'

function JSX3() {

    const obj = {
        name: 'Nikhil',
        age: 2000,
        info: {
            city: 'Ngp',
            state: "MH",
            courses: ['C', 'C++', 'Java', 'Python']
        }
    }

    return (
        <div>
            <h1>{obj.name}</h1>
            <h2>{obj.age}</h2>
            <h1>{obj.info.city}</h1>
            <h2>{obj.info.state}</h2>
            <h2>{obj.info.courses}</h2>
            <h1>{obj.info.courses[0]}</h1>
            <h2>{obj.info.courses[1]}</h2>
            <h1>{obj.info.courses[2]}</h1>
            <h2>{obj.info.courses[3]}</h2>
        </div>
    )
}

export default JSX3