import { createStore } from 'redux';
import Reducer from './Reducer';

const jwt = createStore(Reducer)

export default jwt;
