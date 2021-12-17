const ButtonToClick = (props) => {
    const handleClick = () => {
        if (typeof props.addToCounter === "function") {
            props.addToCounter();
        }
        else {
            console.log("Nie przekazałeś odpowiedniej metody przez props");
        }
    }
    return (
        <button
            onClick={handleClick}
        >
            Klik me
        </button>
    );
};

export default ButtonToClick;