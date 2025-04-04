import express from 'express'; 
const app = express(); 
const PORT = process.env.PORT;
import { router } from './route.js';
import { connectDb } from './db.js';
import cors from 'cors';
connectDb();

//middleware 
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Server is up and running ");
})
app.use("/employees", router); 

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
})