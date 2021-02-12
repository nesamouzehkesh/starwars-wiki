import {
  FETCH_CURRENT_PAGE_ACTORS_ERROR,
  FETCH_CURRENT_PAGE_ACTORS_LOADING,
  FETCH_CURRENT_PAGE_ACTORS_SUCCESS,
  SET_CURRENT_PAGE,
} from '../actions/actors';
import type { IActor } from './actor';

interface IActorsState {
  loading: boolean;
  actorsList: IActor[];
  count: number;
  countPerPage: number;
  currentPage: number;
  error: '';
}

const initialState: IActorsState = {
  loading: true,
  actorsList: [],
  count: 0,
  countPerPage: 10,
  currentPage: 1,
  error: '',
};

export default function actors(state = initialState, action: any) {
  switch (action.type) {
    case FETCH_CURRENT_PAGE_ACTORS_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case FETCH_CURRENT_PAGE_ACTORS_SUCCESS:
      return {
        ...state,
        loading: false,
        ...action.payload,
      };
    case FETCH_CURRENT_PAGE_ACTORS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
}
