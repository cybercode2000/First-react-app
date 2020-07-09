import React from "react";

const Starter = props => {
  return (
    <div>
      My Name is {props.name} am {props.age} Years Old
      <br />
      Name: <input type="text" value={props.name} onChange={props.change} />
      <br />
      Age: <input type="text" value={props.age} onChange={props.changeAge} />
    </div>
  );
};

export default Starter;
