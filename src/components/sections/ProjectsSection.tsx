import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

// Sample project data
const projectsData = [
  {
    id: 1,
    title: "Waterfront Pavilion",
    category: "Commercial",
    location: "San Francisco, CA",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    description:
      "A modern pavilion with panoramic views of the bay, designed for public gatherings and events.",
  },
  {
    id: 2,
    title: "Geometric Residence",
    category: "Residential",
    location: "Aspen, CO",
    image:
      "/images/geometric.jpg",
    description:
      "A striking mountain home featuring bold geometric forms and expansive glass walls.",
  },
  {
    id: 3,
    title: "Bond Tower",
    category: "Commercial",
    location: "Chicago, IL",
    image: "/images/bondtower.jpg",
    description:
      "Located at the intersection of Dritan Hoxha Avenue, in the western part of Tirana, a development zone, this 50-floor tower is designed to become an icon of the development and modernization of the Albanian capital. The building unites residential, commercial, office and hotel space, reflecting the city’s vibrant urban life.",
  },
  {
    id: 4,
    title: "Zen Garden House",
    category: "Residential",
    location: "Portland, OR",
    image:
      "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description:
      "A minimalist residence built around a central courtyard featuring a traditional Japanese garden.",
  },
  {
    id: 5,
    title: "Urban Museum",
    category: "Cultural",
    location: "New York, NY",
    image:
      "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description:
      "A contemporary art museum with flexible exhibition spaces and an innovative facade system.",
  },
  {
    id: 6,
    title: "Desert Retreat",
    category: "Residential",
    image:"/images/dese4rt.jpg",
    description:
      "A luxury residence that blends with the natural landscape, featuring sustainable design elements.",
  },
];

// Filter options
const filters = ["All", "Residential", "Commercial", "Cultural"];

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects =
    activeFilter === "All"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of award-winning designs and architectural
            innovations from around the world.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              className={`
                ${activeFilter === filter ? "bg-black text-white" : "text-gray-600"} 
                rounded-full px-6
              `}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="h-72 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6 bg-white">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <span className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-700">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-500 text-sm mb-3">{project.location}</p>
                <p className="text-gray-600">{project.description}</p>
              </div>
              <div
                className={`absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 transition-opacity duration-300 ${hoveredProject === project.id ? "opacity-100" : ""}`}
              >
                <Button
                  className="bg-white text-black hover:bg-gray-100"
                  asChild
                >
                  <Link to={`/projects/${project.id}`}>View Project</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-gray-300 text-gray-700 hover:bg-gray-50"
            asChild
          >
            <Link to="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
