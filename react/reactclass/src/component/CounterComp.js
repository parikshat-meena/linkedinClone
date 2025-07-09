import React, { useEffect, useState } from "react";

function CounterComp() {
  const [count, setCount] = useState(0);

  const [fname, setFname] = useState("");
  const data = [
    { id: 1, name: "Parikshat Meena", role: "Developer" },
    { id: 2, name: "Anjali Sharma", role: "Tester" },
    { id: 3, name: "Mayur Patel", role: "Project Manager" },
    { id: 4, name: "Pushkraj Singh", role: "UI/UX Designer" },
    { id: 5, name: "Poorva Jain", role: "DevOps Engineer" },
  ];

  const [list, setList] = useState(data);

  useEffect(() => {
    setTimeout(() => {
      console.log("Count:", count);
    }, 3000);
  }, []);
  const incrementHandler = () => {
    setCount((prev) => prev + 1);
  };

  const onFnameChange = (e) => {
    setFname(e.target.value);
  };

  return (
    <div
      style={{
        backgroundColor: "green",
        // flexDirection: "row",
        display: "flex",
        flexDirection: "column",
        // display: "inline",
      }}
    >
      <div style={{ flex: 1, backgroundColor: "yellow" }}>
        CounterComp {count}
      </div>
      <div style={{ flex: 1, backgroundColor: "red" }}>
        CounterComp1 {count}
      </div>
      <button style={{ color: "blue" }} onClick={incrementHandler}>
        increment
      </button>
      <table className="table table-striped mt-2">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>role</th>
          </tr>
        </thead>
        <tbody>
          {list.map((ele) => {
            return (
              <tr key={ele.id}>
                <td>{ele.id}</td>
                <td>{ele.name}</td>
                <td>{ele.role}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <input
        type="text"
        className="form-input"
        value={fname}
        onChange={onFnameChange}
      ></input>
      <div>{fname}</div>
    </div>
  );
}

export default CounterComp;
