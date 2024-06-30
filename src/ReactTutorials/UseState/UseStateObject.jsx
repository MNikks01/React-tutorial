import React, { useState } from 'react'

function UseStateObject() {

    const [obj, setobj] = useState({
        name: 'Nikhil',
        age: 10,
        courses: ['html', 'css'],
        info: {
            city: 'Pune',
            state: 'MH',
            arr1: [1000, 2000],
            contact: {
                mobile: 987654321,
                email: 'email@something.com',
                arr2: ['a', 'b', 'c']
            }
        }
    })

    const handleChangeObject = () => {
        setobj(prevState => {
            return {
                ...prevState,
                courses: [...prevState.courses, 'js'],
                info: {
                    ...prevState.info,
                    arr1: [...prevState.info.arr1, 3000],
                    contact: {
                        ...prevState.info.contact,
                        arr2: [...prevState.info.contact.arr2, 'd'],
                        email: 'new email'
                    }
                }
            }
        })
    }

    return (
        <div>
            <h1>{obj.name}</h1>
            <h1>{obj.age}</h1>
            <h1>{obj.info.city}</h1>
            <h1>{obj.info.state}</h1>
            <h1>{obj.info.contact.mobile}</h1>
            <h1>{obj.info.contact.email}</h1>

            <h1>{obj.courses}</h1>
            <h1>{obj.info.arr1}</h1>
            <h1>{obj.info.contact.arr2}</h1>
            <button onClick={handleChangeObject}>Change Object</button>
        </div>
    )
}

export default UseStateObject