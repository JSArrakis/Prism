import { Routes, Route } from 'react-router-dom';
import { Splash } from '@screens';

const RootStackNavigator = () => {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
    </Routes>
  );
};

export default RootStackNavigator;
