import { combineReducers } from "redux"
import { DECREMENT, INCREMENT, CHANGE_THEME, DISABLE_BUTTONS, ENABLE_BUTTONS } from "./constants"

/**
 * @param number state, default 0
 * @param {} action
 * !!! change state must be synchronous, no async events
 */


function counterReducer(state = 0, action){

  switch (action.type) {
    case INCREMENT:
      return  state + 1
      break;
    case DECREMENT:
      return  state - 1
      break;
    default:
      return state
      break;
  }

}

const initialThemeValue = {
  value:"light",
  disabled: false
}

function themeReducer(state = initialThemeValue, action){
  switch (action.type) {
    case CHANGE_THEME:
    // return state.theme.value = werrwrwr // dont do this
    return {...state, value: action.payload}
      break;

    // button handlers
    case ENABLE_BUTTONS:
      return {...state, disabled: false}
      break;

    case DISABLE_BUTTONS:
      return { ...state, disabled: true }
      break;

    default:
      return state
  }
}

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer
})