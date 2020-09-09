import React from 'react';
import { connect } from 'react-redux';
import {updateTotal, deleteTotal} from '../actions/actions'

const AddedFeature = (props) => {
  
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button">X</button>
      {props.name}
    </li>
  );
};

export default connect(null, { updateTotal })(AddedFeature);
