/**
 * @param number state
 * @param {} action
 * !!! change state must be synchronous, no async events
 */
export function rootReducer(state, action){

  if (action.type === 'INCREMENT') {
    return state + 1
  } else if (action.type === 'DECREMENT') {
    return state - 1
  } else if (action.type === 'ASYNC_INCREMENT') {
    // setTimeout(() => {
    //   console.log('dont work, state is:', state)
    //   return state + 1 //dont work, return is a part of timeout, not a reducer itself
    // }, 2000);
    return state + 1
  }

  return state
}