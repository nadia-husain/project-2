# Comics Website

## Introduction
---
intro here

## ERD
---

![ERD](https://i.imgur.com/N92Prvh.png)

## Wireframes
---

wireframes here

## Trello Board
---
https://trello.com/b/S3Wi7NjN/website

## Link to your deployed application
---

link here

## A list of technologies used within the project:
---
### <ins> Back-End </ins>

#### 1. Express with the following dependencies:
* bcrypt
* detect-libc
* dotenv
* ejs
* express
* express-ejs-layouts
* express-session
* mongoose
* multer
* passport
* passport-local

#### 2. Database
* MongoDB

#### 3. Libraries Used

* isLoggedIn.js: This is used to check whether if the user is logged in. If the user is not logged in the user is redirected to the Sign In page otherwise the next middleware function is loaded.

* passportConfig.js: Used for authentication purposes. Checks if user info exists in database and if not then returns an error (in the console only)

#### 4. Node.js

### <ins> Front-End </ins>
* HTML
* CSS
* JavaScript
* EJS
* BootStrap

## Features
---

* Users can add Comic entries and edit or delete specifc Comic entry them if needed.

* Users can view all Comic entries that are added by them or others.

* Users are only able to modify their own entries.

* Users can add and view reviews specific to each Comic.

* Users are able to sign up, enter their details (Name, Email Address, Password) and sign in using those details.

* Users are able to edit their profile (Name, Email Address) and sign out using that page.

* Users are able to change their password.

## Unsolved Problems
---
* Some pages that don't need the user to sign in require them to sign in either because "isLoggedIn" library or "Passport" and "Session" related variables are being used in some functions causing crashes when they are not defined (due to user not being signed in). 

* Each user should be limited to one review per comic but instead can add multiple reviews to the same comic.

## Future Enhancements
---
* Add a search bar.

* Add a favorites list.

* Sign Out button should be in the layout.ejs but to avoid confusion due to Sign In and Sign Up buttons being in the same page, it was instead added to the Profile page. Need to figure out a way to hide and replace both the Sign In and Sign Up buttons when user is signed in with the Sign Out button.