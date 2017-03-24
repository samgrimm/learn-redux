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
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('searct text is', state.searchText);
  document.getElementById('app').innerHTML = state.searchText;
});

var action = {
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Samantha'
}

var action2 = {
  type: 'CHANGE_SEARCH_TEXT',
  searchText: 'Work'
}
store.dispatch(action);
store.dispatch(action2);
var currentState = store.getState();
console.log('New search text should be Sam', currentState);
