# Productivity Timer

A simple web application to help you stay focused and boost productivity using the Pomodoro technique. Switch between work and break sessions with a clean, minimal interface.

## Features
- Pomodoro, short break, and long break modes
- Start, pause, and reset timer controls
- Responsive design

## Getting Started

### Prerequisites
- Docker (recommended) or any modern web browser

### Using Docker
1. Build and run the container:
   ```bash
   docker-compose up --build
   ```
2. Open your browser and go to `http://localhost:8080` (or the port specified in your `docker-compose.yml`).

### Manual Run
1. Open `index.html` in your browser.

## File Structure
- `index.html` - Main HTML file
- `script.js` - JavaScript logic for timer and controls
- `style.css` - Stylesheet
- `Dockerfile` & `docker-compose.yml` - For containerized deployment

## License
MIT
