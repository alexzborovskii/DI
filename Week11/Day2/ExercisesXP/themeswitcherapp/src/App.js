import React from "react";
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import "./App.css";

function ThemeSwitcher() {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`App ${theme}`}>
            <h1>Theme Switcher Example</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <p>Current Theme: {theme}</p>
        </div>
    );
}

function App() {

    return (
        <ThemeProvider>
            <ThemeSwitcher />
        </ThemeProvider>
    );
}

export default App;