import React from 'react';
import AddedFeature from './AddedFeature';
import { connect } from 'react-redux';
import { deleteTotal } from '../actions/actions'

const AddedFeatures = props => {
  
  return (
    <div className="content">
      <h6>Added features:</h6>
      {props.car.features.length ? (
        <ol type="1">
          {props.car.features.map(item => (
            <AddedFeature key={item.id} name={item.name} item={item} deleteTotal={props.deleteTotal}/>
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

const mapStatetoProps = (state) => {
  console.log("THIS IS STATE FROM MapStateToProps from added feats =>", state)
  return {
    additionalFeatures: state.additionalFeatures,
  }
}

export default connect(mapStatetoProps, { deleteTotal })(AddedFeatures);
