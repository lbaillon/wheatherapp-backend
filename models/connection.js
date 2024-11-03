const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://laurybaillon:SRwZuzAkUvMGXveY@cluster0.l556i.mongodb.net/weatherapp-part4?retryWrites=true&w=majority&appName=Cluster0';


mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
