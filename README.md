# ai-image-analyzer-app
# 🧠 AI Image Analyzer App

A modern full-stack application that uses **Mistral AI** to analyze uploaded images and generate descriptive captions using vision-language models. Built with a **React.js frontend** and a **Flask backend**, this app is styled with Tailwind CSS for a clean, professional UI.

---

## 🚀 Features

- 📤 Upload images from your local system
- 💬 Enter a prompt or question related to the image
- 🤖 Get intelligent image analysis from Mistral's `pixtral-12b-2409` model
- ⚡ Instant output display in a clean, modern UI
- 🔐 Environment-based API key storage for security

---

## 🧱 Tech Stack

### 🔹 Frontend
- React.js (with Vite)
- Tailwind CSS
- Axios

### 🔹 Backend
- Python Flask
- `mistralai` SDK
- `python-dotenv` for environment variable management
- `base64` encoding for image transmission

---

## 📁 Folder Structure
ai-image-analyzer-app/
├── backend/
│   ├── app.py
│   ├── .env
│   └── requirements.txt
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── ImagePromptUploader.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── public/
│   ├── .env
│   ├── package.json
│   └── tailwind.config.js


# 🔧 Local Setup

### 1. Backend

'''bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py

Make sure you set your Mistral API key in backend/.env:
MISTRAL_API_KEY=your_api_key_here

2. Frontend
in bash run following comands
cd frontend
npm install
npm run dev

Frontend runs on http://localhost:5173
Backend runs on http://localhost:5000 (or 5001)

⸻

📦 Deployment

You can deploy:
	•	🔹 Frontend → Vercel / Netlify
	•	🔹 Backend → Render / Railway / PythonAnywhere

⸻

✨ Credits

Built by Charan using Mistral AI’s vision-language API and modern frontend tools.

⸻

🛡️ License

MIT License

---

✅ Paste this into a new file named `README.md` in your `ai-image-analyzer-app/` root folder.

Let me know if you'd like to include:
- Live demo badge  
- Deployment button  
- Screenshots or demo GIF  
I can generate those too!
