import { INCREMENT, DECREMENT, ASYNC_INCREMENT } from './constants';

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
    setTimeout(() => {
      dispatch({type: INCREMENT})
    }, 1500);

  }

}