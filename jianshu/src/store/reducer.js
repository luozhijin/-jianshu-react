import { combineReducers } from 'redux-immutable';
import   { headerReducer }  from '../common/header/store';
import { HomeReader } from "../pages/home/store"
import { Detailreducer } from "../pages/detail/store"
import { LoginReducer } from "../pages/login/store"

const reducer = combineReducers({
     headerReducer,
     HomeReader,
     Detailreducer,
     LoginReducer,
});
export default reducer;