import serial

port = '/dev/cu.usbserial-10'
baud_rate = 9600
temp_file = 'temperature_data.txt'
humidity_file = 'humidity_data.txt'

def main():
    try:
        with serial.Serial(port, baud_rate, timeout=0) as ser, \
             open(temp_file, 'a') as temp_file_handle, \
             open(humidity_file, 'a') as humidity_file_handle:

            print("Reading data from Arduino...")

            while True:
                if ser.in_waiting > 0:
                    line = ser.readline().decode('utf-8').strip()
                    print(f"Received: {line}")

                    # Split the data by comma and write to respective files
                    try:
                        temp, humidity = line.split(' ')
                        temp_file_handle.write(temp.strip() + '\n')
                        humidity_file_handle.write(humidity.strip() + '\n')

                        # Ensure the data is written immediately
                        temp_file_handle.flush()
                        humidity_file_handle.flush()

                    except ValueError:
                        print(f"Invalid data format: {line}")

    except KeyboardInterrupt:
        print("Data collection stopped by user.")
    except serial.SerialException as e:
        print(f"Error: {e}")
    except Exception as e:
        print(f"Unexpected Error: {e}")

if __name__ == "__main__":
    main()
