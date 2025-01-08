import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const images = [
  "/shivrj_maharaj.png",
  "/swirl.png",
  "/Sap_soma.png"
];

const Index = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-[rgb(87,87,87)] flex flex-col">
      <Navbar />
      
      <div className="canvas-container flex-grow p-4 md:p-8">
        <Carousel className="w-full max-w-6xl mx-auto" opts={{ loop: true, align: "center" }}>
          <CarouselContent>
            {images.map((src, index) => (
              <CarouselItem key={index} className="relative p-2">
                <div
                  className={cn(
                    "w-full aspect-[3/2] overflow-hidden rounded-lg shadow-lg",
                    "transition-all duration-2000 ease-in-out",
                    currentImage === index ? "scale-110" : "scale-100"
                  )}
                >
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className={cn(
                      "w-full h-full object-cover",
                      "transition-opacity duration-1000",
                      currentImage === index ? "opacity-100" : "opacity-80"
                    )}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <Footer />
    </div>
  );
};

export default Index;