import useRootStack from '@navigation/useRootStack';
import ShowsView, { useShowsViewModel } from './View';

const Shows = () => {
  const navigate = useRootStack();
  const viewModel = useShowsViewModel(navigate);
  return <ShowsView viewModel={viewModel} />;
};

export default Shows;
