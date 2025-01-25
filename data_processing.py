import serial

port = '/dev/cu.usbserial-10'
baud_rate = 9600
output_file = 'temperature_data.txt'

def main():
    try:
        with serial.Serial(port, baud_rate, timeout=0) as ser, open(output_file, 'a') as file:
            print("Reading data from Arduino...")

            while True:
                if ser.in_waiting > 0:
                    line = ser.readline().decode('utf-8').strip()
                    print(f"Received: {line}")
                    file.write(line + '\n')
                    file.flush()

    except KeyboardInterrupt:
        print("Data collection stopped by user.")
    except serial.SerialException as e:
        print(f"Error: {e}")
    except Exception as e:
        print(f"Unexpected Error: {e}")

if __name__ == "__main__":
    main()
