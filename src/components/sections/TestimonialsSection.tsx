
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Homeowner",
    quote: "Working with ARCHSTUDIO was a wonderful experience. They transformed our outdated home into a modern sanctuary that perfectly suits our lifestyle. Their attention to detail and thoughtful design choices exceeded our expectations.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO, TechHub Offices",
    quote: "The team at ARCHSTUDIO delivered an exceptional workspace design that has dramatically improved our company culture and productivity. Their innovative approach to commercial architecture has made our office a showcase in the industry.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "City Urban Planner",
    quote: "ARCHSTUDIO's contribution to our city's waterfront revitalization project was invaluable. Their urban design expertise and commitment to sustainable practices created a vibrant public space that has become the heart of our community.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
  }
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-6 md:px-12 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            We take pride in creating meaningful spaces and lasting relationships with our clients.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gray-800 rounded-xl p-8 md:p-10 shadow-lg relative">
                    <Quote className="h-12 w-12 text-gray-700 absolute top-6 right-6" />
                    
                    <p className="text-gray-300 text-lg mb-8 relative z-10">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center">
                      <div className="h-14 w-14 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">{testimonial.name}</h4>
                        <p className="text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-10 w-10 rounded-full border-gray-600 text-gray-400 hover:text-white hover:border-gray-400"
              onClick={handlePrev}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="h-10 w-10 rounded-full border-gray-600 text-gray-400 hover:text-white hover:border-gray-400"
              onClick={handleNext}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex ? 'w-8 bg-white' : 'w-2 bg-gray-600'
                }`}
                onClick={() => setActiveIndex(index)}
              >
                <span className="sr-only">Testimonial {index + 1}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
