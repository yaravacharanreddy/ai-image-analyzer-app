import { useState } from "react";
import axios from "axios";

export default function ImagePromptUploader() {
  const [image, setImage] = useState(null);
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    setResponse("");
    setError("");
  };

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
    setResponse("");
    setError("");
  };

  const handleSubmit = async () => {
    if (!image || !prompt) {
      setError("Please select an image and enter a prompt.");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("prompt", prompt);
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(import.meta.env.VITE_API_URL, formData);
      setResponse(res.data.result);
    } catch (err) {
      setError("Something went wrong while processing your request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">AI Image + Prompt Describer</h1>
      <input type="file" accept="image/*" onChange={handleImageChange} className="mb-4" />
      <input
        type="text"
        value={prompt}
        onChange={handlePromptChange}
        placeholder="Enter your prompt (e.g. 'describe about it')"
        className="mb-4 p-2 border border-gray-300 rounded-md w-full max-w-md"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Processing..." : "Submit"}
      </button>
      {error && <p className="text-red-600 mt-4">{error}</p>}
      {response && (
        <div className="mt-6 bg-white p-4 rounded-md shadow-md max-w-xl w-full">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">Response:</h2>
          <p className="text-gray-600 whitespace-pre-wrap">{response}</p>
        </div>
      )}
    </div>
  );
}