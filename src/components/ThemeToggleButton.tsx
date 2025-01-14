"use client";

import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';

const ThemeToggleButton = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        // Obtiene el tema inicial desde localStorage o sistema operativo
        const savedTheme: string = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        setTheme(savedTheme);
        document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative mr-4 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            aria-label="Toggle Theme"
        >
            {theme === 'light' ? (
                <MoonIcon className="w-6 h-6 text-gray-400 dark:text-gray-400" />
            ) : (
                <SunIcon className="w-6 h-6 text-gray-400 dark:text-gray-400" />
            )}
        </button>
    );
};

export default ThemeToggleButton;