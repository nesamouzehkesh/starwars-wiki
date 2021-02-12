import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../actions/actors';
import Pagination from '../../elements/pagination/Pagination';
import type { RootState } from '../../reducers/index';

const ActorsListPagination = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);

  const { currentPage, countPerPage, count } = state.actors;
  const totalPageCount = Math.ceil(count/countPerPage); // e.g 9 pages for 82 items

  const nextPage = currentPage + 1 <= totalPageCount ? currentPage + 1 : currentPage;
  const previousPage = currentPage === 1 ? currentPage : currentPage - 1;

  const onNextClickHandler = () => dispatch(setCurrentPage(nextPage));
  const onPrevClickHandler = () => dispatch(setCurrentPage(previousPage));

  return (
    <Pagination
      currentPage={currentPage}
      onPrevClick={currentPage === previousPage ? undefined: onPrevClickHandler}
      onNextClick={currentPage === nextPage ? undefined : onNextClickHandler}
    />
  );
};

export default ActorsListPagination;
