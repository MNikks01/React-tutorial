import React from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'

function List3() {

    const arr = [1, 2, 3, 4, 5]

    return (
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <div>
                {
                    arr.map((val, i) => (
                        <ComponentA key={i} />
                    ))
                }
            </div>
            <div>
                {
                    arr.map((val, i) => (
                        <React.Fragment key={i}>
                            <ComponentA />
                            <ComponentB />
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    )
}

export default List3