
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
              src="/images/archstudio.jpg"
                alt="Our studio" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-4/5 h-full bg-gray-100 rounded-lg -z-10"></div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About Our Studio</h2>
            
            <p className="text-gray-700 mb-6">
              Founded in 2010, ARCHSTUDIO brings together a diverse team of architects, designers, and planners committed to creating meaningful, sustainable, and beautiful spaces.
            </p>
            
            <p className="text-gray-700 mb-6">
              Our approach combines innovative design thinking with technical expertise, resulting in architecture that responds sensitively to its context while pushing boundaries. We believe in the power of design to enhance lives and contribute positively to our built environment.
            </p>
            
            <p className="text-gray-700 mb-8">
              With projects spanning residential, commercial, cultural, and urban design, our portfolio reflects our versatility and commitment to excellence across scales and typologies.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-10">
              <div>
                <p className="text-3xl font-bold text-black">50+</p>
                <p className="text-gray-600">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-black">15</p>
                <p className="text-gray-600">Design Awards</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-black">25</p>
                <p className="text-gray-600">Team Members</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-black">12</p>
                <p className="text-gray-600">Years Experience</p>
              </div>
            </div>
            
            <Button className="bg-black text-white hover:bg-gray-800">
              Meet Our Team
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
