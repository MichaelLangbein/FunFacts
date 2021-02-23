import express, { response } from 'express';
import { JokeService } from './jokes/jokeService';


const app = express();
const port = 1410;

const js = new JokeService();

app.get('/', (req, res) => {
  res.send('Hello World!');
});


app.get('/getHeadLine', (req, res) => {
    const headLine = js.getHeadLine();
    res.send(headLine);
});


app.post('/postJoke', (req, res) => {
    js.storeJoke(req.body);
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});