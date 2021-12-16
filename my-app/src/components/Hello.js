const Hello = ({name, surname}) => {
    console.log(name, surname);
    return <h1>{`${name} ${surname}`}</h1>;
}

export default Hello;