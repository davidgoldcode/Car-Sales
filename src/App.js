import React, { useReducer, useState } from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { specsReducer as reducer, initialState } from './reducers';

const App = () => {
  const [value, setValue] = useState(initialState.car.price);
  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state, value);
  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

export default App;
