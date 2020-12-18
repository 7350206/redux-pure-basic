import { combineReducers } from "redux"
import { DECREMENT, INCREMENT, CHANGE_THEME, DISABLE_BUTTONS, ENABLE_BUTTONS } from "./constants"

/**
 * @param number state, default 0
 * @param {} action
 * !!! change state must be synchronous, no async events
 */

const initCounter ={
  counter: 0,
  disabled: false
}

function counterReducer(state = initCounter, action){

  // if (action.type === INCREMENT) {
  //   return state + 1
  // } else if (action.type === DECREMENT) {
  //   return state - 1
  // } // else if (action.type === INCREMENT) {
    // setTimeout(() => {
    //   console.log('dont work, state is:', state)
    //   return state + 1 //dont work, return is a part of timeout, not a reducer itself
    // }, 2000);
    //return state + 1

  switch (action.type) {
    case INCREMENT:
      return {...state, counter: state.counter + 1  }
      break;
    case DECREMENT:
      return {...state, counter: state.counter - 1}
      break;

    case DISABLE_BUTTONS:
      return {...state, disabled: true}
    case ENABLE_BUTTONS:
      return {...state, disabled: false}

    default:
      return state
      break;
  }

}

const initialThemeValue = {
  value:"light"
}

function themeReducer(state = initialThemeValue, action){
  switch (action.type) {
    case CHANGE_THEME:
    // return state.theme.value = werrwrwr // dont do this
    return {...state, value: action.theme}
      break;

    default:
      return state
  }


}


export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer
})