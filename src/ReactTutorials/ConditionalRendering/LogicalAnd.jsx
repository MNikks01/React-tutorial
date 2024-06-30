import React from 'react'
import ComponentA from './ComponentA';

function LogicalAnd() {

    const a = 10, b = 20;

    return (
        <div>

            {
                a < b &&
                <>
                    <h1>from LogicalAnd</h1>
                    <ComponentA />
                </>
            }
        </div>
    )
}

export default LogicalAnd