import { createStore } from './create-store';
import { rootReducer } from './redux/rootReducer';
import './styles.css'
// get from a dom tree (span counter)
const counter = document.getElementById('counter')
const addButton = document.getElementById('add')
const subButton = document.getElementById('sub')
const asyncButton = document.getElementById('async')

// change body class to "dark"
const themeButton = document.getElementById('theme')

//
const store = createStore(rootReducer, 0 )

// window.store = store


// function render(){
//   counter.textContent = state.toString()
// }

addButton.addEventListener('click', () => {
  store.dispatch({type: "INCREMENT"})
})

subButton.addEventListener('click', () => {
  store.dispatch({type: "DECREMENT"})
})

asyncButton.addEventListener('click', () => {})

themeButton.addEventListener('click', () => {
  // document.body.classList.toggle("dark")
  render()
})

// subscribe here (pass cb to subscribers[])
// and render it on screen
store.subscribe(() => {
  const state = store.getState()
  counter.textContent = state.toString()
})

// set initial value to counter
store.dispatch({type: "INIT"}) // there is no any INIT





// render()
