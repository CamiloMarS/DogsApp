/** Lista de TODOs */
const state = {
  todos: [],
  photos: {
    loading: false,
    list: [],
    message: ""
  },
  albums: {
    loading: false,
    list: [],
    message: "",
    photos: []
  },
  getDog: {
    fetching: false,
    dog: null,
    error: null
  },
  startCount: {
    currentUI: "",
    countTime: false
  },
  contacts: {
    list: []
  }
};

export default state;
