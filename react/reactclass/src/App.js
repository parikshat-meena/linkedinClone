import logo from "./logo.svg";
// import "./App.css";
import ClassComp from "./component/ClassComp";
import FuncComp from "./component/FuncComp";
import EventComp from "./component/Event";
import ConditionalRendering from "./component/ConditionalRendering";
import Parent from "./component/Parent";
import List from "./component/List";
import LifeCycleMethods from "./component/LifeCycleMethods";
import UserComp from "./component/UserComp";
import ErrorBoundary from "./component/ErrorBoundary";
import Comp1 from "./component/Comp1";
import Comp2 from "./component/Comp2";
import RenderProps from "./component/RenderProps";
import Comp3 from "./component/Comp3";
import Comp4 from "./component/Comp4";
import Color from "./component/Color";
import RefComp from "./component/RefComp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import PageNotFound from "./component/PageNotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "./component/Form";
function App() {
  return (
    <>
      {/* <h2>This is a react demo</h2> */}
      {/* <ClassComp name={"prathamesh"} /> */}
      {/* <FuncComp age={20} city={"pune"} /> */}
      {/* <EventComp></EventComp> */}
      {/* <ConditionalRendering></ConditionalRendering> */}
      {/* <Parent name={"xyz"}></Parent> */}
      {/* <List></List> */}
      {/* <LifeCycleMethods color={"green"}></LifeCycleMethods> */}
      {/* <ErrorBoundary>
        <UserComp name="Sachin" />
      </ErrorBoundary>
      <ErrorBoundary>
        <UserComp name="Virat" />
      </ErrorBoundary>
      <ErrorBoundary>
        <UserComp name="Rohit" />
      </ErrorBoundary> */}
      {/* <Comp1></Comp1>
      <Comp2></Comp2> */}
      {/* <RenderProps user={"shrutika"} /> */}
      {/* <RenderProps render={(isLogin) => (isLogin ? "Shrutika" : "New user")} /> */}
      {/* <RenderProps
        render={(count, incrementHandler) => (
          <Comp3 count={count} incrementHandler={incrementHandler} />
        )}
      /> */}
      {/* <Comp4></Comp4> */}
      {/* <Color /> */}
      {/* <RefComp /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/class" element={<ClassComp />}></Route>
          <Route path="/func/:id" element={<FuncComp />}></Route>
          <Route path="/form" element={<Form />} />
          <Route path="/*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="warning">Warning</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="info">Info</Button>
      <Button variant="light">Light</Button>
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button> */}
      {/* <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}
    </>
  );
}
// there are two types of component in react
// 1. Class based components.
// 2. Function based components.

//virtual DOM
// when a page is loaded in the browser , browser creates a DOM
//when the web page is having many elements, then the DOM tree will be large
//any changes to one of the element, will requiree that browser will parse the tree to reflect those changes

// React implements the concept of virtual DOM
// It is copy of real DOM
// whenever any changes occur, react will compare it with the copy of actual DOM to identify the difference
// VDOM will change when the state of an component changes.
export default App;
