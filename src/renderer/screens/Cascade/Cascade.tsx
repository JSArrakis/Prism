import useRootStack from '@navigation/useRootStack';
import CascadeView, { useCascadeViewModel } from './View';

const Cascade = () => {
  const navigate = useRootStack();
  const viewModel = useCascadeViewModel(navigate);
  return <CascadeView viewModel={viewModel} />;
};

export default Cascade;
