import React from "react";
import "./Start.css";
import Radium from 'radium'

const Starter = props => {
  return (
    <div className="Person">
      <p>
        My Name is {props.name} am {props.age} Years Old
      </p>

      <p>
        Name: <input type="text" value={props.name} onChange={props.change} />
      </p>

      <p>
        Age: <input type="text" value={props.age} onChange={props.changeAge} />
      </p>
      <button onClick={props.click}>Delete User</button>
    </div>
  );
};

export default Radium(Starter);
