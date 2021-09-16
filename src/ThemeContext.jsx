import React, {useState, useContext, createContext} from "react";

const ThemeContext = createContext(null)
const ThemeUpdateContext = createContext(null)

const ThemeProvider = ({children}) => {
  const [darkTheme, setDarkTheme] = useState(true)

  const toggleTheme = () => {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  return useContext(ThemeContext)
}

export const useThemeUpdate = () => {
  return useContext(ThemeUpdateContext)
}
export default ThemeProvider;