import React from 'react'

function List1() {

    const arr = ['C', 'C++', 'Java', 'Python']

    return (
        <div>
            {/* type 1 */}
            {/* rendering single HTML Element */}
            {
                arr.map((val, i) => (
                    <h1 key={i}>{val}</h1>
                ))
            }
            {/* <h1>-----------------------</h1>
            <h1>{arr.map((val, i) => (`${val}, `))}</h1> */}
        </div>
    )
}

export default List1