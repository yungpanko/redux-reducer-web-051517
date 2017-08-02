let store = createStore(increment)

function createStore(reducer) {
  let state

  getState = () => {
    return state
  }

  dispatch = (action) => {
    state = reducer(action, state)
    render()
  }

  return {
    getState: getState,
    dispatch: dispatch
  }
}


function incrementer(action, state = { count: 0 }) {
  switch (action.name) {
    case 'increment':
      return {
        count: state.count + 1
      }
      break;
    default:
      return state
  }
}

function render() {

}
