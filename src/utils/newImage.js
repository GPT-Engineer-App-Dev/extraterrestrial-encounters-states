import { useState } from "react";

export function useNewImage() {
  const [image, setImage] = useState(null);
  const [error, setError] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setError("File is not an image");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setError("File size exceeds 5MB");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
      setError(null);
    }
  };

  return { image, error, handleImageUpload };
}