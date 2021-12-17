const Buttons = () => {
    const logClickEvent = (e) => {
        console.log(e);
        console.log("Pierwszy przycisk klikniety");
    }
    const sumFromPrompt = () => {
        const A = parseInt(prompt("Podaj liczbę A?"));
        const B = parseInt(prompt("Podaj liczbę B?"));
        console.log(A+B);
    }
    const getWindowsSize = () => {
        console.log(window.innerHeight, window.innerWidth);
    }
    return (
        <>
            <button onClick={logClickEvent}>Klik 1</button>
            <button onClick={sumFromPrompt}>Klik 2</button>
            <button onClick={getWindowsSize}>Klik 3</button>

        </>
    );
};

export default Buttons;