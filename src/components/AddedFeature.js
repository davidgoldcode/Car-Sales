import React from 'react';

const AddedFeature = (props) => {

  const buttonHandler = (event) => {
    event.preventDefault();
    console.log(event);
    props.addFeature(props.feature.price);
  }
  
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={buttonHandler} >X</button>
      {props.feature.name}
    </li>
  );
};

export default AddedFeature;
