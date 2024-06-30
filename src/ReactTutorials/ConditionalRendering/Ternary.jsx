import React from 'react'
import ComponentA from './ComponentA';
import ComponentB from './ComponentB';

function Ternary() {

    const a = 10, b = 20;

    return (
        <div>
            {
                a < b ? <h1>a is greater</h1> : <h1>b is greater</h1>
            }
            <h1>{a < b ? 'a is greater' : 'b is greater'}</h1>
            {
                a < b ? <ComponentA /> : <ComponentB />
            }
        </div>
    )
}

export default Ternary