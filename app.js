const express = require('express');
const bodyParser = require('body-parser');

//Routes
const authRoutes = require('./router/authRoutes');
const userRouter = require('./router/userRouter');
const departmentsRoutes = require('./router/departmentsRoutes');
const courseRoute = require('./router/courseRoute');
const studentRoutes = require('./router/studentRoutes');


const app = express();

app.use(bodyParser.json());
const cors = require ('cors');
app.use(cors());


app.get ('/', function(req, res){
    res.send('Roi Silvestre, Pogi');
});

app.use('/api/auth', authRoutes);
app.use('/api/user', userRouter);
app.use('/api/dept', departmentsRoutes);
app.use('/api/course', courseRoute);
app.use('/api/student', studentRoutes);

const PORT = 5000;

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT} `);
});