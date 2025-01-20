import useRootStack from '@navigation/useRootStack';
import ErasView, { useErasViewModel } from './View';

const Eras = () => {
  const navigate = useRootStack();
  const viewModel = useErasViewModel(navigate);
  return <ErasView viewModel={viewModel} />;
};

export default Eras;
