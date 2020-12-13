const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://root:root@studentdatabase.rjcic.mongodb.net/test?retryWrites=true&w=majority",{
    useCreateIndex: true,
    useFindAndModify: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=> {
    console.log("Connection to Database Successfully Established");
}).catch((err)=> {
    console.log(err)
});

