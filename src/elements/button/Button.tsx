import styles from './Button.module.css';

interface IProps {
  label: string;
  onClick(): void;
}

const Button = ({ onClick, label }: IProps) => (
  <button type="button" className={styles.button} onClick={onClick}>
    {label}
  </button>
);

export default Button;
