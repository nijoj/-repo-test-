# Full-Stack Application

A modern web application with React frontend and Java backend.

## Project Structure

This project consists of two main components:

- **Frontend**: React application with TypeScript, built with Vite
- **Backend**: Java REST API using MicroProfile and Open Liberty

## Features

- Modern React frontend with TypeScript
- Java backend with MicroProfile
- RESTful API integration
- Responsive design
- Form validation
- Error handling

## Prerequisites

- Node.js 18+ and npm
- Java 17+
- Maven 3.8+
- Docker (optional, for containerization)

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```
   cd backend
   ```

2. Build the application:
   ```
   ./mvnw clean package
   ```

3. Run the application:
   ```
   ./mvnw liberty:run
   ```

The backend will be available at http://localhost:9080/api

### Frontend Setup

1. Navigate to the frontend directory:
   ```
   cd frontend
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm run dev
   ```

The frontend will be available at http://localhost:5173

## API Endpoints

### Hello World

- **URL**: `/api/hello`
- **Method**: `GET`
- **Response**: Plain text "hello world"

### Greeting

- **URL**: `/api/greeting/{name}`
- **Method**: `GET`
- **URL Params**: `name` - The name to greet
- **Response**: Plain text greeting with timestamp

### JSON Greeting

- **URL**: `/api/greeting-json/{name}`
- **Method**: `GET`
- **URL Params**: `name` - The name to greet
- **Response**: JSON object with greeting message, timestamp, and success status

## Development

### Frontend Development

The frontend is built with:
- React 18
- TypeScript
- React Router for navigation
- Axios for API calls
- CSS for styling

### Backend Development

The backend is built with:
- Java
- MicroProfile
- JAX-RS for REST endpoints
- CDI for dependency injection
- Open Liberty as the application server

## Deployment

### Docker Deployment

1. Build the backend Docker image:
   ```
   cd backend
   docker build -t backend-app .
   ```

2. Build the frontend Docker image:
   ```
   cd frontend
   docker build -t frontend-app .
   ```

3. Run the containers:
   ```
   docker run -p 9080:9080 backend-app
   docker run -p 5173:80 frontend-app
   ```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
