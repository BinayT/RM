# React Meetups Readme

Welcome to the React Meetups!

## Getting Started

To get the project up and running, follow these steps:

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm start
   ```

## Project Structure

- **Global State:** We use a context to manage the global state across the application.
- **Helper Functions:** Located in the helpers directory, these functions assist with various tasks.
- **Components:**
  - **Layout:** Contains layout-related components.
  - **Meetups:** Contains components related to meetups.
  - **UI:** Contains reusable UI components.

  You can find these folders inside the `src/components` directory.

- **Pages:**
  - All available pages, including the 404 page, are located in the `src/pages` directory.
  - The 404 page is displayed when the user navigates to a non-existing route.

## Routing

For routing, we use the `react-router-dom` library. The three main pages that can be visited are:

- `/` - Home Page
- `/favorite-meetups` - Favorite Meetups Page
- `/new-meetup` - New Meetup Page

Happy Coding!