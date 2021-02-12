
import { useSelector } from 'react-redux';
import Spinner from '../../elements/spinner/Spinner';
import { useFetchActorsList } from '../../hooks/useFetchActorsList';
import ActorsDetails from '../../pages/actorsList/ActorDetails';
import ActorsListPagination from '../../pages/actorsList/ActorsListPagination';
import ActorsListTable from '../../pages/actorsList/ActorsListTable';
import type { RootState } from '../../reducers/index';

const ActorsList = () => {
  const {
    currentPage,
    actorsList,
    loading,
  } = useSelector((state: RootState) => state.actors);
  useFetchActorsList(currentPage);

  return loading? <Spinner /> : (
    <>
      <ActorsListTable actors={actorsList} />
      <ActorsDetails />
      <ActorsListPagination />
    </>
  );
};

export default ActorsList;
