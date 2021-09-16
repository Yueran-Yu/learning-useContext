import React from 'react';
import {useTheme, useThemeUpdate} from "./ThemeContext";

const FunctionContextComponent = () => {
  const darkTheme = useTheme()
  const toggleTheme = useThemeUpdate()

  const themeStyles = {
    backgroundColor: darkTheme ? '#333' : '#CCC',
    color: darkTheme ? '#CCC' : '#333',
    padding: '2rem',
    margin: '2rem'
  }
  return (
    <>
      <h1 style={themeStyles}>function theme</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </>
  )
}

export default FunctionContextComponent;