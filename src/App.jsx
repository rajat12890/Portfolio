import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import { useEffect, useState } from 'react';
import { createContext } from 'react';

export const AppContext = createContext();

function App() {
	const savedTheme = localStorage.getItem("theme");
    const [theme, setTheme] = useState(savedTheme || "dark");

	useEffect(() => {
    console.log('h');
        document.documentElement.classList.toggle("dark", theme === "dark");

        localStorage.setItem("theme", theme);
    }, [theme]);

	const switchTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

	return (
		<AppContext.Provider value={{ theme, switchTheme }}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					
				</Routes>
			</BrowserRouter>
		</AppContext.Provider>
	)
}

export default App