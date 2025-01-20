import useRootStack from '@navigation/useRootStack';
import HolidaysView, { useHolidaysViewModel } from './View';

const Holidays = () => {
  const navigate = useRootStack();
  const viewModel = useHolidaysViewModel(navigate);
  return <HolidaysView viewModel={viewModel} />;
};

export default Holidays;
