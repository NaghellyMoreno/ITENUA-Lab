import katex from 'katex'

const formula = 'E = mc^2'
const renderedFormula = katex.renderToString(formula, {
  throwOnError: false,
  displayMode: true,
})

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-100 px-6 py-12 text-slate-900">
      <section className="w-full max-w-2xl rounded-2xl border border-slate-200 bg-white p-8 shadow-lg shadow-slate-200">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
          Configuración validada
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Tailwind + KaTeX funcionando
        </h1>

        <p className="mt-4 text-lg text-slate-600">
          Esta vista confirma que la integración de clases de Tailwind y el render de ecuaciones con KaTeX está activa.
        </p>

        <div
          className="mt-8 rounded-xl border border-violet-100 bg-violet-50 p-6 text-center"
          dangerouslySetInnerHTML={{ __html: renderedFormula }}
        />
      </section>
    </main>
  )
}

export default App
