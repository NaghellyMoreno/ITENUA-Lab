import katex from 'katex'
import { useTheme } from './components/hooks/useTheme'

const formula = 'E = mc^2'

function App() {
  const { theme, toggleTheme } = useTheme('light')

  const renderedFormula = katex.renderToString(formula, {
    throwOnError: false,
    displayMode: true,
  })

  return (
    <main className="app-shell flex min-h-screen items-center justify-center px-6 py-12">
      <section className="surface w-full max-w-2xl rounded-[var(--radius-lg)] p-8">
        <div className="mb-6 flex items-center justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-primary)]">
              Configuración validada
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-[var(--color-text)]">
              Tailwind + KaTeX + tema
            </h1>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-text)] transition hover:opacity-90"
          >
            {theme === 'light' ? 'Tema oscuro' : 'Tema claro'}
          </button>
        </div>

        <p className="text-lg text-[var(--color-muted)]">
          La paleta, el sistema de temas y el render matemático quedan conectados para apoyar la UI del proyecto.
        </p>

        <div className="panel mt-8 rounded-[var(--radius-md)] p-6 text-center">
          <div dangerouslySetInnerHTML={{ __html: renderedFormula }} />
        </div>
      </section>
    </main>
  )
}

export default App
