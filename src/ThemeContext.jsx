import React, {useState, useContext, createContext} from "react";

export const ThemeContext = createContext(null)

export const useThemeContext = () => {
  return useContext(ThemeContext)
}

const ThemeProvider = ({children}) => {
  const [darkTheme, setDarkTheme] = useState(true)

  const toggleTheme = () => {
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

  return (
    <ThemeContext.Provider value={{darkTheme,toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;