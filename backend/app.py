# app.py

from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


@app.route("/")
def hello():
    return "Docker is fun"

@app.route("/meet")
def meet():
    return "Built with Docker and Flask"

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)