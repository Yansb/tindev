import React from 'react';
import { YellowBox} from 'react-native';
import Route from './src/routes';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket'
])

export default function App() {
  return (
    <Route/>
  );
}