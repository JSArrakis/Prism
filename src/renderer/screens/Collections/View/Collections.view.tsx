import { FC } from 'react';
import { CollectionsViewModel } from './Collections.viewmodel';
import styles from './Collections.module.css';

interface CollectionsViewProps {
  viewModel: CollectionsViewModel;
}

const CollectionsView: FC<CollectionsViewProps> = ({ viewModel }) => {
  return (
    <div className={styles.screen}>
      <h1>Collections</h1>
      <p>Content goes here</p>
      <div className={styles.mainContent} />
    </div>
  );
};

export default CollectionsView;
