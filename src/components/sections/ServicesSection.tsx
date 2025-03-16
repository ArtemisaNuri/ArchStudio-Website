
import { Building, Ruler, PenTool, Home } from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Architectural Design",
    description: "Comprehensive architectural services from concept to completion, creating spaces that inspire and function beautifully."
  },
  {
    icon: Ruler,
    title: "Interior Design",
    description: "Thoughtfully crafted interior spaces that balance aesthetics, functionality, and client vision."
  },
  {
    icon: PenTool,
    title: "Urban Planning",
    description: "Strategic planning solutions for communities, emphasizing sustainability, accessibility, and quality of life."
  },
  {
    icon: Home,
    title: "Residential Design",
    description: "Personalized home designs that reflect your lifestyle while incorporating innovative and sustainable features."
  }
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive design solutions across various disciplines, ensuring every project exceeds expectations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="h-14 w-14 bg-black/5 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="h-7 w-7 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Process Steps */}
        <div className="mt-24">
          <h3 className="text-2xl font-semibold text-center mb-16">Our Design Process</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
            {[
              { number: "01", title: "Discovery", description: "Understanding your vision, requirements, and constraints through in-depth consultation" },
              { number: "02", title: "Concept", description: "Developing preliminary designs and creative solutions aligned with your objectives" },
              { number: "03", title: "Development", description: "Refining the design with detailed plans, material selection, and technical specifications" },
              { number: "04", title: "Delivery", description: "Bringing the design to life through expert implementation and quality control" }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col">
                  <span className="text-5xl font-light text-gray-200">{step.number}</span>
                  <h4 className="text-xl font-semibold mt-2 mb-3">{step.title}</h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                {/* Connector line (hiding for the last item) */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-full h-px bg-gray-200 transform translate-x-1/2">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 h-2 w-2 bg-gray-300 rounded-full"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
