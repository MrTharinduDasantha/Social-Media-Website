# Social Media Website

A simple social media website built with a modern MERN-stack architecture. This application lets users create profiles, follow others, post images/videos and short text updates (posts & stories), send friend requests, and chat in real time. Background jobs (e.g., notifications, processing) are handled reliably and media is stored on a dedicated CDN. Email notifications are sent for important events.


## Demo

Click the link below to see the demonstration of the Social Media Website.

Link 👉 https://drive.google.com/file/d/1Ek5XEeaLreSpKV2fn8fDfIZH11j1erGF/view?usp=sharing 👈


## Features

### Core User Features
- Create an account and manage your profile (profile picture, cover photo, name, username, bio, location).
- Add a Story — short text + single image or short video.
- Add a Post — short text + one or multiple images.
- Follow other users and see their posts/stories in your feed.
- Send and accept friend requests.
- Discover users via a Discover feature (search / people suggestions).
- Like posts and view like counts.
- Real-time one-to-one chat with users you follow (live messaging).
- View and manage notifications (new follower, likes, messages, friend requests).

### Media & Background Processing
- Upload images and videos (stored on a media CDN).
- Background processing and reliable job handling for tasks like notifications, media processing, and analytics.

### Real-time & Notifications
- Real-time updates for messages and notifications using Server-Sent Events (SSE).
- Email notifications for important events (account activity, friend requests) via an SMTP provider.


## Technologies Used

### Frontend
- React with Vite for fast development and bundling
- Tailwind CSS for utility-first styling
- Redux Toolkit for app state management
- Axios for API calls
- React Hot Toast for notifications

### Backend
- Node.js + Express.js for the server API
- MongoDB as the primary database
- Clerk for authentication (sign-up, sign-in, profile management)
- Inngest to run reliable background jobs and event-driven workflows
- ImageKit for image/video uploads and delivery
- Nodemailer for sending transactional emails (SMTP)
- Server-Sent Events (SSE) for real-time messaging and notifications
- Dotenv for environment variables


## Installation

Clone the repository and navigate to each project folder to install dependencies.
```bash
  git clone https://github.com/MrTharinduDasantha/Social-Media-Website.git
  cd Social-Media-Website
```
#### Folder Setup
The project is divided into two main folders: client (frontend) and server (backend). You will need to install dependencies for each.
- Navigate to each folder (client, server) and run.
```bash
npm install
```
#### Environment Variables
Before running the app, configure the .env files in the client and server folders with the necessary environment variables.
- Create a .env file in the client folder.
- Replace the placeholders with your actual values ​​or leave these values ​​as they are if you prefer:
```bash
VITE_CLERK_PUBLISHABLE_KEY=Enter your Clerk publishable key
VITE_BASEURL=http://localhost:4000
```
- Create a .env file in the server folder.
- Replace placeholders with your actual values:
```bash
PORT = 4000

# Fronted url
FRONTEND_URL = http://localhost:5173

# Mongodb setup
MONGODB_URI = "Enter your mongodb uri"

# Inngest setup
INNGEST_EVENT_KEY = "Enter your inngest event key"
INNGEST_SIGNING_KEY = "Enter your inngest signing key"

# Clerk setup
CLERK_PUBLISHABLE_KEY = "Enter your Clerk publishable key"
CLERK_SECRET_KEY = "Enter your Clerk secret key"

# ImageKit setup
IMAGEKIT_PUBLIC_KEY = "Enter your imagekit public key"
IMAGEKIT_PRIVATE_KEY = "Enter your imagekit private key"
IMAGEKIT_URL_ENDPOINT = "Enter your imagekit url endpoint"

# Nodemailer (Brevo) setup
SMTP_EMAIL = "Enter your SMTP email"
SMTP_USER = "Enter your SMTP user"
SMTP_PASS = "Enter your SMTP password"
```
#### Run the Project.
- Start the backend server
```bash
cd server
npm run server
```
- Start the frontend
```bash
cd ../client
npm run dev
```


