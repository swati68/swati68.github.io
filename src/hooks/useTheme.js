import { useEffect, useState } from 'react'

const THEME_STORAGE_KEY = 'swati-portfolio-theme'
const THEMES = ['light', 'dark']

function getStoredTheme() {
  try {
    return window.localStorage?.getItem(THEME_STORAGE_KEY)
  } catch {
    return null
  }
}

function storeTheme(theme) {
  try {
    window.localStorage?.setItem(THEME_STORAGE_KEY, theme)
  } catch {
    // Storage can be unavailable in restricted browser contexts.
  }
}

function getPreferredTheme() {
  if (typeof window === 'undefined') {
    return 'light'
  }

  const storedTheme = getStoredTheme()

  if (THEMES.includes(storedTheme)) {
    return storedTheme
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof document !== 'undefined') {
      const documentTheme = document.documentElement.dataset.theme

      if (THEMES.includes(documentTheme)) {
        return documentTheme
      }
    }

    return getPreferredTheme()
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    storeTheme(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'))
  }

  return { theme, toggleTheme }
}

export default useTheme
