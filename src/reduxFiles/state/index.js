/** Lista de TODOs */
const state = {
  todos: [],
  photos: {
    loading: false,
    list: [],
    message: ""
  },
  getDog: {
    fetching: false,
    dog: null,
    error: null
  },
  userInterface: {
    countTime: false
  }
};

export default state;
