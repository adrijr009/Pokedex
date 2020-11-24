import { StatusBar } from 'expo-status-bar';
import React from 'react';

import Pokedex from './src/routes/pokedex';

export default function App() {
  return (
    <>
      <Pokedex />
      <StatusBar style="auto" />
    </>
  );
}

