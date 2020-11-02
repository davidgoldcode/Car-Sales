import React from 'react';

const AdditionalFeature = (props) => {

  const buttonHandler = (event) => {
    event.preventDefault();
    console.log(props.feature, "PROPS FEAT");
    props.updateTotal(props.item);
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={buttonHandler}>Add</button>
      {props.name} ({props.price})
    </li>
  );
};

export default AdditionalFeature;

