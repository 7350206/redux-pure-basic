import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { increment, decrement, async_increment, change_theme } from './redux/actions';
import { rootReducer } from './redux/rootReducer';
import './styles.css'


// get from a dom tree (span counter)
// const counter = document.getElementById('counter')

// buttons
const addButton = document.getElementById('add')
const subButton = document.getElementById('sub')
const asyncButton = document.getElementById('async')
const themeButton = document.getElementById('theme')


//  custom middleware
// TODO: closures
/* function logger (state){
  return function(next){
    return function(action){
      console.log('state: ', state.getState()) // ? with delay
      console.log('action: ', action)
      return next(action)
    }
  }
}
 */


// applyMiddleware - store enhancer
// applyMiddleware(...middleware)
// async action creators can be done
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)

// window.store = store

addButton.addEventListener('click', () => {
  // store.dispatch({type: INCREMENT})
  store.dispatch(increment())
})

subButton.addEventListener('click', () => {
  // store.dispatch({type: DECREMENT})
  store.dispatch(decrement())
})

asyncButton.addEventListener('click', () => {
  // dont do that, i.e.fetch never know what timeout is over
  // so hardcode value is no sense
  // setTimeout(() => {
  //   store.dispatch(increment())
  // }, 2000)
  store.dispatch(async_increment())
})

themeButton.addEventListener('click', () => {
  const newTheme = document.body.classList.contains("light")
    ? "dark"
    : "light"
    // pass it to action creator
    // !!! look in action, all async|other work is there
  store.dispatch(change_theme(newTheme))
})



// !!! ALL CHANGES ARE THERE
store.subscribe(() => {
  const state = store.getState()
  counter.textContent = state.counter.toString()
  document.body.className = state.theme.value; // <-- !!!!

  // disable buttons while timeout
  [addButton, subButton, themeButton, asyncButton].forEach(btn => {
    btn.disabled = state.theme.disabled
  });


})

// set initial value to counter
// ?? works only if last in line
store.dispatch({type: "INIT"}) // to init state