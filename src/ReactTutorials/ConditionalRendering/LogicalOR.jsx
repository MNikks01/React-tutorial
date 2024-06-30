import React from 'react'
import ComponentA from './ComponentA';

function LogicalOR() {

    const a = 10, b = 20;

    return (
        <div>

            {
                a < b ||
                <>
                    <h1>from LogicalOR</h1>
                    <ComponentA />
                </>
            }
        </div>
    )
}

export default LogicalOR