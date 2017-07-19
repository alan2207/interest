import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form';
import authReducer from './auth_reducer';
import interestsReducer from './interests_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  auth: authReducer,
  interests: interestsReducer
});

export default rootReducer;
