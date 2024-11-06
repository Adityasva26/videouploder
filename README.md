# Video Uploader with CORS Support

This project is a **Node.js** server that allows video uploading and conversion to multiple formats (e.g., 320p and 1080p). It includes CORS support for secure frontend-backend communication and uses `ffmpeg` for video processing.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Frontend Configuration](#frontend-configuration)
- [Contributing](#contributing)
- [License](#license)

## Features
- Upload videos and convert them to different resolutions (e.g., 320p, 1080p).
- Enable Cross-Origin Resource Sharing (CORS) for frontend communication.
- Monitor conversion progress with a loading bar.
- Store converted videos on the server or upload to cloud storage (like AWS S3).

## Installation
### Prerequisites
- Node.js and npm
- ffmpeg installed on the system (used for video processing)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/video-uploader.git
   cd video-uploader

    Install dependencies:

npm install

Install ffmpeg:

    MacOS: brew install ffmpeg
    Ubuntu: sudo apt-get install ffmpeg
    Windows: Download from ffmpeg.org and add it to your system PATH.

Configure environment variables (optional): Create a .env file to configure custom paths and CORS settings, if needed:

    PORT=5000
    OUTPUT_DIR=converted

##Usage

    Start the server:

    npm start

    By default, the server runs on http://localhost:5000.

    Use API endpoints to upload and convert videos (see below).

API Endpoints
POST /upload

    Description: Uploads a video file and converts it to multiple resolutions.
    Request Body: multipart/form-data with the video file.
    Response:
        200 OK: Success message with conversion status.
        500 Error: Error message if something goes wrong during processing.

##Frontend Configuration

If using a React frontend, set up the proxy in your package.json:

"proxy": "http://localhost:5000"

Alternatively, configure the CORS policy to allow specific origins by editing the cors setup in server.js:

const cors = require('cors');
app.use(cors({ origin: 'http://localhost:3000' }));

Contributing

Feel free to open issues or submit pull requests with improvements.
License

##This project is licensed under the MIT License. See the LICENSE file for details.##
