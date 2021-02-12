export const FETCH_CURRENT_PAGE_ACTORS_LOADING = 'FETCH_CURRENT_PAGE_ACTORS_LOADING';
export const FETCH_CURRENT_PAGE_ACTORS_SUCCESS = 'FETCH_CURRENT_PAGE_ACTORS_SUCCESS';
export const FETCH_CURRENT_PAGE_ACTORS_ERROR = 'FETCH_CURRENT_PAGE_ACTORS_ERROR';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

export const fetchCurrentPageActorsLoading = (loading: boolean) => {
  return {
    type: FETCH_CURRENT_PAGE_ACTORS_LOADING,
    payload: loading,
  };
};

export const fetchCurrentPageActorsSuccess = (actorsList: any) => {
  return {
    type: FETCH_CURRENT_PAGE_ACTORS_SUCCESS,
    payload: actorsList,
  };
};

export const fetchCurrentPageActorsError = (error: any) => {
  return {
    type: FETCH_CURRENT_PAGE_ACTORS_ERROR,
    payload: error,
  };
};

export const setCurrentPage = (currentPage: number) => {
  return {
    type: SET_CURRENT_PAGE,
    payload: currentPage,
  };
};
