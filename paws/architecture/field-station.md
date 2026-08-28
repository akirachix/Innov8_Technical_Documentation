# Field Station

The field station is the remote PAWS deployment point at a monitored water source.

## Documented hardware

- Raspberry Pi 5
- Raspberry Pi AI Camera
- ESP32
- Semtech SX1262 LoRa transceiver
- Activity/radar sensor
- Ultrasonic water sensor
- GPS
- Power conversion and battery system
- Solar charging system
- Protective enclosure

## Responsibilities

The field station captures observations, performs appropriate edge processing, packages compact telemetry, and transmits it over LoRa.

## Engineering rule

Field devices must continue to behave predictably when connectivity is unavailable. Store-and-forward, retry, watchdog, and recovery behaviour must be documented from the actual firmware.