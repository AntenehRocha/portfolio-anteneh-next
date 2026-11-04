import { Card, CardContent, CardFooter } from "@/components/ui/card";

const projects = [
  {
    url: "https://servidor-tienda-antenehrocha.onrender.com/",
    title: "",
    description: "",
  },
];

export default function ProjectsGrid() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight mb-12">Proyectos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.url}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <span className="text-xs text-muted-foreground">
                    Abrir proyecto
                  </span>
                </CardFooter>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
