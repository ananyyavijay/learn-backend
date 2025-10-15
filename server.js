import express from 'express';  
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {id: 1,
        title: "joke 1",
        content: "Why don't scientists trust atoms? Because they make up everything!"
        },
        {id: 2,
        title: "joke 2", 
        content: "Why did the scarecrow win an award? Because he was outstanding in his field!"},
        {id: 3,
        title: "joke 3",
        content: "Why don't skeletons fight each other? They don't have the guts!"
        }
    ];
    res.send(jokes);
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});