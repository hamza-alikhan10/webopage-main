import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const images = [
  "/placeholder.svg",
  "https://source.unsplash.com/random/1200x800?art=1",
  "https://source.unsplash.com/random/1200x800?art=2",
  "https://source.unsplash.com/random/1200x800?art=3"
];

const Index = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-[rgb(87,87,87)] flex flex-col">
      <Navbar />
      
      <div className="canvas-container flex-grow">
        <Carousel className="w-full" opts={{ loop: true, align: "center" }}>
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index} className="relative">
                <div
                  className={cn(
                    "w-full aspect-[3/2] overflow-hidden rounded-lg",
                    "transition-transform duration-[5000ms]",
                    currentImage === index ? "scale-110" : "scale-100"
                  )}
                >
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover transition-opacity duration-500"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* <div className="text-center mt-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">FORM FORGE</h1>
          <p className="text-xl">Crafting Digital Experiences</p>
        </div> */}
      </div>

      <Footer />
    </div>
  );
};

export default Index;