import styles from './Pagination.module.css';

interface IProps {
  currentPage: number;
  onPrevClick?(): void;
  onNextClick?(): void;
}

const Pagination: React.ComponentType<IProps> = ({ currentPage, onPrevClick, onNextClick }) => (
  <div className={styles.paginationContainer}>
    {onPrevClick && (
      <p className={styles.paginationItem} onClick={onPrevClick}>
      &lt; Prev
      </p>
    )}
    <p className={styles.paginationItem}>{currentPage}</p>
    {onNextClick && (
      <p className={styles.paginationItem} onClick={onNextClick}>
        Next &gt;
      </p>
    )}
  </div>
);

export default Pagination;
