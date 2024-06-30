import React, { useEffect, useState } from 'react'

function UseEffect1() {

    const [count, setcount] = useState(0)
    const [count1, setcount1] = useState(0)
    const [count2, setcount2] = useState(0)

    console.log('called');
    useEffect(() => {
        console.log('useEffect called on every re-render');
    })  // will be called/executes on every component re-render

    useEffect(() => {
        console.log('useEffect called only on first render');
    }, []) // will be called/executes only on first render

    useEffect(() => {
        console.log('useEffect depending on count value');
    }, [count]) // will be called/executes only on count value change

    useEffect(() => {
        console.log('useEffect depending on count1 value');
    }, [count1]) // will be called/executes only on count1 value change

    useEffect(() => {
        console.log('useEffect depending on count2 value');
    }, [count2]) // will be called/executes only on count2 value change

    useEffect(() => {
        console.log('useEffect depending on count1 or count2 value');
    }, [count1, count2]) // will be called/executes only on count1 or count2 value change

    return (
        <div>
            <h1>count - {count}</h1>
            <button onClick={() => { setcount(count + 1) }}>count</button>
            <h1>count1 - {count1}</h1>
            <button onClick={() => { setcount1(count1 + 1) }}>count1</button>
            <h1>count2 - {count2}</h1>
            <button onClick={() => { setcount2(count2 + 1) }}>count2</button>
        </div>
    )
}

export default UseEffect1