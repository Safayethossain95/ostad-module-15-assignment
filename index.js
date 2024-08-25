// Import the http module
const http = require('http');
const fs = require('fs');
// Create the server
const server = http.createServer((req, res) => {
  // Check the request URL
  if (req.url === '/') {
    // Handle the root URL (/)
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the Home Page\n');
  } else if (req.url === '/about') {
    // Handle the /about URL
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the About Page\n');
  } else if (req.url === '/contact') {
    // Handle the /contact URL
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the Contact Page\n');
  } else if (req.url === '/file-write') {
    // Handle the /file-write URL
    fs.writeFile('demo.txt', 'hello world', (err) => {
      if (err) {
        // Handle any errors that occurred during file writing
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Failed to write file\n');
        console.error('Error writing file:', err);
      } else {
        // Respond with success message
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('File demo.txt created with the text "hello world"\n');
      }
    });
  }else {
    // Handle other URLs (e.g., 404 Not Found)
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found\n');
  }
});

// The server listens on port 5500
const PORT = 5500;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
