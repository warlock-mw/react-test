import { combineReducers } from 'redux';

import counter from '@/reducers/counter';

const rootReducer = () => combineReducers({
  counter,
});

console.log(counter);
export default rootReducer;