## Usage
1. Open the frontend in your browser: http://localhost:5173.
2. Register / sign in (Clerk handles authentication).
3. Complete your profile (profile picture, cover photo, name, username, bio, location).
4. Create stories or posts by uploading media and writing a short description.
5. Use Discover to find other users and follow them or send friend requests.
6. Chat in real time with users you follow (real-time messages use SSE).
7. Check email for notifications (SMTP via Nodemailer).


## Screenshots

![image alt](https://github.com/MrTharinduDasantha/Social-Media-Website/blob/4677c26dfabb021dab6f4575642fef6085c542ed/Img%20-%201.png)
![image alt](https://github.com/MrTharinduDasantha/Social-Media-Website/blob/4677c26dfabb021dab6f4575642fef6085c542ed/Img%20-%202.png)
![image alt](https://github.com/MrTharinduDasantha/Social-Media-Website/blob/4677c26dfabb021dab6f4575642fef6085c542ed/Img%20-%203.png)
![image alt](https://github.com/MrTharinduDasantha/Social-Media-Website/blob/4677c26dfabb021dab6f4575642fef6085c542ed/Img%20-%204.png)
![image alt](https://github.com/MrTharinduDasantha/Social-Media-Website/blob/4677c26dfabb021dab6f4575642fef6085c542ed/Img%20-%205.png)
![image alt](https://github.com/MrTharinduDasantha/Social-Media-Website/blob/4677c26dfabb021dab6f4575642fef6085c542ed/Img%20-%206.png)
![image alt](https://github.com/MrTharinduDasantha/Social-Media-Website/blob/4677c26dfabb021dab6f4575642fef6085c542ed/Img%20-%207.png)
![image alt](https://github.com/MrTharinduDasantha/Social-Media-Website/blob/4677c26dfabb021dab6f4575642fef6085c542ed/Img%20-%208.png)
![image alt](https://github.com/MrTharinduDasantha/Social-Media-Website/blob/4677c26dfabb021dab6f4575642fef6085c542ed/Img%20-%209.png)
![image alt](https://github.com/MrTharinduDasantha/Social-Media-Website/blob/4677c26dfabb021dab6f4575642fef6085c542ed/Img%20-%2010.png)
![image alt](https://github.com/MrTharinduDasantha/Social-Media-Website/blob/4677c26dfabb021dab6f4575642fef6085c542ed/Img%20-%2011.png)
![image alt](https://github.com/MrTharinduDasantha/Social-Media-Website/blob/4677c26dfabb021dab6f4575642fef6085c542ed/Img%20-%2012.png)
![image alt](https://github.com/MrTharinduDasantha/Social-Media-Website/blob/4677c26dfabb021dab6f4575642fef6085c542ed/Img%20-%2013.png)
![image alt](https://github.com/MrTharinduDasantha/Social-Media-Website/blob/4677c26dfabb021dab6f4575642fef6085c542ed/Img%20-%2014.png)
![image alt](https://github.com/MrTharinduDasantha/Social-Media-Website/blob/4677c26dfabb021dab6f4575642fef6085c542ed/Img%20-%2015.png)
![image alt](https://github.com/MrTharinduDasantha/Social-Media-Website/blob/4677c26dfabb021dab6f4575642fef6085c542ed/Img%20(Mobile%20View)%20-%2016.png)
![image alt](https://github.com/MrTharinduDasantha/Social-Media-Website/blob/4677c26dfabb021dab6f4575642fef6085c542ed/Img%20(Mobile%20View)%20-%2017.png)
![image alt](https://github.com/MrTharinduDasantha/Social-Media-Website/blob/4677c26dfabb021dab6f4575642fef6085c542ed/Img%20(Mobile%20View)%20-%2018.png)
![image alt](https://github.com/MrTharinduDasantha/Social-Media-Website/blob/4677c26dfabb021dab6f4575642fef6085c542ed/Img%20(Mobile%20View)%20-%2019.png)
![image alt](https://github.com/MrTharinduDasantha/Social-Media-Website/blob/4677c26dfabb021dab6f4575642fef6085c542ed/Img%20(Mobile%20View)%20-%2020.png)

<h4 align="center"> Don't forget to leave a star ⭐️ </h4>

