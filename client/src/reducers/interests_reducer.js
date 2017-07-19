import {GET_INTERESTS, DELETE_INTEREST, LIKE_INTEREST, FILTER_INTERESTS} from '../actions/types';

export default function(state = [], action) {
    switch(action.type) {
        case GET_INTERESTS: 
            return action.payload;
        case DELETE_INTEREST:
            return state.filter((item) => item._id !== action.payload);
        case LIKE_INTEREST:
            return state.map((item) => {
                if(item._id === action.payload._id) {
                    item.liked = action.payload.liked;
                }
                    return item;
            })
        case FILTER_INTERESTS:
            return state.filter((item) => item.author === action.payload);
    }

    return state;
}