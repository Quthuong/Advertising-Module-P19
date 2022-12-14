

const Sequelize = require('sequelize');

// Option 1: Passing parameters separately
const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USERNAME,process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    logging: false,
    // dialectOptions: {
    //     ssl: {
    //         require: true,
    //         rejectUnauthorized: false
    //     }
    //   },
      query: {
        "raw": true
      },
      timezone: "+07:00"
});

let connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connect to database successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = connectDB;