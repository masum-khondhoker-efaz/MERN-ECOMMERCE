import  express from 'express';
import router from './routes/api.js';
import rateLimit from 'express-rate-limit';
import cors from 'cors';
import helmet from "helmet";

import mongoose from 'mongoose';
import {
    DATABASE_URL,
    MAX_JSON_SIZE,
    PORT,
    REQUEST_NUMBER,
    REQUEST_TIME,
    URL_ENCODE,
    WEB_CACHE
} from "./app/config/config.js";


const app = express();


// App use default middlewares
app.use(cors());
app.use(express.json({limit: MAX_JSON_SIZE}));
app.use(express.urlencoded({ extended: URL_ENCODE }));
app.use(helmet());



// App use limiter
const limiter = rateLimit({windowMs: REQUEST_TIME, max:REQUEST_NUMBER})
app.use(limiter);

//Cache
app.set('etag', WEB_CACHE);

// Database connection
mongoose.connect(DATABASE_URL, {autoIndex:true}).then(()=>{
    console.log("MongoDB Connected");
}).catch((err)=>{
    console.log('MongoDB Disconnected',err);
})


app.use("/api", router);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})