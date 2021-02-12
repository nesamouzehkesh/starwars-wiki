import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import type { Dispatch } from 'redux';
import {
  setActorFilmsNames,
  setActorFilmsNamesError,
  setActorFilmsNamesLoading,
} from '../actions/actor';

export const useFetchActorFilmsNames = (filmsUrls: string[]) => {
  const dispatch: Dispatch = useDispatch();

  function fetchFilmData(url: string) {
    return fetch(url).then(res => res.json()).then(res => {
      if (res.error) {
        throw (res.error);
      }
      return res.title;
    });
  }

  useEffect(() => {
    if (filmsUrls && filmsUrls.length) {
      const filmsNamesPromises = filmsUrls.map(fetchFilmData);

      dispatch(setActorFilmsNamesLoading(true));
      Promise.all(filmsNamesPromises).then(filmsNames => {
        dispatch(setActorFilmsNames(filmsNames));
      }).catch(err => {
        dispatch(setActorFilmsNamesError(err));
      });
    }
  }, [dispatch, filmsUrls]);
};
