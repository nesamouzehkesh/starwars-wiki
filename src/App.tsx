import styles from './App.module.css';
import HeaderLogo from './elements/header/HeaderLogo';
import ActorsList from './pages/actorsList/ActorsList';

function App() {
  return (
    <div className={styles.App}>
      <HeaderLogo />
      <ActorsList />
    </div>
  );
}

export default App;
