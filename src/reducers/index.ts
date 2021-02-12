
import { combineReducers } from 'redux';
import actor from './actor';
import actors from './actors';

export const rootReducer = combineReducers({ actors, actor });

export type RootState = ReturnType<typeof rootReducer>;
