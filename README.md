# First API

## 📌 Brief description of the assignment

This project is a RESTful API built with Node.js, Express, and MongoDB. The goal was to create an API with multiple endpoints that can return both collections of data and single items. The API uses Mongoose to model and interact with a MongoDB database hosted on MongoDB Atlas.

The API provides information about music tracks, including details such as artist, genre, BPM, and popularity.

---

## 🛠️ How I approached the task

I started by setting up an Express server and creating basic routes. After that, I connected the project to a MongoDB database using Mongoose and created a model for the track data.

I seeded the database with a JSON dataset and built endpoints to:

* Fetch all tracks
* Fetch a single track by ID

To improve the API, I added query parameters to allow filtering (e.g. by genre and BPM) and limiting results.

### Tools & techniques used:

* Node.js
* Express
* MongoDB Atlas
* Mongoose
* dotenv for environment variables
* RESTful API design principles

---

## 🚀 If I had more time

If I had more time, I would:

* Add more advanced filtering and sorting options
* Implement pagination
* Add more endpoints (e.g. top tracks, search by artist)
* Add validation for incoming data
* Build a frontend to consume the API

---

## ▶️ How to run the project locally

### 1. Clone the repository

```bash
git clone https://github.com/HejHTML/technigo-project-first-api.git
cd project-first-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a `.env` file

Add your MongoDB Atlas connection string:

```env
MONGO_URL=your_mongodb_connection_string
RESET_DB=true
```

### 4. Start the server

```bash
npm start
```

The server will run on:

```
http://localhost:8080
```

---

## 🔗 Endpoints

* `GET /` – API documentation
* `GET /tracks` – Get all tracks (supports query params: genre, minBpm, maxBpm, limit)
* `GET /tracks/:id` – Get a single track by ID

---

## 🌍 Live API

(Add your deployed API link here)


## Getting Started with the Project

### Dependency Installation & Startup Development Server

Once cloned, navigate to the project's root directory and this project uses npm (Node Package Manager) to manage its dependencies.

The command below is a combination of installing dependencies, opening up the project on VS Code and it will run a development server on your terminal.

```bash
npm i && code . && npm run dev
```
