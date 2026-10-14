import { useEffect, useState } from "react"

export type Theme = "light" | "dark"

const STORAGE_KEY = "scrum-theme"

function systemTheme(): Theme {
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark"
}

function readTheme(): Theme {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === "light" || stored === "dark") return stored
  return systemTheme()
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() =>
    typeof window === "undefined" ? "dark" : readTheme(),
  )

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem(STORAGE_KEY, theme)
  }, [theme])

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: light)")
    const onChange = () => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        setThemeState(systemTheme())
      }
    }
    mq.addEventListener("change", onChange)
    return () => mq.removeEventListener("change", onChange)
  }, [])

  const toggle = () => setThemeState((t) => (t === "dark" ? "light" : "dark"))
  const setTheme = (next: Theme) => setThemeState(next)

  return { theme, toggle, setTheme }
}
