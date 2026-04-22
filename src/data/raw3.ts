export const nptelRawText3 = `
Introduction to Internet of Things
Assignment-Week 07

QUESTION 1:
In the context of networking with Raspberry Pi, what is the purpose of the socket.bind() function 
on the server side? 
a. To connect to a remote server 
b. To associate the socket with a specific network interface and port number 
c. To listen for incoming connections 
d. To close the socket connection
Correct Answer: b. To associate the socket with a specific network interface and port number 
Detailed Solution: The bind() function binds the socket to the address (host name) and the port 
number specified in the arguments. (See lecture 31 @ 08:27)

QUESTION 2:
Which Python library is used to integrate the DHT sensor with Raspberry Pi? 
a. NumPy 
b. Adafruit_DHT 
c. Matplotlib 
d. Pandas
Correct Answer: b. Adafruit_DHT 
Detailed Solution: The Adafruit library is used to integrate the DHT sensor to Raspberry Pi via 
Python framework. (See lecture 31 @ 04:30)

QUESTION 3:
In the client-server architecture demonstrated, what type of socket is used for data transmission? 
a. TCP Socket 
b. UDP Socket 
c. Raw Socket 
d. None of these
Correct Answer: b. UDP Socket
Detailed Solution: The lecture demonstrates creating a UDP based socket which will send data 
from client to the server. (See lecture 31 @ 05:44)

QUESTION 4:
Which function is used in Python to split a string into a list of substrings based on a delimiter? 
a. string.cut() 
b. string.divide() 
c. string.split()
d. string.break()
Correct Answer: c. string.split() 
Detailed Solution: The split() function can be used to split a string into multiple strings 
depending on the separator or delimiter. (See lecture 32@ 08:06)

QUESTION 5:
Which one of the following Python libraries is used for data plotting? 
a. PyGame 
b. Matplotlib
c. TensorFlow 
d. Scikit-learn
Correct Answer: b. Matplotlib 
Detailed Solution: Python supports a very powerful library called matplotlib for plotting. (See 
lecture 32 @ 11:52)

QUESTION 6:
Which function in the plotting library is used to enable the interactive plot mode? 
a. grid() 
b. show() 
c. ion() 
d. subplot() 
Correct Answer: c. ion() 
Detailed Solution: ion is the interactive plot mode, which is generally used for animations. (See 
lecture 32 @ 23:23)

QUESTION 7:
The interface between the Control Plane and the Data Plane in SDN is known as: 
a. Northbound API 
b. Southbound API 
c. Eastbound API 
d. Westbound API 
Correct Answer: b. Southbound API 
Detailed Solution: The interface between the forwarding (data plane) and the control plane is 
known as the Southbound API. (See lecture 33 @ 14:18)

QUESTION 8:
Flow tables in SDN switches are typically stored in which type of specialized memory? 
a. RAM 
b. ROM 
c. TCAM 
d. Flash 
Correct Answer: c. TCAM 
Detailed Solution: Flow tables are stored in a specialized memory known as TCAM (Ternary 
Content Addressable Memory). (See lecture 33@ 21:07)

QUESTION 9:
Which of the following is NOT an attribute or component of SDN? 
a. Controller
b. Applications
c. Hardware switches
d. None of these
Correct Answer: d. None of these
Detailed Solution: Attributes or components of SDN includes hardware switches, controllers, 
applications, flow rules, application programming interfaces (APIs)(See lecture 33 @ 15:40)

QUESTION 10:
Which API terminology is used when referring to communication between multiple controllers in 
the control layer? 
a. Northbound API 
b. Southbound API 
c. East-Westbound API
d. None of these 
Correct Answer: c. East-Westbound API 
Detailed Solution: The East-Westbound API terminology comes into the picture when talking 
about not a single controller but multiple controllers in the control layer. (See lecture 34 @ 02:27)

QUESTION 11:
What is the typical delay involved in new rule placement if the rule is not already present in the 
switch's flow table? 
a. 1 to 2 milliseconds 
b. 3 to 5 milliseconds
c. 10 to 15 milliseconds 
d. 100 milliseconds 
Correct Answer: b. 3 to 5 milliseconds 
Detailed Solution: Typically there is a delay of 3 to 5 milliseconds involved in the new rule 
placement. (See lecture 34 @ 03:40)

QUESTION 12:
Approximately how many requests per second can a typical single-threaded SDN controller 
handle? 
a. 100 
b. 200 
c. 500 
d. 1000 
Correct Answer: b. 200 
Detailed Solution: Typically a controller can handle roughly about 200 requests in a second 
(applicable for single-threaded applications). (See lecture 34 @ 04:13)

QUESTION 13:
What is SDN-WISE? 
a. A hardware component for sensors 
b. A Software Defined WSN platform where the flow table is available at sensor nodes 
c. A database management system 
d. A type of cloud storage
Correct Answer: b. A Software Defined WSN platform where the flow table is available at 
sensor nodes 
Detailed Solution: SDN-WISE is a Stateful Software Defined solution for Wireless Sensor 
Networks where flow tables for rule placement are available at the sensor nodes. (See lecture 35 
@ 13:49)

QUESTION 14:
In the experimental results shown for Soft-WSN (Software Defined Wireless Sensor Network), 
how does the Packet Delivery Ratio (PDR) compare to a traditional WSN? 
a. PDR is lower in Soft-WSN 
b. PDR is significantly improved (higher) in Soft-WSN 
c. PDR remains exactly the same 
d. Soft-WSN does not support packet delivery
Correct Answer: b. PDR is significantly improved (higher) in Soft-WSN 
Detailed Solution: Experimental results show that the network performance, specifically Packet 
Delivery Ratio, is improved using Soft-WSN over traditional WSN. (See lecture 35 @ 12:00)

QUESTION 15:
In the "Software Defined IoT" architecture, where are flow classification and enhanced 
security typically handled?
a. At the physical sensor nodes 
b. At the Data Center Networks 
c. At the gateways only 
d. At the user's mobile device
Correct Answer: b. At the Data Center Networks 
Detailed Solution: Flow classification and enhanced security are taken care of at the data center 
networks in the SDN-IoT architecture. (See lecture 35 @ 06:59)

Introduction to Internet of Things
Assignment-Week 06

QUESTION 1:
What is the output of the following Python code snippet?
x = "This is Python"
print(x[2:4])
a. is 
b. hi 
c. is (is with a space) 
d. Th
Correct Answer: a. is 
Detailed Solution: The slice x[2:4] selects characters from index 2 up to (but not including) 
index 4. Indices are 0='T', 1='h', 2='i', 3='s'. So it prints 'is'. (See lecture 26 @ 10:41)

QUESTION 2:
What is the purpose of the try...except block in Python? 
a. To define a function. 
b. To create a loop. 
c. To handle exceptions and errors during code execution without crashing the program. 
d. To import libraries.
Correct Answer: c. To handle exceptions and errors during code execution without crashing the program. 
Detailed Solution: Exceptional handlers are used for debugging or in case of errors; the try block 
executes statements, and except catches errors. (See lecture 26 @ 28:09)

QUESTION 3:
Which of the following is a specific requirement in Python for defining code blocks (such as 
inside if-else statements or loops) that distinguishes it from many other programming languages?
a. It requires the use of curly braces {} to enclose the code block. 
b. It requires a begin and end keyword to mark the start and finish of the block. 
c. It follows a very rigid indentation policy to indicate different blocks of code. 
d. It requires every line of the block to end with a semicolon ;.
Correct Answer: c. It follows a very rigid indentation policy to indicate different blocks of code.
Detailed Solution: Python follows a very rigid indentation policy where statements inside loops 
or conditionals must be indented. (See lecture 26, @8:17)

QUESTION 4:
When setting up a UDP client-server network in Python, why is it critical that both the client and 
server use the same port number? 
a. To save power. 
b. To ensure the data is encrypted. 
c. To ensure the client sends data to the exact endpoint where the server is listening. 
d. It is not critical; they can use different ports.
Correct Answer: c. To ensure the client sends data to the exact endpoint where the server is listening. 
Detailed Solution: It is very important to have the same port numbers on both the client and 
server side for successful communication. (See lecture 27 @ 27:08)

QUESTION 5:
When using the Python open() function, what happens if you open a file in 'w' (write) mode that 
does not already exist? 
a. It throws a FileNotFoundError 
b. It automatically creates the file 
c. It opens the file in read-only mode 
d. It asks for user permission
Correct Answer: b. It automatically creates the file 
Detailed Solution: Whenever trying to open a file in write mode, if the file does not already 
exist, the system will automatically create that same file. (See lecture 27 @ 10:46)

QUESTION 6:
Which of the following file modes is specifically mentioned to open a file for both reading and 
writing operations in Python?
a. rw 
b. w 
c. r+ 
d. a
Correct Answer: c. r+
Detailed Solution: r for read, w for write, a for append, and r+ for both read as well as write 
modes. (See lecture 27 @2:56)

QUESTION 7:
Which command is used to expand the file system on a Raspberry Pi to cover the entire memory 
card after a fresh installation? 
a. sudo apt-get update 
b. sudo reboot 
c. sudo raspi-config 
d. ifconfig
Correct Answer: c. sudo raspi-config 
Detailed Solution: Give the command sudo raspi-config and then select the option to expand the 
file system to cover the entire memory card. (See lecture 28 @ 18:22)

QUESTION 8:
What advantage does the Raspberry Pi 3 have over the Raspberry Pi Zero in terms of 
connectivity? 
a. Pi 3 has built-in Wi-Fi and Bluetooth, whereas Pi Zero does not have them (standard 
version). 
b. Pi 3 is smaller. 
c. Pi Zero is more expensive. 
d. Pi 3 has fewer USB ports.
Correct Answer: a. Pi 3 has built-in Wi-Fi and Bluetooth, whereas Pi Zero does not have them 
(standard version). 
Detailed Solution: There is a provision for Wi-Fi and Bluetooth only on Pi 3, whereas there is no 
provision for Ethernet or Wi-Fi on Pi Zero. (See lecture 28 @ 06:17)

QUESTION 9:
Which specific software is recommended for Windows-based systems to write the Raspberry Pi 
operating system image onto the memory card?
a. Rufus 
b. Balena Etcher 
c. Win32 Disk Imager 
d. UNetbootin
Correct Answer: c. Win32 Disk Imager
Detailed Solution: For Windows-based systems, a software called Win32 disk imager is required 
to write the image file to the SD card (See lecture 28 @13:04).

QUESTION 10:
When connecting the Raspberry Pi camera module to the Raspberry Pi using the ribbon cable, 
which direction should the blue tag on the cable face?
a. Towards the HDMI port 
b. Towards the USB ports 
c. Towards the Ethernet port 
d. Towards the GPIO pins
Correct Answer: c. Towards the Ethernet port
Solution: When connecting the Raspberry Pi camera module to the Raspberry Pi using the ribbon 
cable the blue side should be pointed towards the Ethernet port (See lecture 29 @2:10).

QUESTION 11:
Which command does the lecture recommend using in the terminal to capture an image directly 
with the Raspberry Pi camera without writing a full Python script?
a. sudo apt-get install python-picamera 
b. raspistill -o image_name.jpg 
c. python camera_capture.py 
d. picamera.capture('image.jpg')
Correct Answer: b. raspistill -o image_name.jpg
Solution: We can directly capture images using the Pi cam by writing the command "raspistill -o 
image_name.jpg" in the terminal. (See lecture 29 @19:18)

QUESTION 12:
In the Python code shown for the blinking LED project, what is the purpose of the line 
GPIO.setmode(GPIO.BOARD)?
a. To set the GPIO pins to output mode 
b. To initialize the library for time functions 
c. To specify that the pin numbering will follow the physical board layout
d. To clear the settings of the GPIO pins
Correct Answer: c. To specify that the pin numbering will follow the physical board layout
Solution: GPIO.setmode(GPIO.BOARD) sets the mode to use board numbering rather than the 
other option. (See lecture 29 @11:30)

QUESTION 13:
Which of the following commands is used to install the Adafruit DHT library in Raspberry Pi 
after navigating to the folder? 
a. sudo apt-get install python 
b. sudo python setup.py install 
c. install dht_library 
d. pip install dht
Correct Answer: b. sudo python setup.py install 
Detailed Solution: The command sudo python setup.py install is used to install the library after 
downloading/cloning it. (See lecture 30 @ 10:16)

QUESTION 14:
Which pin numbering configuration does the Adafruit DHT library automatically use for the 
sensor, requiring the user to specify the pin number accordingly?
a. GPIO.BOARD 
b. WiringPi 
c. BCM (Broadcom SOC Channel) 
d. Physical Pin Numbering
Correct Answer: c. BCM (Broadcom SOC Channel)
Solution: For the Adafruit it automatically takes the board mode as BCM. So this pin number 11 
is going to be according to board mode, whereas this pin 7 is according to BCM mode and 
explicitly notes regarding the DHT sensor. (See Lecture 30, @11:09).

QUESTION 15:
In a DHT Sensor, ground is connected to which pin number?
a. 1
b. 2
c. 3
d. 4
Correct Answer: d. 4.
Detailed Solution: Pin 4 is connected to the ground (See lecture 30, @5:36)

`;
