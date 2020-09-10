import React from 'react';
import {deleteTotal} from '../actions/actions'

const AddedFeature = (props) => {

  const buttonHandler = (event) => {
    event.preventDefault();
    console.log(props.feature, "Delete Item Console");
    props.deleteTotal(props.item);
  }
  
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={buttonHandler}>X</button>
      {props.name}
    </li>
  );
};

export default AddedFeature;
