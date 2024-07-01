import React from "react";
import { useNewImage } from "../utils/newImage";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Index = () => {
  const { image, error, handleImageUpload } = useNewImage();

  return (
    <div className="text-center">
      <h1 className="text-3xl">UFO Sightings in the USA</h1>
      <p>Welcome to the UFO sightings website. Share your experiences and explore reports from others.</p>
      <div className="mt-4">
        <h2 className="text-2xl">Upload Your UFO Sighting Image</h2>
        <Input type="file" accept="image/*" onChange={handleImageUpload} />
        {error && <p className="text-red-500">{error}</p>}
        {image && <img src={image} alt="Uploaded UFO" className="mt-4 max-w-full h-auto" />}
      </div>
    </div>
  );
};

export default Index;