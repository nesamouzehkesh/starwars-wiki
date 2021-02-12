import {
  CLEAR_ACTOR_INFO,
  SET_ACTOR_FILMS_NAMES,
  SET_ACTOR_FILMS_NAMES_ERROR,
  SET_ACTOR_FILMS_NAMES_LOADING,
  SET_CURRENT_SELECTED_ACTOR,
} from '../actions/actor';

export interface IActor {
  birth_year: string;
  films: string[];
  gender: string;
  height: string;
  mass: string;
  name: string;
  url: string;
}

interface IActorsState {
  loading: boolean;
  currentSelectedActor: IActor | null;
  currentActorFilmsNames: string[] | null;
  error: string;
}

const initialState: IActorsState = {
  loading: false,
  currentSelectedActor: null,
  currentActorFilmsNames: [],
  error: '',
};

export default function actors(state = initialState, action: any) {
  switch (action.type) {
    case SET_CURRENT_SELECTED_ACTOR:
      return {
        ...state,
        currentSelectedActor: action.payload,
      };
    case SET_ACTOR_FILMS_NAMES_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    case SET_ACTOR_FILMS_NAMES:
      return {
        ...state,
        currentActorFilmsNames: action.payload,
        loading: false,
      };
    case SET_ACTOR_FILMS_NAMES_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case CLEAR_ACTOR_INFO:
      return {
        ...state,
        currentSelectedActor: null,
      };
    default:
      return state;
  }
}
