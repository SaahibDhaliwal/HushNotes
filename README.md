# HushNotes

A secure note-taking application built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- User authentication (register/login)
- Create, view, and delete notes
- Markdown support for note content
- Search notes by title
- Secure JWT-based authentication

## Project Structure

```
HushNotes/
├── backend/          # Express.js API server
│   ├── config/       # Database configuration
│   ├── controllers/  # Route controllers
│   ├── middleware/   # Auth middleware
│   ├── models/       # Mongoose models
│   ├── routes/       # API routes
│   └── server.js     # Entry point
├── frontend/         # React application
│   ├── public/
│   └── src/
│       ├── actions/      # Redux actions
│       ├── components/   # Reusable components
│       ├── reducers/     # Redux reducers
│       ├── screens/      # Page components
│       └── store.js      # Redux store
└── README.md
```

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (free tier works)

## Setup

### 1. Clone the repository

```bash
git clone <repository-url>
cd HushNotes
```

### 2. Set up MongoDB Atlas

1. Go to [mongodb.com/atlas](https://www.mongodb.com/atlas) and create a free account
2. Create a new cluster (free M0 tier)
3. Click "Database Access" and create a database user with password
4. Click "Network Access" and add your IP (or `0.0.0.0/0` for development)
5. Click "Connect" > "Connect your application" > Copy the connection string

### 3. Configure environment variables

Create a `.env` file in the `backend` folder:

```bash
cd backend
cp .env.example .env
```

Edit `backend/.env` with your values:

```
PORT=5000
MONGO_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/hushnotes?retryWrites=true&w=majority
JWT_SECRET=your_secret_key_here
```

### 4. Install dependencies

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

## Running the Application

You need to run both the backend and frontend servers:

### Terminal 1 - Backend

```bash
cd backend
npm run dev
```

The API server will start on http://localhost:5000

### Terminal 2 - Frontend

```bash
cd frontend
npm start
```

The React app will start on http://localhost:3000

## API Endpoints

### Authentication
- `POST /api/users` - Register a new user
- `POST /api/users/login` - Login user

### Notes (requires authentication)
- `GET /api/notes` - Get all notes for logged-in user
- `POST /api/notes/create` - Create a new note
- `PUT /api/notes/:id` - Update a note
- `DELETE /api/notes/:id` - Delete a note

## Tech Stack

**Frontend:**
- React 18
- Redux with Redux Thunk
- React Router v6
- React Bootstrap
- Axios

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT for authentication
- bcryptjs for password hashing
