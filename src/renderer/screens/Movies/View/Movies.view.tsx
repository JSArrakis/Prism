import { FC } from 'react';
import { MoviesViewModel } from './Movies.viewmodel';
import styles from './Movies.module.css';

interface MoviesViewProps {
  viewModel: MoviesViewModel;
}

const MoviesView: FC<MoviesViewProps> = ({ viewModel }) => {
  return (
    <div className={styles.screen}>
      <h1>Movies</h1>
      <p>Content goes here</p>
      <div className={styles.mainContent}></div>
    </div>
  );
};

export default MoviesView;
