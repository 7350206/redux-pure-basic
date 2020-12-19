import './styles.css'
// get from a dom tree (span counter)
const counter = document.getElementById('counter')
const addButton = document.getElementById('add')
const subButton = document.getElementById('sub')
const asyncButton = document.getElementById('async')

// change body class to "dark"
const themeButton = document.getElementById('theme')

let state = 0

function render(){
  counter.textContent = state.toString()
}

addButton.addEventListener('click', () => {
  state++
  render()
})


asyncButton.addEventListener('click', () => {
  setTimeout(() => {
    state++
    render()
  }, 2000);

})

subButton.addEventListener('click', () => {
  state--
  render()
})


themeButton.addEventListener('click', () => {
  document.body.classList.toggle("dark")
  render()
})


render()
