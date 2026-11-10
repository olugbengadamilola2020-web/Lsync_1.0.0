require('dotenv').config();
const connectDB = require('./src/config/connectDB');
const dns = require('dns');
const server = require('./server.js');

const PORT = process.env.PORT;
connectDB();

dns.setServers(["1.1.1.1", "8.8.8.8"]);



app.listen(PORT, async ()=>{
    await connectDB();
   console.log(`Server is listening on Port ${PORT}`)
});

