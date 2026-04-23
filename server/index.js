import express from 'express';
import cors from 'cors';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;
const dataPath = path.join(__dirname, '..', 'data', 'portfolioData.json');

app.use(cors());
app.use(express.json());

app.get('/api/portfolio', async (_req, res) => {
  try {
    const raw = await fs.readFile(dataPath, 'utf-8');
    res.json(JSON.parse(raw));
  } catch (error) {
    res.status(500).json({ message: 'Unable to load portfolio data', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Portfolio API server running on http://localhost:${PORT}`);
});
