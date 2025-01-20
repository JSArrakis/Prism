import { FC } from 'react';
import { HomeViewModel } from './Home.viewmodel';
import styles from './Home.module.css';

interface HomeViewProps {
  viewModel: HomeViewModel;
}

const HomeView: FC<HomeViewProps> = ({ viewModel }) => {

  return (
    <div className={styles.screen}>
      <h1>Home</h1>
      <p>Content goes here</p>
      <div className={styles.mainContent}></div>
    </div>
  );
};

export default HomeView;
