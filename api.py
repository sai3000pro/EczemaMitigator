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
                latest_line = lines[-1].strip()  # Get the last line and strip any whitespace
                return latest_line  # Return the temperature value directly
            else:
                return None  # File is empty
        else:
            return None  # File does not exist
    except Exception as e:
        print(f"Error reading file: {str(e)}")
        return None


@app.get("/temperature")
def get_temperature():
    try:
        latest_temp = get_latest_temperature()
        if latest_temp:
            return {"temperature": latest_temp}
        else:
            return {"temperature": "No data found"}
    except Exception as e:
        return {"error": str(e)}
