import { INCREMENT, DECREMENT, CHANGE_THEME, DISABLE_BUTTONS, ENABLE_BUTTONS } from './constants';

export const increment = () => {
  return {
    type: INCREMENT
  }
}
export const decrement = () => {
  return {
    type: DECREMENT
  }
}

export const async_increment = () => {

  return function (dispatch){

    // disable buttons
    dispatch(disable_buttons())

    setTimeout(() => {
      dispatch({type: INCREMENT})
      // after work is done - enable buttons
      dispatch(enable_buttons())
    }, 3000);
  }
}

export const disable_buttons = () => {
  return {
    type: DISABLE_BUTTONS
  }
}
export const enable_buttons = () => {
  return {
    type: ENABLE_BUTTONS
  }
}


/**
 * @param string theme_to_show
 */
export function change_theme(theme){
  return {
    type: CHANGE_THEME,
    payload: theme
  }
}
