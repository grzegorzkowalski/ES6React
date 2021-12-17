import Search from "./components/Search";
import Hello from "./components/Hello";
import ParentComponent from "./components/ParentComponent";
import ChildComponent from "./components/ChildComponent";
import GrandchildComponent from "./components/GrandchildComponent";
import HelloWorld from "./components/HelloWorld";
import Buttons from "./components/Buttons";
import ButtonCounter from "./components/ButtonCounter";
import MyButton from "./components/MyButton";
import Hello2 from "./components/Hello2";
import BookInfo from "./components/BookInfo";
import './App.css';

function App() {
    return (
    <div style={{margin: "20px"}}>
        {/*<Search />*/}
        {/*<Hello name="Grzegorz" surname="Kowalski" />*/}
        {/*<Hello name="John" surname="Rambo" age={40} />*/}
        {/*<ParentComponent>*/}
        {/*    <ChildComponent>*/}
        {/*        <GrandchildComponent />*/}
        {/*    </ChildComponent>*/}
        {/*</ParentComponent>*/}
        {/*<HelloWorld />*/}
        {/*<Buttons />*/}
        {/*<ButtonCounter />*/}
        {/*<MyButton />*/}
        {/*<Hello2 />*/}
        <BookInfo isbn="0747532699" />
    </div>
  );

};

export default App;
