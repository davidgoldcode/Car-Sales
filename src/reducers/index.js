import { UPDATE_TOTAL, REMOVE_ITEM } from '../actions/actions'
//You've got this backwards. You will need to import your reducer to your actions. You actions will handle what your reducers want to do... I know it's confusing, but your reducer will create the functionality and the action will add action to that functionality =)

export const initialState = {
    additionalPrice: 0,
    car: {
      price: 26395,
      name: "2019 Ford Mustang",
      image:
        "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
      features: []
    },
    additionalFeatures: [
      { id: 1, name: "V-6 engine", price: 1500 },
      { id: 2, name: "Racing detail package", price: 1500 },
      { id: 3, name: "Premium sound system", price: 500 },
      { id: 4, name: "Rear spoiler", price: 250 }
    ]
  };
  
  export const specsReducer = (state = initialState, action) => {
    console.log("in specs reducer", action.payload);
    switch (action.type) {
      case UPDATE_TOTAL: //Almost forgot, since I took  your imported actions out, I have it being called by its' name using the "string" of that name.
        return {
          ...state,
          car: {
            ...state.car,
            price: state.car.price + action.payload.price,
            features: [...state.car.features, action.payload],
          },
          //We will actually need to add the additional features state
          additionalFeatures: [
            ...state.additionalFeatures.filter((additionalFeature) => {
              return additionalFeature.id !== action.payload.id;
            })
          ]
        };
      case REMOVE_ITEM:
        console.log("In remove reducer", action.payload);
        return {
          ...state,
          car: {
            ...state.car,
            price: state.car.price - action.payload.price,
            features: [
              ...state.car.features.filter((addedFeature) => {
                return addedFeature.id !== action.payload.id;
              })
            ]
          },
          additionalFeatures: [...state.additionalFeatures, action.payload]
        };
      default:
        console.log(action, state);
        return state;
    }
  };
  