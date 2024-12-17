import { MemoryRouter as Router } from 'react-router-dom';
import RootStackNavigator from '@navigation/RootStackNavigator';

import './App.css';
export default function App() {
  return (
    <Router>
      <RootStackNavigator />
    </Router>
  );
}
