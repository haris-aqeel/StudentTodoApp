const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
mongoose.connect(process.env.MONGODB_URI,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> {
    console.log("Connection to Database Successfully Established");
}).catch((err)=> {
    console.log(err)
});

