
import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { Button } from "@/components/ui/button";

// Sample project data (same as in ProjectsSection)
const projectsData = [
  {
    id: 1,
    title: "Waterfront Pavilion",
    category: "Commercial",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    description: "A modern pavilion with panoramic views of the bay, designed for public gatherings and events."
  },
  {
    id: 2,
    title: "Geometric Residence",
    category: "Residential",
    location: "Aspen, CO",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80",
    description: "A striking mountain home featuring bold geometric forms and expansive glass walls."
  },
  {
    id: 3,
    title: "Skyline Tower",
    category: "Commercial",
    location: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1545826834-54acb253e4b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    description: "A 40-story mixed-use tower with a distinctive silhouette that has become an iconic part of the cityscape."
  },
  {
    id: 4,
    title: "Zen Garden House",
    category: "Residential",
    location: "Portland, OR",
    image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "A minimalist residence built around a central courtyard featuring a traditional Japanese garden."
  },
  {
    id: 5,
    title: "Urban Museum",
    category: "Cultural",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "A contemporary art museum with flexible exhibition spaces and an innovative facade system."
  },
  {
    id: 6,
    title: "Desert Retreat",
    category: "Residential",
    location: "Sedona, AZ",
    image: "https://images.unsplash.com/photo-1604014438553-71cf47d2ab10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "A luxury residence that blends with the natural landscape, featuring sustainable design elements."
  },
  {
    id: 7,
    title: "Urban Loft Conversion",
    category: "Residential",
    location: "Boston, MA",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "A converted warehouse loft that respects the building's industrial heritage while introducing modern living spaces."
  },
  {
    id: 8,
    title: "Coastal Restaurant",
    category: "Commercial",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "A beachfront dining establishment with retractable walls that create a seamless indoor-outdoor experience."
  },
  {
    id: 9,
    title: "Green Tech Headquarters",
    category: "Commercial",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "A LEED Platinum certified office building incorporating advanced sustainable technologies and biophilic design principles."
  }
];

// Filter options
const filters = ["All", "Residential", "Commercial", "Cultural"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeFilter === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        {/* Hero Section */}
        <div className="relative h-64 md:h-80 bg-black mb-16">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-60" 
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')"
            }}
          ></div>
          <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-6">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Projects</h1>
            <p className="text-lg md:text-xl max-w-2xl text-center">
              Explore our portfolio of award-winning designs and architectural innovations
            </p>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {filters.map(filter => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                className={`
                  ${activeFilter === filter ? 'bg-black text-white' : 'text-gray-600'} 
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
            {filteredProjects.map(project => (
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
                  className={`absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 transition-opacity duration-300 ${hoveredProject === project.id ? 'opacity-100' : ''}`}
                >
                  <Button className="bg-white text-black hover:bg-gray-100" asChild>
                    <Link to={`/projects/${project.id}`}>
                      View Details
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
