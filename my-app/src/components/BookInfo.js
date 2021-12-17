import { useState, useEffect } from "react";

const BookInfo = ({isbn}) => {
    const [title, setTitle] = useState("");
    const API = `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`;
    useEffect(() => {
        fetch(API)
            .then(res => res.json())
            .then(data => setTitle(data.items[0].volumeInfo.title))
            .catch(err => console.log(err))
            .finally(() => console.log("finnaly"));
    }, []);

    return (
        <div>
            <h1>{title.length > 0 ? title : "loading..."}</h1>
        </div>
    );
};

export default BookInfo;