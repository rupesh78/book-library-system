# Book library system.
<h3>On line book library system</h3>

This is an example of classic online book library has all the features of a physical library.
User could be able to perform below functionality with the system:
1. Adding the book with details like book name , book description , count ,author etc ..  (While adding you can save the
book detail in redux store and leverage from the same values while searching).
2. Searching the book
3. Editing a particular book detail
4. Also create a page with the list of all the books listed in the system.
5. System created using redux.

===============================
I create project using webpack and babel.
Create a store with middleware. Wrap up app using provider and pass store as a props for full application.
App.js fileL- Crate a class based component. import components Header, Router, footer etc.
all component sit under components folder.
global.scss file for application html.
Using Redux with Action, Reducers, Store.
Component (view) and action will  dispatch  to reducers. Reducers divided task according to condition and create new states, old state are as it. Store notify the viwe by executing their callback function. view can retrive updated state and re-render again. 
Because of time not  able to create backed in nodejs. I'm able to do backed part also, Please let me know if this is require.
Application is simple and self explanatory.
================================================

<p>Clone  the project and</p>
<p><h3>run npm install</h3></p>
<p><h3>npm start</h3></p>
