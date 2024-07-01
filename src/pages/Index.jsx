import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { newImage } from "@/components/ui/new-image";

const Index = () => {
  return (
    <div className="text-center">
      <HeroSection />
      <FeaturedSightings />
    </div>
  );
};

const HeroSection = () => (
  <section className="relative flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: `url(${newImage('public/images/ufo-hero.jpg')})` }}>
    <h1 className="text-5xl font-bold text-white">Discover UFO Sightings in the USA</h1>
    <p className="mt-4 text-xl text-white">Explore the latest reports and sightings of unidentified flying objects</p>
    <Button className="mt-8" variant="primary" size="lg">Explore Sightings</Button>
  </section>
);

const FeaturedSightings = () => (
  <section className="py-16 bg-dark text-neon">
    <h2 className="text-3xl font-bold mb-8">Recent UFO Sightings</h2>
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <img src={newImage('public/images/sighting1.jpg')} alt="Sighting 1" className="w-full h-auto" />
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Sighting 1</h3>
            <p className="text-muted-foreground">Date: 2023-10-01</p>
            <p className="text-muted-foreground">Location: Nevada</p>
          </div>
        </CarouselItem>
        <CarouselItem>
          <img src={newImage('public/images/sighting2.jpg')} alt="Sighting 2" className="w-full h-auto" />
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Sighting 2</h3>
            <p className="text-muted-foreground">Date: 2023-09-15</p>
            <p className="text-muted-foreground">Location: Arizona</p>
          </div>
        </CarouselItem>
        <CarouselItem>
          <img src={newImage('public/images/sighting3.jpg')} alt="Sighting 3" className="w-full h-auto" />
          <div className="mt-4">
            <h3 className="text-xl font-semibold">Sighting 3</h3>
            <p className="text-muted-foreground">Date: 2023-08-20</p>
            <p className="text-muted-foreground">Location: New Mexico</p>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </section>
);

export default Index;