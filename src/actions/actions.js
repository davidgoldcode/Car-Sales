export const UPDATE_TOTAL = 'UPDATE_TOTAL';

export function updateTotal(newTotal) {
  return {
    type: UPDATE_TOTAL,
    payload: newTotal
  }
}
