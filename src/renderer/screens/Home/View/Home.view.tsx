import { FC } from 'react';
import { HomeViewModel } from './Home.viewmodel';
import styles from './Home.module.css';

interface HomeViewProps {
  viewModel: HomeViewModel;
}

const HomeView: FC<HomeViewProps> = ({ viewModel }) => {
  const {} = viewModel;

  return <div className={styles.screen}>Home Screen</div>;
};

export default HomeView;
