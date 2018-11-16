import initialState from "../state/index";
import {
  API_REQUEST_ALBUM,
  API_SUCCESS_ALBUM,
  API_FAILURE_ALBUM,
  FILTER_PHOTOS_ALBUM
} from "../actions/type-actions";

/** Reducer de albums */
function albums(state = initialState["albums"], action) {
  switch (action.type) {
    case API_REQUEST_ALBUM: {
      return Object.assign({}, state, { loading: true });
    }
    case API_SUCCESS_ALBUM: {
      return Object.assign({}, state, {
        loading: false,
        list: action.payload
      });
    }
    case API_FAILURE_ALBUM: {
      return {
        loading: false,
        list: [],
        message: action.payload,
        albums: []
      };
    }
    case FILTER_PHOTOS_ALBUM: {
      const { album, photoList } = action.payload;
      return Object.assign({}, state, {
        photos: photoList.filter(photo => photo.albumId === album)
      });
    }
    default:
      return state;
  }
}

export default albums;
