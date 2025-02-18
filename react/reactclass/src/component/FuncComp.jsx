const FuncComp = (props) => {
  const {age, city } = props  // destructuring of an props object
  return (
    <>
      <h1>This is a functional component</h1>
      <h2>user age is  {age} </h2>
      <h2>user city is  {city} </h2>
    </>
  );
};

// jsx fragment (<></>)
export default FuncComp;
