RNKR [![Netlify Status](https://api.netlify.com/api/v1/badges/1f5a7edf-2264-44bd-b397-f109b7857b9b/deploy-status)](https://app.netlify.com/sites/rnkr/deploys)

# Overview

RNKR is an application that allows a user to keep up with all their games, specifically competitive ranked games, across all consoles. A user can save their current rank (if applicable), the console they play it on, and whether it's one of their favorite games.

## About the User
- The ideal user for this application is a gamer.
- They play many games, sometimes on many different consoles, and would like to keep track of them all in one place.
- They also play many ranked games and would like to keep track of them in one place.
- The problem this app solves for them is it allows them to keep all their played game details in one place. When playing on a console, you can only view the games, and ranks from those games, that you have played on that console. This means having to go to many different places to find the game information you are looking for.

## Features 
- When a new game is added an object should be created and that object should be pushed into an array of games that then prints to the DOM.
- Only the user's ranked games will appear immediately upon login.
- The user can navigate to their game library to view ALL games they have recorded, including their already viewed ranked games.
- The user can easily document new games and update their already existing games.
- Unwanted games can easily be deleted.
- More detailed information of games can be viewed by clicking the "view details" button on each card.
- A profile page will track the user's name, last login, and images of the currently saved games in their library. This page can be shared with friends to find games they both already have.
- The logo in the navigation bar takes the user back to the home view.
- 

## Video Walkthrough of APP NAME
https://www.loom.com/share/1edd9c46ba504cdd92536cbb4139d9e7?sid=33e97cee-1000-4c98-b16e-c9cc702f612d

## Relevant Links <!-- Link to all the things that are required outside of the ones that have their own section -->
- [Check out the deployed site](#https://api.netlify.com/api/v1/badges/1f5a7edf-2264-44bd-b397-f109b7857b9b/deploy-status)
- [Wireframes](#https://docs.google.com/presentation/d/1ny3FW9wiPZ8FNaii2X79z-PYM0O8QNJxwA5vAoqtgl8/edit?usp=sharing)
- [Project Board](#https://github.com/users/AndrewSpur73/projects/1/views/1)
- [ERD] (#https://dbdiagram.io/d/Capstone-RNKR-661ad35b03593b6b61ea8965)

## Project Screenshots <!-- These can be inside of your project. Look at the repos from class and see how the images are included in the readme -->
<img width="1148" alt="Your Alt" src="https://snipboard.io/Jbusxw.jpg">
<em>Easy to navigate Home Page</em>


<img width="1148" alt="Your Alt" src="https://snipboard.io/DixyJV.jpg">
<em>Save a New Game to your Library</em>


<img width="1148" alt="Your Alt" src="https://snipboard.io/IDWgrB.jpg">
<em>View your User Profile</em>

## Try Rnkr Out For Yourself

1. Set up a [Firebase](https://firebase.google.com/) project - Here's how: [Firebase Setup & Authentication](https://www.loom.com/share/163ffe1539bb482196efa713ed6231e9)

2. Clone Rnkr to your local machine
``` bash
git@github.com:AndrewSpur73/FE-Capstone-RNKR.git
```

2. Move into directory
``` bash
cd FE-Capstone-RNKR
```

3. Once in RNKR's code, create a .env file at the root of the project and paste the following keys into the .env file:
``` bash
NEXT_PUBLIC_FIREBASE_API_KEY=""
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=""
NEXT_PUBLIC_FIREBASE_DATABASE_URL=""
NEXT_PUBLIC_FIREBASE_PROJECT_ID=""
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=""
NEXT_PUBLIC_FIREBASE_APP_ID=""
```

4. The last portion of the Firebase walkthrough from step 1 highlights where to find the values to put in the empty strings in the code snippet of step 4. From Firebase, copy the values and paste them into the empty strings of the respective keys located in the .env file.

5. Import sample data found in data folder in RNKR to Realtime Database in your Firebase project (OPTIONAL)

![finding-sample-data](https://user-images.githubusercontent.com/98675776/191889055-468ebbbd-3143-4362-8adf-99668352d15c.png)

6. Be in the root directory and from your command line, run
``` bash
npm install or npm i
```
7. Now from your command line, run
``` bash
npm run prepare
```
8. To start RNKR, run
``` bash
npm run dev
```
9. Click http://localhost:3000 in the terminal to open the browser

10. Enjoy RNKR!

## Tech Stacks
<div>  
<a href="https://reactjs.org/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/react-original-wordmark.svg" alt="React" height="50" /></a>  
<a href="https://nextjs.org/" target="_blank" rel="noreferrer"> <img src="https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" alt="nextjs" width="40" height="40"/>
<a href="https://firebase.google.com/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/firebase.png" alt="Firebase" height="50" /></a> 
<a href="https://www.w3schools.com/css/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/css3-original-wordmark.svg" alt="CSS3" height="50" /></a>  
<a href="https://en.wikipedia.org/wiki/HTML5" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/html5-original-wordmark.svg" alt="HTML5" height="50" /></a>  
<a href="https://getbootstrap.com/docs/3.4/javascript/" target="_blank"><img style="margin: 10px" src="https://profilinator.rishav.dev/skills-assets/bootstrap-plain.svg" alt="Bootstrap" height="50" /></a>  
</div>

## Contributors
- [Andrew Spurlock](https://github.com/AndrewSpur73)
