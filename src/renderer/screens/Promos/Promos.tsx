import useRootStack from '@navigation/useRootStack';
import PromosView, { usePromosViewModel } from './View';

const Promos = () => {
  const navigate = useRootStack();
  const viewModel = usePromosViewModel(navigate);
  return <PromosView viewModel={viewModel} />;
};

export default Promos;
