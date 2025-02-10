const express = require('express');
const fs = require('fs');  // File System module for writing to files
const path = require('path');
const cors = require('cors'); // CORS package for handling cross-origin requests

const app = express();
const port = 5000;

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Enable CORS for all origins or specify one (React frontend at localhost:3000)
const allowedOrigins = [
  'https://tejworksportfolio.netlify.app', // Your frontend URL
  'http://localhost:3000' // For local testing
];

app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) === -1) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin: ' + origin;
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  },
  methods: 'GET, POST',
  allowedHeaders: 'Content-Type'
}));


app.use((req, res, next) => {
  // If the hostname is not localhost, enforce HTTPS redirection.
  if (req.hostname !== 'localhost' && !req.secure && req.get('x-forwarded-proto') !== 'https') {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
});


app.use((req, res, next) => {
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  next();
});


// Serve resume file from the public folder
app.use('/resume', express.static(path.join(__dirname, 'public')));

// Contact form route (POST request)
app.post('/sendContactForm', (req, res) => {
  const { name, email, message } = req.body;

  // Format the form data as a string
  const formDataString = `Name: ${name}\nEmail: ${email}\nMessage: ${message}\n\n`;

  // Write the data to a text file (append to ensure new data is added to the file)
  fs.appendFile('contactFormSubmissions.txt', formDataString, (err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: 'Error saving form data' });
    }
    console.log('Form data saved');
    res.status(200).json({ message: 'Thank you for contacting us! We will get back to you soon.' });
  });
});

// Resume download route (GET request)
app.get('/downloadResume', (req, res) => {
  const resumePath = path.join(__dirname, 'public', 'resume.pdf');  // Adjust the path to your resume file
  res.download(resumePath, 'Your-Resume.pdf', (err) => {
    if (err) {
      console.log(err);
      res.status(500).send('Error downloading resume');
    }
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
