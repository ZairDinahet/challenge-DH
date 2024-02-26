import { useState, useEffect } from "react";
import defaultImage from "../assets/img/blank-image.png";

const ImagePreview = ({reset}) => {
  const [imagePreview, setImagePreview] = useState(defaultImage);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setImagePreview(defaultImage);
    }
  };

  useEffect(() => {
    if (reset) {
      setImagePreview(defaultImage);
    }
  }, [reset]);
  return (
    <>
      <img
        src={imagePreview}
        alt="Preview"
        className="w-3/4 object-cover md:w-1/2 lg:w-1/3 xl:w-2/4 rounded-xl my-3 border border-stone-500"
      />
      <input
        type="file"
        className="mt-2 mb-2 h-8 w-3/4 text-stone-950"
        name="image"
        accept="image/*"
        onChange={handleImageChange}
      />
    </>
  );
};

export default ImagePreview;
