import React from 'react'

function JSX4() {

    const handleKeypress = () => {
        console.log('key pressed')
    }

    const handleCLick = () => {
        console.log('button clicked')
    }

    return (
        <div>
            <br />
            <input
                onKeyUp={handleKeypress}
                type="text"
                placeholder='type here'
            />
            <br />
            <br />
            <button onClick={handleCLick}>Click</button>
        </div>
    )
}

export default JSX4