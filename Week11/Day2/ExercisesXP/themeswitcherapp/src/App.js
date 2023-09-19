import React from "react";
import { ThemeProvider, useTheme } from "./components/ThemeContext";

function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
}

function App() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <ThemeProvider>
      <div className={`App ${theme}`} >
      {/* <div className={`App`} > */}
        <h1>Theme Switcher Example</h1>
        <ThemeSwitcher />
        {/* Other components here */}
      </div>
    </ThemeProvider>
  );
}

export default App;