import useRootStack from '@navigation/useRootStack';
import SettingsView, { useSettingsViewModel } from './View';

const Settings = () => {
  const navigate = useRootStack();
  const viewModel = useSettingsViewModel(navigate);
  return <SettingsView viewModel={viewModel} />;
};

export default Settings;
