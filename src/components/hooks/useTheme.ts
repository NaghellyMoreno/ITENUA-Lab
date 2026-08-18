import { useEffect, useState } from 'react'

export type ThemeMode = 'light' | 'dark'

export function useTheme(initialTheme: ThemeMode = 'light') {
  const [theme, setTheme] = useState<ThemeMode>(initialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }

  return { theme, setTheme, toggleTheme }
}
