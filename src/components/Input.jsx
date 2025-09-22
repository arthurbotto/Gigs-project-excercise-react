const InputListener = () => {
    const handleInput = (event) => {
        console.log(event.target.value)
    }

    return (
        <>
            <div>
                <input onChange={handleInput} placeholder="Test"/>
            </div>
            
        </>
    )
}

export default InputListener