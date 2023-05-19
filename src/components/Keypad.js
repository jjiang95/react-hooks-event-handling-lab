// Code Keypad Component Here

function handleInput(e) {
    console.log("Entering password...")
}

function Keypad (){
    return (
        <div>
            <input type="password" onChange={handleInput}/>
        </div>
    )
}

export default Keypad;