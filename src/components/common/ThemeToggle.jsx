import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react'

const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark") {
            setIsDarkMode(true)
            document.documentElement.classList.add("dark");
        } else if (storedTheme === "light") {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, []);


    const toggleTheme = () => {
        if (isDarkMode) {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            setIsDarkMode(true);
            localStorage.setItem('theme', 'dark');
        }
    }
  return (
    <button onClick={toggleTheme} className='p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'>
        {isDarkMode ? <Sun className="h-5 w-5 md:h-6 md:w-6" /> : <Moon className="h-5 w-5 md:h-6 md:w-6" />}
    </button>
  )
}

export default ThemeToggle
