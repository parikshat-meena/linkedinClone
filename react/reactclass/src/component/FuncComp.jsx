import { useLocation } from "react-router-dom";

const FuncComp = (props) => {
  const {age, city } = props  // destructuring of an props object
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search)
  const name = queryParams.get('name')
  const pAge = queryParams.get('age')
  return (
    <>
      <h1>This is a functional component</h1>
      {/* <h2>user age is  {age} </h2> */}
      <h2>Params Name & age is  {name + pAge} </h2>
      <h2>user city is  {city} </h2>
    </>
  );
};

// jsx fragment (<></>)
export default FuncComp;
