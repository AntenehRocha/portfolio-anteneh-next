import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const projects = [
  {
    url: "https://servidor-tienda-antenehrocha.onrender.com/",
    title: "",
    description: "",
    image: "/servidor-tienda-antenehrocha.onrender.com_.png",
  },
  {
    url: "https://servidor-juego-parejas-antenehrocha.onrender.com/",
    title: "",
    description: "",
    image: "/servidor-juego-parejas-antenehrocha.onrender.com_.png",
  },
];

export default function ProjectsGrid() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-left mb-12">
          Proyectos
        </h2>
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
                <div className="relative h-56 overflow-clip rounded-t-xl">
                  <Image
                    src={project.image}
                    alt={project.title || "Proyecto"}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
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
