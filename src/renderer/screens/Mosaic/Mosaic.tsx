import useRootStack from '@navigation/useRootStack';
import MosaicView, { useMosaicViewModel } from './View';

const Mosaic = () => {
  const navigate = useRootStack();
  const viewModel = useMosaicViewModel(navigate);
  return <MosaicView viewModel={viewModel} />;
};

export default Mosaic;
