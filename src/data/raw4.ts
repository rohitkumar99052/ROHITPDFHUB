export const nptelRawText4 = `
Introduction to Internet of Things
Assignment-Week 05

QUESTION 1:
What does the term "Interoperability" refer to in the context of IoT? 
a. The ability of a system to operate without power 
b. The ability of different systems/products to work together without restrictions 
c. The ability to increase the speed of the internet 
d. None of these
Correct Answer: b. The ability of different systems/products to work together without 
restrictions.
Detailed Solution: Interoperability relates to the ability of two or more systems or products to 
work closely with each other without any special effort or restriction. (See lecture 21 @ 07:11)

QUESTION 2:
In the collaborative concept (Cosine) theory for interoperability, an object is defined as a 
quadruple (A, B, C, D). What does 'C' represent? 
a. The natural language used 
b. The internal identifier 
c. The context of A 
d. The definition of the object
Correct Answer: c. The context of A 
Detailed Solution: In the Collaborative Concept theory, C represents the context in which 'A' is 
present/defined. (See lecture 21 @ 12:44)

QUESTION 3:
Which of the following best describes the "Syntactic Interoperability" challenge? 
a. Devices having different physical shapes 
b. Devices using different message formats and data structures 
c. Devices located in different countries 
d. Devices having different owners
Correct Answer: b. Devices using different message formats and data structures 
Detailed Solution: Syntactic Interoperability refers to issues involving data format, data 
structure, and inter-communication. (See lecture 21 @ 16:11)

QUESTION 4:
Which of the following is a primary reason for the popularity of Arduino in IoT implementations? 
a) It is highly expensive and exclusive 
b) It is low resource-consuming and cheap 
c) It requires high-power external cooling 
d) It only supports digital signals
Correct Answer: b. It is low resource-consuming and cheap 
Detailed Solution: Arduino is quite popular among users trying to dabble in IoT simply because it is 
low resource-consuming and cheap. (See lecture 22 @ 02:40)

QUESTION 5:
What is the clock speed of the Arduino Uno board? 
a) 8 MHz 
b) 32 MHz 
c) 16 MHz 
d) 50 MHz
Correct Answer: c. 16 MHz 
Detailed Solution: The base clock speed of the Arduino Uno board is mentioned as 16 Megahertz. 
(See lecture 22 @ 06:40)

QUESTION 6:
Which function is used to iteratively loop over instances in an Arduino sketch? 
a) setup()
b) main()
c) loop()
d) start()
Correct Answer: c. loop()
Detailed Solution: Arduino sketches primarily use two functions: setup() to initialize, and loop() 
which iterates continuously. (See lecture 22 @ 15:53)

QUESTION 7:
In Arduino, what is the default starting index for an array? 
a) 1 
b) -1 
c) 0 
d) 10
Correct Answer: c. 0
Detailed Solution: In an Arduino array, tracking always starts from 0th instance. (See lecture 23 @ 
07:11)

QUESTION 8:
What does the delay(5000) command do in a traffic signal simulation? 
a) Resets the Arduino board 
b) Introduces a delay of 5 seconds 
c) Turns off all LEDs immediately 
d) Skips the current execution loop
Correct Answer: b. Introduces a delay of 5 seconds 
Detailed Solution: The delay() parameter takes time in milliseconds. So, delay(5000) introduces a 
delay of 5000 ms, which equals 5 seconds. (See lecture 23 @ 19:30)

QUESTION 9:
Which header file must be called to use mathematical functions like sin() or cos()? 
a) arduino.h
b) math.h
c) sensor.h
d) stdio.h
Correct Answer: b. math.h
Detailed Solution: For advanced math utilities like sine, cosine, floor, ceiling, etc., the math.h 
library (or header file) has to be included. (See lecture 23 @ 29:30)

QUESTION 10:
The DHT22 sensor is used for measuring which physical quantities? 
a) Pressure and Altitude 
b) Light and Sound 
c) Humidity and Temperature 
d) Motion and Direction
Correct Answer: c. Humidity and Temperature 
Detailed Solution: The DHT series sensors (like DHT11 and DHT22) are used for measuring 
ambient humidity and temperature. (See lecture 24 @ 05:22)

QUESTION 11:
What is the recommended voltage range for the VCC pin of a DHT sensor to avoid damage? 
a) 1V to 2V 
b) 3.3V to 5V
c) 12V to 24V 
d) 0V to 1V
Correct Answer: b. 3.3V to 5V
Detailed Solution: The operating voltage of the DHT sensors is generally between 3.3V to 5V. (See 
lecture 24 @ 06:17)

QUESTION 12:
When integrating a typical digital temperature and humidity sensor (like the DHT series) with an 
Arduino board, which Arduino pin connection is used to receive the sensor’s data?
a) Ground (GND)
b) Signal/data pin
c) 5 V power pin
d) Analog input AREF
Correct Answer: b. Signal/data pin 
Detailed Solution: A typical DHT sensor uses its signal/data pin to transmit digitally packaged 
temperature and humidity readings to a digital input pin defined on the microcontroller. (See 
lecture 24 @ 05:22)

QUESTION 13:
Which of the following describes the primary function of an actuator?
a. Converts motion to energy 
b. Converts energy or signals into motion 
c. Stores data 
d. Connects to the internet
Correct Answer: b. Converts energy or signals into motion 
Detailed Solution: By definition, an actuator executes signals to produce a response (motion). (See 
lecture 25 @ 04:30)

QUESTION 14:
When using the Servo library in Arduino, which function is used to specify the pin where the 
servo is connected? 
a. servo.connect() 
b. servo.attach() 
c. servo.pinMode() 
d. servo.write()
Correct Answer: b. servo.attach() 
Detailed Solution: With the Servo class defined, to associate the servo motor's data pin to the 
correct pin on the Arduino, we use servo1.attach(pin_number). (See lecture 25 @ 12:12)

QUESTION 15:
In the context of the Arduino Servo library, which of the following is the correct function to 
command the servo motor to rotate to a specific angle?
a. servo.move(angle) 
b. servo.rotate(angle) 
c. servo.write(angle) 
d. servo.turn(angle)
Correct Answer: c. servo.write(angle)
Detailed Solution: To rotate the servo to a specific angle, the command used is servo1.write(angle). 
(See lecture 25 @ 12:44)

Introduction to Internet of Things
Assignment-Week 04

QUESTION 1:
State whether the following statement is true or false.
Statement: Instead of a PIR sensor, a camera can also be used in the agricultural field to detect 
intruders.
a. True
b. False
Correct Answer: a. True
Detailed Solution: Although PIR sensor acts as an important motion-detecting node, cameras can 
also be used for accurate estimation. (Please refer lecture-16 @ 18:29)

QUESTION 2:
An ultrasonic sensor senses the _______________ at which the object is located.
a. distance
b. coordinates
c. Both (a) and (b)
d. None of these
Correct Answer: a. distance
Detailed Solution: An ultrasonic sensor senses the distance distance at which the object is located 
(Please refer lecture-16 @ 19:27)

QUESTION 3:
WMSNs can be used for
a. Security surveillance
b. Wild-habitat monitoring
c. Environmental monitoring
d. All of these
Correct Answer: d. All of these
Detailed Solution: Security surveillance, wild-habitat monitoring, environmental monitoring are all 
various WMSN applications. (Please refer lecture-16 @ 21:05)

QUESTION 4:
State whether the following statement is true or false.
Statement: Objective of coverage in WSN is to use minimum number of sensors and 
maximize network lifetime.
a. True
b. False
Correct Answer: a. True
Detailed Solution: Objective of coverage using sensors is to use minimum number of sensors and 
maximize the overall network lifetime. (Please refer lecture-17 @ 11:27)

QUESTION 5:
What is the full form of AUV in the context of mobile wireless sensor networks?
a. Aerial and Underwater Vehicle
b. Ambient and Underprivileged Vehicle
c. Astral Underwater Vehicle
d. None of these
Correct Answer: d. None of these
Detailed Solution: The full form of AUV is Autonomous Underwater Vehicle. (Please refer lecture-
17 @ 21:49)

QUESTION 6:
State whether the following statement is true or false.
In the localized coverage algorithm, special types of distributed algorithms are used 
where only one subset of nodes participates in sensing, communication, and computation.
a. True
b. False
Correct Answer: a. True
Detailed Solution: The given statement is true. A subset of nodes is needed to compute the overall 
nature of algorithm operation under localized computation constraints. (Please refer lecture-18 @ 
07:11)

QUESTION 7:
Which of the following is/are advantage/advantages of Stationary Wireless Sensor 
Networks?
a. Easy deployment
b. Easy topology maintenance
c. Both (a) and (b)
d. None of these
Correct Answer: c. Both (a) and (b)
Detailed Solution: The Stationary Wireless Sensor Networks nodes have advantage of fixed layout 
improving deployment and topology tracking constraints. (Please refer lecture-18 @ 18:03)

QUESTION 8:
State true or false.
In Human-centric Sensing, humanbeings can act as Sensor Operators?
a. True
b. False
Correct Answer: a. True
Detailed Solution: Human-centric sensing involves humans acting as sensors, sensor operators 
and data-sources. (Please refer lecture-19 @ 04:47)

QUESTION 9:
Which of the following is not a property of MANET-infrastructure less network of mobile 
devices connected wirelessly?
a. Self-CHOP
b. Self-HOP
c. Both (a) and (b)
d. None of these
Correct Answer: d. None of these
Detailed Solution: Properties of MANET include, Self-Forming, Self-CHOP, Self-HOP, Highly 
dynamic networking etc (Please refer lecture-19 @ 16:34)

QUESTION 10:
State whether the following statement is true or false.
Statement: UAV networks provide a solution for deployments where there is a need for 
 frequent change configurations.
a. False
b. True
Correct Answer: b. True
Detailed Solution: Since UAVs are mobile in nature and has an overhead orientation of the desired 
location, therefore it is very much adaptable towards regular variation of deployment needs. (Please 
refer lecture-20 @ 10:33)

QUESTION 11:
Which of the following is NOT a feature of mesh topology in UAV system?
a. Flexible
b. Reliable
c. None of these
d. Both (a) and (b)
Correct Answer: c. None of these
Detailed Solution: Mesh topology in UAVs is flexible, reliable and secure. (Please refer lecture-20 
@ 16:53)

QUESTION 12:
Which of the following is not a property of a FANET?
a. Inter-plane communication
b. Intra-plane communication
c. Both (a) and (b)
d. None of these
Correct Answer: d. None of these
Detailed Solution: A flying-ad-hoc network (FANET) exhibits both inter as well as intra-plane 
communications. (Please refer lecture-20 @ 23:45)

QUESTION 13:
State true or false.
M2M networks are characterized by a few number of sensor nodes deployed over a large 
area.
a. False
b. True
c. Can not be determined
d. None of these
Correct Answer: a. False
Detailed Solution: M2M networks are mostly characterized by a large number of nodes. 
(Please refer to Page 52, Chapter 3, Introduction to IoT. S. Misra, A. Mukherjee, and A. 
Roy, 2020. Cambridge University Press.) 

QUESTION 14:
What is the full form of M2SP in the context of Machine-to-Machine Communication?
a. M2M Stateless Platform
b. M2M Session Packet
c. M2M Secure Packaging
d. None of these
Correct Answer: d. None of these
Detailed Solution: The full-form of M2SP translates to M2M Service Platform. 
(Please refer to Page 55, Chapter 3, Introduction to IoT. S. Misra, A. Mukherjee, and A. 
Roy, 2020. Cambridge University Press.) 

QUESTION 15:
The ______________ provides integrated services based on device collected data-sets.
a. M2M Application Platform
b. M2M Service Platform
c. M2M Hardware Platform
d. None of these
Correct Answer: a. M2M Application Platform
Detailed Solution: The M2M Application Platform (M2AP) provides integrated services based on 
device collected data-sets. (Please refer to Page 55, Chapter 3, Introduction to IoT. S. Misra, A. 
Mukherjee, and A. Roy, 2020. Cambridge University Press.)

Introduction to Internet of Things
Assignment-Week 03

QUESTION 1:
State whether the following statement is true or false.
Statement: There is no network layer in Wired HART
a. True
b. False
Correct Answer: a. True
Detailed Solution: Yes, wired HART lacks a basic network layer. (Please refer lecture-11 @ 21:00)

QUESTION 2:
Zwave operates at ________ MHz in the US and ________ MHz in Europe.
a. 1008,989
b. 908.42, 868.42
c. 767.56,855.28
d. None of these
Correct Answer: b. 908.42, 868.42
Detailed Solution: Zwave primarily operates at 908.42 MHz in the US and 868.42 MHz in Europe. 
(Please refer lecture-11 @ 26:17)

QUESTION 3:
Dumb behavior of sensor nodes is _______________ in nature (as it is dependent on the 
effects of the environmental conditions).
a. Temporal
b. Spatial
c. Both (a) and (b)
d. None of these
Correct Answer: a. Temporal
Detailed Solution: Dumb behavior of sensors varies with time based on factors related to operating 
environment and external characteristics. Thus, dumb behavior is temporal in general. (Please 
refer lecture-11 @ 11:15)

QUESTION 4:
The process of identifying channels consistently affected by interference and removing 
them from use is known as _________________.
a. Channel Trimming
b. Channel Flushing
c. Both (a) and (b)
d. None of these
Correct Answer: d. None of these
Detailed Solution: The process to eliminate affected channels from routine usage metrics is termed 
as Channel Blacklisting. (Please refer lecture-12 @ 28:55)

QUESTION 5:
The full form of NFC is
a. Near Field Contact
b. Near Field Communication
c. Both (a) and (b)
d. Neither (a) nor (b)
Correct Answer: b. Near field communication
Detailed Solution: The full form of NFC is near field communication. (Please refer lecture-13 @ 
07:14)

QUESTION 6:
State true or false.
NFC works on the principle of magnetic induction.
a. True
b. False
Correct Answer: a. True
Detailed Solution: Yes, near field communication (NFC) operates on the standard physical property 
of magnetic induction. (Please refer lecture-13 @ 09:29)

QUESTION 7:
State whether the following statement is true or false.
Statement: NFC tags found in supermarket products are examples of active NFC.
a. True
b. False
Correct Answer: b. False
Detailed Solution: NFC tags implemented for commodity identification functions passively, drawing 
power from surrounding EM waves generated by other active reader devices. (Please refer lecture-13 
@ 12:47)

QUESTION 8:
Bluetooth is based on ___________.
a. Nanonets
b. Binarynets
c. Both (a) and (b)
d. None of these
Correct Answer: d. None of these
Detailed Solution: Piconets form the basic infrastructural orientation for standard Bluetooth devices. 
(Please refer lecture-14 @ 05:07)

QUESTION 9:
A __________ in NFC emits a small electric current which creates a magnetic field that 
in turn bridges the physical space between the devices.
a. reader
b. writer
c. destroyer
d. None of these
Correct Answer: a. reader
Detailed Solution: In general, an active reader (RFID/NFC) generates intermittent EM waves 
using a defined amount of power to track other active/passive peripheral tagging modules. (Please 
refer lecture-14 @ 13:41)

QUESTION 10:
State true of false.
Bluetooth technology is based on Ad-hoc network technology.
a. False
b. True
Correct Answer: b. True
Detailed Solution: Bluetooth relies on unstructured and un-synchronized ad-hoc orientations 
known as Piconets and Scatternets. (Please refer lecture-14 @ 04:31)

QUESTION 11:
State true or false.
Zwave utilizes GFSK modulation and Hongkong channel encoding.
a. True
b. False
Correct Answer: b. False
Detailed Solution: Zwave fundamentally utilizes Manchester channel coding principles. (Please 
refer lecture-15 @ 26:17)

QUESTION 12:
The process of bypassing radio dead-spots is done using a message called ________ in 
Zwave.
a. Ping
b. Healing
c. Frame
d. None of these
Correct Answer: b. Healing
Detailed Solution: Nodes present in a Z-wave network send out Healing messages to map network 
topology and circumvent connection drop or deadspot regions appropriately. (Please refer lecture-11 
@ 28:02)

QUESTION 13:
State whether the following statement is true or false.
Statement: Sensor nodes have unlimited battery life.
a. True
b. False
Correct Answer: b. False
Detailed Solution: Sensors and allied WSN boards rely on battery modules which have strict 
operation cycle constraints. Therefore, power conservation issues form the backbone in WSNs. 
(Please refer lecture-11 @ 07:11)

QUESTION 14:
State whether the following statement is true or false.
Statement: The Link Manager Protocol in Bluetooth manages the establishment, 
authentication, link configuration.
a. True
b. False
Correct Answer: a. True
Detailed Solution: LMP forms a critical connection-tracking entity in regular Bluetooth module, 
providing essential connection establishment and configuration features. (Please refer lecture-14 
@ 19:35)

QUESTION 15:
Zigbee commonly uses __________data rate.
a. 250 kbps
b. 250 Mbps
c. 260 kbps
d. 260 Mbps
Correct Answer: a. 250 kbps
Detailed Solution: The typical maximum data-rate handled over defined Zigbee framework is tested 
at the 250kbps range. 
(Please refer to Page 116, Chapter 6, Introduction to IoT. S. Misra, A. Mukherjee, and 
A. Roy, 2020. Cambridge University Press.)

Introduction to Internet of Things
Assignment-Week 02

QUESTION 1:
The full form of MQTT is
a. Message Query Telemetry Transport
b. Message Queue Telemetry Transport
c. Message Queue Telemedicine Transport
d. None of these
Correct Answer: b. Message Queue Telemetry Transport
Detailed Solution: The full form of MQTT is Message Queue Telemetry Transport. (Please refer 
Lecture 06@04:36)

QUESTION 2:
XMPP uses the ________________ architecture.
a. Publish-subscribe
b. Client-server
c. Both (a) and (b)
d. Neither (a) nor (b)
Correct Answer: b. Client-server
Detailed Solution: XMPP uses the Client-server architecture. (Please refer Lecture 08@09:12)

QUESTION 3:
With respect to AMQP, which of the following message delivery guarantees allow each 
message to be delivered certainly but also may be delivered multiple times.
a. At-least-once
b. At-most-once
c. Exactly-once
d. Both (a) and (b)
Correct Answer: a. At-least-once
Detailed Solution: “At-least-once” means each message gets delivered certainly but could be 
delivered multiple times. (Please refer Lecture 09@08:33)

QUESTION 4:
In MQTT for IoT, the Publishers are ______________.
a. Lightweight sensors
b. Actuators
c. Processing units
d. None of these
Correct Answer: a. Lightweight sensors
Detailed Solution: The Publishers are lightweight sensors in MQTT for IoT. (Please refer Lecture 
06@10:04)

QUESTION 5:
Which of the following is NOT a method in MQTT?
a. Publish
b. Connect
c. Disconnect
d. None of these
Correct Answer: d. None of these
Detailed Solution: Connect, disconnect, Publish, Subscribe, etc., are methods in MQTT. (Please 
refer Lecture 06@12:35)

QUESTION 6:
CoAP has _______ modes for messaging.
a. 2
b. 4
c. 8
d. None of these
Correct Answer: b. 4
Detailed Solution: CoAP has 4 messaging modes: Confirmable, Non-Confirmable, Piggybacked, and 
Separate. (Please refer Lecture 07@11:27)

QUESTION 7:
State True or False
CoAP architecture is divided into three sub-layers. The messaging sub-layer is 
responsible for reliability and duplication of messages, while the request-response sub layer is responsible for communication. The last layer, which is optional, is responsible 
for user registration.
a. True
b. False
Correct Answer: b. False
Detailed Solution: CoAP architecture is divided into two sub-layers. The messaging sub-layer is 
responsible for reliability and duplication of messages, whereas the request-response sub-layer is 
responsible for communication. (Please refer Lecture 07@21:28)

QUESTION 8:
What is the full form of XMPP in IoT?
a. Extensible Markup Page Processing
b. Extensible Messaging and Presence Protocol
c. Both (a) and (b)
d. Neither (a) nor (b)
Correct Answer: b. Extensible Messaging and Presence Protocol
Detailed Solution: Extensible Messaging and Presence Protocol (XMPP) is a widely used 
communication protocol. (Please refer Lecture 08@03:22)

QUESTION 9:
State whether the following statement if True or False.
Statement: XMPP is not an open standard protocol.
a. False
b. True
Correct Answer: a. False
Detailed Solution: XMPP is an open standard protocol. (Please refer Lecture 08@03:22)

QUESTION 10:
What is the full is/are not frame type of the AMQP protocol?
a. Origin
b. Destination
c. Advance
d. All of these
Correct Answer: d. All of these
Detailed Solution: Frame types of the AMQP protocol are: Open, Begin, Attach, Transfer, Flow, 
Disposition, Detach, End, Close. (Please refer Lecture 09@15:06)

QUESTION 11:
What is the basic unit of data in the AMQP protocol?
a. Chunk
b. Byte
c. Packet
d. None of these
Correct Answer: d. None of these
Detailed Solution: Frame is the basic unit of data in the AMQP protocol. (Please refer Lecture 
09@14:15)

QUESTION 12:
Which of the following is/are exchange types in AMQP?
a. Direct
b. Fan-out
c. Topic
d. All of these
Correct Answer: d. All of these
Detailed Solution: Exchange types in AMQP are direct, fan-out, topic, and headers. (Please refer 
Lecture 09@35:36)

QUESTION 13:
Which of the following is/are not an application of 6LoWPAN?
a. IoT
b. IIoT
c. Both (a) and (b)
d. Neither (a) nor (b)
Correct Answer: d. Neither (a) nor (b)
Detailed Solution: Applications of 6LoWPAN include Automation, IoT, IIoT, and Smart Grids. 
(Please refer Lecture 10@09:59)

QUESTION 14:
The OSI model has __________ layers.
a. 6
b. 9
c. 4
d. None of these
Correct Answer: d. None of these
Detailed Solution: The OSI model has 7 layers. (Please refer Lecture 10@14:14)

QUESTION 15:
The “Destination Address” in the IPv4 packet represents which of the following?
a. The destination node address of the packet
b. The intermediate hop in the network
c. Both (a) and (b)
d. None of these
Correct Answer: a. The destination node address of the packet
Detailed Solution: The “Destination Address” in the IPv4 packet represents the destination node 
address of the packet. (Please refer Lecture 10@18:24)
`;
