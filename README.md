# Time Stamp Microservice ⚙

This service provides time in both natural and unix formats.<br>
In the case of natural format, it converts the provided date to a string, using the UTC time zone.<br>
The unix format (also known as POSIX time or epoch time) denotes the number of seconds that have elapsed since 00:00:00<br>
Coordinated Universal Time (UTC), Thursday, 1 January 1970, not counting leap seconds. <br>
Simply pass the time in a natural or unix format on the tail end of this url!<br>

Example API Calls<br>
https://grand-aries.glitch.me/June%2011,%202019<br>
https://grand-aries.glitch.me/1560211200<br><br>
If the date string is invalid the api returns a JSON having the structure {"error" : "Invalid Date" }.

      
  

