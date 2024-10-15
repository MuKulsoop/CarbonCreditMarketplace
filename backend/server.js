import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';


dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 8000;

// Middleware
app.use(express.json()); // To parse JSON requests
app.use(cors()); // Enable CORS

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
