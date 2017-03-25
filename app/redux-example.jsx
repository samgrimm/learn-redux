var redux = require('redux');

console.log('Starting redux');

//One long reducer
// var oldreducer = (state = stateDefault, action) => {
//   // state = state || {name: 'Anonymous'};
//
//   switch (action.type) {
//     case 'CHANGE_NAME':
//       return {
//         ...state,
//         name: action.name
//       };
//       case 'ADD_HOBBY':
//       return {
//         ...state,
//         hobbies: [
//           ...state.hobbies,
//           {
//             id: nextHobbyId++,
//             hobby: action.hobby
//           }
//         ]
//       };
//       case 'ADD_MOVIE':
//       return {
//         ...state,
//         movies: [
//           ...state.movies,
//           {
//             id: nextMovieId++,
//             title: action.title,
//             genre: action.genre,
//           }
//         ]
//       };
//       case 'REMOVE_MOVIE':
//       return {
//         ...state,
//         movies: state.movies.filter((movie) => movie.id !== action.id)
//       };
//       case 'REMOVE_HOBBY':
//       return {
//         ...state,
//         hobbies: state.hobbies.filter((hobby) => hobby.id !== action.id)
//       };
//     default:
//       return state;
//   }
//   return state;
// };


// Many shorter reducers - one for each prop in the object.

//Name reducer and action generators
//--------------------------------------
var nameReducer = (state = 'Anonymous', action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name
    default:
      return state;
  }
};

var changeName = (name) => {
  return {
    type: 'CHANGE_NAME',
    name
  }
};


//Hobby reducer and action generators
//--------------------------------------

var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
        ...state,
        {
          id: nextHobbyId++,
          hobby: action.hobby
        }
      ];
      case 'REMOVE_HOBBY':
      return  state.filter((hobby) => hobby.id !== action.id)
    default:
      return state;
  }
};


var addHobby = (hobby) => {
  return {
    type: 'ADD_HOBBY',
    hobby
  }
};

var removeHobby = (id) => {
  return {
    type: 'REMOVE_HOBBY',
    id
  }
};

//Movie reducer and action generators
//--------------------------------------

var nextMovieId = 1;

var moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id: nextMovieId++,
          title: action.title,
          genre: action.genre
        }
      ];
      case 'REMOVE_MOVIE':
      return  state.filter((movie) => movie.id !== action.id)
    default:
      return state;
  }
};
var addMovie = (title, genre) => {
  return {
    type: 'ADD_MOVIE',
    title,
    genre
  }
};

var removeMovie = (id) => {
  return {
    type: 'REMOVE_MOVIE',
    id
  }
};


//Combine Reducers

var reducer = redux.combineReducers({
  name: nameReducer,
  hobbies: hobbiesReducer,
  movies: moviesReducer
});

//Devtools
var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

//Subscriptions:

var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is', state.name);
  document.getElementById('app').innerHTML = state.name;
  console.log('New state', store.getState());
});

//Current State and Action dispatch
var currentState = store.getState();
console.log('currentState', currentState);


store.dispatch(changeName('Samantha'));

store.dispatch(addHobby('Running'));

store.dispatch(addHobby('Walking'));


store.dispatch(addMovie('Logan', 'Action'));

//unsubscribe();

store.dispatch(changeName('Joshua'));

console.log('Name should be Sam', store.getState());

store.dispatch(addMovie('Star Trek', 'Sci-Fi'));

store.dispatch(removeMovie(2));

store.dispatch(removeHobby(2));
