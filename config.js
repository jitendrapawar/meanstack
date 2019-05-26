require('dotenv').config()

module.exports =
{
  'connectionString': process.env.DB_CONNECTION,
  'secret': process.env.SECRET
}
