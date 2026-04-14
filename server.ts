import express from 'express';
import multer from 'multer';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import ConvertApi from 'convertapi';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  const upload = multer({ dest: 'uploads/' });

  // API Route for High-Fidelity Word to PDF conversion
  app.post('/api/convert/word-to-pdf', upload.single('file'), async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      const apiKey = process.env.CONVERTAPI_SECRET;
      if (!apiKey) {
        // Fallback or error if no API key
        console.warn('CONVERTAPI_SECRET is missing. Using local fallback simulation.');
        return res.status(500).json({ 
          error: 'Cloud API Key missing. Please add CONVERTAPI_SECRET to your environment variables for high-fidelity conversion.' 
        });
      }

      const convertapi = new ConvertApi(apiKey);
      const result = await convertapi.convert('pdf', {
        File: req.file.path
      }, 'docx');

      const fileInfo = result.files[0];
      const pdfBuffer = await fileInfo.download();

      // Clean up uploaded file
      fs.unlinkSync(req.file.path);

      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', `attachment; filename=${req.file.originalname.split('.')[0]}.pdf`);
      res.send(pdfBuffer);

    } catch (error: any) {
      console.error('Conversion Error:', error);
      res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log('Word to PDF High-Fidelity Engine Ready.');
  });
}

startServer();
