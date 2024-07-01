import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Sightings = () => {
  const [search, setSearch] = useState("");

  const sightings = [
    { id: 1, image: "public/images/sighting1.jpg", date: "2023-10-01", location: "Nevada", description: "A bright light in the sky." },
    { id: 2, image: "public/images/sighting2.jpg", date: "2023-09-15", location: "Arizona", description: "A flying saucer spotted." },
    { id: 3, image: "public/images/sighting3.jpg", date: "2023-08-20", location: "New Mexico", description: "An unidentified object hovering." },
  ];

  const filteredSightings = sightings.filter(sighting =>
    sighting.location.toLowerCase().includes(search.toLowerCase()) ||
    sighting.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">UFO Sightings</h1>
      <Input
        placeholder="Search sightings..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSightings.map(sighting => (
          <Card key={sighting.id}>
            <img src={sighting.image} alt={`Sighting ${sighting.id}`} className="w-full h-auto" />
            <CardHeader>
              <CardTitle>{sighting.location}</CardTitle>
              <CardDescription>{sighting.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{sighting.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Sightings;