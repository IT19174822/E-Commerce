

//const uri ='mongodb+srv://Mathusan:mathusan123456@mathusan.uo2hcuy.mongodb.net/?retryWrites=true&w=majority'

require('dotenv').config()
const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGO_URI || 'mongodb://localhost:27017/cmscart',
      {
        useNewUrlParser: true,
        
        useUnifiedTopology: true,
      },
    )

    console.log('MongoDB connection SUCCESS')
  } catch (error) {
    console.error('MongoDB connection FAIL')
    process.exit(1)
  }
}

module.exports = {connectDB}
