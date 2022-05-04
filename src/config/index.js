module.exports = {
  HOSTNAME: "cluster0.pmdmt.mongodb.net",
  SCHEMA: "mongodb+srv",
  USER: "JuanPabloLino",
  PASSWORD: process.env.MONGO_PASSWORD,
  DATABASE: "FruteriaEcommerce",
  OPTIONS: "retryWrites=true&w=majority"
}