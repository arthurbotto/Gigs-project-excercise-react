const ClickListener = () => {
    const handleClick = (event) => {
        alert("Click worked, yaay!");
        console.log(event);
    }

    return (
        <>
            <button onClick={handleClick}>Click Me!</button>
        </>
    )
}

export default ClickListener;
