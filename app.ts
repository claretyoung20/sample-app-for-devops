import express, { Request, Response } from 'express';

const app = express();


// API 1: Return health of the app
app.get('/health', (req: Request, res: Response) => {
  res.send('App is healthy!');
});

// API 2: Return current date and time
app.get('/datetime', (req: Request, res: Response) => {
  const currentDateTime = new Date().toLocaleString();
  res.send(`Current date and time: ${currentDateTime}`);
});

app.get('/', (req: Request, res: Response) => {
    const endpoints = app._router.stack
      .filter((layer: any) => layer.route)
      .map((layer: any) => layer.route?.path);
    res.send(`Available endpoints: ${endpoints.join(', ')}`);
  });

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
