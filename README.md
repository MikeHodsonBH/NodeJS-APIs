# Time Stamp Microservice ⚙

This service provides time in both natural and unix formats.

In the case of natural format, it converts the provided date to a string, using the UTC time zone.
The unix format (also known as POSIX time or epoch time) denotes the number of seconds that have elapsed since 00:00:00
Coordinated Universal Time (UTC), Thursday, 1 January 1970, not counting leap seconds. 

Simply pass the time in a natural or unix format on the tail end of this url!

Test the api [here](https://grand-aries.glitch.me/)

Example API Calls

https://grand-aries.glitch.me/June%2011,%202019

https://grand-aries.glitch.me/1560211200

If the date string is invalid the api returns a JSON having the structure {"error" : "Invalid Date" }.

      
  

