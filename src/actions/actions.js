export const UPDATE_TOTAL = 'UPDATE_TOTAL';

export function updateTotal(addOnPrice) {
    console.log("ADDITIONAL PRICE BUTTON=>", addOnPrice);
  return {
    type: UPDATE_TOTAL,
    payload: addOnPrice
  }
}
