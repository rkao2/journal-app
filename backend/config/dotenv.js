require('dotenv').config();

const loadEnvVariables = () => {
  const requiredVars = ['MONGO_URI', 'PORT'];
  requiredVars.forEach((variable) => {
    if (!process.env[variable]) {
      console.error(`Missing required environment variable: ${variable}`);
      process.exit(1);
    }
  });
};

module.exports = { loadEnvVariables };
