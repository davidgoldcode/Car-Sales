export const UPDATE_TOTAL = 'UPDATE_TOTAL';
export const REMOVE_ITEM = 'REMOVE_ITEM';

export function updateTotal(addOnPrice) {
    console.log("ADDITIONAL PRICE BUTTON=>", addOnPrice);
  return {
    type: UPDATE_TOTAL,
    payload: addOnPrice
  }
}

export function deleteTotal(item) {
  console.log("REMOVE PRICE BUTTON=>", item);
return {
  type: REMOVE_ITEM,
  payload: item
}
}
