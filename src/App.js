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
    updateTotal(item);
  }

  console.log(props);
  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.state.car} />
        <AddedFeatures car={props.state.car} addFeature={addFeature}/>
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.state.additionalFeatures} />
        <Total car={props.state.car} additionalPrice={props.state.additionalPrice} />
      </div>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    state
  }
}

export default connect(mapStatetoProps, {updateTotal})(App);
