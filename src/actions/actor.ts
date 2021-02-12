import type { IActor } from '../reducers/actor';

export const SET_CURRENT_SELECTED_ACTOR = 'SET_CURRENT_SELECTED_ACTOR';
export const SET_ACTOR_FILMS_NAMES_LOADING = 'SET_ACTOR_FILMS_NAMES_LOADING';
export const SET_ACTOR_FILMS_NAMES_ERROR = 'SET_ACTOR_FILMS_NAMES_ERROR';
export const SET_ACTOR_FILMS_NAMES = 'SET_ACTOR_FILM_NAMES';
export const CLEAR_ACTOR_INFO = 'CLEAR_ACTOR_INFO';

export const setCurrentSelectedActor = (actor: IActor) => {
  return {
    type: SET_CURRENT_SELECTED_ACTOR,
    payload: actor,
  };
};

export const setActorFilmsNamesLoading = (loading: boolean) => {
  return {
    type: SET_ACTOR_FILMS_NAMES_LOADING,
    payload: loading,
  };
};

export const setActorFilmsNames = (names: string[]) => {
  return {
    type: SET_ACTOR_FILMS_NAMES,
    payload: names,
  };
};

export const setActorFilmsNamesError = (error: any) => {
  return {
    type: SET_ACTOR_FILMS_NAMES_ERROR,
    payload: error,
  };
};

export const clearActorInfo = () => {
  return {
    type: CLEAR_ACTOR_INFO,
  };
};
