import mongoose from 'mongoose';

let uri = 'mongodb+srv://Jonhy:Proyecto123@clusteproyecto.72nag.mongodb.net/dwi'
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})
    .then(db => console.log('DB is connected'))
    .catch(error => console.log(error));

