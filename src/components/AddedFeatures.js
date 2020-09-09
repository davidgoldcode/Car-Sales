import React from 'react';
import { connect } from 'react-redux';
import AddedFeature from './AddedFeature'
import {REMOVE_ITEM} from '../actions/actions';

const AddedFeatures = props => {
  
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.state.additionalFeatures.map(item => (
            <AddedFeature key={item.id} feature={item} addFeature={props.addFeature}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStatetoProps = (state) => {
  console.log("THIS IS STATE FROM MapStateToProps on AddedFeatures =>", state)
  return {
    state
  }
}

export default connect(mapStatetoProps, {REMOVE_ITEM})(AddedFeatures);
