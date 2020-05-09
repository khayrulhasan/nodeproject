const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/nodedb', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('error', e=>{
    console.log(e);
});


mongoose.connection.on('open', e=>{
    console.log('connected');
});

// schema
const TaskSchema = new mongoose.Schema({
    name : String
});

// model
const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;