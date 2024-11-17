## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing With Cypress

Run the command to open cypress and prove tests with user interfaces.

```bash
npm run cypress:open
```

Run the command to run cypress and prove tests without user interfaces.

```bash
npm run cypress:run
```

## Learn More About the Project
This project leverages two types of services for authentication and API interactions:

- **Auth Service:** Handles user authentication, ensuring secure access to the application.

- **API Service:** Designed as a central interface for interacting with the API. 
It facilitates the management of HTTP requests, enabling other services to communicate with 
the backend seamlessly.

## HTTP Clients

The project provides two HTTP clients to interact with the API, offering flexibility for development and testing:

- **Axios Client:** A powerful and popular HTTP client used for making real API requests to the backend.
- **Mock Data Client:** A lightweight client designed to simulate API responses, useful for testing and development when the backend is unavailable.

