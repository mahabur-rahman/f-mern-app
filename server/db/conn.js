const mongoose = require("mongoose");

// connect with database
mongoose
  .connect(
    process.env.DATABASE_URL
    // {
    //   useNewUrlParser: true,
    //   useCreateIndex: true,
    //   useUnifiedTopology: true,
    //   useFindAndModify: false,
    // }
  )
  .then(() => {
    console.log(`Connection successful`);
  })
  .catch((err) => {
    console.log(`No connection : ${err}`);
  });
