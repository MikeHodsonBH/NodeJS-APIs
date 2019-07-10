# Time Stamp Microservice ⚙

The API endpoint is GET [project_url]/api/timestamp/:date_string?

A date string is valid if can be successfully parsed by new Date(date_string).

Note that the unix timestamp needs to be an integer (not a string) specifying milliseconds.
In our test we will use date strings compliant with ISO-8601 (e.g. "2016-11-20") because this will ensure an UTC timestamp.

If the date string is empty it should be equivalent to trigger new Date(), i.e. the service uses the current timestamp.
If the date string is valid the api returns a JSON having the structure {"unix": <date.getTime()>, "utc" : <date.toUTCString()> } e.g. {"unix": 1479663089000 ,"utc": "Sun, 20 Nov 2016 17:31:29 GMT"}

If the date string is invalid the api returns a JSON having the structure 
{"error" : "Invalid Date" }.

**Local Dev Setup** <br>
Install the following npm packages
- express
- cors
- body-parser

**How It Works** <br>
This service provides time in both natural and unix formats.

In the case of natural format, it converts the provided date to a string, using the UTC time zone.
The unix format (also known as POSIX time or epoch time) denotes the number of seconds that have elapsed since 00:00:00
Coordinated Universal Time (UTC), Thursday, 1 January 1970, not counting leap seconds. 

Simply pass the time in a natural or unix format on the tail end of [this](https://grand-aries.glitch.me/) url!

Test the api [here](https://grand-aries.glitch.me/).

Example API Calls

https://grand-aries.glitch.me/June%2011,%202019

https://grand-aries.glitch.me/1560211200

If the date string is invalid the api returns a JSON having the structure {"error" : "Invalid Date" }.
