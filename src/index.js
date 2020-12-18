import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { increment, decrement, async_increment } from './redux/actions';
import { rootReducer } from './redux/rootReducer';
import './styles.css'


// get from a dom tree (span counter)
const counter = document.getElementById('counter')

// buttons
const addButton = document.getElementById('add')
const subButton = document.getElementById('sub')
const asyncButton = document.getElementById('async')
const themeButton = document.getElementById('theme')


//  custom middleware
// TODO: closures
function logger (state){
  return function(next){
    return function(action){
      console.log('state: ', state.getState()) // ? with delay
      console.log('action: ', action)
      return next(action)
    }
  }
}



// applyMiddleware - store enhancer
// applyMiddleware(...middleware)
// async action creators can be done
const store = createStore(rootReducer, 0 ,applyMiddleware(thunk, logger) )

// window.store = store


// function render(){
//   counter.textContent = state.toString()
// }

addButton.addEventListener('click', () => {
  // store.dispatch({type: INCREMENT})
  store.dispatch(increment())
})

subButton.addEventListener('click', () => {
  // store.dispatch({type: DECREMENT})
  store.dispatch(decrement())
})

asyncButton.addEventListener('click', () => {
  // dont do that, when i.e.fetch never know what timeout is
  // so hardcode value is no sense
  // setTimeout(() => {
  //   store.dispatch(increment())
  // }, 2000)
  store.dispatch(async_increment())
})

themeButton.addEventListener('click', () => {
  // document.body.classList.toggle("dark")
  // render()
})

// subscribe here (pass cb to subscribers[])
// and render it on screen
store.subscribe(() => {
  const state = store.getState()
  counter.textContent = state.toString()
})

// set initial value to counter
store.dispatch({type: "INIT"}) // to init state





// render()
