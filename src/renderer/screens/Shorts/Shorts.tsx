import useRootStack from '@navigation/useRootStack';
import ShortsView, { useShortsViewModel } from './View';

const Shorts = () => {
  const navigate = useRootStack();
  const viewModel = useShortsViewModel(navigate);
  return <ShortsView viewModel={viewModel} />;
};

export default Shorts;
