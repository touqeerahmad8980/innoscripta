# React News App with TypeScript

This is a React application built using TypeScript for fetching and displaying news articles from multiple APIs. It includes features like article search, filtering, personalized news feed, and a responsive design. The application is containerized using Docker for easy deployment.

---

## Features

1. **Article Search and Filtering**:
   - Search articles by keyword.
   - Filter articles by date, category, and source.
2. **Personalized News Feed**:
   - Customize news feed by selecting preferred sources, categories, and authors.
3. **Mobile-Responsive Design**:
   - Optimized for mobile devices using Material-UI.
4. **Containerized Deployment**:
   - Easily deployable using Docker.

---

## Technologies Used

- React with TypeScript
- Material-UI for UI components
- React Query for state management and API calls
- Axios for fetching data
- ESLint and Prettier for code quality and formatting
- Docker for containerization

---

## Project Structure

```
src/
├── components/       # Reusable React components
├── constants/        # API configuration and constants
├── hooks/            # Custom hooks for API calls
├── services/         # API-related services
├── styles/           # Theming and global styles
├── App.tsx           # Main application component
└── index.tsx         # Application entry point
```

---

## Prerequisites

- Node.js (>= 14.x)
- Docker (>= 20.x)

---

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/react-news-app.git
   cd react-news-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up API keys:
   - Rename `.env.example` to `.env`.
   - Add your API keys for `NewsAPI`, `The Guardian`, and `New York Times`.

4. Run the application:
   ```bash
   npm start
   ```

---

## Running with Docker

1. Build the Docker image:
   ```bash
   docker build -t react-news-app .
   ```

2. Run the Docker container:
   ```bash
   docker run -p 3000:3000 react-news-app
   ```

3. Access the application:
   - Open your browser and navigate to `http://localhost:3000`.

---

## Environment Variables

Ensure you have a `.env` file in the root directory with the following variables:

```env
REACT_APP_NEWS_API_KEY=your_newsapi_key
REACT_APP_GUARDIAN_API_KEY=your_guardian_api_key
REACT_APP_NYT_API_KEY=your_nyt_api_key
```

---

## Linting and Formatting

- Run ESLint:
  ```bash
  npm run lint
  ```
---

## Notes

- Ensure Docker is installed and running on your machine.
- API keys are required for the application to fetch news articles.
- For production, update the `.env` file and rebuild the Docker image.

---

## License

This project is licensed under the MIT License.

---

## Contributing

Contributions are welcome! Please submit a pull request for any improvements or bug fixes.

---

## Author

- **Your Name**  
  [Your GitHub](https://github.com/your-profile) | [Your Email](mailto:your.email@example.com)
