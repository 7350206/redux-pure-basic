### component -> action -> reducer -> store -> rerender component ###

```
  asyncButton.addEventListener('click', () => {
  //dont do that, when i.e.fetch never know what timeout is over
  // so hardcode value is no sense
  setTimeout(() => {
    store.dispatch(increment())
  }, 2000)
  store.dispatch(async_increment())
})

```

!!! change state must be synchronous, no async events

```if (action.type === INCREMENT) {
    setTimeout(() => {
      console.log('dont work, state is:', state)
      return state + 1 //dont work, return is a part of timeout, not a reducer itself
    }, 2000);
```