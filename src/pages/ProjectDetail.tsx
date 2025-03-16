
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, MapPin, Calendar, Building } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

// Sample project data (same as in ProjectsSection and Projects)
const projectsData = [
  {
    id: 1,
    title: "Waterfront Pavilion",
    category: "Commercial",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    description: "A modern pavilion with panoramic views of the bay, designed for public gatherings and events.",
    year: "2022",
    client: "Bay Area Development Corp",
    scope: "Architecture, Interior Design",
    fullDescription: "This waterfront pavilion serves as a versatile public space that connects the urban fabric to the bay. The design features a transparent envelope that maximizes views while providing shelter from the elements. The pavilion includes flexible event spaces, a café, and outdoor terraces that step down to the water. Sustainable features include rainwater harvesting, photovoltaic panels integrated into the roof design, and passive cooling strategies that minimize energy consumption.",
    gallery: [
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ]
  },
  {
    id: 2,
    title: "Geometric Residence",
    category: "Residential",
    location: "Aspen, CO",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80",
    description: "A striking mountain home featuring bold geometric forms and expansive glass walls.",
    year: "2021",
    client: "Private Client",
    scope: "Architecture, Landscape Design",
    fullDescription: "This mountain residence embraces its dramatic setting through a series of geometric volumes that respond to the topography. The design balances privacy and openness, with strategic placement of glass walls to frame spectacular views of the surrounding mountains. The material palette includes locally-sourced stone, sustainably harvested timber, and weathered steel that will patina over time. The interior spaces flow seamlessly to outdoor living areas, including a cantilevered deck and infinity pool that appear to float above the landscape.",
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1475&q=80",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1474&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ]
  },
  {
    id: 3,
    title: "Skyline Tower",
    category: "Commercial",
    location: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1545826834-54acb253e4b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
    description: "A 40-story mixed-use tower with a distinctive silhouette that has become an iconic part of the cityscape.",
    year: "2020",
    client: "Midwest Development Group",
    scope: "Architecture, Urban Planning",
    fullDescription: "This mixed-use tower combines office, retail, and residential spaces within a dynamic form that responds to its urban context. The building's distinctive silhouette features a series of setbacks that create outdoor terraces and reduce wind loads. The facade employs a high-performance curtain wall system with integrated shading elements that respond to solar orientation. At the street level, the tower connects to the public realm through a series of plazas and retail spaces that activate the surrounding neighborhood.",
    gallery: [
      "https://images.unsplash.com/photo-1545826834-54acb253e4b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
      "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1605633561363-15ec90c0112a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    ]
  },
  {
    id: 4,
    title: "Zen Garden House",
    category: "Residential",
    location: "Portland, OR",
    image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "A minimalist residence built around a central courtyard featuring a traditional Japanese garden.",
    year: "2019",
    client: "Private Client",
    scope: "Architecture, Landscape Architecture, Interior Design",
    fullDescription: "This residential project draws inspiration from traditional Japanese architecture, organizing living spaces around a central courtyard with a meticulously designed garden. The minimalist design emphasizes natural materials, precise detailing, and the careful modulation of natural light. The house features sliding screens that allow spaces to be reconfigured according to the seasons and the needs of the residents. The garden includes carefully placed stones, pruned trees, and a small reflecting pool that brings a sense of tranquility to the urban site.",
    gallery: [
      "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ]
  },
  {
    id: 5,
    title: "Urban Museum",
    category: "Cultural",
    location: "New York, NY",
    image: "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "A contemporary art museum with flexible exhibition spaces and an innovative facade system.",
    year: "2018",
    client: "Metropolitan Arts Foundation",
    scope: "Architecture, Exhibition Design",
    fullDescription: "This contemporary art museum provides flexible exhibition spaces within a bold architectural expression that engages with its urban context. The innovative facade system features perforated metal panels that create a dynamic interplay of light and shadow throughout the day. The interior spaces vary in scale and character to accommodate diverse art forms, from intimate galleries for delicate works to soaring spaces for large-scale installations. The building also includes education facilities, a research library, a cafe, and a rooftop sculpture garden with panoramic views of the city skyline.",
    gallery: [
      "https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      "https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ]
  },
  {
    id: 6,
    title: "Desert Retreat",
    category: "Residential",
    location: "Sedona, AZ",
    image: "https://images.unsplash.com/photo-1604014438553-71cf47d2ab10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "A luxury residence that blends with the natural landscape, featuring sustainable design elements.",
    year: "2017",
    client: "Private Client",
    scope: "Architecture, Sustainable Design",
    fullDescription: "This desert home embraces its dramatic setting through a series of low-slung volumes that echo the horizontal lines of the landscape. The architecture is characterized by thick walls that provide thermal mass, deep overhangs that create shade, and strategic openings that frame specific views while controlling solar gain. The material palette—rammed earth, local stone, and weathered steel—connects the building to its surroundings. Sustainable features include a ground-source heat pump, photovoltaic array, rainwater harvesting system, and native landscaping that requires minimal irrigation.",
    gallery: [
      "https://images.unsplash.com/photo-1604014438553-71cf47d2ab10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ]
  },
  {
    id: 7,
    title: "Urban Loft Conversion",
    category: "Residential",
    location: "Boston, MA",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "A converted warehouse loft that respects the building's industrial heritage while introducing modern living spaces.",
    year: "2019",
    client: "Private Client",
    scope: "Adaptive Reuse, Interior Design",
    fullDescription: "This project transforms a historic warehouse into a contemporary living space while celebrating the building's industrial character. Original features—exposed brick walls, timber beams, and cast-iron columns—are preserved and complemented by modern interventions. The open plan is organized around a central core that houses utilities and storage, allowing the perimeter to remain unobstructed to maximize natural light. Custom furnishings and thoughtfully placed art create a personalized environment that balances the raw industrial shell with refined elements.",
    gallery: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
      "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
    ]
  },
  {
    id: 8,
    title: "Coastal Restaurant",
    category: "Commercial",
    location: "Miami, FL",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "A beachfront dining establishment with retractable walls that create a seamless indoor-outdoor experience.",
    year: "2020",
    client: "Ocean View Hospitality Group",
    scope: "Architecture, Interior Design",
    fullDescription: "This beachfront restaurant maximizes its prime location through a design that blurs the boundaries between interior and exterior spaces. Retractable glass walls open completely to connect the dining room to a covered terrace with views of the ocean. The material palette—bleached wood, terrazzo floors, and accents of brass and blue—creates a sophisticated atmosphere inspired by the coastal setting. The kitchen is partially visible to diners, adding theater to the experience while custom lighting creates a warm glow that transitions from day to evening.",
    gallery: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1552566626-2d907e233c6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1559329645-fc3fe3e87b3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    ]
  },
  {
    id: 9,
    title: "Green Tech Headquarters",
    category: "Commercial",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    description: "A LEED Platinum certified office building incorporating advanced sustainable technologies and biophilic design principles.",
    year: "2021",
    client: "EcoTech Industries",
    scope: "Sustainable Architecture, Workplace Design",
    fullDescription: "This headquarters for a green technology company embodies the client's commitment to sustainability through its design and performance. The LEED Platinum certified building features a high-performance envelope, rooftop photovoltaic array, rainwater harvesting, and geothermal heating and cooling. The workspace design incorporates biophilic elements—abundant natural light, views to nature, living walls, and natural materials—to enhance employee wellbeing and productivity. Flexible, activity-based work environments support various modes of collaboration and focused work while smart building systems optimize comfort and energy use.",
    gallery: [
      "https://images.unsplash.com/photo-1600607687644-c7171b42498f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
    ]
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const [currentProject, setCurrentProject] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { toast } = useToast();
  
  useEffect(() => {
    if (id) {
      const project = projectsData.find(p => p.id === parseInt(id));
      if (project) {
        setCurrentProject(project);
        // Reset image index when project changes
        setCurrentImageIndex(0);
      }
    }
  }, [id]);

  if (!currentProject) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading project details...</p>
      </div>
    );
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === currentProject.gallery.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? currentProject.gallery.length - 1 : prevIndex - 1
    );
  };

  const handleContactClick = () => {
    toast({
      title: "Message sent!",
      description: "We've received your inquiry about this project.",
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24 pb-20">
        {/* Back Button */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8">
          <Button variant="outline" className="flex items-center gap-2" asChild>
            <Link to="/projects">
              <ArrowLeft size={16} />
              Back to Projects
            </Link>
          </Button>
        </div>

        {/* Hero Section */}
        <div className="relative h-96 md:h-[500px] mb-16">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${currentProject.gallery[currentImageIndex]})` }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
          </div>
          
          {/* Image Gallery Navigation */}
          {currentProject.gallery.length > 1 && (
            <div className="absolute inset-x-0 bottom-0 top-0 flex items-center justify-between px-4 md:px-10">
              <Button 
                variant="outline" 
                size="icon" 
                className="bg-black/50 text-white border-none hover:bg-black/70"
                onClick={prevImage}
              >
                <ArrowLeft size={20} />
              </Button>
              <Button 
                variant="outline" 
                size="icon" 
                className="bg-black/50 text-white border-none hover:bg-black/70"
                onClick={nextImage}
              >
                <ArrowLeft size={20} className="rotate-180" />
              </Button>
            </div>
          )}
          
          {/* Title Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
            <div className="max-w-3xl text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{currentProject.title}</h1>
              <div className="flex items-center justify-center space-x-4 mb-4">
                <span className="bg-white/20 px-4 py-1 rounded-full backdrop-blur-sm">
                  {currentProject.category}
                </span>
                <span className="bg-white/20 px-4 py-1 rounded-full backdrop-blur-sm flex items-center">
                  <MapPin size={14} className="mr-1" />
                  {currentProject.location}
                </span>
              </div>
            </div>
          </div>
          
          {/* Image Counter */}
          {currentProject.gallery.length > 1 && (
            <div className="absolute bottom-6 right-6 bg-black/60 px-3 py-1 rounded-full text-white text-sm">
              {currentImageIndex + 1} / {currentProject.gallery.length}
            </div>
          )}
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content - 2/3 width on desktop */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-semibold mb-6">Project Overview</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              {currentProject.fullDescription || currentProject.description}
            </p>
            
            {/* Gallery Thumbnails */}
            <h3 className="text-xl font-semibold mb-4">Project Gallery</h3>
            <div className="grid grid-cols-3 gap-4 mb-12">
              {currentProject.gallery.map((image: string, index: number) => (
                <div 
                  key={index} 
                  className={`aspect-video rounded-lg overflow-hidden cursor-pointer border-2 ${index === currentImageIndex ? 'border-black' : 'border-transparent'}`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <img 
                    src={image} 
                    alt={`${currentProject.title} - view ${index + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar - 1/3 width on desktop */}
          <div>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-gray-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Year</p>
                      <p className="font-medium">{currentProject.year}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Building className="w-5 h-5 text-gray-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Client</p>
                      <p className="font-medium">{currentProject.client}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-gray-500 mt-0.5" />
                    <div>
                      <p className="text-sm text-gray-500">Location</p>
                      <p className="font-medium">{currentProject.location}</p>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Scope of Work</p>
                    <p className="font-medium">{currentProject.scope}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <Button 
                    className="w-full bg-black text-white hover:bg-gray-800"
                    onClick={handleContactClick}
                  >
                    Inquire About This Project
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Share This Project</h3>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
