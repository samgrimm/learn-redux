var redux = require('redux');

console.log('Starting redux');

var reducer = (state = {name: 'Anonymous'}, action) => {
  // state = state || {name: 'Anonymous'};

  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }
  return state;
};
var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState', currentState);

var action = {
  type: 'CHANGE_NAME',
  name: 'Samantha'
}
store.dispatch(action);

console.log('Name should be Sam', store.getState());
