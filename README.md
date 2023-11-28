Book Libary - 2023 
A react app that allows users to search, add and remove books from their book list. All book data is fetched from Google Book API. 

Live Demo - https://bookapp-1pa2.onrender.com/ 
Note: If books are not displaying on home or in the search panel,  please try again later, as Google Book API only allows so many requests a day.
 
#Features
-*Browse Books:** Explore books on the home page by category fetched from Google Books API. 
-*Add to Reading List:** Easily add books to your personal book list from the home page or the search page. The book list cannot hold duplicates and will alert if the book the user attempted to add is already on their list.
-*Remove from Reading List:** Easily remove any book from the book list page by clicking the red "X" button. 
-*Search:** Search the Google Book API by title. 
-*Settings:** Toggle dark mode for a darker theme.

##Technologies Used
- **React:** Front-end library for building the user interface.
- **React Router:** Managing app routes for navigation.
- **Local Storage:** Storing user reading lists and settings preferences. 
- **Google API:**  Book data used across the application.
- **CSS & Bootstrap:** Styles.

##Known Bugs
- **Book Cover Images Missing** Books that do not have a cover image are not displaying the place-holder image correctly and are defaulting to alt tags. 
