#EventHub

This Dashboard helps users to create and view events. User can enter Title, Date and Description to create an event.

#Event Dashboard
1) User can see event created in this view. 
2) This is mobile responsive. 
3) Initially the view shows 3 card. 
4) As the screen gets smaller the grid shows 2 card and then 1. The card shows event title, date and description. 
5) The description only shows 100 characters and after that it shows "...". 
6) There is View Details button whicb is not functional but changes color on Click.

#Create Event
1) The Form is created using Yup.
2) It consist of event Title, Date and Description. 
3) Every field has is required and has some validation. Title field has validation of minimum 3 characters, Date has validation of enetring proper date in format and Description has validation of minimum of 20 characters.
4) If any of the validation is not satisfied the Create button stays disabled. It gets enable when all the field is filled and verified.
5) After clicking on Create the data will be console and a Snackbar will be shown that "Event is created successfully!"
6) After that user can see that event in dashbaord section. But this data is not stored permanent as it is stored in state only.




