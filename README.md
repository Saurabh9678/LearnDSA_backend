# LearnDSA_backend

This website provides comprehensive content on Data Structures and Algorithms (DSA) topics for students to learn. It is built with Node.js and Express.js, and uses MongoDB as the database.



# Installation and Setup
Clone the repository: git clone `https://github.com/Saurabh9678/LearnDSA_backend.git`  
Add config.env in database folder for environment variables:  
`Env_Variables`  
`DB_URI` = The database url string  
`PORT` = The port number  
`JWT_SECRET` = Give a string  
`JWT_EXPIRES` = Give a number and add 'd' at the end  
`COOKIE_EXPIRE` = Give a number  
Install dependencies: `npm install`  
Start the server: `npm start`  
The website should now be available at `http://localhost:3000`  



# Features
# Authentication
Users can create an account and log in to access the DSA topics. The authentication system is built using JSON Web Tokens (JWT) and bcrypt for password hashing.


# Admin Routes
Authenticated users with admin privileges can add, update, and delete DSA topics. Admin routes are protected by an authentication middleware that ensures only authorized users can access them.

# Technologies Used
Node.js and Express.js for building the backend  
MongoDB for the database


# Acknowledgments
The content of this website is inspired by various resources available online, including books, articles, and videos. I acknowledge and appreciate the authors and contributors of these resources.
I thank the open-source community for providing tools and libraries that made building this website possible.
