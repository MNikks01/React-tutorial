import React from 'react'
import CompA from './CompA'
import CompB from './CompB'
import CompCDefaultValues from './CompCDefaultValues'

function ParentComp() {

    const a = 20
    const b = 30
    const name = 'Nikhil'
    const img = ''
    const age = 20
    const courses = ['C', 'C++', 'Java', 'Python', 'C#', 'JavaScript']
    const info = {
        city: 'Ngp',
        state: 'MH'
    }
    const address = {
        city: 'Pune',
        state: 'MH'
    }


    return (
        <div>
            {/* props passing/sending */}
            <CompCDefaultValues
                num1={a}
                b={b}
                name={null}
                img={img}
                age={age}
                courses={courses}
                info={info}
                address={address}
            />
        </div>
    )
}

export default ParentComp