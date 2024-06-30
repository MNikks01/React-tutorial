import React from 'react'

function List2() {

    const users = [
        { userName: 'Nikhil', userId: 1 },
        { userName: 'Sajal', userId: 2 },
        { userName: 'tejswini', userId: 3 },
        { userName: 'manthan', userId: 4 },
        { userName: 'vedant', userId: 5 },
        { userName: 'saurabh', userId: 6 },
        { userName: 'ayush1', userId: 7 },
        { userName: 'ayush2', userId: 8 },
    ]

    return (
        <div>
            {
                users.map((val, i) => (
                    <div key={i}>
                        <h1>{val.userName}</h1>
                        <h1>{val.userId}</h1>
                    </div>
                ))
            }

            <h1>------------------------------</h1>

            {
                users.map((val, i) => (
                    <>
                        <h1>{val.userName}</h1>
                        <h1>{val.userId}</h1>
                    </>
                ))
            }
            <h1>------------------------------</h1>

            {
                users.map((val, i) => (
                    <React.Fragment key={i}>
                        <h1>{val.userName}</h1>
                        <h1>{val.userId}</h1>
                    </React.Fragment>
                ))
            }
        </div>
    )
}

export default List2