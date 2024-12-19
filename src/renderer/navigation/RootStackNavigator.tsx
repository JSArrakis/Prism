import { Routes, Route } from 'react-router-dom';
import { Home, Splash } from '@screens';

const RootStackNavigator = () => {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default RootStackNavigator;
