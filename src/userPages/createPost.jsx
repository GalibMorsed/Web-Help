import { useState } from "react";

export default function CreatePost() {
  const [postText, setPostText] = useState("");
  const [location, setLocation] = useState("");
  const [locality, setLocality] = useState(""); 
  const [images, setImages] = useState([]); 
  const [donationEnabled, setDonationEnabled] = useState(false);
  const [donorName, setDonorName] = useState("");
  const [donationAmount, setDonationAmount] = useState("");
  const [donationProof, setDonationProof] = useState(null);

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
    Bengaluru: [
      "EletronicCity",
      "SarjapurRoad",
      "WhiteField",
      "Devanahalli",
      "Inderanagar",
      "Jayanagar",
      "Koramangala",
      "HRSLayout",
      "BannerghattaRoad",
      "CentralBusinessDistrict(CBD)",
      "RajajiNagar",
      "Malleswaram",
      "FrazerTown",
      "CookeTwon",
      "BTMLayout",
      "Ulsoor",
      "AshokNagar",
      "VijayaNagar",
      "JPNagar",
      "Yelahanka",
      "KRPuram",
      "HosurRoad",
      "Yeshwanthpur",
      "Kengari",
      "Mahadevapura",
      "GandhiNagar",
      "Bennghalli",
      "Hoodi",
      "Majestic",
      "NandiniLayout",
      "Kempegowda",
      "Kadugodi",
      "Battarahalli",
      "VictoriaLayout",
      "Hennur",
      "Hoskote",
      "OldMadrasRoad",
      "LalBaghRoad",
      "MGRoad",
    ],

    Gulbarga: [
      "Aland",
      "Afzalpur",
      "Chinchioli",
      "Chitapur",
      "Jevargi",
      "Kalgi",
      "Sedem",
    ],
    Mysore: [
      "Mandya",
      "Kodagu",
      "Chamarajanagar",
      "Hassan",
      "Chikkamagaluru",
      "DikshinaKannada",
      "Udupi",
    ],
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

    // Handle form submission logic (e.g., API call)
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

      {/* Location Selection */}
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

      {/* Locality Selection (only show when location is selected) */}
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

      {/* Image Upload */}
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

      {/* Image Preview */}
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

      {/* Donation Toggle */}
      <div className="donation-toggle">
        <button
          onClick={() => setDonationEnabled(!donationEnabled)}
          className="donation-button"
        >
          {donationEnabled ? "Disable Donations" : "Enable Donations"}
        </button>
      </div>

      {/* Donation Fields (Only show when donation is enabled) */}
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
