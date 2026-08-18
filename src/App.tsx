import katex from "katex";
import { Moon, SunMedium } from "lucide-react";
import { useTheme } from "./components/hooks/useTheme";

const formula = "E = mc^2";

function App() {
  const { theme, toggleTheme } = useTheme("light");
  const isDark = theme === "dark";

  const renderedFormula = katex.renderToString(formula, {
    throwOnError: false,
    displayMode: true,
  });

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
            aria-label={isDark ? "Activar tema claro" : "Activar tema oscuro"}
            onClick={toggleTheme}
            className="group relative inline-flex h-16 w-28 items-center rounded-full border-[3px] border-[var(--color-text)] bg-[var(--color-surface)] p-1 transition-all duration-200 ease-out hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
          >
            <span
              className={`absolute left-2 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-[3px] border-[var(--color-text)] bg-[var(--color-bg)] text-[var(--color-text)] transition-transform duration-300 ease-out ${
                isDark ? "translate-x-12" : "translate-x-0"
              }`}
            >
              {isDark ? (
                <Moon size={18} strokeWidth={2.5} />
              ) : (
                <SunMedium size={18} strokeWidth={2.5} />
              )}
            </span>
          </button>
        </div>

        <p className="text-lg text-[var(--color-muted)]">
          La paleta, el sistema de temas y el render matemático quedan
          conectados para apoyar la UI del proyecto.
        </p>

        <div className="panel mt-8 rounded-[var(--radius-md)] p-6 text-center">
          <div dangerouslySetInnerHTML={{ __html: renderedFormula }} />
        </div>
      </section>
    </main>
  );
}

export default App;
