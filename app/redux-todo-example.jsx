var redux = require('redux');

console.log('Starting todo redux example');

var stateDefault = {
  todos: [],
  searchText: '',
  showCompleted: false
}

var reducer = (state = stateDefault, action) => {
  // state = state || {name: 'Anonymous'};

  switch (action.type) {
    case 'CHANGE_SEARCH_TEXT':
      return {
        ...state,
        searchText: action.searchText
      };
    default:
      return state;
  }
  return state;

};
var store = redux.createStore(reducer);




var action = {
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Samantha'
}
store.dispatch(action);
var currentState = store.getState();
console.log('New search text should be Sam', currentState);
