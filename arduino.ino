#include "DHT.h"
#define DHTPIN 2
#define DHTTYPE DHT11
const int buzzPin = 12;

DHT dht(DHTPIN, DHTTYPE);

int a=7; 
int b=6; 
int c=5; 
int d=11; 
int e=10; 
int f=8; 
int g=9; 
int dp=4; 
//display number 1
void display1(void) 
{
  
    digitalWrite(b,HIGH);
    digitalWrite(c,HIGH);
} 
//display number2
void
  display2(void) 
{
    digitalWrite(a,HIGH);
    digitalWrite(b,HIGH);

    digitalWrite(g,HIGH);
  digitalWrite(e,HIGH);
    digitalWrite(d,HIGH);
}
  
// display number3
void display3(void) 
{ 
    digitalWrite(a,HIGH);

    digitalWrite(b,HIGH);
    
  digitalWrite(c,HIGH);
    digitalWrite(d,HIGH);

    digitalWrite(g,HIGH);
} 
// display number4
void display4(void) 
{
  
    digitalWrite(f,HIGH);
    digitalWrite(b,HIGH);
    digitalWrite(g,HIGH);

  digitalWrite(c,HIGH);
  
} 
// display number5
void display5(void)
  
{ 
    digitalWrite(a,HIGH);
    digitalWrite(f,HIGH);
    digitalWrite(g,HIGH);

  digitalWrite(c,HIGH);
    digitalWrite(d,HIGH);
} 
// display number6
void
  display6(void) 
{ 
    digitalWrite(a,HIGH);
    digitalWrite(f,HIGH);

    digitalWrite(g,HIGH);
  digitalWrite(c,HIGH);
    digitalWrite(d,HIGH);
  
    digitalWrite(e,HIGH);  
} 
// display number7
void display7(void)
  
{   
   digitalWrite(a,HIGH);
    digitalWrite(b,HIGH);
    digitalWrite(c,HIGH);
}
  
// display number8
void display8(void) 
{ 
    digitalWrite(a,HIGH);

    digitalWrite(b,HIGH);
    digitalWrite(g,HIGH);
  digitalWrite(c,HIGH);

    digitalWrite(d,HIGH);  
    digitalWrite(e,HIGH);  
  digitalWrite(f,HIGH);
  
} 
void clearDisplay(void) 
{ 
    digitalWrite(a,LOW);
    digitalWrite(b,LOW);

    digitalWrite(g,LOW);
  digitalWrite(c,LOW);
    digitalWrite(d,LOW);  

    digitalWrite(e,LOW);  
  digitalWrite(f,LOW);  
} 
void display9(void)
  
{ 
    digitalWrite(a,HIGH);
    digitalWrite(b,HIGH);
    digitalWrite(g,HIGH);

  digitalWrite(c,HIGH);
    digitalWrite(d,HIGH);  
  digitalWrite(f,HIGH);
  
} 
void display0(void) 
{ 
    digitalWrite(a,HIGH);
    digitalWrite(b,HIGH);

  digitalWrite(c,HIGH);
    digitalWrite(d,HIGH);  
    digitalWrite(e,HIGH);
  
  digitalWrite(f,HIGH);  
} 

void displayLevel(int tempC){
  clearDisplay();
  if (tempC < -5) {
    buzzerBeep();
    display9();
  } else if (tempC <= -10 && tempC <= -5){
    buzzerBeep();
    display8();
  } else if (tempC <= -5 && tempC <= 0){
    buzzerBeep();
    display7();
  }
   else if(tempC >= 0 && tempC <= 5){
    buzzerBeep();
    display6();
  } else if (tempC >= 5 && tempC <= 10){
     buzzerBeep();
    display5(); 
  } else if (tempC <= 15 && tempC >= 10){
    buzzerBeep();
    display4(); 
  } else if (tempC <= 20 && tempC >= 15){
    buzzerBeep();
    display3();
  } else {
    buzzerBeep();
    display2();
  } 
}
void buzzerBeep(void){
    digitalWrite(buzzPin, HIGH);
    delay(2000);
    digitalWrite(buzzPin, LOW);
    delay(1000);
}

void setup() {
  Serial.begin(9600);
  dht.begin(); // initialize the sensor
  pinMode(buzzPin, OUTPUT);
  int i;
  for(i=4;i<=11;i++){
    pinMode(i,OUTPUT);
  }
}

void loop() {
  // wait a few seconds between measurements.
  // read humidity
  float humi  = dht.readHumidity();
  // read temperature as Celsius
  float tempC = dht.readTemperature();
  // read temperature as Fahrenheit
  float tempF = dht.readTemperature(true);

  // check if any reads failed
  if (isnan(humi) || isnan(tempC) || isnan(tempF)) {
    Serial.println("Failed to read from DHT sensor!");
  } else {
    Serial.print(tempC);
    delay(1000);
    displayLevel(tempC);
    delay(1000);
    
  }
}