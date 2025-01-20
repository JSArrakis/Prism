import useRootStack from '@navigation/useRootStack';
import GenresView, { useGenresViewModel } from './View';

const Genres = () => {
  const navigate = useRootStack();
  const viewModel = useGenresViewModel(navigate);
  return <GenresView viewModel={viewModel} />;
};

export default Genres;
