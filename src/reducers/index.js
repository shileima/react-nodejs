import {combineReducers} from 'redux';
import list from './indexList'
import details from './details';
import users from './users';

let reducer = combineReducers({
    list,
    details,
    users
});

export default reducer;