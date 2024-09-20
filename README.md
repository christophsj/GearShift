# GearShift

A basic car rental management application.

## Project Structure

This application consists of a Spring Boot backend and an Angular frontend.

- `./server`: Backend (Spring Boot)
- `./web-client`: Frontend (Angular)

## Prerequisites

- Java JDK 11
- Maven
- Node.js v22.x
- npm 10.x
- Angular CLI

## Backend Setup

1. Navigate to 
   ```
   cd ./server
   ```

2. Build the project:
   ```
   mvn clean install
   ```

3. Run the application:
   ```
   mvn spring-boot:run
   ```

Or simply use your favorite IDE to setup the run configuration for you. The backend server will start on `http://localhost:8080`.

## Frontend Setup 

1. Navigate to
   ```
   cd ./web-client
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   ng serve
   ```

The frontend will be available at `http://localhost:4200`.

## Features

* **/:** 
    * View how many cars are currenlty rented
* **/cars:**
    * Create Cars
    * View list of Cars
    * View Car details, including rent status and rental history
    * Set a car as rented by client for period
    * Set a car as returned
* **/clients:**
    * Create Clients
    * View list of Clients
    * View Client details


## Improvements, ToDos

* Add pagination for cars/clients in frontend (backend done)
* Show client rental history in frontend (backend done)
* Add information how many kilometers a car was rented for
* Add http interceptor in frontend to e.g. display error snackbars
* Add tests