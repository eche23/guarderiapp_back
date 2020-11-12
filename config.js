module.exports = {
  development: {
    db: process.env.MONGODB_URI,
    port: process.env.PORT,
    url: process.env.BACK_URI,
    SECRET_TOKEN: process.env.SECRET_TOKEN,
    SECRET_REFRESH_TOKEN: process.env.SECRET_REFRESH_TOKEN,
    email: process.env.EMAIL,
    password: process.env.PASSWORD,
  },
};
