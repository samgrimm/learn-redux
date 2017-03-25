var redux = require('redux');


console.log('Starting redux');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();


//Subscriptions:

var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('New state', store.getState());
  if (state.map.isFetching) {
    document.getElementById('app').innerHTML = 'loading...';
  } else if (state.map.url) {
    document.getElementById('app').innerHTML = '<a href="'+ state.map.url+'"target="_blank">View Your Location</a>';
  }
});

//Current State and Action dispatch
var currentState = store.getState();
console.log('currentState', currentState);

store.dispatch(actions.fetchLocation());

store.dispatch(actions.changeName('Samantha'));

store.dispatch(actions.addHobby('Running'));

store.dispatch(actions.addHobby('Walking'));


store.dispatch(actions.addMovie('Logan', 'Action'));

//unsubscribe();

store.dispatch(actions.changeName('Joshua'));

console.log('Name should be Sam', store.getState());

store.dispatch(actions.addMovie('Star Trek', 'Sci-Fi'));

store.dispatch(actions.removeMovie(2));

store.dispatch(actions.removeHobby(2));
