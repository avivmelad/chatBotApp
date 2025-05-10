# Chat Application - Home Assignment

## Project Overview
This project is a simple chat simulation between a user and an automated bot. 
Built with React (frontend) and Node.js with PostgreSQL (backend).

## Requirements
- Node.js (v18+ recommended)
- PostgreSQL (with a database named 'chatapp')
- NPM (Node Package Manager)

## Folder Structure
- /chat-app      => Frontend (React)
- /server        => Backend (Node.js + PostgreSQL)

## Database Setup
1. Start your PostgreSQL server.
2. Import the provided `chatapp.sql` dump file to create the database and tables.
3. Database password is "123".

## How to Run

### 1. Run the Backend
- Navigate to `/server`:

Server runs on port **5000** by default.

### 2. Run the Frontend
- Navigate to `/chat-app`:

 Frontend runs on **http://localhost:5173** by default.

## Additional Notes
- You can adjust the PostgreSQL connection settings in `server/server.js`.
- Bot replies are configured in `server/messages.json`.
- Example conversation starts with id **1**.