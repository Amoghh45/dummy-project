import { useState, useEffect } from "react";

const PredictPrice = () => {
  const [locations, setLocations] = useState([]);
  const [location, setLocation] = useState("");
  const [totalSqft, setTotalSqft] = useState("");
  const [bhk, setBhk] = useState("");
  const [bathrooms, setBathrooms] = useState("");
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  // Fetch locations when component mounts
  useEffect(() => {
    setLocations(["Location 1", "Location 2", "Location 3"]);
  }, []);
  

  const handlePredictPrice = async () => {
    setError(null);
    try {
      // Mock prediction logic
      const mockPrice = 50; // Example value
      setResult(mockPrice);
    } catch (err) {
      setError(err.message);
    }
  };
  

  
  return (
    <div
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: "url('/reales2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
  
      {/* Content */}
      <div className="relative bg-white p-8 rounded-xl shadow-lg max-w-lg w-full">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-6">Home Price Prediction</h1>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Location</label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select Location</option>
              {locations.map((loc, index) => (
                <option key={index} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Total Sqft</label>
            <input
              type="number"
              placeholder="Enter total sqft"
              value={totalSqft}
              onChange={(e) => setTotalSqft(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">BHK</label>
            <input
              type="number"
              placeholder="Enter number of BHK"
              value={bhk}
              onChange={(e) => setBhk(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Bathrooms</label>
            <input
              type="number"
              placeholder="Enter number of bathrooms"
              value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            onClick={handlePredictPrice}
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-indigo-700 transition-all"
          >
            Predict Price
          </button>
        </div>
        {result && (
          <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg text-center">
            Estimated Price: ₹ {result} Lakhs
          </div>
        )}
        {error && (
          <div className="mt-6 p-4 bg-red-100 text-red-800 rounded-lg text-center">
            Error: {error}
          </div>
        )}
      </div>
    </div>
  );
};  

export default PredictPrice;
