import {useState} from 'react';

const Hello2 = () => {
    const [name, setName] = useState("Ty");
    return (
        <form>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <h1>{name}</h1>
        </form>
    );
};

export default Hello2;