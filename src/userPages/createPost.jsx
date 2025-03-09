import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

export default function CreatePost() {
  const [postText, setPostText] = useState("");
  const [location, setLocation] = useState("");
  const [locality, setLocality] = useState("");
  const [images, setImages] = useState([]);
  const [donationEnabled, setDonationEnabled] = useState(false);
  const [donorName, setDonorName] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [donationProof, setDonationProof] = useState(null);

  const navigate = useNavigate(); // Initialize navigate function

  const locations = ["Belagavi", "Bengaluru", "Gulbarga", "Mysore"];
  const localities = {
    Belagavi: [
      "Athani",
      "Chikkodi",
      "Gokak",
      "HukKeri",
      "KhanaPur",
      "Saundatti",
      "Ramdurg",
      "Raydag",
    ],
    Bengaluru: ["ElectronicCity", "SarjapurRoad", "WhiteField", "Devanahalli"],
    Gulbarga: ["Aland", "Afzalpur", "Chinchioli", "Chitapur"],
    Mysore: ["Mandya", "Kodagu", "Chamarajanagar"],
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newImages = files.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages((prevImages) => [...prevImages, ...newImages]);
  };

  const handleDonationProofChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setDonationProof(URL.createObjectURL(file));
    }
  };

  const removeImage = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (!postText.trim() || !location || !locality) return;

    console.log({
      postText,
      location,
      locality,
      images,
      donationEnabled,
      donorName,
      donationAmount,
      donationProof,
    });

    // Clean up object URLs
    images.forEach(({ preview }) => URL.revokeObjectURL(preview));
    if (donationProof) URL.revokeObjectURL(donationProof);

    // Redirect user to UserPage after 5 seconds
    setTimeout(() => {
      navigate("/UserPage");
    }, 2000);
  };

  return (
    <div className="create-post">
      <h2>Create a Post</h2>

      <textarea
        className="post-text"
        rows="4"
        placeholder="What's on your mind?"
        value={postText}
        onChange={(e) => setPostText(e.target.value)}
      />

      <select
        className="location-dropdown"
        value={location}
        onChange={(e) => {
          setLocation(e.target.value);
          setLocality(""); // Reset locality when location changes
        }}
      >
        <option value="">Select Location</option>
        {locations.map((loc, index) => (
          <option key={index} value={loc}>
            {loc}
          </option>
        ))}
      </select>

      {location && (
        <select
          className="locality-dropdown"
          value={locality}
          onChange={(e) => setLocality(e.target.value)}
        >
          <option value="">Select Locality</option>
          {localities[location]?.map((loc, index) => (
            <option key={index} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      )}

      <label className="file-label">
        Upload Images:
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="file-input"
        />
      </label>

      <div className="image-preview-container">
        {images.map((img, index) => (
          <div key={index} className="image-preview">
            <img src={img.preview} alt={`Preview ${index}`} />
            <button
              className="remove-button"
              onClick={() => removeImage(index)}
            >
              ✖
            </button>
          </div>
        ))}
      </div>

      <div className="donation-toggle">
        <button
          onClick={() => setDonationEnabled(!donationEnabled)}
          className="donation-button"
        >
          {donationEnabled ? "Disable Donations" : "Enable Donations"}
        </button>
      </div>

      {donationEnabled && (
        <div className="donation-fields">
          <input
            type="text"
            placeholder="Enter your name"
            value={donorName}
            onChange={(e) => setDonorName(e.target.value)}
            className="input-field"
          />
          <input
            type="number"
            placeholder="Enter donation amount"
            value={donationAmount}
            onChange={(e) => setDonationAmount(e.target.value)}
            className="input-field"
          />
          <label className="file-label">
            Upload Donation Proof:
            <input
              type="file"
              accept="image/*"
              onChange={handleDonationProofChange}
              className="file-input"
            />
          </label>
          {donationProof && (
            <img
              src={donationProof}
              alt="Proof"
              className="image-preview-single"
            />
          )}
        </div>
      )}

      <button
        onClick={handleSubmit}
        className="submit-button"
        disabled={!postText.trim() || !location || !locality}
      >
        Post
      </button>
    </div>
  );
}
