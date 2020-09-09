import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { connect } from 'react-redux';
import {updateTotal} from '../actions/actions'

const AdditionalFeatures = (props) => {
  console.log("PROOOOOPS", props);
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map((item) => (
            <AdditionalFeature key={item.id} name={item.name} price={item.price} item={item} updateTotal={props.updateTotal}/>
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStatetoProps = (state) => {
  console.log("THIS IS STATE FROM MapStateToProps =>", state)
  return {
    additionalFeatures: state.additionalFeatures,
  }
}

export default connect(mapStatetoProps, { updateTotal })(AdditionalFeatures);

