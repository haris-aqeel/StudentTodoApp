const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
mongoose.connect(`mongodb+srv://root:${process.env.PASSWORD}@studentdatabase.rjcic.mongodb.net/test?retryWrites=true&w=majority`,{
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> {
    console.log("Connection to Database Successfully Established");
}).catch((err)=> {
    console.log(err)
});

