const { WebSocketServer } = require('ws');

// Create a server listening on port 8080
const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', (ws) => {
  console.log('Client connected! WOW!');

  // Listen for incoming messages from the client
  ws.on('message', (message) => {
    console.log(`Received: ${message}`);
    
    // Send a response back to the client
    ws.send(`Server received: ${message}`);
  });

  // Handle client disconnection
  ws.on('close', () => console.log('Client disconnected'));
});
