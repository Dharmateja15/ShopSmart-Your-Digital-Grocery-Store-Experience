const mongoose = require("mongoose");
const db= 'mongodb+srv://22091a0531:xxx123456@cluster0.2q1eksg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
// Connect to MongoDB using the connection string

mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Connection successful`);
}).catch((e) => {   
  console.log(`No connection: ${e}`);   
});
