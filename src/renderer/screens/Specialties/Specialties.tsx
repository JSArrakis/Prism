import useRootStack from '@navigation/useRootStack';
import SpecialtiesView, { useSpecialtiesViewModel } from './View';

const Specialties = () => {
  const navigate = useRootStack();
  const viewModel = useSpecialtiesViewModel(navigate);
  return <SpecialtiesView viewModel={viewModel} />;
};

export default Specialties;
