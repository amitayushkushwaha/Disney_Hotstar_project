// react-redux reducers to perform actions
const addMovie = [];

const addMovies = (state = addMovie, action) => {
  switch (action.type) {
    case "ADD_MOVIE":
      for(let i=0;i<state.length;i++){
        if(action.payload.id==state[i].id){
          return state;
        }
      }
      return [...state, action.payload];
      break;

    case "DEL_MOVIE":
      return (state = state.filter((x) => {
        return x.id !== action.payload.id;
      }));
      break;

    default:
      return state;
      break;
  }
};

export default addMovies;
