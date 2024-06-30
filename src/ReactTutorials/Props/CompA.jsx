import React from 'react'

function CompA(props) { // props receiveing

    // props will be an object
    console.log(props);
    return (
        <div>
            {/* props consuming */}
            <h1>{props.num1}</h1>
            <h1>{props.b}</h1>
            <h1>{props.name}</h1>
            <h1>{props.img}</h1>
            <h1>{props.age}</h1>
            <h1>{props.courses}</h1>
            <h1>{props.info.city}</h1>
            <h1>{props.info.state}</h1>
            <h1>{props.city}</h1>
            <h1>{props.state}</h1>
            <input
                type="text"
                placeholder={props.info.state}
            />
        </div>
    )
}

export default CompA