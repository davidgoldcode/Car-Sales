import React from 'react';
import { connect } from 'react-redux';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={()=>props.dispatch({type: "UPDATE_TOTAL", payload: props.feature.price})}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    
  }
}

export default connect(null, {})(AddedFeature);
