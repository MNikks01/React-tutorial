import React from 'react'

function JSX2() {

    const arr = [100, 200, 300, 400, 500]

    return (
        <div>
            <h1>{arr}</h1>
            <h1>
                {
                    arr.map((val, i) =>
                    (`
                            ${val}
                            ${i === arr.length - 1 ? '. ' : ', '} 
                    `)
                    )
                }
            </h1>
            {
                arr.map((val, i) =>
                (
                    <h1 key={i}>
                        {val}
                        {i === arr.length - 1 ? '. ' : ', '}
                    </h1>
                )
                )
            }
        </div>
    )
}

export default JSX2