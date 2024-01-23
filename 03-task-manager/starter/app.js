console.log('Task Manager App test');

const express = require('express');
const app = express();
const tasks = require('./routes/tasks')

// middleware
app.use(express.json())

//routes
app.get('/hello', (req, res)=> {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks',tasks)

//https://hn.algolia.com/api
// app.get('/api/v1/tasks')         - get all the tasks
// app.post('/api/v1/tasks')        - create a new task
// app.get('/api/v1/tasks/:id')     - get a single task
// app.patch('/api/v1/tasks/:id')   - update task
// app.delete('/api/v1/taks/:id')   - delete task

const port = 3000;


app.listen(port, console.log(`server is listening on port ${port}...`))
