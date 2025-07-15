from flask import Flask, request, jsonify
from flask_cors import CORS
import base64
import traceback
from mistralai import Mistral
from dotenv import load_dotenv
import os
load_dotenv() 
app = Flask(__name__)
CORS(app)

api_key = os.getenv("MISTRAL_API_KEY")
model = "pixtral-12b-2409"
client = Mistral(api_key=api_key)
@app.route("/process-image", methods=["POST"])
def process_image():
    if "image" not in request.files or "prompt" not in request.form:
        return jsonify({"error": "Image or prompt missing"}), 400

    image_file = request.files["image"]
    prompt_text = request.form["prompt"]

    try:
        base64_image = base64.b64encode(image_file.read()).decode("utf-8")

        messages = [
            {
                "role": "user",
                "content": [
                    {"type": "text", "text": prompt_text},
                    {"type": "image_url", "image_url": f"data:image/jpeg;base64,{base64_image}"}
                ]
            }
        ]

        response = client.chat.complete(model=model, messages=messages)
        return jsonify({"result": response.choices[0].message.content})

    except Exception as e:
        traceback.print_exc()  # Logs full traceback in terminal
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5001, debug=True)
    