import useRootStack from '@navigation/useRootStack';
import CommercialsView, { useCommercialsViewModel } from './View';

const Commercials = () => {
  const navigate = useRootStack();
  const viewModel = useCommercialsViewModel(navigate);
  return <CommercialsView viewModel={viewModel} />;
};

export default Commercials;
