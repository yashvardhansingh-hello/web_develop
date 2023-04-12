import express from 'express';
import path from 'path';
import {dirname} from "path";
import { fileURLToPath } from "url";
const app = express()
const port = 3000
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('About!')
})

app.get('/car', (req, res) => {
    res.sendFile(path.join(__dirname, '../css_practice/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})