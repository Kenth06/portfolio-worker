export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Nebula",
    description:
      "A design system for enterprise applications with accessibility at its core.",
    tags: ["Design System", "API", "Backend", "Components"],
    image: "/src/assets/projects/nebula.svg",
    link: "#",
  },
  {
    id: 2,
    title: "Prism",
    description:
      "AI-powered color palette generator for designers and artists.",
    tags: ["AI", "Color Theory", "Tool"],
    image: "",
    link: "#",
  },
];

export const allTags = Array.from(
  new Set(projects.flatMap((project) => project.tags))
).sort();
