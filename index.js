// src/app.js
import express from 'express';
import { InfisicalClient } from "@infisical/sdk";
import userRouter from './user.js';

const client = new InfisicalClient({
    siteUrl: "https://app.infisical.com", // Optional, defaults to https://app.infisical.com
    auth: {
      universalAuth: {
        clientId: "YOUR_CLIENT_ID",
        clientSecret: "YOUR_CLIENT_SECRET"
      }
    }
});
console.log(client)
const app = express();

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});
app.use('/users',userRouter )

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});