import React, { useReducer } from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { specsReducer as reducer, initialState } from './reducers';
import { connect } from 'react-redux';
import {updateTotal} from './actions/actions'

const App = (props) => {

  const addFeature = item => {
    props.updateTotal(item);
  }

  console.log(props);
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.state.car} />
        <AddedFeatures car={props.state.car} additionalFeatures={props.state.additionalFeatures}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.state.additionalFeatures} />
        <Total car={props.state.car} additionalPrice={props.state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStatetoProps = (state) => {
  console.log("THIS IS STATE FROM MapStateToProps =>", state)
  return {
    state
  }
}

export default connect(mapStatetoProps, {updateTotal})(App);
