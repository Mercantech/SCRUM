import type { Theme } from "../hooks/useTheme"

type Props = {
  theme: Theme
  onToggle: () => void
}

export function ThemeToggle({ theme, onToggle }: Props) {
  const isDark = theme === "dark"

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={onToggle}
      aria-label={isDark ? "Skift til light mode" : "Skift til dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      <span className="theme-toggle__track" aria-hidden="true">
        <span className={`theme-toggle__thumb${isDark ? " is-dark" : ""}`}>
          {isDark ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path
                d="M21 14.3A8.5 8.5 0 0 1 9.7 3 7 7 0 1 0 21 14.3Z"
                fill="currentColor"
              />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="4" fill="currentColor" />
              <path
                d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          )}
        </span>
      </span>
      <span className="theme-toggle__label">{isDark ? "Mørk" : "Lys"}</span>
    </button>
  )
}
