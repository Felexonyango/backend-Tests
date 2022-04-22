const mongoose = require("mongoose");

const connectDB = async () => {

  const DB="mongodb+srv://expresstest:expresstest@cluster0.wa3oo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  try {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true

    });

    console.log("MongoDB Connected....");
  } catch (error) {
    console.error(error.message);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDB;