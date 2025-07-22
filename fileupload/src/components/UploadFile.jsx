import { useState } from "react";
import axios from "axios";

function ImageUpload() {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!image) return;

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "testing"); // replace with your actual preset

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dxlliybl6/image/upload",
        formData
      );
      setImageUrl(res.data.secure_url); // You can use this URL to show or store the image
      console.log("Uploaded URL:", res.data.secure_url);
    } catch (err) {
      console.error("Upload error:", err);
    }
  };

  return (
    <div className="p-4">
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button onClick={handleUpload} className="mt-2 px-4 py-1 bg-blue-500 text-white">
        Upload
      </button>

      {imageUrl && (
        <div className="mt-4">
          <p>Uploaded Image:</p>
          <img src={imageUrl} alt="Uploaded" className="w-64 h-auto mt-2 rounded-lg shadow" />
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
