# Book Library - 2023

A React app that enables users to search, add, and remove books from their personal book list. All book data is fetched from the Google Book API.

Live Demo: [Book Library Demo](https://bookapp-1pa2.onrender.com/) 
(If books don't display on the home or search page, try again later as Google Book API has daily request limits.)

## Features

- **Browse Books:** Explore books on the home page by category fetched from Google Books API. 
- **Add to Reading List:** Easily add books to your personal list from the home or search page. The book list prevents duplicates and notifies users if they attempt to add an existing book.
- **Remove from Reading List:** Remove any book from the list by clicking the red "X" button on the book list page.
- **Search:** Search the Google Book API by title.
- **Settings:** Toggle dark mode for a darker theme.

##Technologies Used
- **React:** Front-end library for building the user interface.
- **React Router:** Managing app routes for navigation.
- **Local Storage:** Storing user reading lists and settings preferences. 
- **Google API:**  Book data used across the application.
- **CSS & Bootstrap:** Styles.

##Known Bugs
- **Book Cover Images Missing** Books that do not have a cover image are not displaying the place-holder image correctly and are defaulting to alt tags. 
