require("dotenv").config();

const USER = process.env.AWS_RDS_MASTER_USERNAME;
const PASSWORD = process.env.AWS_RDS_MASTER_PASSWORD;
const HOST = process.env.AWS_RDS_ENDPOINT;
const PORT = process.env.AWS_RDS_PORT;
const DBNAME = process.env.AWS_RDS_DATABASENAME;
module.exports = { USER, PASSWORD, HOST, PORT, DBNAME };
