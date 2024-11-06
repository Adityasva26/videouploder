const express = require('express');
const multer = require('multer');
const fluent_ffmpeg = require('fluent-ffmpeg');
const fs = require('fs');
const path = require('path');
const app = express();
const cors = require('cors');
app.use(cors());
const upload = multer({ dest: 'uploads/' }); // Store temporarily in 'uploads' directory

// Endpoint for uploading video
app.post('/upload', upload.single('video'), (req, res) => {
  const videoPath = req.file.path;
  const outputDir = path.join(__dirname, 'converted');

  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  // Define output video formats and resolutions
  const outputFiles = [
    { format: 'mp4', resolution: '320x240', outputName: '320p.mp4' },
    { format: 'mp4', resolution: '1920x1080', outputName: '1080p.mp4' }
  ];

  let outputVideos = [];

  // Convert video to different formats
  outputFiles.forEach(({ format, resolution, outputName }) => {
    const outputPath = `http://localhost:4000/converted/${outputName}`;
    outputVideos.push(outputPath);

    fluent_ffmpeg(videoPath)
      .output(path.join(__dirname, outputPath))
      .videoCodec('libx264')
      .size(resolution)
      .on('progress', function(progress) {
        console.log('Processing: ' + progress.percent + '% done');
        // Send progress to the client if needed (e.g., via WebSocket)
      })
      .on('end', function() {
        console.log(`${outputName} conversion completed`);
      })
      .run();
  });

  // Once all conversions are done
  res.status(200).json({
    message: 'Video uploaded and processing started.',
    files: outputVideos
  });
});

app.listen(4000, () => {
  console.log('Server running on http://localhost:5000');
});
