# React Movie Site ![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103) ![GitHub top language](https://img.shields.io/github/languages/top/abduljabar5/react-movie-site) ![GitHub last commit](https://img.shields.io/github/last-commit/abduljabar5/react-movie-site) ![GitHub stars](https://img.shields.io/github/stars/abduljabar5/react-movie-site) ![GitHub repo size](https://img.shields.io/github/repo-size/abduljabar5/react-movie-site) 



## Table of Contents

- [React Movie Site     ](#react-movie-site-----)
  - [Table of Contents](#table-of-contents)
  - [Discription](#discription)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)

## Discription
PopcornPeek is a dynamic web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that caters to the entertainment needs of users by allowing them to explore trending movies, TV shows, and anime. PopcornPeek is more than just a listing of entertainment content. It offers a deeper dive into each show, movie, or anime. Users can view trailers, read comprehensive descriptions, explore similar content, and access useful information such as age ratings, IMDb ratings, status, and more.

One of the major challenges i faced during the development of this project was handling API usage limitations. As movie information changes frequently, it was essential to provide users with the most recent data while dealing with the API's constraints. One solution was to leverage the power of IndexedDB, a low-level API for client-side storage of significant amounts of structured data. I've implemented a system to save the received data from the API to IndexedDB. This data is refreshed once a day, ensuring the website provides users with current information without exceeding the API's call limit. This strategy not only maintains data freshness but also improves the application's performance, as i can serve a lot of the data directly from the local IndexedDB storage, resulting in quicker load times and a smoother user experience.

## Installation

https://obscure-anchorage-29420.herokuapp.com/

## Usage
PopcornPeek is designed to be user-friendly and engaging. Here are quick steps on how to interact with the application:

1. Registration: To register an account, provide a unique username, email, and password on the sign-up page.

2. Saving Content: When you find a movie, show, or anime that piques your interest, click on it for detailed information. You'll find a 'Save' button on this page, which you can use to save the content to your profile for future reference.

3. Personalized Recommendations: Once you're logged in, personalized recommendations will appear on your homepage, curated based on the content you've saved.

4. Search: You can use the search bar located in the navbar at the top of the page to search for your desired content by title.

5. Chatbot Assistance: When logged in, you'll find a chatbot button at the bottom right of the page. Click on it and ask away! Be specific in your questions, as the chatbot doesn't remember previous conversations.

6. Additional Information: Detailed information about each movie, show, or anime including age ratings, IMDb ratings, etc., can be accessed by clicking on the content that you're interested in.

## Credits
google, stackoverflow, bing, https://www.freepik.com/free-photo/3d-cartoon-lumberjack-character_38990025.htm#query=spying%203d&position=20&from_view=search&track=ais , https://webartdevelopers.com/blog/ , https://codepen.io/trending , https://uiverse.io/


Github: https://github.com/mdglankush65

Email: mdglankush565@gmail.com
