import logo from "./logo.svg";
import "./App.css";
import ClassComp from "./component/ClassComp";
import FuncComp from "./component/FuncComp";
import EventComp from "./component/Event";

function App() {
  return (
    <>
      {/* <h2>This is a react demo</h2> */}
      {/* <ClassComp name={"prathamesh"} /> */}
      {/* <FuncComp age={20} city={"pune"} /> */}
      <EventComp></EventComp>
    </>
  );
}
// there are two types of component in react
// 1. Class based components.
// 2. Function based components.

export default App;
