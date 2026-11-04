export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-4 sm:py-32 sm:px-6 lg:py-40">
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground">
        Anteneh Rocha Otero
      </h1>
      <p className="mt-4 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
        Portfolio sencillo. Un proyecto relevante.
      </p>
      <a
        href="https://servidor-tienda-antenehrocha.onrender.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors"
      >
        Ver proyecto
      </a>
    </section>
  );
}
