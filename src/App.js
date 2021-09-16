import React from 'react';
import FunctionContextComponent from './FunctionContextComponent';
import ThemeProvider from "./ThemeContext";


export const App = () => {
  return (
    <>
      <ThemeProvider>
        <FunctionContextComponent/>
      </ThemeProvider>
    </>
  );
}

export default App;
