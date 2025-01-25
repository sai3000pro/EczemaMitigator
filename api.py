from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI!"}

temperature_data = {"current": None, "history": []}

@app.get("/temperature")
def get_temperature():
    return {"temperature": temperature_data["current"]}

@app.post("/temperature")
def update_temperature(new_temp: float):
    temperature_data["current"] = new_temp
    temperature_data["history"].append(new_temp)
    return {"message": "Temperature updated successfully!"}