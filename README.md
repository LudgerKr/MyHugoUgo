# SymfonyTuto

## Install Project
### Require

#### Hugo version > 40

### Projet town hall on internal server Hugo dev

- Project realized in Hugo, HTML, CSS on a static site of a town hall 
(display of events, associations, members of the town council) 

#### Fixtures

For create a Fixture, on the terminal write :
- hugo new name_of_the_directory_/name_of_your_fixture

### SearchBar

Run with lunr script.
It needs a list.json file in layouts directory to perform a search on the data.
Don't forget to put the output paramaters in config.toml

### Google Map

Use a Google API for display the map and a script in JS for placing a marker 
using latitude and longitude on the POI (Point Of Interest)

### Google Calendar

Use a script from fullCalendar.io, I use a table that I fill with event data and push it into the JS script