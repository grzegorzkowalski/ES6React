import {useState} from 'react';

const MyButton = () => {
    const [active, setActive] = useState(false);
    return (
        <button
            onClick={() => setActive(prev => !prev)}
        >
            {active ? "TAK" : "NIE"}
        </button>
    );
};

export default MyButton;