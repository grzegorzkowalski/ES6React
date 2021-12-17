import React from 'react';
import {useParams} from "react-router-dom";

const User = () => {
    const {id} = useParams();
    if (id) {
        return (
            <p>{id}</p>
        );
    }
    else {
        return (
            <p>Brak id podanego użytkownika</p>
        )
    }
};

export default User;