
# Notes API
A simple Node.js Express.js project for managing notes through a RESTful API.

## Table of Contents

- [Notes API](#notes-api)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Features](#features)
  - [Installation](#installation)
  - [Usage](#usage)
  - [API Endpoints](#api-endpoints)
    - [Fetch Notes](#fetch-notes)
    - [Create a New Note](#create-a-new-note)
    - [Fetch a Note with ID](#fetch-a-note-with-id)
    - [Update a Note](#update-a-note)
    - [Delete a Note](#delete-a-note)
  - [Contributing](#contributing)

## Overview

This project is a RESTful API built with Node.js and Express.js for managing notes. It allows users to fetch all notes, create a new note, fetch a specific note by ID, update a note, and delete a note.

## Features

- Fetch all notes
- Create a new note
- Fetch a specific note by ID
- Update a note
- Delete a note

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/vinitGithub099/skillstreet-backend-assignment.git
   cd notes-api
   ``` 

2. Install dependencies:

    ```bash
    npm install
    ``` 
    
3.  Set up environment variables (if any).
    
4.  Start the server:
   
    ```bash
    npm start
    ```
4.  Run dev server:
   
    ```bash
    npm run dev
    ```
4.  Test server :
   
    ```bash
    npm run test
    ```

## Usage

Ensure the server is running, and you can then make API requests to manage notes. See the [API Endpoints](#api-endpoints) section for details on available endpoints.


## API Endpoints

### Fetch Notes

-   **Endpoint:** `GET /api/notes/fetch-notes`
-   **Description:** Fetch all notes.
-   **Sample Response:**
    ```JSON
    {
        "status": "success",
        "message": "Notes retrieved successfully",
        "data": [
            {
                "_id": "6592f836cace971a31b606a0",
                "title": "Note 2",
                "content": "This is Note 2",
                "createdAt": "2024-01-01T17:36:54.797Z",
                "updatedAt": "2024-01-01T17:36:54.797Z",
                "__v": 0
            },
            // Additional notes...
        ],
        "timestamp": "2024-01-04T15:06:19.200Z",
	    "statusCode": 200
    }
    ```
### Create a New Note

-   **Endpoint:** `POST /api/notes/create-note`
-   **Description:** Create a new note.
-   **Request Body:**
    ```JSON
    {
        "title": "Sample Note",
        "content": "This is a Sample Note"
    }
    ``` 
    
-   **Sample Response:**
    ```JSON
    {
        "status": "success",
        "message": "Note created successfully",
        "data": {
            "title": "Sample Note",
            "content": "This is a Sample Note",
            "_id": "6596ca12a2193679abb9bf05",
            "createdAt": "2024-01-04T15:09:06.839Z",
            "updatedAt": "2024-01-04T15:09:06.839Z",
            "__v": 0
        },
        "timestamp": "2024-01-04T15:09:07.050Z",
        "statusCode": 201
    }
    ```

### Fetch a Note with ID

-   **Endpoint:** `GET /api/notes/fetch-notes/:id`
-   **Description:** Fetch a specific note by ID.
-   **Sample Response:**
    ```JSON
    {
        "status": "success",
        "message": "Note retrieved successfully",
        "data": {
            "_id": "6592f836cace971a31b606a0",
            "title": "Note 2",
            "content": "This is Note 2",
            "createdAt": "2024-01-01T17:36:54.797Z",
            "updatedAt": "2024-01-01T17:36:54.797Z",
            "__v": 0
        },
        "timestamp": "2024-01-04T15:13:24.939Z",
        "statusCode": 200
    }
    ```

### Update a Note

-   **Endpoint:** `PUT /api/notes/update-note/:id`
-   **Description:** Update a note by ID.
-   **Request Body:**
    ```JSON
    {
        "title": "Latest Note",
        "content": "This is the latest modified Note"
    }
    ``` 
    
-   **Sample Response:**
    ```JSON
    {
        "status": "success",
        "message": "Note updated successfully",
        "data": {
            "_id": "6592f836cace971a31b606a0",
            "title": "Latest Note",
            "content": "This is the latest modified Note",
            "createdAt": "2024-01-01T17:36:54.797Z",
            "updatedAt": "2024-01-04T15:15:48.804Z",
            "__v": 0
        },
        "timestamp": "2024-01-04T15:15:48.882Z",
        "statusCode": 200
    }
    ```
### Delete a Note

-   **Endpoint:** `DELETE /api/notes/delete-note/:id`
-   **Description:** Delete a note by ID.
-   **Sample Response:**
    ```JSON
    {
        "status": "success",
        "message": "Note Deleted successfully",
        "data": {
            "_id": "6592f836cace971a31b606a0",
            "title": "Latest Note",
            "content": "This is the latest modified Note",
            "createdAt": "2024-01-01T17:36:54.797Z",
            "updatedAt": "2024-01-04T15:15:48.804Z",
            "__v": 0
        },
        "timestamp": "2024-01-04T15:17:40.144Z",
        "statusCode": 204
    }
    ```

## Contributing

Feel free to contribute by submitting pull requests. For major changes, please open an issue first to discuss what you would like to change.