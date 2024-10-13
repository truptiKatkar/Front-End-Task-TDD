import React from 'react';
import './App.css';
import StringCalculator from './components/StringCalculator';
import "@mantine/core/styles.css";
import { MantineProvider } from '@mantine/core';

function App() {
  return (
    <div className="App">
      <MantineProvider>
        <StringCalculator />
      </MantineProvider>
    </div>
  );
}

export default App;
