import Search from "./components/Search";
import Hello from "./components/Hello";
import ParentComponent from "./components/ParentComponent";
import ChildComponent from "./components/ChildComponent";
import GrandchildComponent from "./components/GrandchildComponent";
import './App.css';
import HelloWorld from "./components/HelloWorld";
import Buttons from "./components/Buttons";
import ButtonCounter from "./components/ButtonCounter";

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
        <ButtonCounter />

    </div>
  );
};

export default App;
