import logo from "./logo.svg";
import "./App.css";
import ClassComp from "./component/ClassComp";
import FuncComp from "./component/FuncComp";
import EventComp from "./component/Event";
import ConditionalRendering from "./component/ConditionalRendering";
import Parent from "./component/Parent";

function App() {
  return (
    <>
      {/* <h2>This is a react demo</h2> */}
      {/* <ClassComp name={"prathamesh"} /> */}
      {/* <FuncComp age={20} city={"pune"} /> */}
      {/* <EventComp></EventComp> */}
      {/* <ConditionalRendering></ConditionalRendering> */}
      <Parent></Parent>
    </>
  );
}
// there are two types of component in react
// 1. Class based components.
// 2. Function based components.

export default App;
