from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
import os

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

temperature_file = 'temperature_data.txt'

def get_latest_temperature():
    try:
        if os.path.exists(temperature_file):
            with open(temperature_file, 'r') as file:
                lines = file.readlines()

            if lines:
                latest_line = lines[-1]  
                temperature = latest_line.split(',')[1].strip()  
                return temperature
            else:
                return None  
        else:
            return None
    except Exception as e:
        return None

@app.get("/temperature")
def get_temperature():
    latest_temp = get_latest_temperature()
    return {"temperature": latest_temp}
