import type { IActor } from '../../reducers/actor';
import ActorInfo from './ActorInfo';
import styles from './ActorsListTable.module.css';

const ActorsListTableHeader = ['Name', 'Height', 'Mass'];

interface IProps {
  actors: IActor[];
}

const ActorsListTable: React.ComponentType<IProps> = ({ actors }) => {
  const tableHeader = ActorsListTableHeader.map((header, index) => (
    <th key={index}>{header}</th>
  ));

  const actorsInfo = actors && actors.map((actor: IActor, index: number) => (
    <ActorInfo actor={actor} key={Math.random() * Number(index)} />
  ));

  return (
    <table className={styles.actorsTable}>
      <tbody>
        <tr>
          {tableHeader}
        </tr>
        {actorsInfo}
      </tbody>
    </table>
  );
};

export default ActorsListTable;
