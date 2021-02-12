import { useDispatch, useSelector } from 'react-redux';
import { clearActorInfo } from '../../actions/actor';
import Button from '../../elements/button/Button';
import Spinner from '../../elements/spinner/Spinner';
import { useFetchActorFilmsNames } from '../../hooks/useFetchActorFilmsNames';
import type { RootState } from '../../reducers/index';
import styles from './ActorDetails.module.css';

const ActorDetails = () => {
  const {
    currentActorFilmsNames,
    currentSelectedActor,
    loading,
  } = useSelector((state: RootState) => state.actor);

  const dispatch = useDispatch();
  const { name, birth_year, gender, films: filmsUrls } = currentSelectedActor || {};
  const clearActorInfoHandler = () => {
    dispatch(clearActorInfo());
  };

  useFetchActorFilmsNames(filmsUrls);

  return loading ?
      <div className={styles.detailsContainer}>
        <Spinner />
      </div>
    : currentSelectedActor && (
      <div className={styles.detailsContainer}>
        <div className={styles.info}>
          <h2>{name}</h2>
          <p className={styles.detail}><b>Birth Year:</b> {birth_year}</p>
          <p className={styles.detail}><b>Gender</b>: {gender}</p>
          <p className={styles.detail}><b>Films: </b></p>
          <section className={styles.filmsContainer}>
            {
              currentActorFilmsNames.map((name: string, index: number) =>
                <p key={index} className={styles.film}>
                  <span role="img" aria-label="alien">👽 {name}</span>
                </p>,
              )
            }
          </section>
        </div>
        <div className={styles.buttonContainer}>
          <Button label="Clear!" onClick={clearActorInfoHandler} />
        </div>
      </div>
    );
};

export default ActorDetails;
