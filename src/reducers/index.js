import { FETCH_VIDEOS, VIDEOS_RECEIVED } from '../actions'

const reducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_VIDEOS:
            return { ...state, loading: true };
        case VIDEOS_RECEIVED:
            return { ...state, videos: action.json, loading: false }
        default:
            return state;
    }
};
export default reducer;