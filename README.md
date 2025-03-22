#Java Audio Converter & Transcriber

## Overview
The **Audio Converter & Transcriber** is a web application built with **Spring Boot**, **Spring AI**, **OpenAI Whisper**, and **React.js**. It allows users to upload audio files, convert them into text using OpenAI’s Whisper model, and retrieve transcriptions via a RESTful API.

## Features
- Upload audio files for conversion.
- Transcribe audio using **OpenAI Whisper**.
- View and test API endpoints with **Postman**.
- Frontend built with **React.js** for an intuitive UI.

## Technologies Used
- **Backend:** Spring Boot, Spring Web, Spring AI, OpenAI API
- **Frontend:** React.js
- **API Testing:** Postman
- **Database (if applicable):** PostgreSQL / MySQL
- **Build Tool:** Maven / Gradle
- **Deployment:** Docker (optional)

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
- Java 8 or later
- Node.js & npm (for React frontend)
- PostgreSQL or MySQL (if using a database)
- Postman (for API testing)

### Backend Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/audio-converter.git
   cd audio-converter
   ```
2. Configure the `application.properties` file:
   ```properties
   spring.ai.openai.api-key=YOUR_OPENAI_API_KEY
   spring.ai.openai.audio.transcription.options.model=whisper-1
   spring.ai.openai.audio.transcription.options.response-format=text
   spring.ai.openai.audio.transcription.options.temperature=0
   spring.ai.openai.audio.transcription.options.language=en
   ```
3. Build and run the Spring Boot application:
   ```sh
   mvn clean install
   mvn spring-boot:run
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React application:
   ```sh
   npm start
   ```

## API Endpoints

### Upload & Transcribe Audio
- **Endpoint:** `POST /api/transcribe`
- **Description:** Upload an audio file and get the transcribed text.
- **Request:** Multipart file upload (`file` parameter)
- **Response:** Transcribed text
- **Example (using Postman):**
  - Set method to `POST`
  - Use `http://localhost:8080/api/transcribe`
  - Upload an audio file as `file`

## Deployment
- **Docker (Optional):**
  ```sh
  docker build -t audio-converter .
  docker run -p 8080:8080 audio-converter
  ```
- **Frontend Deployment:**
  ```sh
  npm run build
  ```

## Contributing
Feel free to submit pull requests and report issues.
