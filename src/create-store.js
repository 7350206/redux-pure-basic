/** component
  -> action
  -> reducer
  -> store
  -> rerender component

 * @param {function} rootReducer
 * @param {object}   initialState
 */
export function createStore(rootReducer, initialState){
  // observer pattern

  // private, not accessible from outside
  let state = rootReducer(initialState, {type:'__INIT__'})

  const subscribers = []


  return {
    // action === {type:'SOMETHING_USEFUL'}
    dispatch(action){
      // return new state
      state = rootReducer(state, action)

      // tell subscribers of state changed
      // subscriber is a function, call each of them
      subscribers.forEach(sub => sub())

    },

    // cb - will fired when something happens
    // subscribers
    subscribe(cb){
      subscribers.push(cb)
    },

    getState(){
      return state
    }
  }
}