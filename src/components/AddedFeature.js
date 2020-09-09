import React from 'react';
import { connect } from 'react-redux';
import {updateTotal, deleteTotal} from '../actions/actions'

const AddedFeature = (props) => {

  const buttonHandler = (event) => {
    event.preventDefault();
    console.log(event);
    deleteTotal(props.feature.name)
  }
  
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.addedFeature.name}
    </li>
  );
};

export default connect(null, { updateTotal })(AddedFeature);
