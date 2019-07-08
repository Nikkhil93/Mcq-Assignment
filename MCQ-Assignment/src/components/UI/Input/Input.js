import React from 'react';
import classes from './Input.css';

const input = props => {
  let inputElement = null;

//  console.log(props);

  inputElement = (
    <input
    type= {props.type}
    name = {props.name}
      value={props.value}
      onChange={props.changed}
    />
  );

  return (
    <div className={classes.Input}>
      {inputElement}{props.children}
    </div>
  );
};

export default input;
