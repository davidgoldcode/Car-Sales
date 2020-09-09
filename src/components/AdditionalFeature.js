import React from 'react';
import { connect } from 'react-redux';
import {updateTotal} from '../actions/actions'

const AdditionalFeature = (props) => {

  // const buttonHandler = (event) => {
  //   event.preventDefault();
  //   console.log(props.feature, "PROPS FEAT")
  //   props.updateTotal(props.feature)
  // }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() => props.updateTotal(props.feature)}>Add</button>
      {props.feature.name} ({props.feature.price})
    </li>
  );
};

export default connect(null, { updateTotal })(AdditionalFeature);
