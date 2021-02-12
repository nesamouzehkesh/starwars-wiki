import { useDispatch } from 'react-redux';
import { setCurrentSelectedActor } from '../../actions/actor';
import type { IActor } from '../../reducers/actor';

interface IProps {
  actor: IActor;
}

const ActorInfo: React.ComponentType<IProps> = ({ actor }) => {
  const { name, height, mass } = actor;
  const dispatch = useDispatch();

  const actorInfoClickHandler = (e: React.ChangeEvent<any>) => {
    dispatch(setCurrentSelectedActor(actor));
  };

  return (
    <tr onClick={actorInfoClickHandler}>
      <td>{name}</td>
      <td>{height}</td>
      <td>{mass}</td>
    </tr>
  );
};

export default ActorInfo;
