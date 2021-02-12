
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import type { Dispatch } from 'redux';
import {
  fetchCurrentPageActorsError,
  fetchCurrentPageActorsLoading,
  fetchCurrentPageActorsSuccess,
} from '../actions/actors';

// fetch the actors only for the current page and update the state with it
export const useFetchActorsList = (selectedPage: number) => {
  const dispatch: Dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentPageActorsLoading(true));
    fetch('https://swapi.dev/api/people/?page=' + selectedPage)
      .then(res => res.json())
      .then(res => {
        if (res.error) {
          throw (res.error);
        }
        dispatch(fetchCurrentPageActorsSuccess({
          actorsList: res.results,
          count: res.count,
        }));
      })
      .catch(err => {
        dispatch(fetchCurrentPageActorsError(err));
      });
  }, [dispatch, selectedPage]);
};
