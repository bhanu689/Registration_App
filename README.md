# Registration App

## Description

A simple registration application built using Node.js, Express, and MySQL. This application allows users to create, read, update, and delete registration entries.

## Prerequisites

- Node.js (>= 14.x)
- MySQL
- A GitHub account

## Setup

### 1. Clone the Repository

Open your terminal and run the following command:

```bash
git clone git@github.com:bhanu689/Registration_App.git

### 2. Install depenedencies
```bash
npm install

### 3. Setup Environment Variables
Create a .env file in the root directory and add the following variables:
DB_HOST=database_host_name
DB_USER=database_user_name
DB_PASSWORD=database_password
DB_NAME=database_name
PORT= port_number


### 4. Run the Application
For development mode, use: 
```bash
npm run dev
For production mode, 
```bash
use: npm start

### 5. Access the API
The API will be running on http://localhost:5002.
API Endpoints
Create Registration: POST /registrations
Get All Registrations: GET /registrations
Update Registration: PUT /registrations/:id
Delete Registration: DELETE /registrations/:id

##### Step 4: Initialize Git and Push Code

1. **Open Terminal/Command Prompt**:
   Navigate to the project directory.

2. **Initialize Git**:
   ```bash
   git init

3.Add Remote Repository:
git remote add origin https://github.com/YOUR_USERNAME/registration_app.git

4.Add Files and Commit:
```bash
git add .
git commit -m "Initial Commit"

5.Push to GitHub:
```bash
git push -u origin master
