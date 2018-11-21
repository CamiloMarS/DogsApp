/** Lista de TODOs */
const state = {
  todos: [],
  subreddit: {
    selectedSubreddit: "frontend",
    entities: {
      users: {
        2: { id: 2, mane: "Andrew" }
      },
      posts: {
        42: {
          id: 42,
          title: "lorem ipsu bla bla",
          author: 2
        },
        100: {
          id: 100,
          title:
            "Creating a simple Application With React, Redux and Redux Saga",
          author: 2
        }
      }
    },
    postBySubreddit: {
      frontend: {
        isFetching: true,
        didInvalidate: false,
        items: []
      },
      reactJs: {
        isFetching: false,
        didInvalidate: false,
        lastUpdate: 1439478405547,
        items: [24, 100]
      }
    }
  },
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
    error: null,
    history: []
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
