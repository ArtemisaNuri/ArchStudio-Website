import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";

interface HeroProps {
  title?: string;
  subtitle?: string;
}

const HeroSection = ({
  title = "Designing Spaces That Inspire",
  subtitle = "Award-winning architectural studio in Tirana creating distinctive designs since 2010",
}: HeroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      accent: "from-amber-500/70 to-transparent",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      accent: "from-emerald-500/70 to-transparent",
    },
    {
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      accent: "from-blue-500/70 to-transparent",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Left Content */}
      <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 z-10">
        <div className="flex items-center justify-center lg:justify-end bg-black/90 pr-0 lg:pr-16 relative">
          <div className="w-full max-w-xl px-6 py-24 lg:py-0">
            {/* Animated badge */}
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm mb-8 border border-white/20">
              <span className="animate-pulse w-2 h-2 rounded-full bg-green-400 mr-2"></span>
              Architectural Studio in Tirana
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              {title.split(" ").map((word, i) => (
                <span key={i} className="block">
                  {i === 0 && <span className="text-orange-500">{word} </span>}
                  {i !== 0 && word + " "}
                </span>
              ))}
            </h1>

            <p className="text-lg text-white/80 my-8 leading-relaxed">
              {subtitle}
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="group bg-orange-500 hover:bg-orange-500 text-black px-6 py-6"
                asChild
              >
                <Link to="/projects">
                  View Our Work
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                variant="outline"
                className="bg-transparent border-white/20 hover:bg-white/10 text-white px-6 py-6"
                asChild
              >
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Slide indicators */}
            <div className="hidden lg:flex mt-16 gap-3">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-12 h-1 rounded-full transition-all ${
                    currentSlide === index
                      ? "bg-orange-400 w-24"
                      : "bg-white/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:block"></div>
      </div>

      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              currentSlide === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              <div className="absolute inset-0 bg-black/30"></div>
              <div
                className={`absolute bottom-0 right-0 w-1/2 h-full bg-gradient-to-l ${slide.accent} opacity-30`}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-2 text-white/80 text-sm">
        <span>Scroll to explore</span>
        <div className="w-16 h-px bg-white/50 relative overflow-hidden">
          <div className="absolute top-0 left-0 h-full w-1/2 bg-white animate-[scroll_1.5s_ease-in-out_infinite]"></div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 lg:hidden">
        <ChevronRight className="h-10 w-10 text-white animate-bounce rotate-90" />
      </div>
    </section>
  );
};

export default HeroSection;
