
function JSX1() {

    const name = 'Nikhil_Something';
    const age = 2000;
    const placeHolder = 'My name is Nikhil';
    const imgPath = 'https://picsum.photos/200/300';
    const textColor = 'red'

    return (
        <div>
            <h1 style={{ color: textColor }}>{name}</h1>
            <h2>My name is {name} and I am {age} years old</h2>
            <input type="text" placeholder={placeHolder} />
            <img src={imgPath} width={'200px'} alt="" />
        </div>
    )
}

export default JSX1