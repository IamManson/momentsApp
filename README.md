# Moments MERN Stack Application

This app was created with [Create React App](https://reactjs.org/docs/create-a-new-react-app.html), [Node.js](https://nodejs.org/en/), [Express](https://expressjs.com/) and [MongoDB](https://www.mongodb.com/). Deployed app can be found here: https://momentsmern-app.netlify.app/

### Table of Contents
---------------------
1. Description
2. User Cases
3. Features
4. Technologies
5. Deployment
6. Security
7. System Architecture
8. System Requirements Specifications
9. Installation
10. Usage
11. Preview
12. Credits

## Description

This is program is a web-based application that allows a user to document their personal life moments through photographs. This application can either be used as a personal journal or a social photo-sharing platform.

## Features

* Users can store photographic moments
* User can create, edit and delete their own moment
* User can like their own moment and other users moments
* User can log in with email or their Gmail Account

## Technologies

App is created with: 

* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [React](https://reactjs.org/)
* [MongoDB](https://www.mongodb.com/) - For Database Management
* [Material UI](https://mui.com/) - For a robust and customizable styling library
* [Google OAuth Api](https://console.cloud.google.com/home/dashboard) - For authentication using Gmail account login details

## Deployment

Application backend has been deployed using [Heroku](https://heroku.com) and frontend has been deployed using [Netlify](https://app.netlify.com/) for easier build flexibility. 

## Security

API Credentials have been hidden in .env.local file. 

## System Architecture

|                                                                           |                                                                           |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **System Architecture**                                           | MVC (Model-view-controller) architecture                                          |
| **Web Stack**                                                     | The web stack this application will be using is the MERN Stack (MongoDB, Express.js, React,js and Node.js). This stack has been chosen as it is best suited to the MVC architecture, whereby we can edit the 3 components/layers much more effectively as the business logic and interface logic aren't coded together. The frontend of this application will be created using Create React App (CRA) as it allows for easier deployment, less time-consuming configuration and provides a smoother development process.                                            |
| **Deployment**                                                    | The application will be deployed using Heroku and Netlify/Vercel.                 |
| **Styling Tools**                                                 | The document will use React Materials UI library for styling. It is a robust and customizable library for great UI styling. The document will also use Material UI icons to bolster the app with great looking icons. Using this tool allows for faster development whilst still providing an appealing UI.                |

## System Requirements Specifications

The application will be used by users who would like to share important moments in their lives with other users. It can be used as a personal photo journal or as a simple photo sharing platform depending on user preference.
The application mimics the concept of Facebook and Instragram on 

|                                                                           |                                                                           |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **Functional Requirements**                                       | Users should be able to sign up                                                   |
|                                                                   | Users should be able to sign in                                                   |
|                                                                   | Users should be able to log out                                                   |
|                                                                   | Users should be authenticated when logging into application                       |
|                                                                   | Users should be assigned a role when signing up to determine ability to edit and delete posts or not |
|                                                                   | Users should be able to add, edit & delete their own moment                       |
|                                                                   | Users should be able to see, like and unlike other users' moments                 |
|                                                                   | Users should be able to upload an image to their moment                           |
|                                                                   | Users should not be able to edit or delete other users' moments                   |
|                                                                   | Users should be able to see if they are logged in or not                          |
|                                                                   |                                                                                   |
| **Non-Fuctional Functional Requirements**                         |                                                                                   |
| _Usability_                                                       | Interface should be interactive and engaging for users                            |
|                                                                   | The usability should be simple and intuitive for users                            |
|                                                                   | Tasks should have a hover implemented to allow for easier user navigation         |
|                                                                   | The application should be available via a web interface                           |
|                                                                   | A user should be able to use and navigate the application within _1 day_ of using |
| _Reliability_                                                     | The application should not be slow as it's a social application and speed could deter users |
|                                                                   | The system shall be completely operational at least 80% of the time               |
|                                                                   | Down time after a failure shall not exceed _2 hours_                              |
| _Performance_                                                     | The application should load within _10 seconds_                                   |
|                                                                   | The application should be able process a moment being added, edited, or deleted within _6 seconds_  |
|                                                                   | The application should allow a user to be logged in within _5 seconds_ of correct authentication or re-routed back to sign in form   |
|                                                                   | The application should log a user out after _1 hour_                              |
|                                                                   | The application should be able to support multiple simultaneous users             |
| _Security_                                                        | The application should meet the constraints of applicable legislation and certification (POPIA, etc.) |
|                                                                   | The application should hash user passwords when signing up and storing data       |


## User Cases
|                                                                           |                                                                                 |
| ------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| **Use Case Name:**                           | **Sign Up User**                                                                                             |
| Description:                                 | In order to sign in and use application a new user must register their user details for a unique login       | 
| Basic Flow:                                  | 1. The use case start when a user indicates that they want to sign up                                        |
|                                              | 2. The system requests the users name, surname, email address, password and password confirmation            |
|                                              | 3. The user enters a name,  surname, email address, password and password confirmation                       |
|                                              | 4. The system checks that the  surname, email address, password and password do not already exist            |
|                                              | 5. The system assigns the user an access level and stores all user informations                              |
|                                              | 6. The system starts a login session                                                                         |
|                                                                           |                                                                                 |
| **Use Case Name:**                           | **Sign In User**                                                                                             |
| Description:                                 | In order to create, edit & delete moments a user must sign in for the system to determine their access level |
| Basic Flow:                                  | 1. The use case start when a user indicates that they want to sign in                                        |
|                                              | 2. The system requests the users email address and password                                                  |
|                                              | 3. The user enters their email address and password                                                          |
|                                              | 4. The system verifies the email address and password against all verified users                             |
|                                              | 5. The system authenticates the user                                                                         |
|                                              | 6. The system starts a login session                                                                         |
|                                                                           |                                                                                 |
| **Use Case Name:**                           | **Create Memory**                                                                                            |
| Description:                                 | In order to create a new moment, a user must be logged in                                                    |
| Basic Flow:                                  | 1. The use case start when a user indicates that they want to create a new moment                            |
|                                              | 2. The system executes use case _Sign In User_                                                               |
|                                              | 3. The system requests a memory Title, Message, Tags and Image                                               |
|                                              | 4. The user enters a memory Title, Message, Tags and Image                                                   |
|                                              | 5. The system stores the new memory details and displays it                                                  |
|                                                                           |                                                                                 |
| **Use Case Name:**                           | **Edit Memory**                                                                                              |
| Description:                                 | In order to edit their moment, a user must be logged in                                                      |
| Basic Flow:                                  | 1. The use case start when a user indicates that they want to edit a moment of theirs                        |
|                                              | 2. The system executes use case _Sign In User_                                                               |
|                                              | 3. The system checks which moments the user created to determine which are editable                          |
|                                              | 4. The system requests a new or updated memory Title, Message, Tags or Image                                 |
|                                              | 5. The user enters a new or updated memory Title, Message, Tags or Image                                     |
|                                              | 6. The system stores the updated memory details and displays it                                              |
|                                                                           |                                                                                 |
| **Use Case Name:**                           | **Delete Memory**                                                                                            |
| Description:                                 | In order to delete their moment, a user must be logged in                                                    |
| Basic Flow:                                  | 1. The use case start when a user indicates that they want to delete a moment of theirs                      |
|                                              | 2. The system executes use case _Sign In User_                                                               |
|                                              | 3. The system checks which moments the user created to determine which are deletable                         |
|                                              | 4. The user clicks on the delete icon of the specific memory                                                 |
|                                              | 5. The system checks the id of the clicked memory against the stores memory ids and removes it from database |
|                                              | 6. The system displays all the remaining memories                                                            |


## Installation

### Prerequisites

* Access to a command-line
* Your favorite coding text editor
* Username and password for the Github website (optional)

To run this project, do the following: 

1. [Download](https://git-scm.com/downloads) Git for Windows, Mac OS X or Linux/Unix
2. Install Git

Now open your command prompt or terminal:

1. Creat a new empty directory (mkdir <folder_name>) for the project
2. Change directory (cd) to your newly created directory
3. Configure your local Git installation to use your GitHub credentials by entering the following:
   - git config ––global user.name “github_username”
   - git config ––global user.email “email_address”
4. Go to your repository on GitHub. In the top right above the list of files, open the **Clone or download** drop-down menu. Copy the **URL for cloning over HTTPS.**
5. Switch your command prompt and enter git clone *repository_url*
6. Your working directory should now have a copy of the repository from GitHub. It should contain a directory with the name of the project. Change to the directory: cd <folder_name>
7. Once you are in the project directory, enter *npm install* in your terminal
8. Next, enter *npm install --save react-router-dom* in your terminal to install the React-Router-Dom package
9. Ensure that you are in your project directory and enter *npm start* to run app in the development mode.
10. Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

## Usage

### Pushing Local Files to the Remote Repository

Done some work on this project? Submit your changes to the remote project on Github.

1. Create a new branch: git branch *branch-name*
2. Switch to your newly created branch: git checkout *branch-name*
3. Now confirm the status of your brand and untracked files: git status
4. Add the file that you've worked on to your branch: git add *file-name*
5. Run **git status** again to make sure the text.txt file has been added. Next, commit the changes to the local project: git commit –m “*descriptive message*”
6. Finally, push the changes to the remote GitHub repository: git push 


## Preview

### User Sign Up
![Screenshot of user sign up](https://github.com/IamManson/momentsApp/blob/main/frontend/src/images/User%20sign%20up.png)

### User Sign In
![Screenshot of user sign in](https://github.com/IamManson/momentsApp/blob/main/frontend/src/images/User%20sign%20in.png)

### Logged In Home Page
![Screenshot of logged in home page](https://github.com/IamManson/momentsApp/blob/main/frontend/src/images/Logged%20In.png)

### Multiple Moments
![Screenshot of multiple submissions](https://github.com/IamManson/momentsApp/blob/main/frontend/src/images/Multiple%20submissions.png)

### Create Moment Form
![Screenshot of creation form](https://github.com/IamManson/momentsApp/blob/main/frontend/src/images/Submitting%20moment.png)


## Credits

App created by [Kayla Manson](https://my-developer-portfolio-jet.vercel.app/) in 2021. 
Find me on [LinkedIn](https://dribbble.com/kayla-manson), [Github](https://github.com/IamManson) and [Dribbble](https://dribbble.com/kayla-manson).