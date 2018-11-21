import {
  SELECT_SUBREDDIT,
  INVALID_SUBREDDIT,
  REQUEST_POST,
  RECEIVE_POST
} from "../actions/type-actions";

function selectSubreddit(state = "reactjs", action) {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit;
    default:
      return state;
  }
}

function posts(
  state = { isFetching: false, didInvalidate: false, items: [] },
  action
) {
  switch (action.type) {
    case INVALID_SUBREDDIT:
      return Object.assign({}, state, { didInvalidate: true });
    case REQUEST_POST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      });
    case RECEIVE_POST:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}

function postsBySubreddit(state = {}, action) {
  switch (action.type) {
    case INVALID_SUBREDDIT:
    case RECEIVE_POST:
    case REQUEST_POST:
      return Object.assign({}, state, {
        [action.subreddit]: posts(state[action.subreddit], action)
      });
    default:
      return state;
  }
}

export { postsBySubreddit, selectSubreddit };
